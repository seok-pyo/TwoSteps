// 1.배열에서 중복 요소 제거하기

//function unique(arr) {
/* 제출 답안 */
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

// 답안...

function unique(arr) {
  return Array.from(new Set(arr));
}

// 2.에너그램 걸러내기
// 에너그램은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이이다.
// 에너그램으로 만든 단어를 걸러내는 함수를 만들어보자

// 예시
// nap - pan
// ear - are - era

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// map으로 만들기

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// Object로 만들기

function oclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

// 3. 반복 가능한 객체의 키

// map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

// 작동하지 않네요.

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
// 이유가 무엇일까요? keys.push가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?

// 답안
let keys = Array.from(map.keys());
