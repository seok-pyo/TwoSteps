function Person(name, age) {
  this._name = name;
  this._age = age;
}
// static method
Person.getInformations = function (instance) {
  return {
    name: instance._name,
    age: instance._age,
  };
};
//(prototype) method
Person.prototype.getName = function () {
  return this._name;
};
//(prototype) method
Person.prototype.getAge = function () {
  return this._age;
};

// 프로토타입 체이닝은 prototype 프로퍼티의 메서드만 검색하기 때문에 static 메서드는
// 생성자 함수의 직접 접근해야 한다.

var sp = new Person("석표", 30);

console.log(sp.getName()); // ok
console.log(sp.getAge()); // ok

console.log(sp.getInformations(sp)); // Error
console.log(Person.getInformations(sp)); // ok
