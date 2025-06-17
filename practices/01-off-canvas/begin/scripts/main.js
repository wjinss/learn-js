const siteContainer = document.querySelector(".site-container");
const onOffBtn = siteContainer.querySelector("button");
const body = document.querySelector("body");
const OFFSITE_OPEN_CLASSNAME = "offsite-is-open";

const handelBtnClick = () => {
  body.classList.toggle(OFFSITE_OPEN_CLASSNAME);
};
onOffBtn.addEventListener("click", handelBtnClick);
