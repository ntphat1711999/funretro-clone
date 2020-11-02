import * as types from "./types";

export default {
  getAllNecessaryData: (payload) => ({ type: types.GET_ALL_NECESSARY_DATA, payload }),
  signin: (payload) => ({ type: types.SIGNIN, payload }),
};
