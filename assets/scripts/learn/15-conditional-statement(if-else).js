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

if (-100) {
  console.log('this is truethy')
} else {

}

x = 10
y = 5

// JavaScript는 상황에 따라 타입을 자동 변환

if(x == y)  { console.log('this is truthy') }
if(x === y) { console.log('this is truthy') }
if(x != y)  { console.log('this is truthy') }
if(x !== y) { console.log('this is truthy') }
if(x < y) { console.log('this is truthy') }
if(x <= y) { console.log('this is truthy') }
if(x > y) { console.log('this is truthy') }
if(x >= y) { console.log('this is truthy') }


// 개발자 작성
console.log(Boolean(24 == '24'))
// JavaScript 엔진 처리 (타입 자동 변환, 느슨한 비교)
console.log(Boolean('24' == '24'))

// 개발자 작성
console.log(Boolean(24 === '24'))
// JavaScript 엔진 처리 (타입 변경 안함, 엄격한 비교)
console.log(Boolean(24 === '24'))



let condition = true

// 조건 (참이다, 아니다 : 흑백논리)
if (condition) {}
else {}

let 신호등불빛색 = '보라색'

// 조건 1 (신호등 불이 빨간색)
if (신호등불빛색 === '빨간색') {
  console.log('건너면 안되요!')
} 
// 조건 2 (신호등 불이 노란색)
else if (신호등불빛색 === '노란색') {
  console.log('안전을 생각하면 그 자리에 멈추는 게 좋아요.')
}
// 조건 3 (신호등 불이 초록색)
else if (신호등불빛색 === '초록색') {
  console.log('좌우 살피고 건너세요!')
}
// 이도 저도 아니면...
else {
  console.log(신호등불빛색 + '은 신호등 불빛색 중에 없어요.')
}