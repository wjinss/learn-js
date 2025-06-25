{
  // ------------------------------------
  // DOM 탐색(Traversing)
  // ------------------------------------

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
