// --------------------------------------------------------------------------
// 📌 조건 식(Conditional Expression)
//    - 3항 연산자 (표현)식 (Ternary)
// --------------------------------------------------------------------------

const user = {
  name: "조현주",
  age: 23,
  role: "관리자",
};

// 삼항 연산자 식
() => {
  // 조건문(Conditional Statement)
  if (user.role === "관리자") {
    console.log("서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.");
  } else {
    console.warn("서비스 관리자가 아니므로, 접근이 불가합니다.");
  }

  // 조건식(Conditional EXpression)
  // 조건 ? (참으로 평가된 경우 실행 명령) : (거짓으로 평가된 경우 실행 명령)

  // 한 줄로 작성한 경우
  user.role === "관리자"
    ? console.log("서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.")
    : console.warn("서비스 관리자가 아니므로, 접근이 불가합니다.");

  // 여러 줄로 작성한 경우 1
  user.role === "관리자"
    ? console.log("서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.")
    : console.warn("서비스 관리자가 아니므로, 접근이 불가합니다.");

  // 여러 줄로 작성한 경우 2
  user.role === "관리자"
    ? console.log("서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.")
    : console.warn("서비스 관리자가 아니므로, 접근이 불가합니다.");
};

// 문(Statement) vs. 표현식(Expression)
(() => {
  {
    let message = "";

    // 조건문 (Conditional Statement)
    // 문은 값을 반환하지 않는다.
    // console.log(if (user.role === '관리자') { message = '서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.' } else { message = '서비스 관리자가 아니므로, 접근이 불가합니다.' })

    if (user.role === "관리자") {
      message = "서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다.";
    } else {
      message = "서비스 관리자가 아니므로, 접근이 불가합니다.";
    }

    console.group("조건문");
    console.log("%c" + message, "color: #5856d6; font-weight: 700;");
    console.groupEnd();
  }

  {
    // 조건식 (Conditional EXpression)
    let message =
      user.role === "관리자"
        ? "서비스의 모든 권한을 가지므로, 어떤 일이든 가능합니다."
        : "서비스 관리자가 아니므로, 접근이 불가합니다.";

    console.group("조건식");
    console.log(
      "%c" + message,
      "color: #e54d26; font-weight: 900; background-color: #101010;"
    );
    console.groupEnd();
  }
})();
