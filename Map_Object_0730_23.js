// Map 은 키-값(key-value) 쌍의 컬렉션을 저장하는 자료구조로, 키(key)와 값(value)을
// 연결하여 데이터를 저장하고 조회할 수 있다.

// get() 메서드를 사용하면 특정 키에 해당하는 값을 가져올 수 있다,
// map.get(key)

const myMap = new Map();

myMap.set("name", "Hong");
myMap.set("age", 33);
myMap.set("isStudent", true);

const nameValue = myMap.get("name");

// has(key) : 주어진 키(key)가 Map 객체에 존재하는지 여부를 확인한다. 존재하면 'true' 아니면 'false'
// delete(key) : 주어진 (key)에 해당하는 엔트리를 Map 객체에서 제거한다. 제거가 성공하면 'true' 항목이 없으면 'false'를 반환
// clear() : Map 객체의 모든 엔트리를 제거하여 비운다
// map.size : Map 객체의 엔트리 개수(키-값 쌍의 수)를 반환
// keys() : Map 객체의 모든 키(keys)를 나타내는 Iterator를 반환한다.
// values() : Map 객체의 모든 값(value)를 나타내는 Iterator를 반환한다.
// entries() : Map 객체의 모든 키-값을 나타내는 Iterator를 반환한다.
// forEach(callbackFn, [, thisArg]) : Map 객체의 각 엔트리에 대해 콜백 함수를 호출한다.
// 각 엔트리의 키, 값 Map 객체 자체를 인자로 받는다.

// keys() 메서드로 모든 키 출력
const keyIterator = myMap.keys();
for (const key of keyIterator) {
  console.log(key);
}

// values() 메서드로 모든 값 출력
const valueIterator = myMap.values();
for (const value of valueIterator) {
  console.log(value);
}

// entires() 메서드로 모든 키-값 쌍 출력
const entriesIteraotr = myMap.entries();
for (const [key, value] of entriesIterator) {
  console.log(key, value);
}

// forEach() 메서드로 모든 엔트리 출력
myMap.forEach((value, key) => {
  console.log(key, value);
});
