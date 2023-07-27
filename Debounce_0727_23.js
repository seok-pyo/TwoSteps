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

const debounceHandleInput = debounce(handleInput, 2000);

debounceHandleInput("Hello");
