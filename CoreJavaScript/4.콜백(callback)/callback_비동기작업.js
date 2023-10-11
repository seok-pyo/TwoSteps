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
