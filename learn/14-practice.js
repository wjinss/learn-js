
// # 실습

// 객체를 만드는 연습을 해보세요. 실제 코딩에서 객체는 매우 많이 사용됩니다.

// 1. 빈 객체를 정의합니다.
// 2. 점 표기법으로 접근할 수 있는 객체 속성을 추가하고, 속성 값을 읽어보세요.
// 3. 대괄호 표기법으로만 접근 가능한 객체 속성도 추가하고, 속성 값을 읽어보세요.
// 4. 점 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
// 5. 대괄호 표기법을 사용해 객체의 속성 값을 수정하거나, 추가해봅니다.
// 6. 객체의 속성 타입을 함수로 설정해 메서드를 추가하고, 이 메서드를 호출해보세요.
// 7. 객체의 메서드에 매개변수를 추가하고, 이 메서드를 호출해봅니다.

// ### 연습 주제

// 어떤 객체를 만들어야 할 지 감이 안 잡힌다면? 아래 주제에 맞는 객체를 만들어 보세요.

// 1. 사람(person) 정보 객체로 만들기

const person = {
  name: '정우진',
  nickName: '우리둥절',
  age: '29',
  hobby: '필름사진 촬영',
  adress: '서울시',
  'when-he-rest': '출사나가기',
}

//     - 속성 추가
person.height = '178'
//     - 속성 읽기
console.log(person.hobby);
console.log(person['when-he-rest']);
//     - 속성 수정
person['when-he-rest'] = 'ott 시청'
console.log(person['when-he-rest'])
//     - 속성 삭제
delete person.height
console.log(person.height)


// 2. 도서(book) 정보 객체로 만들기
const book = {
  title: '전나무와 매',
  category: 'novel',
  wrighter: '전민희',
  'english-title': 'The Fir and the Hawk.',
}
//     - 속성 추가
book.price = '17800원'
//     - 속성 읽기
console.log(book.category);
console.log(book['english-title']);
//     - 속성 수정
book.price = '16000원'
console.log(book.price);
//     - 속성 삭제
delete book['english-title']
console.log(book['english-title']);