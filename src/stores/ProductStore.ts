import { EventEmitter } from "events"
import { deserialize, serialize } from "serializer.ts/Serializer"
import ProductItem from "../components/ProductList"
import dispatcher from "../dispatcher"
import { Product } from "../models/Product"

class ProductStore extends EventEmitter {
    productList: Product[];
    constructor() {
        super()
        this.productList = [{
            "id": "re4232",
            "name": "b0006se5bq",
            "productNumber": "singing coach unlimited",
            "description": "singing coachaa unlimited - electronic learning products (win me nt 2000 xp)",
            "images": [
                {
                    "url": "http://lorempixel.com/200/200/technics/",
                    "name": "singing coach",
                },
                {
                    "url": "http://lorempixel.com/200/200/abstract/",
                    "name": "front side",
                },
            ],
        },
        {
            "id": "fs54343",
            "name": "b00021xhewqeqwzw",
            "productNumber": "adobe after effects professional 6.5 upgrade from standard to professional",
            "description": "upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets",
            "images": [],
        },
        {
            "id": "uyt5644",
            "name": "b00021xhzw",
            "productNumber": "domino designer/developer v5.0",
            "description": "reference domino designer/developer r5 doc pack includes the following titles: application development with",
            "images": [
                {
                    "url": "http://lorempixel.com/200/200/people/",
                    "name": "cover",
                },
            ],
        },
        {
            "id": "tre677657",
            "name": "423rwrw2342",
            "productNumber": "potato designer and developer, big skills smole son",
            "description": "potato designer and developer, big skills smole sonpotato designer and developer, big skills smole sonpotato designer and developer, big skills smole son",
            "images": [
                {
                    "url": "http://lorempixel.com/200/200/people/",
                    "name": "cover",
                },
            ],
        }]
    }
    handleActions(action: any) {
        switch (action.type) {
            case "EDIT_PRODUCT": {
                this.edit(action.id, action.text)
            }
        }
    }
    getAll() {
        return this.productList
    }

    getById(id: string): any {
        let data: any
        this.getAll().map((product) => {
            if (product.id.includes(id)) {
                data = { name: product.name, description: product.description }
            }
        })
        return data
    }

    edit(id: string, text: any) {
        const { name, description } = text

        this.getAll().map((product) => {
            if (product.id.includes(id)) {
                product.name = name !== undefined ? name : product.name
                product.description = description !== undefined ? description : product.description
            }
        })
    }
}
const productStore = new ProductStore()
dispatcher.register(productStore.handleActions.bind(productStore))
export default productStore
