function Person(n, a) {
  this.name = n;
  this.age = a;
}

var sp = new Person("sp", 30);

var spClone1 = new sp.__proto__.constructor("sp_clone1", 10);

var spClone2 = new sp.constructor("sp_clone2", 20);

var spClone3 = new Object.getPrototypeOf(sp).constructor("sp_clone3", 25);

var spClone4 = new Person.prototype.constructor("sp_clone4", 35);

// 아래 5가지 방법으로 생성자 함수에 접근할 수 있다.
constructor;

instance.__proto__.constructor;

instance.constructor;

Object.getPrototypeOf(instance).constructor;

Constructor.prototype.constructor;
