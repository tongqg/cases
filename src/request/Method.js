import { connect } from "react-redux";
import Selector from "./Selector";
import { update } from "./store";

const mapStateToProps = store => {
  return {
    value: store.request.method,
    candidates: ["GET", "POST", "PUT", "DELETE"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateStore: value => {
      dispatch(update("$.request.method", value));
    }
  };
};

const Method = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector);

export default Method;
