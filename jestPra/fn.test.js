const fn = require("./fn");
test("3초 후 이름을 받아온다", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});
