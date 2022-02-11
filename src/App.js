import React from "react";
import Producto from "./components/Producto";
import './index.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar img-fluid mx-auto d-block m-1" href="App.js">
          <img className="img-fluid i1" id="logo" src="https://res.cloudinary.com/esnese/image/upload/v1644525759/emonk_ixsvdk.png" alt="" />
        </a>
      </nav>
      <Producto />
    </div>
  );
}

export default App;
