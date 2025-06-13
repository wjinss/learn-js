console.log("함수(Function)");

// 함수란?
//  특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

function cookRamen() {
  // 물 500ml 냄비에 넣기
  // 하이라이트에 냄비를 올리고 물 끓이기
  // 2분간 끓이고 계란을 넣는다
  // 계란이 어느정도 익으면 후추를 4톡톡 정도 뿌린다
  // 냠냠 쏘 굳
}

// 함수 선언(Function Declaration) 구문
function 함수이름() {
  // console.log("함수 내부에서 처리할 작업 기술");
  // console.group("라면먹자!!!!!!"); 처음에 펼쳐진 상태
  console.groupCollapsed("라면먹자!!!!!!");
  console.log("물 500ml 냄비에 넣기");
  console.log("하이라이트에 냄비를 올리고 물 끓이기");
  console.log("2분간 끓이고 계란을 넣는다");
  console.log("계란이 어느정도 익으면 후추를 4톡톡 정도 뿌린다");
  console.log("냠냠 쏘 굳");
  console.groupEnd();
}

// 함수 사용 (Call Function)
함수이름();
함수이름();
함수이름();

// 함수 이름으로 기능 유추
// play();
// stop();
// pause();

// 함수 이름 규칙
// 1. 한단어로 구성되어야 하며, 공백 혀용x
// 2. 알파벳 a~z, A~Z 숫자 0~9, 특수문자 $, _로 구성
// 3. 숫자로 시작할 수 없다
// 4. 예약어는 사용할 수 없다

// ---------------------------
// 매개변수(Parameters)
// ---------------------------

// 전역변수 (global scope variables)
// 코드 실행 범위 어디서나 접근 가능한 변수
// let yeat = 2026

// 함수 선언
function writeDiary(year, month, date, location) {
  // 함수 내부에 선언된 변수 > 함수 안에서 사용

  // 지역변수 (local scope variables)
  let mood = "행복감";
  console.log(
    year +
      "년 " +
      month +
      "월 " +
      date +
      "일 " +
      location +
      "에 다녀온 일기를 쓴다."
  );
}
writeDiary(2025, 6, 15, "국립 중앙 박물관");
writeDiary(2025, 8, 19, "을지로");

// 변수 or 매개변수에 아무런 값이 할당되지 않으면 기본값으로 undefined가 할당된다
let day;
writeDiary();

// ---------------------------
// 반환문(return)
// ---------------------------
function add(num1, num2) {
  // 브라우저 콘솔에 num1 + num2가 계산된 값이 기록된다
  console.log("콘솔에 출력된 계산 결과 = ", num1 + num2);

  // 함수에서 처리(계산)된 값을 반환하려면 return 키워드가 필요하다
  return num1 + num2;
}

// 함수가 실행되어 값을 반환한다면 그 값을 변수에 기억하려한다.
let result = add(10, 9);
console.log("결과값 = ", result);

// 함수가 암묵적으로 반환하는 값
// return으로 값을 반환하지 않으면 undefined가 암묵적으로 반환됨

// ---------------------------
// console.log() vs. 함수의 return
// ---------------------------
function 곱하기(숫자1, 숫자2) {
  let 결과값 = 숫자1 * 숫자2; // 계산된 값
  // console.log(결과값)

  // 명시적 결과 반환
  // return 결과값;

  // 암묵적 결과 반환
  return undefined;
}

function 화면에결과그리기() {
  const 화면에그릴숫자값 = 곱하기(10, 20); // undefined
  document.write(화면에그릴숫자값); // undefined > "undefined"
}

화면에결과그리기();

// 전역변수를 선언만하고 함수 내부에서 정의할 경우에는 return을 사용할 필요 없이 전역변수의 값이 변할 수 있는데 이때에도 return이 없으면 함수는 undefined를 반환하나요?

let y = "전역변수";

function fn() {
  // 전역 변수 변경
  y = 0;

  // 전역 변수를 변경만 하고 아무런 값을 명시적으로 반환하지 않는다.
  // return undefined
}

console.log(fn()); // undefined
