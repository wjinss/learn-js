// ------------------------------------
// 아래 방향으로 DOM 탐색(Traversing)
// ------------------------------------
{
  const starWars = document.getElementById("star-wars");

  // querySelector()
  const luke = starWars.querySelector("span");
  console.log(luke);

  // querySelectorAll
  const characters = starWars.querySelectorAll(".character"); //NodeList 반환
  console.log("자식들", characters);

  // children (HTMLCollection)
  const children = starWars.children;
  console.log("자식들", children);

  // 배열화
  console.log(Array.from(characters), Array.isArray(Array.from(characters)));
  console.log(Array.from(children), Array.isArray(Array.from(children)));

  // firstChild
  // console.log("첫 번째 자식 (타입: ??)", starWars.firstChild.nodeType); // 노드타입 1 = 요소, 2 = 속성, 3 = 텍스트

  // firstElementChild
  console.log("첫 번째 요소 노드 자식", starWars.firstElementChild);

  // lastChild

  // lastElementChild
  console.log("마지막 요소 노드 자식", starWars.lastElementChild);
}
// --------------------------------------------------------------------------Add commentMore actions
//  위 방향으로 DOM 탐색(Traversing)
// --------------------------------------------------------------------------
() => {
  const das = document.querySelector("#star-wars em > span");

  // parentNode
  // console.log(das.parentNode)

  // parentElement
  console.log(das.parentElement); // <em>

  // 다스의 부모의 부모
  console.log(das.parentElement.parentElement); // .character

  // 다스의 부모의 부모의 부모
  console.log(das.parentElement.parentElement.parentElement); // #star-wars

  // 선택자와 일치하는 가장 가까운 부모 찾기
  console.log(das.closest("article")); // <article>
  // 선택자와 일치하는 가장 가까운 부모 찾기 (단, 나도 포함)
  console.log(das.closest("span.me")); // <span class="me">다스</span>
};
//
// -----------------------
// 옆방향으로 DOM 탐색(Traversing)
// -----------------------
() => {
  const faqList = document.querySelector(".faq-list");
  const firstElementChild = faqList.firstElementChild;
  const lastElementChild = faqList.lastElementChild;

  // previousSibling (All Node)
  console.log(firstElementChild.previousSibling); //#text (text node)
  // previousElementSibling (Element Node)
  console.log(firstElementChild.previousElementSibling); // null
  console.log(lastElementChild.previousElementSibling); // <li>
  // 현재 요소의 이전 형제의 이전 형제(앞의 앞)
  console.log(
    lastElementChild.previousElementSibling.previousElementSibling.dataset.index
  );

  // nextSibling (All Node)
  console.log(firstElementChild.nextSibling); // #text (text node)
  // nextElementSibling (Element Node)
  console.log(firstElementChild.nextElementSibling);

  // parentElement + children + index 조합
  const firstLink = faqList.querySelector('a[href^="/faq/"]');

  const parent = firstLink.closest("ul.faq-list");
  console.log(parent.children.item(3).firstElementChild);
  console.log(parent.children.item(3).lastElementChild);
};
