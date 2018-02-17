import * as React from "react"
import { Button, Jumbotron, ListGroup, ListGroupItem } from "react-bootstrap"
import ProductList from "./components/ProductList"
import ProductStore from "./stores/ProductStore"

import "./styles/App.css"
const logo = require("./styles/logo.svg")

export default class App extends React.Component {
  componentWillMount() {
    ProductStore.on("change", () => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to product list app</h1>
        </header>
        <ListGroup>{
          ProductStore.getAll().map((product) =>
            <ListGroupItem key={product.id}>
              <ProductList
                id={product.id}
                name={product.name}
                productNumber={product.productNumber}
                description={product.description}
                images={product.images}
              />
            </ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}
