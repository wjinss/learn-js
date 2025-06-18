// ----------------------------------------------
// 배열(array)객체
// ----------------------------------------------

// 배열 리터럴로 배열 만들기 (배열 생성)
const cart = ["대파", "계란", "두부", "시금치", "양파", "케찹"];
console.log(cart);

const cart_item_count = cart.length;
console.log("cart의 아이템 갯수는? ", cart_item_count);

// 생성자 함수를 사용해 배열 객체 생성
const number = new Array("one", "two", "three", "four", "five");

console.log(number, number.length);
