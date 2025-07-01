// ---------------------------
// 웹 애니메이션
// ---------------------------
// 1. 트랜지션
// 2. 애니메이션
// 3. js 애니메이션
// ---------------------------
() => {
  const ballElement = document.querySelector(".ball");
  const TRANSITION_CLASSNAME = "is-transition";

  ballElement.addEventListener("click", (e) => {
    const ball = e.currentTarget;

    // style을 활용해 속성의 상태 변경
    // 트랜지션 트리거
    ball.style.setProperty("--fill", "#e54d26");
    ball.style.setProperty("--size", "100px");

    // mouse click + className toggle
    // e.currentTarget.classList.toggle(TRANSITION_CLASSNAME);
  });
  // mouse enter/leave event
  // ballElement.addEventListener("mouseenter", (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME);
  // });

  // ballElement.addEventListener("mouseleave", (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME);
  // });
};
