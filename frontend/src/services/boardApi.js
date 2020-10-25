import { backEndApi } from "../utils";

export default {
  getBoards: () => backEndApi.get(`/api/boards`),
};
