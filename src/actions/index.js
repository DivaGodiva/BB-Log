export const HEADER_TOGGLE = "HEADER_TOGGLE";
export function toggleHeader(number) {
  return {
    type: HEADER_TOGGLE,
    number
  }
}

export const HEADER_TOGGLE_RESET = "HEADER_TOGGLE_RESET";
export function resetHeader() {
  return {
    type: HEADER_TOGGLE_RESET,
  }
}