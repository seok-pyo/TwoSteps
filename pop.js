// pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환! 한다.

function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common.pop() + (common[1] - common[0]);
  } else {
    return common.pop() * (common[1] / common[0]);
  }
}
