// ---------------------------
// 웹 애니메이션
// ---------------------------
// 1. 트랜지션
// 2. 애니메이션
// 3. js 애니메이션
// ---------------------------
(() => {
  const ballElement = document.querySelector(".ball");
  const TRANSITION_CLASSNAME = "is-transition";

  // mouse click + className toggle
  ballElement.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle(TRANSITION_CLASSNAME);
  });
  // mouse enter/leave event
  // ballElement.addEventListener("mouseenter", (e) => {
  //   e.currentTarget.classList.add(TRANSITION_CLASSNAME);
  // });

  // ballElement.addEventListener("mouseleave", (e) => {
  //   e.currentTarget.classList.remove(TRANSITION_CLASSNAME);
  // });
})();
