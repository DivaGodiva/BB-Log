import { HEADER_TOGGLE } from "../actions/index";

const initialState = {
  testNumbers: 0,
  headerToggles: {
    0: false,
    1: false,
    2: false
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === HEADER_TOGGLE) {
    console.log(`Link clicked - Previous state: ${state.headerToggles}`);
    return Object.assign({}, state, {
      headerToggles: Object.assign({...state.headerToggles}, {
        [action.number]: !state.headerToggles[action.number]
      })
    });
  }
  return state;
};

export default rootReducer;