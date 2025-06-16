// --------------------------------------------------------------------------
// 📌 데이터타입.toString(radix?)
// --------------------------------------------------------------------------
// - 타입 변경 (문자열화)
// - 10진수를 다른 진수로 변경 (최소값: 2진수 / 최대값: 36진수)
// --------------------------------------------------------------------------

// 타입 변경

console.log('안녕!'.toString());
console.log((1004).toString());
console.log((false).toString());
console.log((true).toString());
// console.log((null).toString());
// console.log((undefined).toString());


// 10진수 -> 2진수 변경
let n = 255 //10진수
console.log(n.toString(2)); //컴퓨터가 알아듣는 2진수
 console.log(n.toString(8)) //컴퓨터가 알아듣는 8진수
 

// 10진수 -> 16진수 변경
console.log(n.toString(16)) //컴퓨터가 알아듣는 16진수

// 10진수를 2진수 또는 16진수로 변경하는 함수 작성
const toBiAndHex= num => `${num.toString(2)}, ${num.toString(16)}`

console.log(toBiAndHex(255))

// --------------------------------------------------------------------------
// 📌 parseInt(string, radix?)
// --------------------------------------------------------------------------
// - 단위(예: px, rem, cm, mm 등) 제거
// - 2 또는 16진수 문자열을 10진수로 변경
// --------------------------------------------------------------------------

// 단위 제거
console.log(parseInt('24px'));
console.log(parseFloat('1.625rem'));
console.log(parseInt('260mm'));


// 단위 제거 함수 작성
const removeUnit = num => parseFloat(num)

console.log(removeUnit('10px'));


// 2진수 문자열 -> 10진수 변경
console.log(parseInt('10', 2));
console.log(parseInt('100', 2));

// 8진수 문자열 -> 10진수 변경
console.log(parseInt('20', 8));

// 16진수 문자열 -> 10진수 변경
console.log(parseInt('00', 16));
console.log(parseInt('80', 16));
console.log(parseInt('a0', 16));
console.log(parseInt('b0', 16));
console.log(parseInt('de', 16));
console.log(parseInt('ff', 16));


// 16진수 문자열을 10진수로 변경하는 함수 작성
const hexToDec = hex => parseInt(hex, 16) 
console.log(hexToDec('ff'));
console.log(hexToDec('80'));

