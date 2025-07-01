{
  // Web Animations API

  function playground() {
    const boxElements = document.querySelectorAll(".box");

    const keyframes = [{ translate: "0 0" }, { translate: "80vw 0" }];

    const options = {
      duration: 1000,
      fill: "forwards",
    };

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options);
      animation.pause();
      // animation.play()
    });
  }

  /*global gsap*/
  // GSAP API
  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)
  function playgroundGSAP() {
    // Tween Animation
    // to(target, vars)
    // gsap.to('.box', { x: '80vw' })
    // gsap.to([".box", ".term"], { x: 400 });
    // from(target, vars)
    // gsap.from(".box", { y: -200 });
    // fromTo(target, vars1, vars2)
    // gsap.fromTo(".box", { x: 400, y: -400 }, { x: 10, y: 50 });
    // set(target, vars) // 애니메이션 없이 속성값만큼 설정
    // gsap.set(".box", { x: 400, y: -400 });
    // gsap.from(".box", { y: -200, rotation: 720, scale: 0.3 });
    // gsap.to(".box", {
    //   xPercent: 250,
    //   yPercent: 200,
    //   rotation: 720,
    //   scaleX: 0.6,
    //   scaleY: 1.2,
    //   skewX: 5,
    //   skewY: 10,
    //   transformOrigin: "left 50%",
    //   duration: 2,
    //   opacity: 0.2,
    //   repeat: -1, //infinite
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // });
    // vars
    // gsap.to(".box", {
    //   x: "+=200",
    //   y: "+=50",
    //   duration: 2,
    //   backgroundColor: "#27c83f",
    //   borderRadius: "100px",
    //   width: 100,
    //   height: 100,
    // });
    // SVG 요소
    // gsap.to(".svgBox", {
    //   attr: {
    //     rx: 40,
    //     fill: "red",
    //   },
    // });
    // JavaScript 객체
    const o = {
      num: 0,
      color: "yellow",
    };
    const output = document.querySelector("output");
    const renderCount = () => {
      output.value = Math.round(o.num);
      output.style.setProperty("color", o.color);
    };
    gsap.to(o, {
      num: 100,
      color: "cyan",
      duration: 1,
      // repeat: 1,
      // yoyo: true,
      onUpdate: renderCount,
      onComplete: () => {
        // console.log('finished gsap animation')
        // gsap.set(output, { opacity: 0 })Add commentMore actions
      },
    });
    // delay
    // repeatDelay
    // gsap.to(".box:first-of-type", {
    //   rotation: 360,
    //   duration: 1,
    //   repeat: -1,
    //   repeatDelay: 1,
    // });
    // gsap.to(".box.cyan", {
    //   rotation: 360,
    //   duration: 1,
    //   delay: 1,
    //   repeat: -1,
    //   repeatDelay: 1,
    // });
    // canvas animation
    // const canvasElement = document.querySelector(".canvas");
    // const canvas = canvasElement.getContext("2d");
    // canvas.fillStyle = "#d0d0d0";
    // const position = {
    //   x: 0,
    //   y: 0,
    // };
    // function draw() {
    //   canvas.clearRect(0, 0, 400, 400);
    //   canvas.fillRect(position.x, position.y, 100, 100);
    // }
    // gsap.to(position, {
    //   x: 300,
    //   y: 300,
    //   duration: 2,
    //   ease: "back.inOut(7)",
    //   onUpdate: draw,
    // });
  }

  setTimeout(() => {
    playgroundGSAP();
    // playground();
  }, 500);
}
