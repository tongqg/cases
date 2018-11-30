import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Dashboard from "./dashboard";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Dashboard />, rootElement);
