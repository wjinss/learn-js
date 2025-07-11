// 폼필드 선택 실습

// 실습1
() => {
  // 로그인 폼에 사용자가 입력한 아이디, 비밀번호 값을 읽어와 콘솔 패널에 출력합니다. (form.elements 활용)
  const form = document.getElementById("login-form2");

  form.addEventListener("input", () => {
    const userId = form.elements.userid;
    const userPassword = form.elements.password;
    console.log(userId.value.trim());
    console.log(userPassword.value.trim());
  });

  // 이벤트 위임으로 찾기
  // const form = document.getElementById("login-form");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   const [idInput, passwordInput] = form.elements;
  //   const [id, password] = [idInput.value.trim(), passwordInput.value.trim()];

  //   console.log({ id, password });
  // });
};

// 실습2
() => {
  //보내기 버튼을 누르면 사용자가 입력한 이메일, 피드백 내용을 읽어와 화면에 얼럿(alert) 창을 띄웁니다.
  const form = document.getElementById("feedback-form");
  const button = form.elements[2];

  button.addEventListener("click", () => {
    const emailValue = form.elements[0].value.trim();
    const textAreaValue = form.elements[1].value.trim();

    alert(`${emailValue}\n${textAreaValue}`);
  });

  // 이벤트 위임으로 찾기
  //   const form = document.getElementById("feedback-form");

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();

  //     const form = e.currentTarget;
  //     const { email, feedback } = form;

  //     window.alert(`
  // email: ${email.value.trim()}\n
  // feedback: ${feedback.value.trim()}
  // `);
  //   });
};

// 실습3
(() => {
  //사용자가 관심있는 프로그래밍 언어를 체크한 후, 선택 완료 버튼을 누르면 체크된 값을 콘솔 패널에 출력합니다.
  const form = document.getElementById("radio-check-form");
  const checkBoxes = [...form.querySelectorAll('[type="radio"]')];
  const button = form.elements[3];

  button.addEventListener("click", () => {
    const checkedValue = checkBoxes.find((checkBox) => checkBox.checked);
    console.log(checkedValue.value);
  });

  // 이벤트 위임으로 찾기
  // const form = document.getElementById("radio-check-form");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   console.log(form.lang.value);
  //   //
  // });
})();
