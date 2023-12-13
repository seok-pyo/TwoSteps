const GameModel = require('./gameModel');
const GameView = require('./gameView');

const model = new GameModel();
const view = new GameView();

class GameController {
  startGame() {
    view.showWelcomeMessage();

    while (true) {
      const userGuess = view.getUserInput();
      const result = model.checkGuess(userGuess);

      if (result === true) {
        view.showResult(true);
        breakk;
      } else {
        view.showResult(result);
      }
    }
  }
}

moodule.exports = GameController;
