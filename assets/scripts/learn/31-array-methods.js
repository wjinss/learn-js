// ------------------------------------
// 배열 메서드
// ------------------------------------

const JS_학습_주제 = [
  "변수",
  "함수",
  "조건문",
  "객체",
  "배열",
  "비교 연산자",
  "부정 연산자",
];

// indexOf(): 배열 항목 위치(index) 찾기(find) / 특정 값을 지닌 요소가 몇번째에 위치하는지
// ------------------------------------
let 함수_인덱스, 비교_연산자_인덱스;

함수_인덱스 = JS_학습_주제.indexOf("함수"); // 기대값: 1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);
함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 기대값: -1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);
// 값이 없으면 -1을 반환

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: 5 / 결과값: 5

// indexOf() 메서드의 결과 값을 불리언 값으로 변경하려면?
const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];

// indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
console.log(fruitBasket.indexOf("패션") > -1);
console.log(fruitBasket.indexOf("패션후르츠") > -1);
console.log(fruitBasket.indexOf("애플망고") > -1);
console.log(fruitBasket.indexOf("워터멜론") > -1);
console.log(fruitBasket.indexOf("오렌지") > -1);

const hasItem = (array, value) => array.indexOf(value) > -1;
// array.includes(value);

console.log(hasItem(fruitBasket, "패션")); //반환값: false
console.log(hasItem(fruitBasket, "오렌지")); //반환값: true

// includes(): 특정값의 유무에 따라 논리형을 반환 / indexOf() 메서드 대신, includes() 메서드 활ㅇㅅㅇ
// ------------------------------------
console.log(fruitBasket.includes("워터멜론"));
console.log(fruitBasket.includes("수박"));

const 멋사14기_수강생 = [
  { 이름: "이범원" },
  { 이름: "김민지" },
  { 이름: "조선현" },
];
// 객체 타입(함수, 배열, 객체)은 indexOf()로 판별 불가능 > 참조 주소가 달라서 -1을 반환
// console.log(멋사14기_수강생.indexOf({ 이름: "이범원" })); //기대값:1, 결과값:-1

// 객체 타입 판별하는 방법 > findIndex 사용
멋사14기_수강생.findIndex((수강생) => 수강생.이름 === "김민지"); // 1
