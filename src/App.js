import "./App.css";
import DropDown from "./components/DropDown";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      base things here
      <nav>
        <ul>
          <li>
            <Link to={"testing"}>Click here to go to testing</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
