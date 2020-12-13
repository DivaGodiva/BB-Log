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
  messagedos: ["to Half-a-Hero.", "Make Buns.", "Nice to Meet You!"],
  workPhotoArray: ["/assets/dummy-photo-5.jpg", "/assets/dummy-photo-6.jpg", "/assets/dummy-photo-7.jpg", "/assets/dummy-photo-8.jpg"],
  workPhotoLinks: ["https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/"],
  workPhotoTitles: ["EMVEE", "Friends of the Third Origin", "Caprock", "Optimist"],
  workArray: ["/assets/dummy-photo-1.jpg", "/assets/dummy-photo-2.jpg", "/assets/dummy-photo-3.jpg", "/assets/dummy-photo-4.jpg", "/assets/dummy-photo-5.jpg", "/assets/dummy-photo-6.jpg", "/assets/dummy-photo-7.jpg", "/assets/dummy-photo-8.jpg"],
  workLinks: ["https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com"],
  workTitles: ["Diamante", "Illumination Card Desgins", "Blue Maps", "Twinkie", "EMVEE", "Friends of the Third Origin", "Caprock", "Optimist"],
  lifePhotoArray: ["/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg"],
  lifePhotoLinks: ["https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/", "https://www.google.com/"],
  lifeArray: ["/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg", "/assets/dummy-photo-0.jpg"],
  lifeLinks: ["https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com", "https://www.w3schools.com"],
  staticPhotoArray: ["/assets/beachboi.jpeg", "/assets/beachboi.jpeg"],
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