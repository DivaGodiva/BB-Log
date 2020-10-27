export const HEADER_TOGGLE = "HEADER_TOGGLE";
export function toggleHeader(number) {
  return {
    type: HEADER_TOGGLE,
    number
  }
}