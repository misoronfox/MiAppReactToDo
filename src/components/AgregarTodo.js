const { Component } = require("react");

export default class AgregarTodo extends Component {
  state = {
    Id: "",
    Title: "",
    Status: "Pendiente",
  };

  handleIdChange = (event) => {
    this.setState({
      Id: event.target.value,
    });
  };
  handleTitleChange = (event) => {
    this.setState({
      Titulo: event.target.value,
    });
  };
  handleStatusChange = (event) => {
    this.setState({
      Status: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Agregar Todo</h3>
        <form>
          <div className="form-group">
            <input
              value={this.state.Id}
              className="form-control"
              placeholder="Ingresa Id"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.Titulo}
              className="form-control"
              placeholder="Ingresa Titulo"
            />
          </div>
          <div className="form-group">
            <select value={this.state.Estado} className="form-control">
              <option value="Done">Listo</option>
              <option value="Pending">Pendiente</option>
            </select>
          </div>
          <button type="submit" className="form-control btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
