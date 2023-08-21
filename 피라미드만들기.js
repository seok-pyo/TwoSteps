// 역피라미드 만들기(재귀)

function makePyramidRecursive(n, current = 1) {
  if (n === 0) {
    return; // Base case: Stop recursion when n reaches 0
  }

  // Print spaces and stars for the current level
  console.log(" ".repeat(n - 1) + "*".repeat(current));

  // Recursively call the function for the next level
  makePyramidRecursive(n - 1, current + 1);
}

makePyramidRecursive(3); // 예시로 3단계 역 피라미드 생성

// 역피라미드 만들기(반복문))
function makePyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}
makePyramid(3); // 예시로 3단계 역 피라미드 생성

// 삼각형 피라미드 만들기, 다이아몬드 만들기

function printDiamond(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "#".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  for (let i = rows - 1; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = "#".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printDiamond(3); // 예시로 3단계 다이아몬드 출력

// 사라디꼴 만들기
function makeLad(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(i) + "#".repeat(n));
  }
}
