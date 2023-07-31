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
