import { backEndApi } from "../utils";

export default {
  getBoards: (owner, token) =>
    backEndApi.get(`/api/boards?owner=${owner}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  addBoard: (data, token) =>
    backEndApi.post(`/api/boards/create`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  updateBoard: (data, token) =>
    backEndApi.put(`api/boards/update`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  deleteBoard: (data, token) =>
    backEndApi.delete(`api/boards/delete`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
};
