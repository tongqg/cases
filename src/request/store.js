import { createStore } from "redux";

import jp from "jsonpath";

const defaultCase = {
  request: {
    url: {
      protocol: "https",
      path: ["tongqg", "cases", "1.0.1"],
      host: ["virtserver", "swaggerhub", "com"],
      query: [],
      variable: []
    },
    header: [
      {
        key: "Content-Type",
        value: "application/json"
      }
    ],
    method: "GET",
    body: {
      mode: "raw",
      raw: '{"MPT-PROD": {"PHX":-1000, "LVS": -1000, "SLC":-1000}}'
    }
  },
  response: {}
};

export const update = (path, value) => ({
  type: "UPDATE_VALUE",
  path: path,
  value: value
});

export const updateReducer = (state = defaultCase, action) => {
  let ret = { ...state };
  if (action.path !== undefined) {
    jp.value(ret, action.path, action.value);
  }
  console.log(ret);
  return ret;
};

const store = createStore(updateReducer);

export default store;
