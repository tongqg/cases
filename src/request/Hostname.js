import React from "react";
import Input from "@material-ui/core/Input";
import JsonBinding from "../util/redux";

let binding = new JsonBinding("$.request.url.host");
const HostnameInput = ({ value, update, ...props }) => (
  <Input
    disabled
    defaultValue={value.join(".")}
    onChange={e => update(e.target.value.split("."))}
    {...props}
  />
);

const Hostname = binding.connect(HostnameInput);

export default Hostname;
