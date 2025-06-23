// ----------------------------------------------------
// 루프 반복문
// ----------------------------------------------------

let wantToDraw = true;

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
if (wantToDraw) {
  // console.log("if문");
  // draw();
}

// 루프(반복)문
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// 특정 상황(조건) 설정
//let i = 10;

// while (wantToDraw) {
//   console.log("while문");
//   draw();

//   // 특정 상황이 일치되는 경우
//   if (i-- <= 0) {
//     // 선감소(--i): i = 9  / 후감소(i--) i = 10
//     // 조건을 참에서 거짓으로 변경
//     wantToDraw = false;
//     console.log("i =", i, "wantToDraw =", wantToDraw);
//   } else {
//     // i = i - 1
//     // i -= 1 // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//     // 후감소
//     // i--

//     // 선감소
//     // --i

//     console.log("i =", i);
//   }
// }

//let k = 100;
// while (k-- >= 0) draw();
// while (--k >= 0) draw();

// ------------------------------------------------
// 사용자 입력 검증 (while)
//'1부터 10까지 숫자를 입력하세요'
// Number.parseInt(prompt(`1부터 10까지 숫자를 입력하세요`), 10);

// let userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10);

// while (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//   console.error("입력 값이 1부터 10까지 숫자여야 합니다.");
//   userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10);
// }

// console.log("사용자가 입력한 값은 " + userInput + "입니다.");

// ----------------------------
// 흐름 제어(continue, break)

// (() => {
//   let drawCount = 20;
//   let i = 0;

//   const draw = (n) => {
//     console.log("도화지에 그림을 그린 횟수 = " + i);
//   };
//   // continue > 건너뛰기
//   // while (i++ < drawCount /* 0 ~ 19 */) {
//   //   if (i > 10 && i <= 15) {
//   //     continue;
//   //   }
//   //   draw(i);
//   // }

//   //break > 종료시키기
//   while (i++ < drawCount /* 0 ~ 19 */) {
//     if (i === 5) {
//       break;
//     }
//     draw(i);
//   }

//   console.log("last i =", i);
// })();

// ----------------------------
// 반복문(do ...while)
// while vs. do ...while
// (() => {
//   let condition = false;

//   //while문
//   //조건이 거짓이면 1번도 실행 안함
//   while (condition) {
//     console.log(`condition is true`);
//   }

//   //do ...while문
//   //조건이 거짓이어도 1번은 반드시 실행
//   do {
//     console.log(`condition is true`);
//   } while (condition);
// })();

// ----------------------------
// 사용자 입력 검증(do ...while)
// "1부터 10까지 숫자를 입력하세요"
// do...while 문 사용 예시

// {
//   let userInput;

//   do {
//     userInput = parseInt(prompt("1부터 10까지 숫자를 입력하세요"), 10);
//     if (Number.isNaN(userInput) || userInput < 1 || userInput > 10) {
//       console.error("입력 값이 1부터 10까지 숫자여야 합니다.");
//     }
//   } while (Number.isNaN(userInput) || userInput < 1 || userInput > 10);

//   console.log("사용자가 입력한 값은 " + userInput + "입니다.");
// }

// ----------------------------
// 반복문 for

// while문 vs. for문

// while문
() => {
  let i = 0;
  while (i < 10) {
    console.log(`while문`);
    ++i;
  }
};

// for문
() => {
  for (let i = 0; i < 10; ++i) {
    console.log(`for문`);
  }
};

() => {
  const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  for (let i = 0, l = numbers.length; i < l; i++) {
    console.log(numbers.at(i));
  }

  for (let i = 0, number; (number = numbers[i]); i++) {
    console.log(number);
  }
};

() => {
  const fruitBasket = ["체리망고", "토마토", "스트로베리"];
  const students = [
    { 이름: "홍민영" },
    { 이름: "윤정화" },
    { 이름: "허시온" },
    { 이름: "조선현" },
    { 이름: "성정현" },
    { 이름: "조장원" },
    { 이름: "김민지" },
    { 이름: "고우현" },
  ];
  for (let i = 0, l = fruitBasket.length; i < l; i++) {
    console.log(fruitBasket[i]);
  }
  console.time("정순환");
  for (let i = 0, l = students.length; i < l; i++) {
    console.log(students[i]["이름"]);
  }
  console.timeEnd("정순환");
  // 역순 순환
  console.time("역순환");
  for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]["이름"]);
  }
  console.timeEnd("역순환");
};

// ----------------------------
// 반복문 for..of
() => {
  const students = [
    { 이름: "홍민영" },
    { 이름: "윤정화" },
    { 이름: "허시온" },
    { 이름: "조선현" },
    { 이름: "성정현" },
    { 이름: "조장원" },
    { 이름: "김민지" },
    { 이름: "고우현" },
  ];

  for (let arr of students) {
    // if (arr.이름 === "조장원") break;
    // console.log(arr.이름);

    if (arr.이름 === "조장원" || arr.이름 === "김민지") continue;
    console.log(arr.이름);
  }
};
() => {
  const webTech = {
    html: "hyper text markup language",
    css: "cascading style sheet",
    javascript: "programming language",
  };

  console.log(webTech);
  // for문 (객체에서 활용하지 않음)
  // for ...of문 (객체에서 활용하지 않음)

  // 객체 전용 순환
  // for ...in문
  for (const key in webTech) {
    const value = webTech[key];
    console.log({
      key: key,
      value: value,
    });
  }
};

(() => {
  // 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력
  {
    // for (let i = 1, l = 100; i <= l; i++) {
    //   if (i % 2 === 0) console.log(i);
    // }
    for (let i = 0, l = 100; i <= l; i += 2) {
      console.log(i);
    }
  }
  // 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력
  {
    let i = 10;
    while (i > 0) {
      console.log(i);
      --i;
    }
  }
  // 3. for … of 문을 사용해 다음 배열의 과일 출력
  {
    const fruits = ["사과", "바나나", "귤", "감자"];
    for (let fruit of fruits) {
      console.log(fruit);
    }
  }
  // 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력

  {
    const attempts = ["0124", "8291", "3001", "9073"];
    let i = 0,
      input;

    do {
      input = attempts[i];
      if (input === "3001") {
        console.log("사용자 입력 값이 비밀번호와 일치합니다");
        break;
      }

      i++;
    } while (i < attempts.length);
  }

  // 5. for … in 문을 사용해 객체의 key, value 출력
  {
    const student = {
      name: "선호",
      grade: "a",
      age: 22,
    };
    for (const key in student) {
      const value = student[key];
      console.log(key, value);
    }
  }
  // 6. `1`부터 `20`까지 반복
  //     1. `5`부터 `10`까지는 건너띄고 나머지 출력
  //     2. `17`이 되면 반복 종료
  for (let i = 1; i <= 20; i++) {
    if (i >= 5 && i <= 10) continue;
    if (i === 17) break;
    console.log(i);
  }
})();

const students = [
  { name: "kim", age: 20 },
  { name: "lee", age: 20 },
  { name: "park", age: 20 },
  { name: "jeong", age: 20 },
  { name: "choi", age: 20 },
];

for (let key in students) {
  const value = students[key];
  console.log(`${key} : ${value}`);
}
