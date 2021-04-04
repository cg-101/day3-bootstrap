import { useState } from "react";
import "./App.css";

function App() {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="container-fluid">
      <div
        className="row bg-primary text-light d-flex align-items-center pl-2"
        style={{ height: 55 }}
      >
        My Project
      </div>

      <div className="row d-flex justify-content-center">
        {list.map((data, index) => (
          <div
            className="bg-info col-3 m-1 d-flex justify-content-center align-items-center"
            style={{ height: 150 }}
          >
            <img
              src="https://picsum.photos/200/150"
              style={{ height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
