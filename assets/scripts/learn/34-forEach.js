// ----------------------------------------
// forEach() 메서드
// ----------------------------------------

const numbers = [10, 9, 8, 7];

//for문 vs. forEach()

// 문(Statement) > 값이 나오지 않는다.
// for문
() => {
  for (let i = 0, l = numbers.length; i < l; ++i) {
    const number = numbers[i];
    console.log(i, number);
  }
};

// 식(Expression) > 값이 나온다.
// .forEach()  array.forEach((item, index, array) => {})
() => {
  numbers.forEach((number, i) => {
    console.log(i, number);
  });
};
