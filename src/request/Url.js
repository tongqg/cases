import React from "react";
import JsonBinding from "../util/redux";
import Input from "@material-ui/core/Input";

let binding = new JsonBinding("$.request.url.path");

const UrlInput = ({ value, update, ...props }) => {
  let onChange = e => update(e.target.value.split("/").slice(1));
  return (
    <Input
      fullWidth
      defaultValue={"/" + value.join("/")}
      onChange={onChange}
      {...props}
    />
  );
};

const Url = binding.connect(UrlInput);

export default Url;
