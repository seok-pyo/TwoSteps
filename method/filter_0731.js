// arr1.filter(callback(element[, index[, array]][, thisArg]));
// filter() 메서드는 주어진 함수의 테스트를 통과하는 **< 모든 요소를 모아 >** 새로운 배열로 반환한다.
// 어떤 요소도 통과하지 못하면 빈배열을 반환한다.

// JSON 에서 무효한 항목 거르기
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: Nan },
  { id: "undefined" },
];

const invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

// 배열에서 테스트를 통과하는 요소를 모아 배열로 반환한다.
const arrByID = arr.filter(filterByID);

// 활용사례

TodoList.prototype.render = function () {
  const notCompletedTodos = this.state.filter((todo) => !todo.isCompleted);
  const completedTodos = this.state.filter((todo) => todo.isCompleted);

  this.$element.innerHTML = notCompletedTodos
    .map(
      (todo) =>
        `<li draggable="true" data-id="${todo._id}">${todo.content}<button>X</button></li>`
    )
    .join("");

  this.$element_done.innerHTML = completedTodos
    .map(
      (todo) =>
        `<li draggable="true" data-id="${todo._id}"><s>${todo.content}</s><button>X</button></li>`
    )
    .join("");
};

// 활용 사례 2 (좋아요 모아보기)

// 값 초기화
this.likeFilter = false;

// 초기값으로 렌더
this.render = () => {
  this.$element.innerHTML = `
  <label><input type="checkbox" ${
    this.likeFilter ? "checked" : ""
  }> 좋아요 모아보기 </label>
  <ul>${this.state.users
    // !this.likefilter 부분 체크
    .filter((user) => !this.likeFilter || this.favoriteUsers[user])
    .map((user) => `<li data-user="${user}>${user}</li>`)
    .join("")}</ul>`;
};

// 클릭 이벤트로 좋아요 toggle
this.$element.addEventListener("click", (e) => {
  if (e.target.className === "filter-favorite-user") {
    this.likeFilter = e.target.checked;
    this.render();
    return;
  }
});
