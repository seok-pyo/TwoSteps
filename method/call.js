const person = {
  name: "John",
  greet: function (greeting) {
    console.log(greeting + " " + this.name);
  },
};

person.greet("Hello"); // "Hello John"

const anotherPerson = {
  name: "Alice",
};

person.greet.call(anotherPerson, "Hi"); // "Hi Alice"

// call()은 함수를 호출할 때 사용되는 메소드 중 하나로, 함수를 다른 객체의 메소드처럼 호출할 수 있게 한다.

// call()을 사용하여 `person` 객체의 `greet` 함수를 `anotherPerson` 객체에서
// 호출하면, `this`가 `anotherPerson` 객체로 설정되어 함수가 `anotherPerson` 객체
// 속성에 접근할 수 있게 됩니다.
