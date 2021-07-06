import logo from "./logo.svg";
import "./App.css";
import Things from "./Things";
import MyProjects from "./MyProjects";

function App() {
  return (
    <div className="App">
      <h1>Things (from my API)</h1>
      <hr />
      <Things />
      <hr />
      <hr />
      <h1>Project (from git API)</h1>
      <hr />
      <MyProjects />
    </div>
  );
}

export default App;
