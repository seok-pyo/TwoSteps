function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, index) => v + index)
      .join("")
      .split(k).length - 1
  );
}

// i와 j의 범위 내에서 k의 개수 구하기
// a123a123a123a -> a의 개수는 4개
// a123a123a123a.split('a') = 5
// 5 - 1 => a의 개수
