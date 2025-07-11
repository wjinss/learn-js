// --------------------------------
//
// --------------------------------
(() => {
  function intervalAction(...args) {
    console.log(args.join(" / "));
    console.count("인터벌 타이머 카운트", args.join(" / "));
  }

  // 함수 참조 적용
  // 인수 설정 (인터벌 타임 뒤에 옵션으로 설정 가능)
  // setInterval(intervalAction, 1000, 'a', 'b', 'c', 'd')

  // 인라인 함수 적용
  // setInterval(() => {
  //   console.count('인라인 함수')
  // }, 1500)

  // 클린업(정리)할 수 있는 식별자 인터벌 ID(양의 정수)
  const cleanupId = setInterval(() => {
    console.count("인터벌");
  }, 3000);

  // console.log({ cleanupId })

  setTimeout(() => {
    console.log("클린업!!");
    clearInterval(cleanupId);
  }, 5000);

  // UI 컴포넌트 제작 시, setInterval 활용 예시
  // 예) 캐러셀의 자동 회전 기능 (특정 상황에서 멈춤 요구: 접근성 준수)
  let playSlideId = null;
  const INTERVAL_TIME = 3000;

  function playSlide() {
    playSlideId = setInterval(() => {
      // 특정 주기마다 다음 슬라이드로 넘긴다.
    }, INTERVAL_TIME);
  }

  function stopSlide() {
    // 자동으로 다음 슬라이드로 넘어가는 기능을 멈춘다.
    clearInterval(playSlideId);
  }

  // 캐러셀 콘텐츠에 마우스가 내려갔을 때
  // 재생 버튼을 클릭할 때
  playSlide();
  // 캐러셀 콘텐츠에 초점 이동
  // 또는 인디케이터 버튼에 초점 이동
  // 캐러셀 콘텐츠에 마우스 올라갔을 때
  // 일시정지 버튼을 클릭할 때
  stopSlide();
})();
