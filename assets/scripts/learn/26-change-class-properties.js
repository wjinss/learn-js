const exorcist = document.getElementById("exorcist-characters");

// 클래스 조작 옛날 방식
const choi = exorcist.querySelector(".master-choi");

console.log(choi.className);

choi.className += " active";
console.log(choi.className);

// 클래스 조작 비교적 최신 방식
const yoHan = exorcist.querySelector(".yo-han");

yoHan.classList.add("active");
yoHan.classList.remove("character");
yoHan.classList.contains("character"); // 변수가 있냐 없냐를 찾는데
yoHan.classList.toggle("character");

console.log(yoHan.classList.value);

const ghost = exorcist.querySelector(".villain-ghost");
console.log(ghost.className);
ghost.classList.add("ghost", "villain");
console.log(ghost.className);
ghost.classList.remove("ghost", "villain");
console.log(ghost.className);

// classList.item
let firstClassName = ghost.classList.item(0);
let lastClassName = ghost.classList.item(ghost.classList.length - 1);
console.log(firstClassName, lastClassName);

// classList.replace > 대체
ghost.classList.replace("villain-ghost", "main-villain");
console.log(ghost);

const app = document.getElementById("app");

const add = app.querySelector(".add");
add.classList.add("text-primary");
console.log(add);

const remove = app.querySelector(".remove");
remove.classList.remove("remove");
console.log(remove);

const contains1 = app.querySelector(".contains1");

console.log(contains1.classList.contains("text-primary"));

const contains2 = app.querySelector(".contains2");

console.log(contains2.classList.contains("text-primary"));

const toggle = app.querySelector(".toggle");
// if (toggle.classList.contains("text-primary")) {
//   toggle.classList.remove("text-primary");
// } else {
//   toggle.classList.add("text-primary");
// }
toggle.classList.toggle("text-primary");
console.log(toggle.classList.value);
