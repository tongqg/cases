import React from "react";
import { connect } from "react-redux";
import { update } from "./store";
import Input from "@material-ui/core/Input";

const mapStateToProps = store => {
  return {
    url: "/" + store.request.url.path.join("/")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      dispatch(update("$.request.url.path", e.target.value.split("/")));
    }
  };
};

const UrlInput = ({ url, onChange, ...props }) => (
  <Input fullWidth defaultValue={url} onChange={onChange} {...props} />
);

const Url = connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlInput);

export default Url;
