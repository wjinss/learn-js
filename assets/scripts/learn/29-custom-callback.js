function callToAction(callback) {
  callback();
}

callToAction(() => {
  console.log("콜백은 다른 함수에 인수로 전달되는 함수를 말합니다.");
});

//--------------------------------------------
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const body = document.querySelector("body");

click(document.querySelector(".button-1"), () => console.log("button 1"));
click(document.querySelector(".button-2"), () => console.log("button 2"));

// mouseLeave(button1, () => console.log(`mouseleave`));
// mouseEnter(button2, () => console.log(`mouseenter`));

// const handleClick = () => console.log("clicked button");
// button.addEventListener('click', handleClick)

// click(button1, handleClick)
// click(button2, handleClick)

const handleActive = () => {
  body.classList.add("is-active");
  button1.classList.add("is-active");
  button2.classList.add("is-active");
};

const handleInactive = () => {
  body.classList.remove("is-active");
  button1.classList.remove("is-active");
  button2.classList.remove("is-active");
};

button1.addEventListener("mouseenter", handleActive);
button1.addEventListener("mouseleave", handleInactive);
button2.addEventListener("mouseenter", handleActive);
button2.addEventListener("mouseleave", handleInactive);
