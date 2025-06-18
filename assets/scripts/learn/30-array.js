// ----------------------------------------------
// 배열(array)객체
// ----------------------------------------------

// 배열 리터럴로 배열 만들기 (배열 생성)
const cart = ["대파", "계란", "두부", "시금치", "양파", "케찹"];
console.log(cart, cart[3]);

const cart_item_count = cart.length;
console.log("cart의 아이템 갯수는? ", cart_item_count);

// 생성자 함수(new Array)를 사용해 배열 객체 생성
const number = new Array("one", "two", "three", "four", "five");

console.log(number, number.length);

// 생성자 함수를 사용해 배열 객체를 만들때 발생할 수 있는 문제점
const messageList = ["hello", "good morning"]; //2
console.log(messageList);

const onlyOneNumberListLiteral = [99];
console.log(onlyOneNumberListLiteral);

const onlyOneNumberList = new Array(99);
console.log(onlyOneNumberList); // 기대값: [99] / 결과값: [empty * 99]

// 배열은 객체다.
// 객체의 조건은 속송:값을 가진다.

// 배열의 인덱스(index)는 숫자 타입이다
// [
//   0:값1,
//   1:값2,
//   2:값3,
//   3:값4,
// ]

// 객체['속성명'] > 값
// 배열객체[인덱스] > 값
// 배열객체.속성
// 배열객체.메서드()

// 대괄호에 인덱스를 전달해 배열 항목 가져오기
let firstCartItem = cart[0];
let lastCartItem = cart[cart.length - 1];
console.log(firstCartItem, lastCartItem);

// .at() 메서드에 인덱스를 전달해 배열 항목 가져오기, 읽기
let firstCartItem2 = cart.at(0);
let lastCartItem2 = cart.at(cart.length - 1);
console.log(firstCartItem2, lastCartItem2);
// at은 음수를 설정할 수 있어서 at(cart.length - 1)를 at(- 1)라고 설정하면 항상 맨 뒷요소를 반환한다;
let lastCartItem3 = cart.at(-1);
console.log(lastCartItem3);

// 배열 항목 값 수정
cart[2] = "순두부"; // 주소값을 참조해서 원본 배열도 변경됨
console.log(`수정된 장바구니입니다.`, cart);

cart[101] = "까르보나라";
console.log(cart);
// const emptyArray = [];
const instructors = ["야무", "슬비"];

let yamoo9 = instructors[0];
instructors[1] = "김데레사";
console.log(instructors, yamoo9);
