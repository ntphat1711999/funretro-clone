import { AuthController } from "./auth.controller";
import { BoardController } from "./board.controller";

const authController = new AuthController();
const boardController = new BoardController();

export { authController, boardController };
