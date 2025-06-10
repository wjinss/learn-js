console.log("함수(Function)");

// 함수란?
//  특정 순서에 따라 작업이 실행되는 코드 묶음(블록)

function cookRamen() {
  // 물 500ml 냄비에 넣기
  // 하이라이트에 냄비를 올리고 물 끓이기
  // 2분간 끓이고 계란을 넣는다
  // 계란이 어느정도 익으면 후추를 4톡톡 정도 뿌린다
  // 냠냠 쏘 굳
}

// 함수 선언(Function Declaration) 구문
function 함수이름() {
  // console.log("함수 내부에서 처리할 작업 기술");
  // console.group("라면먹자!!!!!!"); 처음에 펼쳐진 상태
  console.groupCollapsed("라면먹자!!!!!!");
  console.log("물 500ml 냄비에 넣기");
  console.log("하이라이트에 냄비를 올리고 물 끓이기");
  console.log("2분간 끓이고 계란을 넣는다");
  console.log("계란이 어느정도 익으면 후추를 4톡톡 정도 뿌린다");
  console.log("냠냠 쏘 굳");
  console.groupEnd();
}

// 함수 사용 (Call Function)
함수이름();
함수이름();
함수이름();

// 함수 이름으로 기능 유추
// play();
// stop();
// pause();

// 함수 이름 규칙
// 1. 한단어로 구성되어야 하며, 공백 혀용x
// 2. 알파벳 a~z, A~Z 숫자 0~9, 특수문자 $, _로 구성
// 3. 숫자로 시작할 수 없다
// 4. 예약어는 사용할 수 없다

// ---------------------------
// 매겨변수(Parameters)

// 함수 선언
function writeDiary() {
  // 함수 내부에 선언된 변수 > 함수 안에서 사용

  let year = 2025;
  let month = 6;
  let date = 10;

  console.log(year + "년 " + month + "월 " + date + "일에 일기를 쓴다.");
}
writeDiary();
