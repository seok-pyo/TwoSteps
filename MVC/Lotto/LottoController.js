const LottoModel = require('./LottoModel');

class LottoController {
  startGame(numTickets) {
    const lotto = new LottoModel(numTickets);
    const results = lotto.checkWinningResult();

    for (let i = 0; i < numTickets; i++) {
      console.log(`로또 티켓 ${i + 1}: ${results[i]}`);
    }
  }
}

module.exports = LottoController;
