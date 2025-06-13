// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, blue) : #hexcode 반환
// - [ ] setRgbColor(red, green, blue) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
// 10진수 > 16진수

// const setHexColor = (red, blue, green) =>{
//   let toRed = red.toString(16)
//   let toBlue = blue.toString(16)
//   let toGreen = green.toString(16)
//   return `#${toRed}${toBlue}${toGreen}`
// } 
// console.log(setHexColor(255,0,255));

// // 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'
// // 16진수 > 10진수
// const setRgbColor = (red, blue, green) =>{
//   let toRed = parseInt(red, 16)
//   let toBlue = parseInt(blue, 16)
//   let toGreen = parseInt(green, 16)
//   return `rgb(${toRed}, ${toBlue}, ${toGreen})`
// } 
// console.log(setRgbColor('ff', '12', 'ff'));

// 우진 ^^
//----------------------------------------------------------
// 야무쌤 vv

// 10진수 -> 16진수 함수
function toHexadecimal(decimal) {
  return decimal.toString(16)
}


// 16진수 -> 10진수 함수
function toDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16)
}

// console.log(toHexadecimal(255))
// console.log(toDecimal('ff'))

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setHexColor(red, green, blue) {
  const redValue = toHexadecimal(red)
  const greenValue = toHexadecimal(green)
  const blueValue = toHexadecimal(blue)
  const colorValue = '#' + redValue + greenValue + blueValue
  return colorValue
}

// 테스트 코드
console.log(setHexColor(255, 255, 255) === '#ffffff')

// --------------------------------------------------------------------------

// 함수 작성 (기능 구현)
function setRgbColor(red, green, blue) {
  const redValue = toDecimal(red)
  const greenValue = toDecimal(green)
  const blueValue = toDecimal(blue)
  const colorValue = 'rgb(' + redValue + ', ' + greenValue + ', '  + blueValue + ')'
  return colorValue
}

// 테스트 코드
console.log(setRgbColor('ff', 'ff', 'ff') === 'rgb(255, 255, 255)')
console.log(setRgbColor('00', 'af', 'ed'))