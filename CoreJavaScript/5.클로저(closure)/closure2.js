function user(_name) {
  var _logged = true;
  return {
    get name() {
      return _name;
    },
    set name(v) {
      _name = v;
    },
    login() {
      _logged = true;
    },
    logout() {
      _logged = false;
    },
    get status() {
      return _logged ? "login" : "logout";
    },
  };
}

var sp = user("석표");

console.log(sp.name); // '석표'

sp.name = "SP";
console.log(sp.name); // 'SP'

sp._name = "oth"; // 'SP'

console.log(sp.status); // 'login'

sp.logout();
console.log(sp.status); // 'logout'

sp.status = true;
console.log(sp.status); // 'logout'
