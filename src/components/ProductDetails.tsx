import * as React from "react"
import { Button, Collapse, ControlLabel, Form, FormControl, FormGroup, Image } from "react-bootstrap"
import * as ProductActions from "../actions/ProductActions"
import ProductStore from "../stores/ProductStore"

interface ProductDetailsProps {
    id: string
    name: string
    productNumber: string
    description: string
    images: {
        url: string
        name: string,
    }[]
    open: boolean
}
type MyState = { readOnly: boolean, id: string, name: string, productNumber: string, description: string, baseState: { name: string, description: string }, images: { url: string, name: string }[] };

export default class ProductDetails extends React.Component<ProductDetailsProps, MyState> {
    constructor(props: ProductDetailsProps) {
        super(props)
        this.state = { readOnly: true, id: this.props.id, name: this.props.name, productNumber: this.props.productNumber, description: this.props.description, images: this.props.images, baseState: { name: this.props.name, description: this.props.description } }
        this.update = this.update.bind(this)
        this.changedValue = this.changedValue.bind(this)
        this.save = this.save.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    update() {
        this.setState({ readOnly: !this.state.readOnly })
        this.forceUpdate()
    }

    cancel() {
        this.setState({ name: this.state.baseState.name, description: this.state.baseState.description, readOnly: !this.state.readOnly })
        this.forceUpdate()
    }

    save() {
        this.setState({ readOnly: !this.state.readOnly })
        this.setState({ baseState: { name: this.state.name, description: this.state.description } })
    }

    changedValue(e: any) {
        ProductActions.editProduct(this.props.id, { [e.target.name]: e.target.value })
        this.setState({ name: ProductStore.getById(this.state.id).name, description: ProductStore.getById(this.state.id).description })
    }

    render() {
        return (
            <div>
                <Collapse in={this.props.open}>
                    <Form>
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Name</ControlLabel>{" "}
                            <FormControl type="text" name="name" value={this.state.name} readOnly={this.state.readOnly} onChange={this.changedValue} />
                        </FormGroup>{" "}
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>{" "}
                            <FormControl type="textarea" name="description" value={this.state.description} readOnly={this.state.readOnly} onChange={this.changedValue} />
                        </FormGroup>{" "}
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Product number: </ControlLabel>{" "}
                            <FormControl type="textarea" name="description" value={this.state.productNumber} readOnly={true} />
                        </FormGroup>{" "}
                        {
                            this.state.images && this.state.images.map((image) =>
                                <Image src={image.url} title={image.name} thumbnail />,
                            )
                        }
                        <p />
                        {
                            this.state.readOnly ? <Button onClick={this.update} bsStyle="warning">Update</Button> : <div><Button onClick={this.cancel} bsStyle="danger">Cancel</Button> <Button onClick={this.save} bsStyle="success">Save</Button> </div>
                        }
                    </Form>
                </Collapse>
            </div>
        )
    }
}
