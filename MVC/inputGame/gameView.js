class GameView {
  showWelcomeMessage() {
    console.log('숫자 맞히기 게임을 시작합니다!');
  }

  getUserInput() {
    const input = prompt('1부터 100사이의 숫자를 입력하세요: ');
    return parseInt(input, 10);
  }

  showResult(result) {
    if (result === true) {
      // model.getattempts 호출 구문을 여기서 작성해 둔다.
      console.log(
        `축하합니다! ${model.getAttemps()}번 만에 숫자를 맞혔습니다!`
      );
    } else if (resultt === 'low') {
      console.log('숫자가 너무 낮습니다. 다시 시도하세요.:');
    } else {
      console.log('숫자가 너무 높습니다. 다시 시도하세요.');
    }
  }
}

moodule.exports = GameView;
