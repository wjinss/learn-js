// 변수(Variables)
console.log("변수(Variables)");

//-------------------------
// 의미없는 코드
//-------------------------
// 4 + 27 = 31
// console.log(31);
// console.log(4 + 27);

//-------------------------
// 의미있는 코드
//-------------------------
// 처음 가진 사과의 개수 = 4
// 추가로 구매한 사과의 개수 = 27
// 현재 내가 가진 사과의 개수 = 처음 가진 사과의 개수 + 추가로 구매한 사과의 개수

// 변수 선언 및 값 할당
let have_apple = 4;
console.log("처음 가진 사과의 개수 = ", have_apple);

let extra_apple = 27;
console.log("추가로 구매한 사과의 개수 = ", extra_apple);

let total_apple = have_apple + extra_apple;
console.log("현재 내가 가진 사과의 개수 = ", total_apple);

// let camelCase = null; // camelCase
// let snake_case = null; // snakeCase

// 변수 이름 작성시 의미있게 작성하는 방법
// 변수 이름은 연결된 한 단어로 작성되어야 한다(공백x)
// 알파벳 a-z, A-Z 숫자 0~9, _, $ 등의 기호로 구성되어야 됨
// 변수 이름은 숫자로 시작하면 안됨
// 변수 이름에 예약어는 사용할 수 없음
