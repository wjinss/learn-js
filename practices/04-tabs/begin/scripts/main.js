{
  // --------------------------------------------------------------------------
  // 1. 제어 대상, 선택된 인덱스 찾기

  // 제어 대상 찾기
  const tabsContainer = document.querySelector(".tabs__container");
  const tabs = tabsContainer.querySelectorAll(".tab");
  const tabContents = tabsContainer.querySelectorAll(".tab__content");

  // 활성 상태 클래스 이름
  const SELECTED_CLASSNAME = "is-selected";

  // 선택된 인덱스 찾기
  // for문 + break

  // 선택되지 않음을 나타내는 값 -1 초깃값 구성
  let selectedIndex = -1;

  for (let i = 0, l = tabs.length; i < l; i += 1) {
    const tab = tabs.item(i);
    if (tab.classList.contains(SELECTED_CLASSNAME)) {
      selectedIndex = i;
      break;
    }
  }

  // --------------------------------------------------------------------------
  // 2. 모든 탭에 이벤트 리스너 추가

  // for...of 문
  () => {
    for (const tab of tabs) {
      tab.addEventListener("click", () => {
        console.log(tab);
      });
    }
  };

  // forEach() 활용
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        console.log(tab);
      });
    });
  };

  // --------------------------------------------------------------------------
  // 3. 이전 선택된 대상(탭, 탭 콘텐츠) 비활성화
  () => {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // 선택된 탭, 탭 콘텐츠가 존재할 경우에만 조건 블록 실행
        if (selectedIndex > -1) {
          // 이전 활성 상태의 탭 요소에서 활성 상태 클래스 이름 제거
          const selectedTab = tabs.item(selectedIndex);
          selectedTab.classList.remove(SELECTED_CLASSNAME);
          // 이전 활성 상태의 탭 콘텐츠 요소에서 활성 상태 클래스 이름 제거
          const selectedTabContent = tabContents.item(selectedIndex);
          selectedTabContent.classList.remove(SELECTED_CLASSNAME);
        }
      });
    });
  };

  // --------------------------------------------------------------------------
  // 4. 현재 선택된 대상(탭, 탭 콘텐츠) 활성화
  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => {
      if (selectedIndex == idx) return;
      const selectedTab = tabs.item(selectedIndex);
      selectedTab.classList.remove(SELECTED_CLASSNAME);
      const selectedTabContent = tabContents.item(selectedIndex);
      selectedTabContent.classList.remove(SELECTED_CLASSNAME);

      // 현재 활성 상태의 인덱스
      // let activeIndex;

      // // for 문하고 break 조합으로 선택된 인덱스 찾기
      // for (let i = 0, l = tabs.length; i < l; ++i) {
      //   const compareTab = tabs.item(i);
      //   if (compareTab === tab) {
      //     activeIndex = i;
      //     break;
      //   }
      // }

      // 현재 활성 상태 인덱스에 해당되는 탭 요소에서 활성 상태 클래스 이름 추가
      const activeTab = tabs.item(idx);
      activeTab.classList.add(SELECTED_CLASSNAME);
      // 현재 활성 상태 인덱스에 해당되는 탭 콘텐츠 요소에서 활성 상태 클래스 이름 추가
      const activeTabContent = tabContents.item(idx);
      activeTabContent.classList.add(SELECTED_CLASSNAME);

      // 선택된 인덱스 값 업데이트(변경)
      selectedIndex = idx;
    });
  });

  // tabs.forEach((tab, idx) => {
  //   tab.addEventListener("click", (e) => {
  //     for (let i = 0; i < tabs.length; i++) {
  //       tabs[i].classList.remove(SELECTED_CLASSNAME);
  //       tabContents[i].classList.remove(SELECTED_CLASSNAME);
  //     }
  //     let t = e.currentTarget;
  //     t.classList.add(SELECTED_CLASSNAME);

  //     tabContents[idx].classList.add(SELECTED_CLASSNAME);
  //   });
  // });

  // tabs를 forEach로 순회하면서 각 tab에 클릭 이벤트를 걸어주고,
  // tab을 클릭하면, 이전에 선택된 탭이 있는지를 확인하기 위해 if (selectedIndex > -1) 조건식을 사용한다.
  // 처음에는 클릭을 하지 않았기 때문에 조건이 false지만,
  // 한 번 클릭하면 selectedIndex가 0 이상으로 바뀌기 때문에 이후부터는 조건이 참이 되어
  // tabs와 tabContents의 이전 인덱스에 해당하는 요소에서 클래스를 제거한다.
  // 그리고 for문을 통해 tabs를 순회하면서
  // 현재 클릭한 tab과 같은 요소를 찾으면 그 인덱스를 activeIndex에 저장하고 반복문을 종료한다.
  // 이후 tabs와 tabContents의 activeIndex 위치에 해당하는 요소에 클래스를 추가하고,
  // selectedIndex를 activeIndex로 갱신하여 다음 클릭을 준비한다.

  // const tabsContainer = document.querySelector(".tabs__container");
  // const tabs = tabsContainer.querySelectorAll(".tab");
  // const tabContents = tabsContainer.querySelectorAll(".tab__content");

  // // 활성 상태 클래스 이름
  // const SELECTED_CLASSNAME = "is-selected";
  // let selectedIndex = -1;
  // tabs.forEach((tab, idx) => {
  //   tab.addEventListener("click", () => {
  //     if (selectedIndex == idx) return;
  //     const selectedTab = tabs.item(selectedIndex);
  //     selectedTab.classList.remove(SELECTED_CLASSNAME);
  //     const selectedTabContent = tabContents.item(selectedIndex);
  //     selectedTabContent.classList.remove(SELECTED_CLASSNAME);

  //     const activeTab = tabs.item(idx);
  //     activeTab.classList.add(SELECTED_CLASSNAME);
  //     const activeTabContent = tabContents.item(idx);
  //     activeTabContent.classList.add(SELECTED_CLASSNAME);

  //     selectedIndex = idx;
  //   });
  // });
}
