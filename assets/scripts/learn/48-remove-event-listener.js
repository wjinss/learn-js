// ------------------------------------
// 추가된 이벤트 리스너 제거
// ------------------------------------
(() => {
  const buttonGroup = document.querySelector('[role="group"]');
  const testerButton = buttonGroup.querySelector('[data-role="tester"]');

  console.log(testerButton);

  buttonGroup.addEventListener("click", (e) => {
    const target = e.target.closest("button");

    if (target) {
      // 이벤트 리스너 추가
      if (target.dataset.role === "add-event") {
        console.info("테스트 버튼에 이벤트 연결됨");
        testerButton.textContent = "이벤트 추가됨";

        testerButton.addEventListener("click", () => {
          console.log("테스트 버튼에 이벤트 연결");
        });
      }

      // 추가된 이벤트 리스너 제거
      if (target.dataset.role === "remove-event") {
        testerButton.textContent = `이벤트 리스너 제거됨`;
        testerButton.removeEventListener("click", () => {
          console.log(`테스트 버튼에 이벤트 연결 해제`);
        });
      }
    }
  });
})();
