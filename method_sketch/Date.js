let now = new Date();

const year = now.getFullYear() + " - " + now.getMonth() + " - " + now.getDay();
const time =
  now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();

// 타임스탬프 얻기
Date.now();

// 초 얻기
let t1 = Date.now();
let t2 = Date.now();
// 시간 계산 메서드
function ts(t1, t2) {
  let sec = parseInt((t2 - t1) / 1000);
  let hour = parseInt(sec / 3600);
  let min = parseInt((sec % 3600) / 60);
  let fsec = (sec % 3600) % 60;
  return `${hour}시간, ${min}분, ${fsec}초`;
}
