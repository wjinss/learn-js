// ------------------------------------------------
// 텍스트 및 HTML 콘텐츠 변경
// ------------------------------------------------

() => {
  // 텍스트 콘텐츠 변경
  const element = document.querySelector("h1");
  element.textContent = "자바스크립트";

  // HTML 콘텐츠 읽기
  console.log(element.innerHTML);

  // HTML 콘텐츠 변경
  // 기존 데이터 모두 덮어쓰기
  element.innerHTML = `
    <span>자</span>
    <span>바</span>
    <span>스</span>
    <span>크</span>
    <span>립</span>
    <span>트</span>
  `.trim();

  // 기존 HTML 콘텐츠에 추가

  // 뒤에 추가
  // element.innerHTML = element.innerHTML + '<em>!</em>'
  element.innerHTML += "<em>!</em>";

  // 앞에 추가
  element.innerHTML = " — " + element.innerHTML;

  // HTML 콘텐츠 읽기
  console.log(element.innerHTML);

  // 마운트 요소 내부에 목록 동적 추가
  document.querySelector(".mount").innerHTML = /* html */ `
    <ul class="italian-menu">
      <li>피자</li>
      <li>파스타</li>
      <li>리조또</li>
    </ul>
  `;
};
// 연습---------------
() => {
  // 텍스트 콘텐츠 변경
  const element = document.querySelector("h1");
  element.textContent = `자바스크립트`;

  // HTML 콘텐츠 읽기
  console.log(element);

  // HTML 콘텐츠 변경
  // innerHTML은 기존 데이터를 모두 덮어쓴다.
  element.innerHTML = `
    <span>자</span>
    <span>바</span>
    <span>스</span>
    <span>크</span>
    <span>립</span>
    <span>트</span>
    `.trim();

  // 기존 HTML에 콘텐츠 추가

  // 기존 HTML 뒤에 추가
  element.innerHTML = element.innerHTML + `<em>!</em>`;
  element.innerHTML += `<em>!</em>`;

  // 기존 HTML 앞에 추가
  element.innerHTML = `<em>!</em>` + element.innerHTML;

  // 마운트 요소 내부에 목록 동적 추가
  document.querySelector(".mount").innerHTML = /*html*/ `    
  <ul class="italian-menu">
  <li>피자</li>
  <li>파스타</li>
  <li>리조또</li>
</ul>`;
};
// 연습---------------
/* global gsap */

() => {
  // 텍스트 콘텐츠 변경
  const element = document.querySelector("h1");
  element.textContent = "자바스크립트";

  // HTML 콘텐츠 읽기
  // console.log(element.innerHTML)

  // HTML 콘텐츠 변경
  // 기존 데이터 모두 덮어쓰기
  // element.innerHTML = `
  //   <span>자</span>
  //   <span>바</span>
  //   <span>스</span>
  //   <span>크</span>
  //   <span>립</span>
  //   <span>트</span>
  // `.trim()
  // 읽어온 텍스트 콘텐츠를 배열로 변환
  // split(""); 문자열을 배열로 변환
  element.innerHTML = element.textContent.split("").reduce((acc, cur) => {
    return acc + `<span>${cur}</span>`;
  }, "");

  // 기존 HTML 콘텐츠에 추가

  // 뒤에 추가
  // element.innerHTML = element.innerHTML + '<em>!</em>'
  // element.innerHTML += '<em>!</em>'

  // 앞에 추가
  // element.innerHTML = ' — ' + element.innerHTML

  // HTML 콘텐츠 읽기
  // console.log(element.innerHTML)

  // GSAP 애니메이션
  gsap.from("h1 span", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1.4,
    ease: "back.inOut(7)",
  });

  // 마운트 요소 내부에 목록 동적 추가
  const mount = document.querySelector(".mount");

  mount.innerHTML = /* html */ `
    <ul class="italian-menu">
      <li>피자</li>
      <li>파스타</li>
      <li>리조또</li>
    </ul>
  `;

  console.log(mount.outerHTML);
};
// 연습---------------
() => {
  const element = document.querySelector("h1");
  element.textContent = "자바스크립트";
  // 읽어온 텍스트 콘텐츠를 배열로 변환
  // split(""); 문자열을 배열로 변환
  element.innerHTML = element.textContent
    .split("")
    .reduce((acc, cur) => acc + `<span>${cur}</span>`, "");
  //<span>자</span><span>바</span><span>스</span><span>크</span><span>립</span><span>트</span>
};
// 연습---------------
