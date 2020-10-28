import { HEADER_TOGGLE, HEADER_TOGGLE_RESET } from "../actions/index";

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
    console.log(`Link clicked - Previous state: ${state.headerToggles[0]}, ${state.headerToggles[1]}, ${state.headerToggles[2]}`);
    return Object.assign({}, state, {
      headerToggles: Object.assign({...state.headerToggles}, {
        [action.number]: !state.headerToggles[action.number]
      })
    });
  } else if (action.type === HEADER_TOGGLE_RESET) {
    console.log(`Reset clicked - Previous state: ${state.headerToggles[0]}, ${state.headerToggles[1]}, ${state.headerToggles[2]}`);
    return Object.assign({}, state, {
      headerToggles: {
        0: false,
        1: false,
        2: false
      }
    })
  }
  return state;
};

export default rootReducer;