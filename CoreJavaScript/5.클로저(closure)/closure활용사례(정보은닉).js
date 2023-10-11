// 자동차 경주 게임 만들기
// 각 턴마다 주사위를 굴려 나온 숫자(km)만큼 이동한다.
// 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
// 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
// 게임 종료 시점에 가장 멀리 이동해 있는 사람이 승리

// 자동차 객체 만들기
// 기본 객체 활용

// var car = {
//   fuel: Math.ceil(Math.random() * 10 + 10),
//   power: Math.ceil(Math.random() * 3 + 2),
//   moved: 0,
//   run: function () {
//     var km = Math.ceil(Math.random() * 6);
//     var wasteFuel = km / this.power;
//     if (this.fuel < wasteFuel) {
//       console.log("이동불가");
//       return;
//     }
//     this.fuel -= wasteFuel;
//     this.moved += km;
//     console.log(
//       km + "km 이동 (총 " + this.moved + "km)" + " 남은 연료 : " + this.fuel
//     );
//   },
// };

// car.run();

var car = {
  fuel: Math.ceil(Math.random() * 10 + 10),
  power: Math.ceil(Math.random() * 3 + 2),
  moved: 0,
  run: function () {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log("이동불가");
      return false; // 자동차를 더 이상 움직일 수 없음을 나타냄
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(
      km + "km 이동 (총 " + this.moved + "km)" + " 남은 연료 : " + this.fuel
    );
    return true; // 자동차를 더 이동할 수 있음을 나타냄
  },
  startGame: function () {
    var isRunning = true;
    while (isRunning) {
      isRunning = this.run();
      if (isRunning) {
        var userInput = prompt("더 달릴까요? (yes/no): ");
        if (userInput.toLowerCase() !== "yes") {
          isRunning = false;
        }
      }
    }
    console.log("게임 종료!");
  },
};

car.startGame();

// 함수 활용
// return 한 변수들만 공개하고, 나머지 변수는 숨길 수 있게 된다.
var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10);
  var power = Math.ceil(Math.random() * 3 + 2);
  var moved = 0;
  return {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동불가");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + "km 이동 (총 " + moved + "km). 남은 연료: " + fuel);
    },
  };
};

// run 메서드도 덮어씌우는 것을 막기 위해선 return 전에 객체를 얼린다.

var createCar = function () {
  //...
  var publicMembers = {
    //...
  };
  Object.freeze(publicMembers);
  return publicMembers;
};
