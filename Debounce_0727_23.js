// 나머지 매개변수

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function handleInput(value) {
  console.log(`Input value: ${value}`);
}

// debounceHandleInput = function(...args)
const debounceHandleInput = debounce(handleInput, 2000);

// debounceHandleInput("Hello") = function([Hello,])
debounceHandleInput("Hello");

// 스프레드 연산자
