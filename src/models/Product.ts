export interface Product {
    id: string
    name: string
    productNumber: string
    description: string
    images: {
        url: string
        name: string,
    }[]
}
