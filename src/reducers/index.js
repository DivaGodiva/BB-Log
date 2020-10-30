import { HEADER_TOGGLE, HEADER_TOGGLE_RESET } from "../actions/index";

const initialState = {
  headerToggles: {
    0: false,
    1: false,
    2: false
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === HEADER_TOGGLE) {
    console.log(`Link clicked - true, index: ${action.number}`);
    return Object.assign({}, state, {
      headerToggles: Object.assign({...state.headerToggles}, {
        0: false,
        1: false,
        2: false,
        [action.number]: true
      })
    });
  } else if (action.type === HEADER_TOGGLE_RESET) {
    console.log(`Reset clicked`);
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