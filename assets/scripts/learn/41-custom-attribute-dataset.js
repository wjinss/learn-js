/* global byId */

() => {
  const para = byId("notice");

  //  data-* 사용자(개발자) 정의 속성 읽기
  console.log(para.dataset.category);
  console.log(para.dataset.userId);
  console.log(para.dataset.status);
  console.log(para.dataset.role);

  //  data-* 사용자(개발자) 정의 속성 쓰기
  para.dataset.category = "frontend-web-development";
  para.dataset.userId = "user-asdasd";
  para.dataset.status = "inactive";
  para.dataset.role = "guest";
};

(() => {
  // 속성 제거
  const pElement = document.querySelector("#notice");
  // console.log(pElement);
  // pElement.removeAttribute("id");
  // pElement.removeAttribute("class");
  // pElement.removeAttribute("data-role");
  // pElement.removeAttribute("data-category");
  // pElement.removeAttribute("data-user-id");
  // pElement.removeAttribute("data-status");
  // console.log(pElement);

  console.dir(Array.from(pElement.attributes)); //> 어트리뷰트를 배열로 만들기

  // const willRemoveAttributeNames = [
  //   "id",
  //   "class",
  //   "data-role",
  //   "data-category",
  //   "data-user-id",
  //   "data-status",
  // ];

  // 반복문 활용
  // for (const attributeName of willRemoveAttributeNames) {
  //   pElement.removeAttribute(attributeName);
  // }

  // willRemoveAttributeNames.forEach((attrName) => {
  //   pElement.removeAttribute(attrName);
  // });

  Array.from(pElement.attributes).forEach((attr) => {
    pElement.removeAttribute(attr.name);
  });
})();
