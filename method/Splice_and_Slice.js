// Splice 와 Slice 는 자바스크립트의 배열에서 사용되는 메서드이지만, 둘 다 다른 목적을 가지고 있다.

// Splice()
// splice() 메서드는 배열의 내용을 변경하는 메서드로, 배열에서 요소를 추가,삭제,교체할 수 있다.
// 배열의 특정 인덱스에서 요소를 제거하거나 새로운 요소를 추가할 수 있다.
// splice(start, deleteCount, ...items) 형태로 사용
// start : 변경을 시작할 인덱스 / delelteCount : 삭제할 개수 지정 / ...items : 삭제한 위치에 추가할 요소
// splice()는 원본 배열을 수정한다.

const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 2, 6, 7); // 인덱스 2부터 2개의 요소를 삭제하고, 6,7을 추가

// Slice()
// slice() 메서드는 배열의 일부분을 추출하여 새로운 배열을 반환한다.
// 원본 배열은 변경되지 않고, 추출된 새로운 배열을 반환한다.
// slice(start, end) 형태로 사용한다.
// start : 추출을 시작할 인덱스로, 해당 인덱스를 포함한다. end : 추출을 종료할 인덱스로, 해당 인덱스 요소는 포함하지 않는다.
// slice()는 원본 배열을 수정하지 않으며, 추출된 일부 배열을 반환한다.

const nnumber = [1, 2, 3, 4, 5];

// 인덱스 1부터 3까지의 요소를 추출하여 새 배열 반환
const slicedArray = nnumber.slice(1, 4);
console.log(slicedArray); // [2,3,4]

console.log(nnumber); // [1,2,3,4,5] 원본 배열은 변경되지 않음
