import { DECREAMENT, INCREAMENT } from "../actions/types";

export default function counterReducer(state: any, action: any) {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        count: action.payload,
      };
    case DECREAMENT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return {
        ...state,
        count: 0,
      };
  }
}
