import dispatcher from "../dispatcher"

export function editProduct(id: string, text: any) {
    dispatcher.dispatch({
        type: "EDIT_PRODUCT",
        id,
        text,
    })
}
