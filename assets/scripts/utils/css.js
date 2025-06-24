/* eslint-disable no-unused-vars */

// --------------------------------------------------------------------------
// 📌 유틸리티 함수 만들기
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// getStyle(element, propertyName, ?pseudoElement): propertyValue
const getStyle = (element, propertyName, pseudoElement) => {
  const elementStyles = getComputedStyle(element, pseudoElement);
  const propertyValue = elementStyles.getPropertyValue(propertyName);
  return propertyValue;
};

// --------------------------------------------------------------------------
// setStyle(element, propertyName, propertyValue): element
const setStyle = (element, propertyName, propertyValue) => {
  // 요소에 스타일 적용(쓰기)
  element.style.setProperty(propertyName, propertyValue);
  return element;
};
// --------------------------------------------------------------------------
// css(element, propertyName, ?propertyValue): element
const css = (element, propertyName, propertyValue, pseudoElement) => {
  // 속성 값이 전달되었을 떄(스타일 쓰기)
  if (propertyValue) {
    const styledElement = setStyle(element, propertyName, propertyValue);
    return styledElement;
  }
  // 속성 값이 전달되지 않았을 떄(스타일 읽기)
  else {
    const propertyValue = getStyle(element, propertyName, pseudoElement);
    return propertyValue;
  }

  // 읽기 목적으로 css 함수를 사용할때, 가상 요소 스타일을 읽으려면 세번 째 인수를 비워는 방법
  // > 세 번째 인수로 falsy한 값을 넣는다 (대표적으로 undefined을 넣으며, 0은 헷갈릴 수 있다)
  // css(tester, 'content', undefined, '::before')
};
