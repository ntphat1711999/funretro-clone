import * as types from "./types";

const INITIAL_STATE = {
  token: "",
  user: {},
  boards: [],
  cards: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGNIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case types.GET_ALL_NECESSARY_DATA:
      return {
        ...state,
        boards: action.payload.boards,
        cards: action.payload.cards,
      };
    default:
      return state;
  }
};
