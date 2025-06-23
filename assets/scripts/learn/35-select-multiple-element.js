(() => {
  // <nav>의 모든 <a> 요소를 찾아보자
  // NodeList 객체는 배열과 유사해보이지만, 배열 객체는 아니다.
  const navLinks = document.querySelectorAll("nav a");
  // console.log(navLinks.forEach)

  // 배열의 능력인 메서드를 모두 사용할 수 없다.
  // console.log(navLinks.findIndex)
  // console.log(navLinks.reduce)
  // console.log(navLinks.toReversed)
  // console.log(navLinks.filter)

  // 너 배열 타입이니?
  // Array.isArray(value) true or false
  console.log(Array.isArray(navLinks)); // NodeList (false)

  // const array = Array.from(likeArrayObject)
  // 유사 배열 -> 배열 변경
  const navLinksArray = Array.from(navLinks);
  console.log(Array.isArray(navLinksArray)); // Array (true)
  console.dir(navLinksArray);

  // 유사배열을 배열로 변경하면 배열의 모든 능력인 메서드를 사용할 수 있다!
  // console.log(navLinksArray.findIndex)
  // console.log(navLinksArray.reduce)
  // console.log(navLinksArray.toReversed)
  // console.log(navLinksArray.filter)
})();

// NodeList란?
// JavaScript 객체
// - Object
// - Array
// - Function
// - Map
// - Set
// ...

// Web Browser (JavaScript 실행 환경)
// - window 객체
// - document 객체
// - screen 객체
// - location 객체
// - history 객체
// - NodeList 객체
// - HTMLCollection 객체

// Node.js 런타임 (JavaScript 실행 환경)
// - Global

() => {
  const lifeTips = document.querySelector(".life-tips");

  const paragraphs = lifeTips.querySelectorAll("p");

  const firstParagraphsEl = paragraphs.item(0);
  console.log(firstParagraphsEl);

  paragraphs.forEach((item, idx, nodelist) => {
    console.log(item);
    console.log(idx);
    console.log(nodelist);
  });

  const PRIMARY_KEY = "color-primary";

  // Loop (반복, 순환)
  // - while
  let i = 0,
    l = paragraphs.length;
  while (i < l) {
    const paragraphElement = paragraphs.item(i);
    paragraphElement.classList.add(PRIMARY_KEY);
    ++i;
  }

  // - do...while

  // - for
  for (let i = 0, l = paragraphs.length; i < l; ++i) {
    const paragraphElement = paragraphs.item(i);
    // console.log(paragraphElement)
    if (paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.remove(PRIMARY_KEY);
    }
  }

  // - for...of
  for (const paragraphElement of paragraphs) {
    // console.log(paragraphElement)
    if (!paragraphElement.classList.contains(PRIMARY_KEY)) {
      paragraphElement.classList.add(PRIMARY_KEY);
    }
  }

  // - NodeList.forEach((value, key, parent) => {...})
  paragraphs.forEach((p) => {
    if (p.classList.contains(PRIMARY_KEY)) {
      p.classList.remove(PRIMARY_KEY);
    }
  });
};
(() => {
  const paras = document.querySelectorAll(".life-tips p");
  console.log(paras);

  console.log(paras[0] === paras.item(0));
  console.log(paras[1] === paras.item(1));
  console.log(paras[2] === paras.item(2));
})();
