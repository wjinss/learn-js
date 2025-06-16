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
console.log(yoHan.classList.value);
