import "./style/reset.scss";
import "./app.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
