/* global gsap, GSDevTools */
() => {
  gsap.to(".banner__link", {
    scale: 1.1,
    duration: 1,
    ease: "power2.in",
    repeat: -1,
    yoyo: true,
  });

  gsap.to("#earth, #controller", {
    y: 10,
    opacity: 0.7,
    scale: 0.95,
    stagger: {
      each: 0.2,
      repeat: -1,
      yoyo: true,
    },
    ease: "back.out(1)",
  });
  gsap.to("#pencil", {
    rotate: 10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "back.in(7)",
  });
  gsap.to("#ball, #paint", {
    rotate: 360,
    transformOrigin: "-100% -100%",
    duration: 9,
    stagger: {
      each: 0.5,
      repeat: -1,
    },
  });

  const tl = gsap.timeline({
    default: { opacity: 0, duration: 1, ease: "back.out(2)" },
  });
  tl.from(".banner__title", { x: -200, scale: 0 }).from(
    ".banner__description",
    {
      y: 400,
    }
  );
};

// 배너 애니메이션을 GSAP 애니메이션 라이브러리로 구현해보세요.Add commentMore actions
(() => {
  // 애니메이션
  const tl = gsap.timeline({
    id: "banner animation",
    defaults: { opacity: 0, ease: "back.out(1.4)" },
  });

  tl.from(".banner", { ease: "linear", autoAlpha: 0 })
    .from(".banner__title :first-child", { x: 80, duration: 1 })
    .from(".banner__title :last-child", { x: -80, duration: 1 }, "<")
    .from(".banner__description", { y: 30 }, "-=0.5")
    .from(".banner__link", { y: 40 }, "-=0.4")
    .from(
      "#items > g",
      { scale: 0, transformOrigin: "center", stagger: 0.1 },
      "-=0.2"
    );

  // 플러그인Add commentMore actions
  gsap.registerPlugin(GSDevTools);
  GSDevTools.create({ animation: tl, loop: true, id: "main" });

  // 이벤트 핸들링
  document.querySelector(".banner").addEventListener("click", () => {
    alert("devtools kill!!!!");
    // 개발 도구 GSDevTools 인스턴스 제거
    GSDevTools.getById("main").kill();
  });
})();

// CSS 리니어 그레디언트에 트랜지션을 설정하는 방법
// custom properties + linear-gradient() + transition
(() => {
  [
    { name: "--banner-link-begin", value: "#ff905c" },
    { name: "--banner-link-end", value: "#ed027c" },
  ].forEach((propertyDefinition) => {
    CSS.registerProperty({
      name: propertyDefinition.name,
      inherits: false,
      syntax: "<color>",
      initialValue: propertyDefinition.value,
    });
  });
})();
