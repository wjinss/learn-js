// ------------------------
// 화살표 함수 표현식 (arrow-function-expression)
// ------------------------

// 함수를 만드는 방법 3가지(함수 정의)

// 1. 함수 선언문
function showMeTheMoney() {
  console.log("show me the money");
}
showMeTheMoney();
// 2. 함수 표현식
let lookAtMe = function () {
  console.log("look at me");
};
lookAtMe();
// 3. 화살표 함수
// let readABook = (bookName) => {
//   console.log(bookName + "을 읽다");
// };
// readABook("한 여름 밤의 꿈");
// readABook("유년기의 꿈");

// 다양한 화살표 함수 구문
// 1. 매개변수의 개수
// 1개는 소괄호 생략 가능하지만 그 외는 생략하지 않는다

// 0개
let readABook = (_) => {
  // ()대신 _, x, $ 사용가능하며, 매개변수를 사용하지 않을 경우 관례적으로 _을 사용하지만, 소괄호는 쓰는게 좋다.
  console.log("책을 읽다");
};
readABook();
// 1개
let readABook1 = bookName => { // 매개변수 개수가 1개이면 소괄호 생략 가능하지만, 소괄호는 쓰는게 좋다.
  console.log(bookName + " 을 읽다");
};
readABook1("오만과 편견");
// 2개 이상
let readABook2 = (bookName, day) => { // 매개변수 개수가 2개이상이면 소괄호 생략을 허용하지 않는다.
  console.log(day + "일에 걸쳐 " + bookName + " 을 읽다");
};
readABook2("죄와 벌", 21);

// 2. 암묵적 변환
// return 깂(명시적 반환)
// return undefined(암묵적 반환, 기본 반환)

const ROOT_FONT_SIZE = 16

// 함수 선언문
// function px2rem(pxValue) {
//   return pxValue / ROOT_FONT_SIZE + "rem"
// }

// console.log(px2rem(28));

// 함수 표현식
// let px2rem = function (pxValue) {
//   return pxValue / ROOT_FONT_SIZE + "rem"
// }

// console.log(px2rem(28));

// 화살표 함수 표현식 변형1 (기본 화살표 함수 표현식)
// let px2rem =  (pxValue)=> {
//   return pxValue / ROOT_FONT_SIZE + "rem"
// }

// console.log(px2rem(28));

// 화살표 함수 표현식 변형2 (매개변수 1개: 소괄호 생략)
// let px2rem =  pxValue=> {
//   return pxValue / ROOT_FONT_SIZE + "rem"
// }

// console.log(px2rem(28));

// 화살표 함수 표현식 변형3 (암묵적 변환)
let px2rem =  pxValue =>  pxValue / ROOT_FONT_SIZE + "rem"

console.log(px2rem(28));

 //객체를 반환하는 함수Add commentMore actions
// 함수 선언
// function getStyles() {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//  return cssStyles
// }

// 함수 표현식
// let getStyles = function () {
//   let cssStyles = {
//     'display': 'grid',
//     'row-gap': 24
//   }

//   return cssStyles
// }

// 화살표 함수 표현식
let getStyles1 = _ => { 
  return {
    'display': 'grid',
    'row-gap': 24
  }
}

// let getStyles = _ => (객체값에중괄호가포함되면문법오류)
let getStyles = () => ({
  'display': 'grid',
  'row-gap': 24
})

// function getStyles() {
//   return {
//     'display': 'grid',
//     'row-gap': 24Add commentMore actions
//   }
// }

console.log(getStyles())

// --------------------------------
const ten =()=> 10
console.log(ten());

const logger = message=> "로그 메시지: " + message
console.log(logger('화살표 함수 표현식은 매우 유용해요!'));

const pxToRem = (px)=>{
  return px / 16 + "rem"
}
console.log(pxToRem(22));

const pxToRem2 = px=> px / 16 + "rem"
console.log(pxToRem2(28));

const PERCENTAGE_RATE = 100

const percentage = (numerator, denominator)=>{
  return numerator / denominator * PERCENTAGE_RATE + "%"
}
console.log(percentage(360, 1280));

const percentage2 = (numerator, denominator)=> numerator / denominator * PERCENTAGE_RATE + "%"
console.log(percentage2(360, 1280));

// 화살표 함수 표현식으로 사용할 때 let이 아닌, const를 사용하는 이유
// 