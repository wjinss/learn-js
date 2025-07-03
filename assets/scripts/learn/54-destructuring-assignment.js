// --------------------------------
// 구조 분해 할당
// --------------------------------

// 객체 구조 분해 할당
() => {
  const jeemin = {
    name: "박지민",
    age: 27,
  };

  // let name = jeemin.name;
  // let age = jeemin.age;

  // console.log(name);
  // console.log(age);

  // 구조 분해 할당 구문

  let { name, age } = jeemin; //{name, age}

  console.log(name);
  console.log(age);
};

// 배열 구조 분해 할당
() => {
  const names = ["박현아", "최하송", "김주성"];

  // let firstName = names.at(0);
  // let secondName = names.at(1);
  // let lastName = names.at(-1);

  let [firstName, secondName, lastName] = names;
  console.log({ firstName, secondName, lastName });

  //하나(두번째)만 가져오고 싶을때
  // let [, secondName] = names;
  // console.log({secondName});
};

// 속성 할당 변수 이름 설정
() => {
  const jeemin = {
    name: "박지민",
    age: 27,
  };

  // 객체의 키 값 이름으로 구조 분해 먼저 한 후,
  // 사용자가 원하는 지역 변수 이름으로 할당하는 것이 가능!
  let { age: myAge, name: nickname } = jeemin;

  // let myAge = age
  // let nickname = name;

  console.log({ myAge, nickname });
};

// 함수 인수 구조 분해 할당
() => {
  function getSectionTemplate(section) {
    const { headline: h, description: d } = section;
    return `
      <section>
        <h2>${h}</h2>
        <p>${d}</p>
      </section>
    `;
  }

  const sectionInfo = {
    headline: `구조 분해 할당`,
    description: `
    배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로, 구조를 분해해 지역 변수로 할당할 수 있다
    `,
  };

  const sectionTemplate = getSectionTemplate(sectionInfo);
  console.log(sectionTemplate);
};

// 함수 매개변수 구조 분해 할당
() => {
  // 매개변수 영역에서 구조 분해 할당 가능
  function getSectionTemplate({ headline: h, description: d }) {
    // const { headline: h, description: d } = section;
    return `
    <section>
      <h2>${h}</h2>
      <p>${d}</p>
    </section>
  `;
  }

  const sectionInfo = {
    headline: `구조 분해 할당`,
    description: `
    배열 또는 객체 타입의 데이터는 구조 분해가 가능하므로, 구조를 분해해 지역 변수로 할당할 수 있다
    `,
  };

  const sectionTemplate = getSectionTemplate(sectionInfo);
  console.log(sectionTemplate);
};

// 배열 타입 함수의 매개변수 영역에서 바로 구조 분해 할당
(() => {
  function rgbToHex([redValue, greenValue, blueValue]) {
    redValue = redValue.toString(16);
    greenValue = greenValue.toString(16);
    blueValue = blueValue.toString(16);

    return `#${redValue}${blueValue}${greenValue}`;
  }

  const colorHexCode = rgbToHex([255, 120, 120]);
  console.log(colorHexCode);
})();
