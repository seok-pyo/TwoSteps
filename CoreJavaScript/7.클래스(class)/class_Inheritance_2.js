function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
  this.position = position || "직책모름";
}

function Bridge() {}
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function () {
  return this.position;
};

var sp = new Employee("sp", 30, "CEO");
console.dir(sp);
