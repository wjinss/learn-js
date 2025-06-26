{
  // - 로딩되면 이전 버튼은 처음에 감춰져야 합니다.
  // - 다음 탐색 버튼을 누르면 콘텐츠가 전환되어 다음 콘텐츠가 표시됩니다.
  // - 표시된 콘텐츠가 처음이 아닌 경우, 이전 버튼이 표시되어야 합니다.
  // - 마지막 콘텐츠가 표시되면 다음 버튼은 감춰져야 합니다.
  // - 이전 탐색 버튼을 누르면 콘텐츠가 전환되어 이전 콘텐츠가 표시됩니다.
  // - 표시된 콘텐츠가 마지막이 아닌 경우, 다음 버튼이 표시되어야 합니다.
  // - 처음 콘텐츠가 표시되면 이전 버튼은 감춰져야 합니다.
  // - 인디케이터를 클릭하면 해당 순서의 콘텐츠가 표시되어야 합니다.
  // - 표시된 콘텐츠에 따라 이전/다음 버튼이 감춰지거나 표시되어야 합니다.
  // - 이전 활성 인디케이터와 클릭한 인디케이터는 활성 상태가 서로 전환되어야 합니다.
  // const carousel = document.querySelector(".carousel");
  // const btns = carousel.querySelectorAll(".carousel__button");
  // const prevBtn = btns[0];
  // const nextBtn = btns[1];
  // const carouselIndicators = carousel.querySelectorAll(".carousel__indicators");
  // const carouselContents = carousel.querySelector(".carousel__contents");
  // const CAROUSEL_LENGTH =
  //   carousel.querySelectorAll(".carousel__content").length - 1;
  // let current = 0;
  // nextBtn.addEventListener("click", () => {
  //   let width = "800px";
  //   if (current !== CAROUSEL_LENGTH) {
  //     carouselContents.setProperty(
  //       "transform",
  //       `translateX(${current} * -${width})`
  //     );
  //     current++;
  //   } else {
  //     carouselContents.setProperty("transform", `translateX(0)`);
  //   }
  // });
  // prevBtn.addEventListener("click", () => {});
}
{
  // 1. 문서에서 제어할 대상 요소 선택(찾기)
  () => {
    // 케러셀 컴포넌트 찾기
    const carousal = document.querySelector(".carousel");

    // 케러셀 콘텐츠 래퍼
    const contentWrapper = carousal.querySelector(".carousel__contents");

    // 이전 버튼 찾기
    const prevButton = carousal.querySelector('[aria-label^="이전"]');

    // 이전 버튼 찾기
    const nextButton = carousal.querySelector('[aria-label^="다음"]');
  };

  // 2. 상태 클래스 이름 상수로 지정
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    // 활성 상태를 나타내는 클래스 이름 지정 (유지 보수 고려)
    const SELECTED_CLASSNAME = "is-selected";
  };

  // 3-1. 현재/다음 코스 탐색 | 다음 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    // 다음 탐색 버튼 클리 이벤트 리스너 추가
    // 구현할 기능은 다음 콘텐츠 탐색
    // -현재/다음 콘텐츠 탐색
    nextButton.addEventListener("click", () => {
      //현재 선택된 콘텐츠 찾기
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );

      //다음에 선택될 콘텐츠 탐색
      const nextContent = selectedContent.nextElementSibling;
    });
  };

  // 3-2. 다음 콘텐츠로 이동 | 다음 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      // 다음 콘텐츠로 이동
      // 다음 콘텐츠의 브루아저에 의해 계산된 너비 값을 읽기
      const distance = getComputedStyle(nextContent).getPropertyValue("left");

      // 콘텐츠들을 감싼 래퍼에 transform 인라인 스타일 설정(-800px, -1600px)
      // contentWrapper.style.setProperty("transform", `translateX(-800px`);
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);
    });
  };
  // 3-3. 선택된 상태 변경 | 다음 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      // 선택된 상태 변경
      // 이전에 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      // 현재 선택된 콘텐츠에서 활성 상태 클래스 이름 추가
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
  };
  // 3-4. 다음 탐색 버튼 감춤 | 다음 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      // 다음 탐색 버튼 감춤
      // 현재 1 / 다음 2 / 다다음 3
      // 현재 2 / 다음 3 / 다다음 null
      // 현재 3 / 다음 null
      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
  };
  // 4-1. 현재/이전 콘텐츠 탐색 | 이전 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      // 현재/다음 콘텐츠 탐색
      // 현재 선택된 콘텐츠 찾기
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      // 선택된 콘텐츠의 이전 위치에 있는 콘텐츠 탐색
      const prevContent = selectedContent.previousElementSibling;
    });
  };
  // 4-2. 이전 콘텐츠 이동 | 이전 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      // 이전 콘텐츠로 이동
      // prevContent로부터 이동할 거리를 계산해서 가져와야 함
      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      // contentWrapper에 transform 스타일 지정
      // contentWrapper.style.setProperty("transform", "translateX(-800px)");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);
    });
  };
  // 4-3. 선택된 상태 변경 | 이전 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      // 선택된 상태 변경
      // 이전 선택된 콘텐츠에서 활성 상태 클래스 이름 제거
      selectedContent.classList.remove(SELECTED_CLASSNAME);
      // 현재 선택된 콘텐츠에서 활성 상태 클래스 이름 추가
      prevContent.classList.add(SELECTED_CLASSNAME);
    });
  };
  // 4-4. 이전 탐색 버튼 | 이전 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      // 이전 탐색 버튼
      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);
    });
  };
  // 5-1. 이전/다음 탐색 버튼 표시 | 이전 탐색(버튼) 기능(함수 구현)
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);
      // 다음 탐색 버튼을 사용자가 눌렀을때
      // 만약 이전 탐색 버튼의 hidden 속성 값이 true라면
      // 이전 탐색 버튼의 hidden 속성 값을 false로 바꿔라
      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);
      // 이전 탐색 버튼을 사용자가 눌렀을때
      // 만약 다음 탐색 버튼의 hidden 속성 값이 true라면
      // 다음 탐색 버튼의 hidden 속성 값을 false로 바꿔라
      if (nextButton.hidden) nextButton.hidden = false;
    });
  };
  // 5-2. 로딩 시, 이전 탐색 버튼 감춤
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    // 로딩 시, 사용자가 보는 화면에서 이전 탐색 버튼 감춤
    prevButton.hidden = true;

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });
  };
  // 5-3 로딩 시, 이전/다음 탐색 버튼 표시 설정
  // - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
  // - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
  // - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    // 문서에서 콘텐츠를 순회(루프)해서
    // 콘텐츠 중에 하나가 활성 상태 클래스 이름을 소유하고 있는 지 확인
    // 확인된 경우 활성(선택된) 상태의 인덱스를 변수에 기억해보자

    // 활성 상태 인덱스를 기억할 변수를 정의
    let selectedIndex = -1;

    // for 반복문  (모든 콘텐츠를 순환 활성 상태 확인)
    for (let i = 0, l = contents.length; i < l; ++i) {
      // 순환 중인 콘텐츠에 활성 상태 클래스 이름이 있는 지 확인
      if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
        // console.log(`${i + 1}번째 콘텐츠가 활성 클래스 이름을 가지고 있어요`);
        selectedIndex = i;
        // 활성 상태 클래스 이름을 가진 콘텐츠를 찾았으니 함수를 종료한다.
        break;
      }
    }

    // 조건 처리
    // 활성 클래스를 가진 요소의 인덱스가 -1이면
    if (selectedIndex === -1) {
      console.warn(
        "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
      );
    } // 활성 클래스를 가진 요소의 인덱스가 0이면
    else if (selectedIndex === 0) {
      // 이전 탐색 버튼을 화면에서 감춰라!
      prevButton.hidden = true;
    } // 활성 클래스를 가진 요소의 인덱스가 모든 콘텐츠 갯수보다 1 작은 값이라면
    // 활성 클래스를 가진 요소가 맨 마지막 요소라면?
    else if (selectedIndex === contents.length - 1) {
      nextButton.hidden = true;
    }

    // - 사용자가 활성 상태 클래스 이름을 설정하지 않을 경우 경고
    // - 첫 콘텐츠인 경우, 이전 탐색 버튼 감춤
    // - 마지막 콘텐츠인 경우, 다음 탐색 버튼 감춤

    // prevButton.hidden = true;

    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });
  };
  // 6 로딩 시, 이전/다음 탐색 버튼 표시 설정
  () => {
    const carousal = document.querySelector(".carousel");
    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");
    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const SELECTED_CLASSNAME = "is-selected";

    // 버튼이 숨겨진 상태 설정 기능(함수)
    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });
  };
  // 7-1, 인디케이터 탐색 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    // 인디케이터 래터, 인디케이터(버튼) 요소 집합 찾기
    const indicatorrWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorrWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });
  };
  // 7-2, 인디케이터 집합을 순환해 이벤트 리스너 추가 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    // 인디케이터 집합을 순환 처리
    for (const indicator of indicators) {
      // 각 인디케이터에 이벤트 리스너 추가
      indicator.addEventListener("click", () => {
        console.log(indicator);
      });
    }
  };
  // 7-3, 인디케이터 집합을 순환해 이벤트 리스너 추가 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        // indicatoe에서는 selectedIndex의 변수값을 안줘도 괜찮은 이유
        // 전에 살펴본 활성 상태 클래스 이름을 가지는 지 여부를 확인 하는 것은 없을 수도 있지만
        // 인디케이터를 클릭했을 때 문서의 인디케이터들 중 클락한 인디케이터와 같은 요소인 지 확인하는 것은 존재하지 않을 가능성이 없어서입니다.
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          // 순환 중인 상태의 인디케이터와 클릭한 인디케이터가 동일한가?
          if (indicators.item(i) === indicator) {
            // 동일하다면? 그 인덱스가 선택된 인덱스이다.
            selectedIndex = i;
            break;
          }
        }

        // 사용자가 클릭한(선택한) 인디케이터의 선택된 인덱스 값 찾기
        console.log(indicator, selectedIndex);
      });
    }
  };
  // 7-4, 탐색한 콘텐츠 찾기 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }

        // 탐색한(사용자가 선택한 인디케이터의 인덱스) 콘텐츠 찾기
        const activeContent = contents.item(selectedIndex);
        console.log(activeContent);
      });
    }
  };
  // 7-5, 콘텐츠 전환 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );
      });
    }
  };
  // 7-6, 선택된 콘텐츠 상태 변경 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );

        // 선택된 콘텐츠 상태 변경
        // 이전에 선택된 콘텐츠 찾기
        const selectedContent = contentWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );

        // 이전에 선택된 콘텐츠에 활성 클래스 이름 제거
        selectedContent.classList.remove(SELECTED_CLASSNAME);
        // 현재 선택된 콘텐츠에 활성 클래스 이름 추가
        activeContent.classList.add(SELECTED_CLASSNAME);
      });
    }
  };
  // 7-7, 선택된 인디케이터 상태 변경 | 인디케이터
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );

        const selectedContent = contentWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );
        selectedContent.classList.remove(SELECTED_CLASSNAME);
        activeContent.classList.add(SELECTED_CLASSNAME);

        // 이전 선택된 인디케이터 찾기
        const selectedIndicator = indicatorWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );

        // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
        selectedIndicator.classList.remove(SELECTED_CLASSNAME);
        // 현재 선택된 인디케이터에서 활성 클래스 이름 추가
        indicator.classList.add(SELECTED_CLASSNAME);
      });
    }
  };

  // 8-1, 다음 탐색 동기화 | 상태 동기화
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;

      // 사용자가 다음 탐색 버튼을 누르면
      // 인디케이터 중에 현재 활성 상태인 것을 찾기
      const selectedIndicator = indicatorWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextIndicator = selectedIndicator.nextElementSibling;

      // 이전에 선택된 인디케이터 활성 클래스 이름 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      // 다음에 선택될 인디케이터 활성 클래스 이름 추가
      nextIndicator.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );

        const selectedContent = contentWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );
        selectedContent.classList.remove(SELECTED_CLASSNAME);
        activeContent.classList.add(SELECTED_CLASSNAME);

        const selectedIndicator = indicatorWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );

        selectedIndicator.classList.remove(SELECTED_CLASSNAME);
        indicator.classList.add(SELECTED_CLASSNAME);
      });
    }
  };

  // 8-2 이전 탐색 동기화 | 상태 동기화
  () => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;

      const selectedIndicator = indicatorWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextIndicator = selectedIndicator.nextElementSibling;

      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      nextIndicator.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;

      const selectedIndicator = indicatorWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevIndicator = selectedIndicator.previousElementSibling;

      // 이전 선택된 인디케이터에서 활성 클래스 이름 제거
      selectedIndicator.classList.remove(SELECTED_CLASSNAME);

      // 현재 선택될 인디케이터에 활성 클래스 이름 추가
      prevIndicator.classList.add(SELECTED_CLASSNAME);
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );

        const selectedContent = contentWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );
        selectedContent.classList.remove(SELECTED_CLASSNAME);
        activeContent.classList.add(SELECTED_CLASSNAME);

        const selectedIndicator = indicatorWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );

        selectedIndicator.classList.remove(SELECTED_CLASSNAME);
        indicator.classList.add(SELECTED_CLASSNAME);
      });
    }
  };

  // 8-3 이전 탐색 동기화 | 상태 동기화
  (() => {
    const carousal = document.querySelector(".carousel");

    const contentWrapper = carousal.querySelector(".carousel__contents");
    const contents = contentWrapper.querySelectorAll(".carousel__content");

    const prevButton = carousal.querySelector('[aria-label^="이전"]');
    const nextButton = carousal.querySelector('[aria-label^="다음"]');

    const indicatorWrapper = carousal.querySelector(".carousel__indicators");
    const indicators = indicatorWrapper.querySelectorAll(
      ".carousel__indicator"
    );

    const SELECTED_CLASSNAME = "is-selected";

    const setBtnHiddenStatus = () => {
      let selectedIndex = -1;

      for (let i = 0, l = contents.length; i < l; ++i) {
        if (contents.item(i).classList.contains(SELECTED_CLASSNAME)) {
          selectedIndex = i;
          break;
        }
      }

      if (selectedIndex === -1) {
        console.warn(
          "어떤 캐러셀 콘텐츠에도 활성 상태를 나타내는 클래스 이름이 추가되지 않았습니다"
        );
      } else if (selectedIndex === 0) {
        prevButton.hidden = true;
      } else if (selectedIndex === contents.length - 1) {
        nextButton.hidden = true;
      }
    };
    setBtnHiddenStatus();
    nextButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextContent = selectedContent.nextElementSibling;

      if (!nextContent.nextElementSibling) nextButton.hidden = true;

      const distance = getComputedStyle(nextContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      nextContent.classList.add(SELECTED_CLASSNAME);

      if (prevButton.hidden) prevButton.hidden = false;

      const selectedIndicator = indicatorWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const nextIndicator = selectedIndicator.nextElementSibling;

      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      nextIndicator.classList.add(SELECTED_CLASSNAME);
    });
    prevButton.addEventListener("click", () => {
      const selectedContent = contentWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevContent = selectedContent.previousElementSibling;

      if (!prevContent.previousElementSibling) prevButton.hidden = true;

      const distance = getComputedStyle(prevContent).getPropertyValue("left");
      contentWrapper.style.setProperty("transform", `translateX(-${distance})`);

      selectedContent.classList.remove(SELECTED_CLASSNAME);
      prevContent.classList.add(SELECTED_CLASSNAME);

      if (nextButton.hidden) nextButton.hidden = false;

      const selectedIndicator = indicatorWrapper.querySelector(
        `.${SELECTED_CLASSNAME}`
      );
      const prevIndicator = selectedIndicator.previousElementSibling;

      selectedIndicator.classList.remove(SELECTED_CLASSNAME);
      prevIndicator.classList.add(SELECTED_CLASSNAME);
    });

    for (const indicator of indicators) {
      indicator.addEventListener("click", () => {
        let selectedIndex;

        for (let i = 0, l = indicators.length; i < l; i += 1) {
          if (indicators.item(i) === indicator) {
            selectedIndex = i;
            break;
          }
        }
        const activeContent = contents.item(selectedIndex);
        const distance =
          getComputedStyle(activeContent).getPropertyValue("left");
        contentWrapper.style.setProperty(
          "transform",
          `translateX(-${distance})`
        );

        const selectedContent = contentWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );
        selectedContent.classList.remove(SELECTED_CLASSNAME);
        activeContent.classList.add(SELECTED_CLASSNAME);

        const selectedIndicator = indicatorWrapper.querySelector(
          `.${SELECTED_CLASSNAME}`
        );

        selectedIndicator.classList.remove(SELECTED_CLASSNAME);
        indicator.classList.add(SELECTED_CLASSNAME);

        // selectedIndex 값이 처음(0)일 때
        // -> prevButton 숨긴다, nextButton 보인다
        if (selectedIndex === 0) {
          prevButton.hidden = true;
          nextButton.hidden = false;
        }
        // selectedIndex 값이 마지막 인덱스(indicators.length -1)일 때
        // -> prevButton 보인다, nextButton 숨긴다
        else if (selectedIndex === indicators.length - 1) {
          prevButton.hidden = false;
          nextButton.hidden = true;
        }
        // 둘 다 아닐 때
        // -> prevButton, nextButton 둘 다 보인다
        else {
          prevButton.hidden = false;
          nextButton.hidden = false;
        }
      });
    }
  })();
}
