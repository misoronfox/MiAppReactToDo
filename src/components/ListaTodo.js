import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AgregarTodo from "./AgregarTodo";

const { Component } = require("react");

export default class ListaTodo extends Component {
  state = {
    todos: [
      { Id: "1", Titulo: "Enviar tu código a github", Estado: "Listo" },
      { Id: "2", Titulo: "Enviar correo a tu jefe", Estado: "Pendiente" },
    ],
  };
  eliminar = (todo) => {
    const filteredItems = this.state.todos.filter((x) => x.Id !== todo.Id);
    this.setState({
      todos: filteredItems,
    });
  };
  agregar = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  editar = (x) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.Id === x.Id) {
          return {
            ...todo,
            Estado: todo.Estado === "Listo" ? "Pendiente" : "Listo",
          };
        } else {
          return todo;
        }
      }),
    }));
  };
  render() {
    return (
      <div>
        <h1>Lista TODO </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((x) => {
              return (
                <tr key={x.Id}>
                  <td>{x.Id}</td>
                  <td>{x.Titulo}</td>
                  <td>{x.Estado}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.eliminar(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                      </span>
                    </button>
                    |
                    <button
                      className="btn btn-primary"
                      onClick={() => this.editar(x)}
                    >
                      <span>
                        <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
