// forEach()
a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2]
);

// forEach의 대략적인 내부 모습
// function forEach(predicate, thisArg) {
//   for (let i = 0; i < a.length; i++) {
//     predicate(a[i], i);
//   }
// }

// map() , map은 원본배열과 길이가 같다.
a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer2 = a.map(
  function (v, i) {
    return v * v;
  },
  [1, 2]
);

// map의 대략적인 내부 모습
// function map(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     list.push(predicate(a[i], i));
//   }
//   return list;
// }

// filter()
a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer3 = a.filter(
  function (v, i) {
    return v * v == 1;
  },
  [1, 2]
);

// filter의 대략적인 내부 모습
// function filter(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     if(predicate(a[i], i)) list.push(a[i]);
//   }
//   return list;
// }

// reduce()
a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer4 = a.reduce(function (acc, v) {
  return acc + v;
}, 0);

// reduce의 대략적인 내부 모습
// function reduce(predicate, val) {
// let result = val;
//   for (let i = 0; i < a.length; i++) {
//     result = predicate(result, a[i])
//   }
//   return list;
// }
