import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Dashboard from "./dashboard";
import store from "./request/store";
import { addRequest } from "./store/actions";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}
window.store = store;
window.addRequest = addRequest;

const rootElement = document.getElementById("root");
ReactDOM.render(<Dashboard />, rootElement);
