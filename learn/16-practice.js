// if … else 명령문을 사용하여 프로그램의 흐름을 제어하는 것은 매우 중요합니다.

// 1. 명호는 24살, 아현이는 27살, 재웅이는 41살입니다.
//     1. 성현이의 나이를 설정합니다.
const myoungHo = {age: 24}
const ahHyun = {age: 27}
const jaeWoong = {age: 41}
const seongHyun = {age: 25}
//     2. 성현이가 명호보다 어린지 확인하여 적절한 로그가 출력되도록 구성합니다.
if(seongHyun.age < myoungHo.age){
  console.log('성현이가 명호보다 나이가 어립니다.');
}else{
  console.log('성현이가 명호보다 나이가 많습니다.');
}
//     3. 성현이가 아현이보다 나이가 많은 지 확인한 후, 그렇다면 로그를 출력하도록 작성합니다.
if(seongHyun.age > ahHyun.age){
  console.log('성현이가 아현이보다 나이가 많습니다.');
}else{
  console.log('성현이가 아현이보다 나이가 어립니다.');
}
//     4. 성현이가 재웅이보다 나이가 많은 지 확인하기 위한 코드 또한 작성해보세요.
if(seongHyun.age > jaeWoong.age){
  console.log('성현이가 재웅이보다 나이가 많습니다.');
}else{
  console.log('성현이가 재웅이보다 나이가 어립니다.');
}
// 2. 다음 중, 거짓(falsey)으로 평가되는 것을 골라보세요.
//     1. `null` v
//     2. `true`
//     3. `-1` 
//     4. `undefined` v
//     5. `0` v
//     6. `""` v
//     7. `{}` 
//     8. `false` v
//     9. `" "`
//     10. `{ isHavingFun: true }`

