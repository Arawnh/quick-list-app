import * as React from "react"
import { Button, Jumbotron, ListGroup, ListGroupItem } from "react-bootstrap"
import ProductList from "./components/ProductList"
import jsonStore from "./stores/jsonStore"

import "./styles/App.css"
const logo = require("./styles/logo.svg")

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to product list app</h1>
        </header>
        <ListGroup>{
          jsonStore().map((product) =>
            <ListGroupItem key={product.name}>
              <ProductList
                name={product.name}
                description={product.description}
              />
            </ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}
