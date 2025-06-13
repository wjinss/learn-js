// --------------------------------------------------
// 데이터 타입
// --------------------------------------------------

// 객체 타입(object type)
// 1. object - {}
// 2. function - ()=>{}
// 1. array - []

// --------------------------------------------------
// JS 객체(object)
// --------------------------------------------------


// 객체 리터럴을 사용해 객체 정의
const coffee = {
  용량: '600ml',
  브랜드: '스타벅스',
  이름: '아메리카노',
}

// 객체 생성자(constructor)를 사용해 객체 생성
const coffee2 = new Object()
coffee2.이름 = '아메리카노'
coffee2.브랜드 = '스타벅스'
coffee2.용량 = '600ml'

const MacBookProM1 = {
  chip: 'Apple M1',
  memory: '8GB',
  disk: 'Macintosh HD',
  serialNumber: 'C02F579VQ05D',
  macOS: 'Sequoia 15.5',
}

console.log(MacBookProM1);

const objectt = {
  number: 120,
  string: 'hello world',
  boolean: true,
  null : null,
  undefined : undefined,
  symbol: Symbol('객체'),
  bigInt: 900n,
  array: [],
  object: {}
}

const h1Camel ={
  fontWeight: 200,
  fontSize: '2.65rem'
}

const h1Kebab ={
  'font-weight': 200,
  'font-size': '2.65rem'
}

const bodyCamel = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifiContent: 'space-betwenn',
  alignItem: 'center',
  minBlockSize: '100dvh',
  backgroundColor: 'var(--bg-color)',
  color: 'var(--fg-color)',
  margin: 0,
}

const bodyKebab = {
  'display': 'flex',
  'flex-flow': 'row wrap',
  'justify-content': 'space-between',
  'align-items': 'center',
  'min-block-size': '100dvh',
  'background-color': 'var(--bg-color)',
  'color': 'var(--fg-color)',
  'margin': 0,
}

//객체 속성 읽기
console.log(bodyKebab['justify-content']);

//객체 속성 수정
bodyKebab['flex-flow'] = 'column wrap'

//수정된 객체 속성 읽기
console.log(bodyKebab['flex-flow']);

// 객체 속성 삭제
delete bodyKebab['flex-flow']

console.log(bodyKebab);

// 객세의 속성(object's properties)
// h1Camel.fontSize
// h1Camel.fontWeight

// 객체의 메서드(객체의 속성 중 함수(동사)의 형태인 것을 메서드라고 부른다)
h1Camel.getFontSize = function(){
  return h1Camel.fontSize
}

console.log(h1Camel.getFontSize());

MacBookProM1.getOS =()=>{
  return MacBookProM1.macOS
}

console.log(MacBookProM1.getOS());
console.log(MacBookProM1['getOS']());

MacBookProM1.getSerialNumber =()=>{
  return MacBookProM1.serialNumber
}

console.log(MacBookProM1.getSerialNumber());
console.log(MacBookProM1['getSerialNumber']());

// 메서드 정의 (매개변수 포함)
MacBookProM1.playMusic = function(songTitle){
  return `${songTitle} 재생을 시작합니다. `;
}
// 메서드 사용
console.log(MacBookProM1.playMusic('사랑하게 될거야'));


// --------------------------------------------------------------------------
// 📌 함수의 타입은?
// --------------------------------------------------------------------------
//    JavaScript 함수는 객체이다.
//    객체는 값이다. 함수는 객체다. 그러니까 함수는 값이다.
// --------------------------------------------------------------------------

function likeLion() {
  console.log('우리는 멋사 14기!')
}

likeLion.order = 14

console.log(likeLion.order)

delete likeLion.order

console.log(likeLion.order)


// "함수는 값이다."
// - 함수는 값이므로 함수에 인수로 전달 가능하다. (일급 객체, 일급 함수)
{
  greeting(sayHello, '🌈 자바스크립트') // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return '안녕! '
  }

  function greeting(helloMessage /* = sayHello */, name) {
    // const helloMessage = sayHello = function () { ... }

    console.log(helloMessage() + name)
  }
}

// - 함수는 값이므로 함수가 값으로 반환할 수 있다. (고차 함수)
{
  const greeting = sayHello()
  greeting('🌈 자바스크립트') // '안녕! 🌈 자바스크립트'

  function sayHello() {
    return (name) => {
      console.log('안녕! ' + name)
    }
  }

}

{
  const galaxyNoteBook = {
    deviceName: '갤럭시 노트북',
    getDeviceName: function() {
      return galaxyNoteBook.deviceName
    }
  }

  // console.log(galaxyNoteBook.getDeviceName) 이렇게 하면 함수가 나오고 
  // 함수(컴퓨터 메모리 상에 기억: 주소) 참조
  console.log(galaxyNoteBook.getDeviceName) 

  // console.log(galaxyNoteBook.getDeviceName()) 이렇게 했을때 value가 나오는데 왜 그런건가요?
  // 함수(컴퓨터 메모리 상에 기억: 주소) 실행 (소괄호()는 함수이름이 실행 연산자를 만나면 함수가 실행 => 값 반환)
  console.log(galaxyNoteBook.getDeviceName()) 
}




