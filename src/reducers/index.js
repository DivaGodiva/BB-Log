import { HEADER_TOGGLE, HEADER_TOGGLE_RESET } from "../actions/index";

const initialState = {
  headerIndex: 0,
  headerToggles: {
    0: false,
    1: false,
    2: false
  },
  landingMessage: {
    "Welcome to the": "Blog."
  },
  messageuno: ["The Journey from Zero..", "When Life Gives You Flour..", "Hello,"],
  messagedos: ["to Half-a-Hero.", "Make Buns.", "Nice to Meet You!"]
};

function rootReducer(state = initialState, action) {
  if (action.type === HEADER_TOGGLE) {
    console.log(`Link clicked - true, index: ${action.number}, ${state.headerIndex}`);
    return Object.assign({}, state, {
      headerIndex: action.number,
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