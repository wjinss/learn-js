// --------------------------------------------------------------------------
// 📌 이벤트 위임 (Event Delegation)
// --------------------------------------------------------------------------

// 요소 집합 루프(반복, 순환)하여 이벤트 리스너를 각각 추가
// 이벤트 리스너 5개 생성
() => {
  const linkList = document.querySelector(".link-list");
  const links = linkList.querySelectorAll("a");

  links.forEach((link, index) => {
    const listener = (e) => {
      console.log(index + 1); // 1, 2, 3, 4, 5
      // 브라우저 기본 작동 방지
      if (!e.defaultPrevented) e.preventDefault();

      const aElement = e.currentTarget;
      console.log(aElement.getAttribute("href"));
    };

    link.addEventListener("click", listener);
  });
};

// 이벤트 대상
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    console.log("e.currentTarget = ", e.currentTarget); // 이벤트 리스너를 추가한 대상(요소)
    console.log("e.target =", e.target); // ???
  });
};

// 이벤트 위임 + 이벤트 대상 확인에 따른 조건 처리
// 단 1개의 이벤트 리스너 생성
() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();
    const target = e.target;

    if (target.localName === "a") {
      // console.log('<a> 요소를 클릭했습니다.')
      console.log(target.getAttribute("href"));
    }

    // console.log(target.nodeName)  // 'A', 'LI', 'UL'
    // console.log(target.nodeName.toLowerCase())  // 'a', 'li', 'ul'
    // console.log(target.localName) // 'a', 'li', 'ul'

    // if(target.localName === 'li') {
    //   console.log('<li> 요소를 클릭했습니다.')
    // }

    // if(target.localName === 'ul') {
    //   console.log('<ul> 요소를 클릭했습니다.')
    // }
  });
};

// 이벤트 대상(event target)이 일치하는 지 검사
// element.matches(selector)
(() => {
  const linkList = document.querySelector(".link-list");

  linkList.addEventListener("click", (e) => {
    if (!e.defaultPrevented) e.preventDefault();

    const target = e.target;

    if (target.matches('a[href="/community"]')) {
      console.log(target.getAttribute("href"));
    }
  });
})();

// 중첩된 요소 처리 1
// <a>, <button> 요소 내부에 <svg>를 포함하는 경우
// 1. CSS를 사용해 <a> 또는 <button> 내부의 <svg>, <span> 요소에
//    pointer-events: none 설정을 하여 마우스 포인트 이벤트에 영향을 받지 않도록 설정
// () => {
//   const linkList = document.querySelector(".link-list");

//   linkList.addEventListener("click", (e) => {
//     if (!e.defaultPrevented) e.preventDefault();

//     const target = e.target;

//     if (target.matches('a[href="/news"]')) {
//       console.log(target.getAttribute("href"));
//     } else {
//       console.log(target.localName);
//     }
//   });
// };

// 중첩된 요소 처리 1
// <a>, <button> 요소 내부에 <svg>를 포함하는 경우
// 2. element.closest() 메서드 활용
// () => {
//   const linkList = document.querySelector(".link-list");

//   linkList.addEventListener("click", (e) => {
//     if (!e.defaultPrevented) e.preventDefault();

//     const target = e.target.closest("a[href]");

//     if (target) {
//       console.log(target.getAttribute("href"));
//     } else {
//       console.log(target.localName);
//     }
//   });
// };

// 이벤트 리스너 추가 후, 한 번 트리거 되면, 이벤트 리스너 제거
() => {
  const onceButton = document.querySelector('[data-role="once-event"]');

  let clickedCount = 0;

  // onceButton.addEventListener('click', () => {
  //   clickedCount += 1
  //   console.log(clickedCount + '번 클릭했습니다.')
  // })

  // 한 번만 이벤트를 트리거 하려면?
  // 이벤트가 트리거 되면 추가된 이벤트 리스너를 제거한다.
  onceButton.addEventListener("click", handleOnceClick);

  function handleOnceClick(e) {
    clickedCount += 1;
    console.log(clickedCount + "번 클릭했습니다.");
    e.currentTarget.removeEventListener("click", handleOnceClick);
    console.log("추가된 이벤트 리스너 handleOnceClick이 제거되었습니다.");
  }
};
// 이벤트 리스너 옵션(Options) 객체 설정으로 once 이벤트 구현하기
(() => {
  const onceButton = document.querySelector('[data-role="once-event"]');

  let clickedCount = 0;

  onceButton.addEventListener(
    "click",
    () => {
      console.log(++clickedCount + "번 클릭했어요!");
    },
    { once: true }
  );
})();
