import * as React from "react"
import { Button } from "react-bootstrap"
import { Product } from "../models/Product"
import ProductStore from "../stores/ProductStore"
import ProductDetails from "./ProductDetails"

type MyState = { open: boolean };

export default class ProductList extends React.Component<Product, MyState> {
    constructor(props: Product) {
        super(props)
        this.state = { open: false }
        this.clickCollapse = this.clickCollapse.bind(this)
    }

    clickCollapse() {
        this.setState({ open: !this.state.open })
        ProductStore.handleActions({ type: "big event" })
    }

    render() {
        const { id, name, description, images, productNumber } = this.props
        return (
            <div>
                <p> {name} </p>
                <Button bsStyle="primary" onClick={this.clickCollapse}>
                    See details
                 </Button>
                {<ProductDetails id={id} name={name} productNumber={productNumber} description={description} images={images} open={this.state.open} />}
            </div>
        )
    }
}
