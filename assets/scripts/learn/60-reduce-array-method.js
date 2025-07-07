// ------------------
// 배열의 reduce 메서드
// - 누산 : 이미 계산한 결과에 수치를 계속 더하여 계산함. 또는 그 합계
// ------------------

// reduce() 메서드
() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let initialValue = 0;

  // reduce() 메서드를 사용해 만든 sum() 함수
  const total = numbers.reduce(
    (
      prevValue,
      currentValue
      // currentIndex,
      // array
    ) => {
      // prevValue = 0 | 0 + 1 | 1 + 2 | 3 + 3 | 6 + 4 | ...
      // currentValue = 1 | 2 | 3 | 4 | ...
      // currentIndex = 0 | 1 | 2 | 3 | ...
      // array = numbers
      const nextValue = prevValue + currentValue;
      return nextValue;
    },
    initialValue
  );

  console.log(total);

  const 숫자들 = [1, 2, 3];

  let 초깃값 = 5;

  const 콜백 = (이전누산값, 현재값 /* , 현재인덱스, 배열 */) => {
    const 누산된값 = 이전누산값 + 현재값;
    return 누산된값;
  };

  const 총합계 = 숫자들.reduce(콜백, 초깃값);

  console.log(총합계);
};

// sum() 함수 만들기 : for 문 vs. reduce() 메서드
(() => {
  const numbers = [2, 4, 6, 8, 12];

  let totalForValue = sumFor(...numbers);
  console.log({ totalForValue });

  let totalReduceValue = sumReduce(...numbers);
  console.log({ totalReduceValue });

  // for문 사용해 만든 sum() 함수
  function sumFor(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) total += numbers[i];
    return total;
  }

  // reduce() 메서드를 사용해 만든 sum() 함수
  function sumReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
})();

// / 배열 -> 누산된 객체
() => {
  const fruits = [
    "바나나",
    "애플",
    "오렌지",
    "애플",
    "바나나",
    "워터 멜론",
    "오렌지",
    "워터 멜론",
    "바나나",
    "참외",
  ];

  const fruitsCount = fruits.reduce((o, fruit) => {
    o[fruit] = !o[fruit] ? 1 : o[fruit] + 1;

    // if (!o[fruit]) {
    //   o[fruit] = 1
    // } else {
    //   o[fruit] += 1
    // }

    return o;
  }, {});

  console.log(fruitsCount);
};

// 중첩된 배열 -> 평탄화된 배열
(() => {
  const nestedArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ];

  // const flattedArray = nestedArray.reduce((flattedArray, currentArray) => {
  //   flattedArray.push(...currentArray)
  //   return flattedArray
  // }, [])

  // const flattedArray = nestedArray.reduce((result, current) =>
  //   [...result, ...current], []
  // )

  const flattedArray = nestedArray.flat();
  console.log(flattedArray);
})(
  // 배열 -> 템플릿 스트링
  () => {
    const list = [
      { content: "하나" },
      { content: "둘" },
      { content: "셋" },
      { content: "넷" },
      { content: "다섯" },
    ];

    // 배열의 메서드를 사용해 아래와 같은 템플릿 문자열을 생성하려면?

    // '<li>하나</li><li>둘</li><li>셋</li><li>넷</li><li>다섯</li>'

    // for문 구현
    {
      let templateString = "";
      for (let i = 0, l = list.length; i < l; i++) {
        const { content } = list[i];
        templateString += `<li>${content}</li>`;
      }
      console.log(templateString);
    }

    // map() 구현
    // .map().join() -> string
    {
      const templateString = list
        .map(({ content }) => `<li>${content}</li>`)
        .join("");
      console.log(templateString);
    }

    // reduce() 구현
    {
      const templateString = list.reduce(
        (template, { content }) => `${template}<li>${content}</li>`,
        ""
      );
      console.log(templateString);
    }

    // reduce() 구조분해할당 x
    const liList = list.reduce((sum, current) => {
      sum += `<li>${current.content}</li>`;
      return sum;
    }, "");
    console.log(liList);
  }
)();
