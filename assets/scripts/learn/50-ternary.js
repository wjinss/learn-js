// ----------------------------------
// 조건식(conditional expression)
//  - 3항 연산자 표현식
// ----------------------------------

{
  const user = {
    name: "조현주",
    age: 23,
    role: "손님",
  };

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
}
