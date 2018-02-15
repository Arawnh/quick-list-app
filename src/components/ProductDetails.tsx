import * as React from "react"
import { Button, Collapse, ControlLabel, Form, FormControl, FormGroup } from "react-bootstrap"

interface ProductDetailsProps {
    name: string
    number?: string
    description: string
    images?: string
    open: boolean
}
type MyState = { readOnly: boolean, name: string, description: string, baseState: { name: string, description: string } };

export default class ProductDetails extends React.Component<ProductDetailsProps, MyState> {
    constructor(props: ProductDetailsProps) {
        super(props)
        this.state = { readOnly: true, name: this.props.name, description: this.props.description, baseState: { name: this.props.name, description: this.props.description } }
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
        this.setState({ [e.target.name]: e.target.value })
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
                        {
                            this.state.readOnly ? <Button onClick={this.update} bsStyle="warning">Update</Button> : <div><Button onClick={this.cancel} bsStyle="danger">Cancel</Button> <Button onClick={this.save} bsStyle="success">Save</Button> </div>
                        }
                    </Form>
                </Collapse>
            </div>
        )
    }
}
