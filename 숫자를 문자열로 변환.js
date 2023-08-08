// 1.
// String : 숫자를 문자열로 변환
let num = 123;
let str = String(num);

// 2.
// .toString() : 숫자의 메소드 중 하나
let numm = 123;
let strr = numm.toString();

// 3.
// '' + 숫자 : 숫자와 빈 문자열을 더하는 것으로 숫자를 문자열로 변환 가능
let n = 123;
let s = "" + n;

// 유니코드 값 구하기
let strings = "A";
let uni = strings.charCodeAt();
// str.charCodeAt(index) - index는 숫자가 아니라면 기본적으로 0을 사용함
// str.codePointAt(index) - 이모지와 같이 16비트로 표현되지 않는 긴 문자열을 다루는 데 유용하다.
// 인덱스는 문자열의 인덱스!
