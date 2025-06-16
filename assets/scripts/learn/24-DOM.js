//--------------------------------------------
// DOM(문서 객체 모델)
// - 문서 요소 선택(접근)하는 함수들 (WEB APIs)
//--------------------------------------------

// document.getElementById()
// document.getElementsByTagName()

// console.log(document.getElementsByTagName('h1'));
const emailInput = document.getElementById("useremail");

console.log(emailInput);

// document.getElementsByName('name');
document.getElementsByName("email");

// document.getElementsByClassName(ClassName)
const items = document.getElementsByClassName("item");
console.log(items);

// document.querySelector()
const elementById = document.querySelector("#useremail");
console.log(elementById);

const elementByName = document.querySelector('[name="email"]');
console.log(elementByName);

const elementByClassName = document.querySelector(".item");
console.log(elementByClassName);

const elementByTagName = document.querySelector("li");
console.log(elementByTagName);

const app = document.getElementById("app");
const appFirstListItem = app.querySelector("li.item");
console.log(appFirstListItem);
