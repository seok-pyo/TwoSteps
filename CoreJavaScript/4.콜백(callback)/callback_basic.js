// callback 함수는 해당 함수의 실행시기, 인자, this의
// 권한을 다른 함수에게 위임하여 다른 함수의 상황에 맞춰 실행되도록 넘겨지는 함수.
// call + back

// 권한 위임 1.실행시기
// setInterval
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// 권한 위임 2.인자
// callback 함수 예제 > Array.prototype.map
const newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

// 권한 위임 3.this
// Array.prototype.map 구현
Array.prototype.map = function (callback, thisArg) {
  var mappedArr = [];
  for (var i = 0; i < this.length; i++) {
    var mappedValue = callback.call(thisArg || window, this[i], i, this);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

console.log(newArr);

// map의 구조
// Array.prototype.map(callbackk, [, thisArg])
// callback: function(currentValue, index, array);

// promise의 기본 구조
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async");
  }, 1000);
  resolve("success");
});

myPromise.then(function (result) {
  console.log(result);
});
