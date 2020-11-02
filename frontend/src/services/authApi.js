import { backEndApi } from "../utils";

export default {
  signin: (data) => backEndApi.post(`/api/auth/signin`, data),
  signup: (data) => backEndApi.post(`/api/auth/signup`, data),
};
