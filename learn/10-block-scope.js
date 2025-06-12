// ------------------------------------------
// 전역
// ------------------------------------------

// 전역 스코프 (global scope)
let scope = '전역'


// ------------------------------------------
// 전역
// ------------------------------------------
{
// 블록 (block scope)
let scope = '지역'


// 중첩된 블록 스코프 (nested block scope)
{
  let scope = '중첩된 지역'
  console.log(scope);  
}
console.log(scope);
}
console.log(scope);
// ------------------------------------------
// 함수
// ------------------------------------------

// 함수 스코프 (function scope)
let name = '전역'
let nickname = '우진'

function fn(){
// 함수의 지역변수
let name = '함수'

// 중첩된 함수 (nested function scope)
  function nestedFn(nickname) {
    // 중첩된 함수의 지역 변수
    let name = '중첩된 함수'
    
    console.log(1, name);
    console.log(1, nickname);
    
  }
nestedFn()

console.log(2, name);
}

fn()
console.log(3, name);