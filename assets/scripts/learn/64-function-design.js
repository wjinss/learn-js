// ------------------------
// 명확한 목적에 맞는 함수 설계
// ------------------------

// 필터(filter) 기능을 가진 함수 구현
(() => {
  // 선언적 코드
  // 배열 객체의 filter() 활용
  function filter(array, callback) {
    // 명령형 코드
    const filteredArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      if (callback(item, index, array)) {
        console.log(`참인 아이템 = , ${item}`);
        filteredArray.push(item);
      }
    }

    return filteredArray;
  }

  const numbers = [2, 9, 21, 34];

  // const result = filter(numbers, (item, index, array) => {
  //   console.log(item)
  //   console.log(index)
  //   console.log(array)
  // })

  const result = filter(numbers, (n) => n > 5 && n < 30);
  console.log(result); // [9, 21]
})();

// 매핑(mapping) 기능을 가진 함수 구현
(() => {
  function map(array, callback) {
    // 명령형 코드
    // 배열의 map() 메서드와 유사한 기능 구현
    // 배열 순환 후, 항목별 변형 후 새 배열로 반환 (결과)

    const mappedArray = [];

    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];

      mappedArray.push(callback(item, index, array));
    }

    return mappedArray;
  }

  const numbers = [2, 9, 21, 34];

  const result = map(numbers, (n) => n ** 2);
  console.log(result); // [4, 81, 441, 1156]
})();

// 적절한 함수 이름과 이해하기 쉬운 주석 설정
(() => {
  //  JSDoc 마크업 언어 사용
  /**
   * 함수의 목적
   * 함수의 매개변수
   * 함수의 반환값
   */

  /**
   * 집합(배열)에서 특정 항목을 걸러주는 기능
   * @param {Array} array 걸러내야 할 원본 배열
   * @param {Function} callback 집합을 순환할 때 마다 실행되는 콜백 함수
   * @returns {Array} 특정 항목이 걸러진 새 배열
   */
  function filter(array, callback) {
    const filteredArray = [];
    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      if (callback(item, index, array)) {
        filteredArray.push(item);
      }
    }

    return filteredArray;
  }

  filter();

  /**
   * 집합(배열)의 모든 항목을 변형하는 기능
   * @param {Array} array 변형할 항목을 포함하는 원본 배열
   * @param {Function} callback 집합을 순환할 때 마다 실행되는 콜백 함수
   * @returns {Array} 변형된 모든 항목을 포함하는 새 배열
   */
  function map(array, callback) {
    const mappedArray = [];
    for (let index = 0, l = array.length; index < l; index++) {
      const item = array[index];
      mappedArray.push(callback(item, index, array));
    }
    return mappedArray;
  }
  map();
})();
