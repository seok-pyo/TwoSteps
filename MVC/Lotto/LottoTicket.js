class LottoTicket {
  constructor() {
    this.numbers = this.generateLottoNumbers();
  }

  generateLottoNumbers() {
    // 로또 번호 생성 로직
  }

  getNumbers() {
    return this.numbers;
  }
}

module.exports = LottoTickets;
