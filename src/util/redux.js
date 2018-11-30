import jp from "jsonpath";
import { connect } from "react-redux";

export const jsonUpdateAction = (path, value) => ({
  type: "UPDATE_VALUE",
  path: path,
  value: value
});

export const jsonAppendAction = (path, value) => ({
  type: "APPEND_VALUE",
  path: path,
  value: value
});

export const reducer = defaultState => {
  return (state, action) => jsonUpdateReducer(defaultState, action);
};

const jsonUpdateReducer = (state, action) => {
  let ret = { ...state };
  if (action.path !== undefined) {
    if (action.type === "UPDATE_VALUE") {
      jp.value(ret, action.path, action.value);
    } else if (action.type === "APPEND_VALUE") {
      let value = jp.query(ret, action.path);
      value.push(action.value);
      jp.value(ret, action.path, value);
    }
  }
  console.log(JSON.stringify(ret));
  return ret;
};

class JsonBinding {
  constructor(path) {
    this.path = path;
    this.jsonMapStateToProps = store => {
      // console.log(this.path);
      return {
        value: jp.query(store, this.path)[0]
      };
    };
    this.jsonMapDispatchToProps = dispatch => {
      // console.log(this.path);
      return {
        update: value => {
          dispatch(jsonUpdateAction(this.path, value));
        },
        append: value => {
          dispatch(jsonAppendAction(this.path, value));
        }
      };
    };
    this.connect = object => {
      return connect(
        this.jsonMapStateToProps,
        this.jsonMapDispatchToProps
      )(object);
    };
  }
}

export default JsonBinding;
