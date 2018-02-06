import * as React from "react"
import { Button, Jumbotron, Navbar } from "react-bootstrap"
import { List, ListRowProps } from "react-virtualized/dist/commonjs/List"
import ProductList from "./components/productList"
import "./styles/App.css"

const logo = require("./styles/logo.svg")

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to product list app</h1>
        </header>
        <p className="App-intro">
          {<ProductList
            id={123}
            description={"sample product"}
          />}
        </p>
      </div>
    )
  }
}

export default App
