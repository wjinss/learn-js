// --------------------------------------------
// DOM에 요소 추가
// --------------------------------------------

// 요소 동적 생성(create element)

() => {
  // 동적 생성된 요소들을 마운트할 요소
  const mountElement = document.querySelector(".mount");

  // <section>
  const sectionElement = document.createElement("section");
  console.log(sectionElement);

  // 생성된 요소에 클래스 이름 설정(추가)
  sectionElement.classList.add("sectioning-content");

  // 커스텀 속성 설정(추가)
  sectionElement.dataset.category = "sports";

  // 텍스트 콘텐츠 추가
  sectionElement.textContent = `스포츠는 역시 멋사!`;

  // HTML 콘텐츠 추가(덮어쓰기)
  sectionElement.innerHTML = `<h2>${sectionElement.textContent}</h2>`;

  // <table> 요소 생성
  const tableElement = document.createElement("table");
  // 생성된 요소에 클래스 이름 설정(추가)
  tableElement.classList.add("teble-content");
  // 커스텀 속성 설정(추가)
  tableElement.dataset.type = "text";
  // 표 제목 텍스트 콘텐츠 추가
  tableElement.textContent = `자고싶다`;
  // 표 제목 HTML 콘텐츠 추가(덮어쓰기)
  tableElement.innerHTML = `<caption>${tableElement.textContent}</caption>`;

  console.log(tableElement);

  // 요소를 부모 요소의 마지막 자식으로 추가(append child)
  mountElement.appendChild(sectionElement);
  mountElement.appendChild(tableElement);
};

// 라면 레시피 완성하기
() => {
  const ol = document.querySelector(".ramen-cooking-recipe");

  // DOM에 <li> 요소를 생성한 다음 `맛있게 먹습니다` 텍스트 추가
  const listItem = document.createElement("li");
  listItem.textContent = `맛있게 먹습니다`;

  // 생성된 <li> 요소를 ol 참조 요소 내부 마지막 자식으로 삽입
  ol.appendChild(listItem);
};

// 요소 위치 변경 (appendChild 활용)
() => {
  const button = document.querySelector("button");
  const section = button.nextElementSibling;
  const [likeFruitsList, unlikeFruitsList] = section.children; // HTMLCollection

  button.addEventListener("click", () => {
    // 좋아하는 과일 목록의 첫번째 항목을
    const firstFruit = likeFruitsList.firstElementChild;
    if (!firstFruit) return;
    // 좋아하지 않는 과일 목록의 마지막 항목으로 위치 이동
    unlikeFruitsList.appendChild(firstFruit);
  });
};

// 특정 요소 앞에 생성된 요소 삽입
(() => {
  const ramenCookingRecipe = document.querySelector(".ramen-cooking-recipe");
  // const targetElement = ramenCookingRecipe.children[2]
  const [, , targetElement] = ramenCookingRecipe.children;
  console.log(targetElement);

  // 동적으로 생성한 삽입 요소
  // <li>면을 넣고 3~4분간 끓입니다.</li>
  const insertItem = document.createElement("li");
  insertItem.textContent = `면을 넣고 3~4분간 끓입니다.`;

  // 동적 생성된 요소를 목표 요소 앞에 삽입
  targetElement.parentElement.insertBefore(insertItem, targetElement);
})();

// 문서에 존재하는 요소를 목표 요소 앞에 추가
(() => {
  const ramenCookingRecipe = document.querySelector(".ramen-cooking-recipe");

  // 삽입할 요소 찾기
  const insertRecipe = ramenCookingRecipe.firstElementChild;
  console.log(insertRecipe);

  // 대상(목표) 요소 찾기
  const targetRecipe = ramenCookingRecipe.lastElementChild;
  console.log(targetRecipe);

  // 삽입할 요소를 대상 앞에 삽입
  ramenCookingRecipe.insertBefore(insertRecipe, targetRecipe);
})();
