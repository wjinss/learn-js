// ------------------------
// 논리 연산자 식
// && 그리고(and)
// || 또는 (or)
// ------------------------

(() => {
  let isLightGreen = false;
  let noCarsAround = true;
  // 신호등 불빛이 초록불이거나, 주변에 차가 없다면? 건너라
  // 그렇지 않다면? 멈춰라

  if (isLightGreen || noCarsAround) {
    walk();
  } else {
    stop();
  }
  function walk() {
    console.log("건너라");
  }

  function stop() {
    console.log("멈춰라");
  }
})();

// && 논리 연산자(and)
(() => {
  let x, y;

  x = "엑—스"; // [true] or false -> Truthy
  y = NaN; // true or [false] -> Falsy or Falsey

  // && 연산자는 첫번째 Falsey(거짓으로 평가되는) 값을 찾는다.
  // console.log(1, x && y)
  // console.log(2, y && x)

  // 논리 연산자 사용한 식
  let result1 = x && play(); // x가 참이면? play() 함수 실행 (이유: && 연산자는 첫번째 거짓으로 평가되는 값을 찾으니까)
  let result2 = y && study(); // y가 참이면? study() 함수 실행 (반대로 말하면 y가 거짓이면 함수 실행은 없다.)

  console.log("1", result1); // ???
  console.log("2", result2); // ???

  function study() {
    return "우리는 함께 공부한다.";
  }

  function play() {
    return "우리는 다같이 논다.";
  }
})();

// || 연산자 (or)/ || 논리합 논리 연산자 (OR)Add commentMore actions
(() => {
  const user = {
    name: "지훈",
    email: "yamoo9@naver.com",
    isSigned: !true,
  };

  // ----------------------------------------
  // 조건문 (if...else 문)
  if (!user.isSigned) {
    signIn();
  } else {
    signOut();
  }
  // if (user.isSigned) signOut()
  // else signIn()

  // ----------------------------------------
  // 조건식 (3항 연산자 표현식)
  !user.isSigned ? signIn() : signOut();

  // ----------------------------------------
  // 논리 연산자 식 (&&, ||)

  // user.isSigned // true or [false]
  // || 연산자는 첫번째 Truthy 값을 찾는다. (&& 연산자의 반대)
  user.isSigned || signIn();
  // && 연산자는 첫번째 Falsey 값을 찾는다. (|| 연산자의 반대)
  user.isSigned && signOut();

  function signIn() {
    console.log("로그인 합니다.");
  }

  function signOut() {
    console.log("로그아웃 되었습니다.");
  }
})();
