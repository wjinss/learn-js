// const clickableBtn = document.querySelector(".clickable");
// clickableBtn.addEventListener(
//   // event type(string)
//   "click",
//   // event listener(function)
//   () => {
//     console.log("clicked clickable button");
//   }
// );

const clickableBtn = document.querySelector(".clickable");
clickableBtn.addEventListener("click", () => {
  // addEventListener()에 전달된 함수(값) 즉, 이벤트 리스터는
  // event 객체를 매개변수로 전달 받는다.
  // Event {x, y, target, type, pointerType, ...}
  document.body.classList.toggle("is-active");
  clickableBtn.classList.toggle("is-active");
});

// clickable_button.addEventListener("click", () => {
//   // 조건 확인 ('is-active' 클래스 이름을 가지는가?)
//   if (body.classList.contains("is-active")) {
//     // 클래스 이름 제거 -----------------------------------
//     // body 요소에 is-active 클래스 이름 제거
//     body.classList.remove("is-active")
//     // .clickable_button 요소에 is-active 클래스 이름 제거
//     clickable_button.classList.remove("is-active")
//   } else {
//     // 클래스 이름 추가 -----------------------------------
//     // body 요소에 is-active 클래스 이름 추가
//     body.classList.add("is-active")
//     // .clickable_button 요소에 is-active 클래스 이름 추가
//     clickable_button.classList.add("is-active")
//   }
// })

// console.log(clickable_button)

// clickable_button.addEventListener(
//   /* event type (string)*/
//   'click',
//   /* event listener (function) */
//   // function() {
//   //   console.log('clicked clickable button')
//   // }
//   () => {
//     console.log('clicked clickable button')
//   }
// )

// 실습 ----------------------------

function handelToggle() {
  console.log("toggle triggered");
}

function inlineClick() {
  console.log(`요소가 클릭됨!!!!`);
  addEvent.classList.toggle("is-clicked");
}

const addEvent = document.querySelector(".addEvent");
addEvent.addEventListener("click", () => {
  console.log(`요소가 클릭됨!!!!`);
  addEvent.classList.toggle("is-clicked");
});

// addEventListener('click',alertLog)에서 alertLog에 ()를 안붙이는 이유
const button = document.querySelector("button");

function alertLog(e) {
  console.log("clicked button");
  button.classList.toggle("clicked");

  // 명시적 반환일 경우
  // return { name: '나는 반환값이다.' }

  // 함수 내부에서 함수를 반환하는 경우
  return () => {
    console.log("나는 함수가 반환한 함수이다!");
  };

  // 암묵적으로 반환
  // return undefined
}

// alertLog
const result = alertLog();
console.log(result); // undefined

// 함수 이름만 참조
// button.addEventListener('click', alertLog)

// 함수 이름으로 호출(실행)
// 이벤트 연결 (binding events)
button.addEventListener("click", alertLog());

// 즉, alertLog()를 호출하면 함수의 실행결과를 호출하는데 return이 없어 undefined를 반환한다
