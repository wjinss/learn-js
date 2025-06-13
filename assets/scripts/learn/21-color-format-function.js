// --------------------------------------------------------------------------
// ✅ 컬러 포멧 변경 함수 작성
// --------------------------------------------------------------------------
// - [ ] setHexColor(red, green, blue) : #hexcode 반환
// - [ ] setRgbColor(red, green, blue) : rgb() 문자열 반환
// --------------------------------------------------------------------------

// 예) setHexColor(255, 255, 255) // 결과값: '#ffffff'
// 10진수 > 16진수

const setHexColor = (red, blue, green) =>{
  let toRed = red.toString(16)
  let toBlue = blue.toString(16)
  let toGreen = green.toString(16)
  return `#${toRed}${toBlue}${toGreen}`
} 
console.log(setHexColor(255,0,255));

// 예) setRgbColor('ff', 'ff', 'ff') // 결과값: 'rgb(255, 255, 255)'
// 16진수 > 10진수
const setRgbColor = (red, blue, green) =>{
  let toRed = parseInt(red, 16)
  let toBlue = parseInt(blue, 16)
  let toGreen = parseInt(green, 16)
  return `rgb(${toRed}, ${toBlue}, ${toGreen})`
} 
console.log(setRgbColor('ff', '12', 'ff'));