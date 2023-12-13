const LottoController = require('./LottoController');

const gameController = new LottoController();
const numTickets = 5;
gameController.startGame(numTickets);
