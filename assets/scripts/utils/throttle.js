// 쓰로틀 함수 작성
// 함수(전달받은함수) -> 반환한함수
function throttle(callback, delay = 400) {
  let timeout = null;

  // 반환 함수
  return function eventListener(...args) {
    // 발생 빈도 조정
    if (!timeout) {
      timeout = setTimeout(() => {
        // 이벤트 리스너의 매개변수 집합(배열) 전개
        callback(...args);
        // 발생 빈도 재조정을 위한 초기화
        timeout = null;
      }, delay);
    }
  };
}
// 쓰로틀 함수 사용
const eventListener1 = throttle((e) => {
  console.log(e);
}); // 0.4초 마다 주기적으로 함수 호출

const eventListener2 = throttle((e) => {
  console.log(e);
}, 300); // 0.3초 마다 주기적으로 함수 호출

// 이벤트 리스너로 추가
globalThis.addEventListener("scroll", eventListener1);
globalThis.addEventListener("resize", eventListener2);
