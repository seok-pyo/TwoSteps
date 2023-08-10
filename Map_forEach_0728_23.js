const Title_map = [`map 메서드`];
/*
const newArray = array.map(element, index(opt), array(opt) => { });

map 메서드는 기존 배열을 변경하지 않고, 새로운 배열을 생성한다. 이는 함수형 프로그래밍에서 중요한 개념이며
데이터의 불변성을 유지해서 데이터를 쉽게 처리하게 한다. 메서드 체이닝 가능
*/

const Title_map_2 = [`map의 활용 / fill의 작동 방식`];

// 하나의 배열로 여러 행에 채운다
const matrix = new Array(n).fill(new Array(n).filtt(0));
// 행마다 하나의 배열을 채운다
const matrix2 = new Array(n).fill().map(() => {
  new Array(n).fill(0);
});

const Title_forEach = [`forEach 메서드`];
/*
arr.forEach(callback(currenValue[ , index[, array]])[, thisArg])

forEach 메서드는 각 배열 요소에 대해 한번씩 callback 함수를 실행합니다. map() 과 reduce() 와
달리 undefined 를 반환히가 때문에 메서드 체인 중간에 사용할 수 없다. (배열의 복사본을 만들지 않는다.)
*/

const Title_forEach_2 = [`배열의 속성 갱신 this 활용`];

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // this 활용 확인
};
// 화살표 함수 표현식을 사용하여 함수 인수를 전달하는 경우 thisArg는 렉시컬 this를 바인딩하기 때문에 생략될 수 있다.
const obj = new Counter();
obj.add([2, 5, 9]);
obj.count; // 3
obj.sum; // 16

const Title_forEach_3 = [`배열 평탄화, 재귀적으로 평탄화 하기`];

function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 알고리즘 코딩 테스트, 입문 -> 배열 두배 만들기

const data = [
  { name: "", age: "", country: "" },
  { name: "", age: "", country: "" },
  { name: "", age: "", country: "" },
];

data.map((v) => v["name"]);
data.map((v) => v["name"], v["age"]);
