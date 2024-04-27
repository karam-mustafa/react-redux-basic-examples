import { DECREAMENT, INCREAMENT } from "./types";

export function increamentAction(count = 0) {
  return {
    type: INCREAMENT,
    payload: count + 1,
  };
}

export function decreamentAction(count = 0) {
  return {
    type: DECREAMENT,
    payload: count - 1,
  };
}
