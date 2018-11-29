const initialState = {
  hostname: "www.baidu.com",
  url: "/apifdd"
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_URL":
      return { ...state, url: action.text };
    default:
      return state;
  }
};
export default rootReducer;
