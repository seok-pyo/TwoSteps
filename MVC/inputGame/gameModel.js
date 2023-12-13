class GameModel {
  construtor() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
  }

  checkGuess(userGuess) {
    this.attempts += 1;
    if (userGuess === this.targetNumber) {
      return true;
    } else if (userGuess < this.targetNumber) {
      return 'low';
    } else {
      return 'high';
    }
  }

  getAttempts() {
    return this.attempts;
  }
}

moodule.exports = GameModel;
