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
const nestedArray = [
  [1, 2, 3],
  ["one", "three", "four"],
];

nestedArray.findIndex((item) => {
  return item.at(0) === 1;
});

nestedArray.findIndex((item) => {
  return item.at(0) === "one";
});

// 배열에 항목 추가
// ------------------------------------

// 1. 시작 위치에 새 항목 추가 > unshift()
{
  const length = 멋사14기_수강생.unshift({ 이름: "신남일" });
  console.log(length);
}
{
  console.log(JS_학습_주제);
  console.log(JS_학습_주제.unshift("디버깅", "린터", "배열 메서드"));
  console.log(JS_학습_주제);
}
// 2. 끝 위치에 새 항목 추가 > push()
{
  멋사14기_수강생.push({ 이름: "장효정" });
  console.log(멋사14기_수강생);
}
{
  JS_학습_주제.push(
    ".indexOf()",
    ".findIndex()",
    ".at()",
    ".unshift()",
    ".push()"
  );
  console.log(JS_학습_주제);
}

// 배열에 항목 제거
// ------------------------------------

const counts = [101, 201, 301, 401, 501];
console.log({ counts }); // === console.log({ 'counts': counts });

// 1. 시작 위치의 항목 추가 > shift() > 원본 배열을 수정한다.
const removeFirstItem = counts.shift();
console.log({ removeFirstItem });
console.log({ counts });

// 여러 항목을 맨 앞에서 순차적으로 제거
console.log(멋사14기_수강생);
const shin = 멋사14기_수강생.shift();
const beom = 멋사14기_수강생.shift();
console.log(shin); // 첫 번째 항목
console.log(beom); // 첫 번째 항목
console.log(멋사14기_수강생); //남은 수강생 목록

// 2. 끝 위치의 항목 제거 > pop()
console.log(멋사14기_수강생);

const jang = 멋사14기_수강생.pop();
const jo = 멋사14기_수강생.pop();

console.log(jang);
console.log(jo);
console.log(멋사14기_수강생);

const numbers = [9, 10, 3, 4, 7, 8];
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]
// numbers.shift();
// numbers.shift();
numbers.splice(0, 2);
// numbers.unshift(1, 2);
numbers.splice(0, 0, 1, 2);
// numbers.pop();
// numbers.pop();
numbers.splice(numbers.length - 2, 2);
// numbers.push(5, 6);
numbers.splice(numbers.length, 0, 5, 6);
console.log(numbers);

// ------------------------------------
// 배열 중간에 새 항목 추가 or 삭제
// .splice() 메서드 : 추가, 삭제, 교체

// 중간에 포함된 항목을 삭제
// splice(시작 인덱스, 삭제할 개수)
// const removedItems = numbers.splice(2, 2);
// console.log(removedItems);
// console.log(numbers);

// 중간에 새 항목 추가
// console.log(numbers);
// numbers.splice(3, 0, 100, 101, 102);
// console.log(numbers);
// 중간에 포함된 항목을 삭제하고, 새 항목을 추가

// ------------------------------------
// 배열의 원소를 잘라 새 배열을 반환
// .slice(startIndex, endIndex) > 시작 인덱스부터 끝 이전 인덱스까지 퐇마한 새 배열반환
// 배열 복제
// .slice > 통째로 모두 잘라서 새 배열 반환
const people = ["세종대왕", "이순신", "김구", "유관순", "장영실", "신사임당"];

// 1. people 배열에서 '이순신' 항목의 인덱스를 확인합니다.
console.log(people.indexOf("이순신"));

// 2. people 배열 시작 위치에 '정약용', '지석영'을 추가합니다.
//     1. `unshift()` 활용
// console.log(people.unshift("정약용", "지석영"));
//     2. `splice()` 활용
console.log(people.splice(0, 0, "정약용", "지석영"));

// 3. people 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다.
//     1. `push()` 활용
// console.log(people.push("김유신", "을지문덕"));
//     2. `splice()` 활용
console.log(people.splice(people.length, 0, "김유신", "을지문덕"));

// 4. people 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
//     1. `shift()` 활용
// console.log(people.shift());
// console.log(people.shift());

//     2. `splice()` 활용
console.log(people.splice(0, 1));

// 5. people 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
//     1. `pop()` 활용
// console.log(people.pop());
// console.log(people.pop());

//     2. `splice()` 활용
console.log(people.splice(people.length - 2, 2));

// 6. people을 복제한 새로운 배열을 생성하고, people에서 '이순신','김구'로 새로운 집합을 생성
const newPeople = people.slice(1, 3);

console.log(people);
console.log(newPeople);
