// ------------------------------
// 함수를 만드는 2가지 방법 (함수 정의)
// ------------------------------
// 1. 함수 선언 (Function Declaration)
// 2. 함수 표현식 (Function Expression)

// 함수 선언, 함수 표현식 그리고 호이스트 현상 비교
//see("강사님");
look("조교님");

// 함수 선언문 > 호이스팅 됨
function look(who) {
  console.log(who + "를 보다");
}

// 함수 표현식
// js는 함수를 값(value)으로 취급
// 변수 = 값(할당)
// let 보다 = 'see' // string
// let 보다 = 1001 // number
// let 보다 = true // boolean
// let 보다 = 함수

let see = function (who) {
  console.log(who + "를 보다");
};

see("공무원");
look("선생님");
see("형사님");

// Higher-order function 고차함수
// First class object 일급객체

// 함수 작성법 2개(함수 정의)
// 1. 함서 선언 (function 키워드로 시작, 호이스트 보여짐)
// 2. 함수 표현식 (변수에 함수 값을 할당, js는 함수를 값으로 취급 / 호이스트 보여지지 않음)

let myFn = function mine() {
  //표현식으로는 익명함수를 사용하며, 기명함수는 함수 내에서만 사용가능하고 함수 외부에서는 사용불가하다
  console.log("가나다라");
  console.log(mine);
};

myFn();
//mine();

function logger(logMessage) {
  console.log("로그 메시지: ", logMessage);
}
logger("실습을 통한 연습은 언제나 옳습니다. ☺️");

function pxToRem(px) {
  return px / 16 + "rem";
}
console.log(pxToRem(24));

function remToPx(rem) {
  return rem * 16 + "px";
}
console.log(remToPx(1));

function totalPizzaPrice(pizzaPrice, pizzaCount) {
  return "피자의 총 가격은 " + pizzaPrice * pizzaCount + "원 입니다";
}
console.log(totalPizzaPrice(2, 4200));

function parkingLotPrice(time, totalPrice) {
  return time / totalPrice;
}
