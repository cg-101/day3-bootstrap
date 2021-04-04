import { useState } from "react";
import "./App.css";

function App() {
  const [list] = useState([
    "Delhi",
    "Calcutta",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Calcutta",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Calcutta",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Calcutta",
    "Mumbai",
    "Chennai",
  ]);

  return (
    <div className="container-fluid">
      <div
        className="row bg-dark text-light d-flex align-items-center pl-2"
        style={{ height: 55 }}
      >
        My Project
      </div>

      <div className="row mt-1">
        {list.map((data, index) => (
          <div className="col-3 " key={index}>
            <div className="card">
              <img
                src="https://picsum.photos/100"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </p>
                <a className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
