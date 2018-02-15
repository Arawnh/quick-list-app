import * as React from "react"
import { Button } from "react-bootstrap"
import ProductDetails from "./ProductDetails"

interface ProductItem {
    name: string
    number?: string
    description: string
    images?: string
}
type MyState = { open: boolean };

export default class ProductList extends React.Component<ProductItem, MyState> {
    constructor(props: ProductItem) {
        super(props)
        this.state = { open: false }
        this.clickCollapse = this.clickCollapse.bind(this)
    }

    clickCollapse() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, description } = this.props
        return (
            <div>
                <p>{description} with an ID of: {name} </p>
                <Button bsStyle="primary" onClick={this.clickCollapse}>
                    See details
                 </Button>
                {<ProductDetails name={name} description={description} open={this.state.open} />}
            </div>
        )
    }
}
