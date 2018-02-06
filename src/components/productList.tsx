import * as React from "react"

interface ProductItem {
    id: number
    description: string
}

class ProductList extends React.Component<ProductItem> {
    render() {
        const { id, description } = this.props
        return (
            <div>
                <li>
                    {description} with an ID of: {id}
                </li>
            </div>
        )
    }
}

export default ProductList
