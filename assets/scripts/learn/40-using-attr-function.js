{
  // attr() 유틸리티 함수 활용
  const h1 = document.querySelector("h1");

  // 속성 추가(쓰기)
  // -id= "heading1"
  // -class = "headline headline__level--1"
  // -title = "자바스크립트"
  // -data-role="headline"
  // - data-level="1"
  const attr = (ele, attr, value) => ele.setAttribute(attr, value);
  attr(h1, "id", "heading1");
  attr(h1, "class", "headline headline__level--1");
  attr(h1, "title", "자바스크립트");
  attr(h1, "data-role", "headline");
  attr(h1, "data-level", "1");

  // 속성 읽기
  // - id
  // - class
  // - title
  // - data-role
  // - data-level
  const getAttr = (ele, attr) => ele.getAttribute(attr);
  console.log(getAttr(h1, "id"));
  console.log(getAttr(h1, "class"));
  console.log(getAttr(h1, "title"));
  console.log(getAttr(h1, "data-role"));
  console.log(getAttr(h1, "data-level"));
}
