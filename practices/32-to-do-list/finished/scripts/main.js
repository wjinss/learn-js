(() => {
  /*global DOMPurify*/

  // 문서에서 폼 요소 찾기
  const todoListForm = document.querySelector(".todolist");
  const todolist = todoListForm.querySelector(".todolist__tasks");

  // 할 일 제거 버튼 찾기
  const removeButtons = todolist.querySelectorAll("button");

  // 찾은 제거 버튼들 순환
  removeButtons.forEach((button) => {
    // 할 일 제거 버튼 click 이벤트 리스너 추가 (개별)
    button.addEventListener("click", (e) => {
      const taskElement = e.currentTarget.closest(".task");
      // 제거 방법1
      // taskElement.parentElement.removeChild(taskElement);
      // 제거 방법2
      taskElement.remove();
    });
  });

  // 폼 요소에 submit이벤트 추가 > 클릭 또는 엔터 키를 모두를 처리하는 가장 좋은 방법은 폼의 submit 이벤트를 청취
  todoListForm.addEventListener("submit", (e) => {
    // 브라우저 기본 동작 방지
    e.preventDefault();

    // 이벤트 연결 대상 찾기
    const form = e.currentTarget;

    // 새로운 할 일 콘텐츠 읽기
    const newTaskContenet = form[`new-task`].value.trim();

    // 사용자가 입력한 내용이 없으면 아무 일도 하지 않는다
    if (!newTaskContenet) return;

    // 새로운 할 일 <li>요소 생성
    const newTask = creatTask(newTaskContenet);
    console.log(newTask);

    // DOM 업데이트 (화면 변경)
    // 생성된 할 일. ㅛ소를 목록의 마지막 자식 요소로 추가
    todolist.append(newTask);

    // 폼 입력 필드 초기화
    form.reset();
  });

  // 새로운 할 일 생성 함수
  function creatTask(content) {
    // 생성할 요소
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");

    // 생성된 할 일 요소의 고유 id생성
    const uniqueId = generalUniqueId(10);

    // 생성할 할 일 요소의 템플릿 구성 후, innerHTML으로 요소에 HTML 생성
    taskElement.innerHTML = DOMPurify.sanitize(/*html*/ `
    <input type="checkbox" id=${uniqueId} />
       <label for=${uniqueId}>
         <span class="task__checkmark" aria-hidden="true">
           <svg viewBox="0 0 20 15">
             <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
           </svg>
         </span>
         ${content}
       </label>
       <button
         type="button"
         class="task__delete-button"
         aria-label="할 일 삭제"
         title="할 일 삭제"
       >
         <svg viewBox="0 0 20 20">
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     `);

    // 생성된 li안에서 제거 버튼을 찾아서 버튼에 할 일 요소를 삭제하는 기능 추가

    // 생성된 새 할 일 함수 반환
    return taskElement;
  }

  // 고유 id 생성 함수
  function generalUniqueId(length = 5) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  }
})();
