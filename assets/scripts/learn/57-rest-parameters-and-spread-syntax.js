// ---------------------------
// 스프레드 연산자, 나머지 연산자
// ---------------------------

// 전개 연산자(...)

// 배열 전개
() => {
  const breads = ["크림빵", "소보로빵", "소금빵"];

  // 문자열 값
  // console.log(`${breads[0]},${breads[1]},${breads[2]}`);
  // console.log(breads.toString());

  // 구조 분해 할당 활용
  // const [x, y, z] = breads;
  // console.log(x, y, z);

  // 전개 구문(배열의 원소를 전개한다) 활용
  console.log(...breads);
};

(() => {
  const messages = [`hello`, `hi`, `how are you`];

  function log(messages1, messages2, messages3) {
    console.log(messages1);
    console.log(messages2);
    console.log(messages3);
  }
  // console.log(messages[0], messages[1], messages[2]);
  console.log(...messages);
})();

// 다른 배열 내부에도 전개 가능
(() => {
  const team = ["one", "two", "three"];

  const anotherTeam = ["four", ...team, "six", "seven"];
  console.log(anotherTeam);
})();

// .concat() 메서드 vs. 전개 구문
(() => {
  const itemToAdd = 1;
  const existingArray = [2, 3];

  // .concat()
  const arr = [];
  arr.push(itemToAdd);
  let combinedArr = arr.concat(existingArray);
  console.log(combinedArr);

  // spread syntax
  combinedArr = [itemToAdd, ...existingArray];
  console.log(combinedArr);
})(
  // html컬렉션 or 노드리스느 > 배열로 변환
  // Array.from() vs spead syntax

  () => {
    const mainChildren = document.querySelector("main").children;

    console.log(Array.from(mainChildren));
    console.log([...mainChildren]);
  }
)();
