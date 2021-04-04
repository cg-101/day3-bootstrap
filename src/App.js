import { useState } from "react";
import "./App.css";

function App() {
  const [list] = useState(["Delhi", "Calcutta", "Mumbai", "Chennai"]);

  return (
    <div className="container-fluid">
      <div
        className="row bg-dark text-light d-flex align-items-center pl-2"
        style={{ height: 55 }}
      >
        My Project
      </div>

      {list.map((data, index) => (
        <div className="row mt-1">
          <div className="col-3"></div>
          <div
            className="col-6 bg-secondary text-light d-flex justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            {data}
          </div>
          <div className="col-3"></div>
        </div>
      ))}
    </div>
  );
}

export default App;
