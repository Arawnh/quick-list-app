import * as React from "react"
import { Button, Collapse, ControlLabel, Form, FormControl, FormGroup } from "react-bootstrap"

interface ProductDetailsProps {
    name: string
    number?: string
    description: string
    images?: string
    open: boolean
}

type MyState = { readOnly: boolean };

export default class ProductDetails extends React.Component<ProductDetailsProps, MyState> {
    constructor(props: ProductDetailsProps) {
        super(props)
        this.state = { readOnly: true }
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({ readOnly: !this.state.readOnly })
    }

    render() {
        const { name, description, open } = this.props
        return (
            <div>
                <Collapse in={open}>
                    <Form>
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Name</ControlLabel>{" "}
                            <FormControl type="text" placeholder={name} readOnly={this.state.readOnly} />
                        </FormGroup>{" "}
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Description</ControlLabel>{" "}
                            <FormControl componentClass="textarea" placeholder={description} readOnly={this.state.readOnly} />
                        </FormGroup>{" "}
                        {
                            this.state.readOnly ? <Button onClick={this.update} bsStyle="warning">Update</Button> : <Button bsStyle="success">Save</Button>
                        }
                    </Form>
                </Collapse>
            </div>
        )
    }
}
