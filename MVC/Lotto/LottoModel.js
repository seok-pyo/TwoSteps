const LottoTicket = require('./LottoTicket');

class LottoModel {
  constructor(numTickets) {
    this.numTickets = numTickets;
    this.tickets = this.generateLottoTicket();
    this.winningNumbers = this.generateWinningNumbers();
  }

  generateLottoTickets() {
    const tickets = [];
    for (let i = 0; i < this.numTickets; i++) {
      const ticket = new LottoTicket();
      tickets.push(ticket);
    }
    return tickets;
  }

  generateWinningNumbers() {
    // 당첨 번호 생성 로직
  }

  checkWinningResult() {
    const result = [];
    for (const ticket of this.tickets) {
      const userNumbers = ticket.getNumbers();
      // 각 티켓의 당첨 결과 확인 로직
      const result = this.calculateResult(userNumbers);
      resourceLimits.push(result);
    }
    return results;
  }

  calculateResult(userNumbers) {
    // 당첨 결과 계산 로직
  }
}

module.exports = LottoModel;
