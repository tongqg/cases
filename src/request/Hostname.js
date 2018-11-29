import React from "react";
import { connect } from "react-redux";
import { update } from "./store";
import Input from "@material-ui/core/Input";

const mapStateToProps = store => {
  return {
    hostname: store.url.host.join(".")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      dispatch(update("$.url.host", e.target.value.split(".")));
    }
  };
};

const HostnameInput = ({ hostname, onChange, ...props }) => (
  <Input disabled defaultValue={hostname} onChange={onChange} {...props} />
);

const Hostname = connect(
  mapStateToProps,
  mapDispatchToProps
)(HostnameInput);

export default Hostname;
