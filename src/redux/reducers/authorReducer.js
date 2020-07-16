import * as types from "../actions/actionTypes";
import initiaState from "./initialState";

export default function authorReducer(state = initiaState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
