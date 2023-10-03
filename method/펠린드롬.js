// https://codingdojang.com/scode/562

function isPalindrome(n) {
  const str = n.toString();
  return str === str.split("").reverse().join("");
}

function solution(n) {
  let lagestPalindrome = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      // 반복 계산을 하지 않도록 j = i 로 설정
      const product = i * j;
      if (product <= lagestPalindrome) {
        break; // 불필요한 연산을 하지 않도록 지금까지 찾은 펠린드롬 보다 작은 경우 안쪽 반복문 break
      }
      if (isPalindrome(product)) {
        lagestPalindrome = product;
      }
    }
  }
  return lagestPalindrome;
}
