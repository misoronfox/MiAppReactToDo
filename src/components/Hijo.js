const { Component } = require("react");

export default class Hijp extends Component {
  render() {
    return (
      <div>
        <h3>Soy un componente hijo.</h3>
        <h3>{this.props.Titulo}</h3>
      </div>
    );
  }
}
