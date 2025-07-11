// --------------------------------------------------------------------------
// 📌 AJAX란?
// --------------------------------------------------------------------------

() => {
  // XMLHttpRequest 생성자 함수(클래스)를 사용해 XMLHttpRequest 객체(인스턴스) 생성
  // 요청을 위한 XHR 객체 생성
  const request = new XMLHttpRequest();

  // 요청 구성
  request.open("GET", "https://api.github.com/users/yamoo9/repos");

  // 서버에서 응답이 오는 이벤트 청취
  request.addEventListener("load", (e) => {
    // XHR 요청에 서버로부터 응답이 오면 이벤트 객체를 통해 응답된 데이터를 확인
    console.log(e.target.status); // 200
    console.log(typeof e.target.response); // string (data)
    console.log(JSON.parse(e.target.response));
    // console.log(e.target.statusText)
    // console.log(e.target.responseText)
  });

  // 서버로 요청 보내기
  request.send();
};

(() => {
  function requestGitHubUser(username) {
    // XMLHttpRequest 객체 생성
    const request = new XMLHttpRequest();

    // 요청 구성
    request.open("GET", `https://api.github.com/users/${username}/followers`);

    // 요청 보내기
    request.send();

    // 요청 이벤트 리스닝(청취)
    request.addEventListener("load", ({ target: xhr }) => {
      const responseData = JSON.parse(xhr.response);
      console.log(responseData);

      // 로그인(login) 데이터만 새롭게 배열 재구성
      const followers = responseData.map(({ login }) => login);

      const followerItemsTemplate = followers
        .map((name) => {
          return `<li>${name}</li>`;
        })
        .join("");

      document.querySelector(".github-followers").innerHTML =
        followerItemsTemplate;
    });
  }

  requestGitHubUser("wjinss");
})();
