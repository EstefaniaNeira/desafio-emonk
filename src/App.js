import React from "react";
import Producto from "./components/Producto";
import './index.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar justify-content-center navbar-light bg-light">
        <a className="navbar m-1" href="App.js">
          <img className="img-fluid i1" id="logo" src="https://res.cloudinary.com/esnese/image/upload/v1644525759/emonk_ixsvdk.png" alt="" />
        </a>
      </nav>
      <Producto />
      <footer className="footer fixed-bottom mt-auto py-3 bg-light">
        <p className="text-center text-muted">© 2022, Estefania Neira</p>
      </footer>
    </div>
  );
}

export default App;
