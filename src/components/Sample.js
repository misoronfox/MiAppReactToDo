const { Component } = require("react");

export default class Sample extends Component {
  state = {
    estado: "iniciado",
  };

  apretarBoton = () => [
    this.setState({
      estado: "Presionado",
    }),
  ];

  render() {
    return (
      <div>
        <h1>{this.state.estado}</h1>
        <button type="button" onClick={this.apretarBoton}>
          Presioname
        </button>
      </div>
    );
  }
}
