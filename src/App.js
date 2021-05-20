import logo from "./logo.svg";
import "./App.css";
//import Demo from "./components/Demo";
//import Demo1 from "./components/Demo1";
//import Padre from "./components/Padre";
import ListaTodo from "./components/ListaTodo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faPlus, faEdit);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListaTodo></ListaTodo>
      </header>
    </div>
  );
}

export default App;
