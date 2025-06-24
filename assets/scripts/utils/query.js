/* eslint-disable no-unused-vars */

// document.getElementById(idName)
function byId(idName) {
  return document.getElementById(idName);
}

// document.querySelector(selector)
function query(selector) {
  return document.querySelector(selector);
}

// document.querySelectorAll(selector)
function queryAll(selector) {
  return document.querySelectorAll(selector);
}
// element.addEventListener(eventType, listener, ?options)
function on(element, type, listener) {
  element.addEventListener(type, listener);
}
