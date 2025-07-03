// -----------------------
// 향상된 객체 리터럴
// -----------------------

// 속성 할당 단축
() => {
  const nickname = "우진";
  const phone = "Iphone";

  // nkckname, phone 변수 값을 객체의 속성 값으로 할당하고자 한다.
  // 변수와 객체의 키의 이름이 같을 때 단축해서 사용할 수 있다.
  const instructor = { nickname, phone };
  console.log(instructor);
};

// 메서드 단축
() => {
  const instructor = {
    nickname: "우진",
    phone: "아이폰",
    location: "서울",
    // introduction: function() { // 메서드 단축 전
    // 메서드 단축 후
    introduction() {
      let { nickname: name, phone, location } = this;
      console.log(name, phone, location);
    },
  };
  instructor.introduction();
};

// 계산된 속성 이름
(() => {
  let methodName = "calculateProperty";
  let proprety = "currentTime";

  const o = {
    [proprety]: `00:09:21`,
    [methodName]() {
      console.log(`${methodName} time = `, this.currentTime);
    },
  };

  o[methodName]();
})();
