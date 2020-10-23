import { TEST_STORE } from "../actions/index";

const initialState = {
  testNumbers: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === TEST_STORE) {
    return Object.assign({}, state, {
      testNumbers: state.testNumbers + 1
    });
  }
  return state;
};

export default rootReducer;