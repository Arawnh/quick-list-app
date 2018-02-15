import { deserialize, serialize } from "serializer.ts/Serializer"
import ProductItem from "../components/ProductList"

const data: any = [{
    "name": "b0006se5bq",
    "number": "singing coach unlimited",
    "description": "singing coach unlimited - electronic learning products (win me nt 2000 xp)",
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
    "name": "b00021xhewqeqwzw",
    "number": "adobe after effects professional 6.5 upgrade from standard to professional",
    "description": "upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets",
    "images": [],
},
{
    "name": "b00021xhzw",
    "number": "domino designer/developer v5.0",
    "description": "reference domino designer/developer r5 doc pack includes the following titles: application development with",
    "images": [
        {
            "url": "http://lorempixel.com/200/200/people/",
            "name": "cover",
        },
    ],
},
{
    "name": "423rwrw2342",
    "number": "potato designer and developer, big skills smole son",
    "description": "potato designer and developer, big skills smole sonpotato designer and developer, big skills smole sonpotato designer and developer, big skills smole son",
    "images": [
        {
            "url": "http://lorempixel.com/200/200/people/",
            "name": "cover",
        },
    ],
}]
export default function importPortsJson(): any[] {
    return data
}
