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

// 웹 애니메이션 API 활용
(() => {
  // 웹 애니메이션 API를 적용해 볼을 클릭하면
  // 스케일 조정되도록 애니메이션이 "재생(play)"됩니다. (무한 반복: Infinity)
  // 다시 볼을 클릭하면 애니메이션이 "일시정지(pause)"됩니다.

  const ballElement = document.querySelector(".ball");
  const ballAnimation = ballElement.animate(
    [
      { scale: 1, offset: 0 },
      { scale: 1.5, offset: 0.2 },
      { scale: 2.5, offset: 0.4 },
      { scale: 1.7, offset: 0.6 },
      { scale: 0.7, offset: 0.8 },
      { scale: 1, offset: 1 },
    ],
    {
      duration: 2000,
      direction: "alternate",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
  // 애니메이션 일시정지
  ballAnimation.pause();

  // 상태변수 설정
  let isAnimting = false;

  ballElement.addEventListener("click", () => {
    if (!isAnimting) {
      // 애니메이션 재생
      ballAnimation.play();
    } else {
      // 애니메이션 일시정지
      ballAnimation.pause();
    }
    // 상태 변경
    isAnimting = !isAnimting;
  });
})();
