import { AuthController } from "./auth.controller";
import { BoardController } from "./board.controller";
import { CardController } from "./card.controller";

const authController = new AuthController();
const boardController = new BoardController();
const cardController = new CardController();

export { authController, boardController, cardController };
