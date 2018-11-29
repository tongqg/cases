import { connect } from "react-redux";

import Selector from "./Selector";
import { update } from "./store";

const mapStateToProps = store => {
  return {
    value: store.url.protocol,
    candidates: ["HTTP", "HTTPS"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: value => {
      dispatch(update("$.protocol", value));
    }
  };
};

const Protocol = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector);

export default Protocol;
