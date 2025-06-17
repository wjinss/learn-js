// 문서에 있는 버튼 요소에 접근(찾기)
// 전역 변수에 참조(왜? 객체 타입이니깐)
const btn = document.querySelector(".clickable");

// 버튼 요소에 이벤트 리스터(함수) 추가
// 콜백 = 다른 함수에 인수로 전달될 함수  (나중에 실행되도록)
// 이벤트 = 언제 발생할 지 알 수 없음 (비동기)

// btn.addEventListener("click", () => {
//   console.log(`해당 함수는 나중에 실행되므로 콜백!`);
// });

// // addEventListener()를 사용해 리스너를 추가하는 것은 n회 가능
// btn.addEventListener("click", () => {
//   console.log(`두번째 연결된 콜백!`);
// });

// 콜백 === 이중중첩함수? > false
// 함수 이중 중첩 예시
// function fn1() {
//   function fn2() {}
// }

// 콜백 예시

fn1(fn2);
function fn1(callback) {
  // 실행순서 1
  console.log("fn1");
  callback();
}

function fn2() {
  // 실행순서 2
  console.log("fn2, 콜백");
}

// 레거시 이벤트(onclick) vs. 모던 이벤트(addEventListener)
// 변수에는 여라 값을 저장할 수 있다? 아니면 단 하나의 값만 저장할 수 있다?
// 레거시 이벤트는 객체의 변수가 가진 속성이다.

btn.onclick = function () {
  document.body.classList.toggle("is-active");
};
btn.onclick = function () {
  btn.classList.toggle("is-active");
};

// 비동기처리 > ㅂ코드가 바로 실행되지 않고,
const handelBodyToggleClass = () => {
  console.log(`해당 함수는 나중에 실행되므로 콜백!`);
};
btn.addEventListener("click", handelBodyToggleClass);

const handelBtnToggleClass = () => {
  console.log(`두번째 연결된 콜백!`);
};
btn.addEventListener("click", handelBtnToggleClass);

// 동기처리 > 코드 실행 완료될 때까지 다음 코드를 차단(블로킹)
handelBtnToggleClass(); // 1
handelBtnToggleClass(); // 2
handelBtnToggleClass(); // 3
handelBtnToggleClass(); // 4
handelBtnToggleClass(); // 5

function greet() {
  console.log("안녕!");
}

function respond() {
  return setTimeout(() => {
    console.log("헤이!!");
  }, 2000);
}

respond();
greet();
