//-------------------------------------------------------
// 조건문 - if...else
//-------------------------------------------------------

// 프로그래밍 조건문
// 조건 = '거짓 같은 값(Falsy한)'으로 평가
// 조건 = '참 같은 값(Truthy)'으로 평가

// 1.Falsy한 값
// undefined, null , 0, -0, NaN, "", 0n
// 총 7가지는 조건문 내에서 falsy한 값으로 거짓으로 반환됨
 
// 2.Truthy 한 값
// 7가지는 falsy한 값을 제외한 나머지 모든 값
// "hello", 123, [], {}, ()=>{}, etc..

let isLightColorRed = true

if (isLightColorRed) {
  console.log('신호등 앞에서 멈춰야 합니다.');
}else{
  console.log('좌우를 살피고 건널목을 건넙니다.');
}

// 불리언 타입 변경
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(1));

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean('hi'));

console.log(Boolean(true));
console.log(Boolean(false));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(Symbol('wjinss')));
console.log(Boolean(100n));

console.log(Boolean(()=>{}));
console.log(Boolean({}));
console.log(Boolean([]));

