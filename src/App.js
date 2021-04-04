import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div
        className="row bg-primary text-light d-flex align-items-center pl-2"
        style={{ height: 55 }}
      >
        My Project
      </div>

      <div className="row d-flex ">
        <div
          className="bg-info col-3 m-1 d-flex justify-content-center align-items-center"
          style={{ height: 100 }}
        >
          A
        </div>

        <div
          className="bg-success col-3 m-1 d-flex justify-content-center align-items-center"
          style={{ height: 100 }}
        >
          A
        </div>

        <div
          className="bg-info col-3 m-1 d-flex justify-content-center align-items-center"
          style={{ height: 100 }}
        >
          A
        </div>

        <div
          className="bg-info col-3 m-1 d-flex justify-content-center align-items-center"
          style={{ height: 100 }}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default App;
