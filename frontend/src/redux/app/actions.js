import * as types from "./types";

export default {
  signin: (payload) => ({ type: types.SIGNIN, payload }),
  signout: () => ({ type: types.SIGNOUT }),
  updateProfile: (payload) => ({ type: types.UPDATE_PROFILE, payload }),
  getAllNecessaryData: (payload) => ({ type: types.GET_ALL_NECESSARY_DATA, payload }),
};
