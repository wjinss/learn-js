// ----------------------------------
// 암묵적 객체 반환
// ----------------------------------

// 화살표 함수 표현식: 명시적 반환 vs. 암묵적 반환
() => {
  // 화살표 함수 표현식에서 명시적 반환 예시
  const queryAll = (selector, context = document) => {
    return context.querySelectorAll(selector);
  };

  const query = (...args) => {
    return queryAll(...args)[0];
  };

  console.log(queryAll("body *"));
  console.log(query("body *"));

  // 화살표 함수 표현식에서 암묵적 반환 예시
  const nthOfItem = (list, n) => list.at(n);
  const fisrtItem = (list) => nthOfItem(list, 0);
  const lastItem = (list) => nthOfItem(list, -1);

  const numbers = ["하나", "둘", "셋", "넷", "다섯"];

  console.log(fisrtItem(numbers));
  console.log(nthOfItem(numbers, 3));
  console.log(lastItem(numbers));
};

// 화살표 함수 표현식: 암묵적 객체 반환
(() => {
  // 개발자 생성 함수 (명시적 객체 반환)
  const createDeveloper = ({ name, age } = {}) => {
    const developer = {
      name,
      age,
      job: "개발자",
    };
    return developer;
  };

  const park = createDeveloper({ name: "박용우", age: 21 });
  const lee = createDeveloper({ name: "이혜림", age: 34 });

  console.table(park);
  console.table(lee);

  /* -------------------------------------------------------------------------- */

  // 디자이너 생성 함수 (암묵적 객체 반환)
  const createDesigner = ({ name, age, gender } = {}) => ({
    name,
    age,
    gender,
    job: "디자이너",
  });

  console.table(createDesigner({ name: "하연주", age: 19, gender: "여성" }));
  console.table(createDesigner({ name: "최현기", age: 51, gender: "남성" }));
})();
