import Hijo from "./Hijo";

const { Component } = require("react");

export default class Padre extends Component {
  render() {
    return (
      <div>
        <h1>Soy un componente padre.</h1>
        <Hijo Titulo="fui instanciado desde el padre."></Hijo>
      </div>
    );
  }
}
