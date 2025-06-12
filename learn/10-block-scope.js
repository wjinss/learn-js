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
