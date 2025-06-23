// {
//   const accordionContainer = document.querySelector(".accordion__container");
//   const accordions = accordionContainer.querySelectorAll(".accordion");

//   const firstAccordion = accordions.item(0);
//   const firstAccordionButton = firstAccordion.querySelector("button");
//   firstAccordionButton.addEventListener("click", () => {
//     firstAccordion.classList.toggle("is-open");
//   });

//   const secondAccordion = accordions.item(1);
//   const secondAccordionButton = secondAccordion.querySelector("button");
//   secondAccordionButton.addEventListener("click", () => {
//     secondAccordion.classList.toggle("is-open");
//   });

//   const thirdAccordion = accordions.item(2);
//   const thirdAccordionButton = thirdAccordion.querySelector("button");
//   thirdAccordionButton.addEventListener("click", () => {
//     thirdAccordion.classList.toggle("is-open");
//   });

//   const fourthAccordion = accordions.item(3);
//   const fourthAccordionButton = fourthAccordion.querySelector("button");
//   fourthAccordionButton.addEventListener("click", () => {
//     fourthAccordion.classList.toggle("is-open");
//   });
// }

// while
// {
//   const accordionContainer = document.querySelector(".accordion__container");
//   const accordions = accordionContainer.querySelectorAll(".accordion");

//   let i = 0;
//   let l = accordions.length;

//   while (i < l) {
//     const firstAccordion = accordions.item(i);
//     const firstAccordionButton = firstAccordion.querySelector("button");
//     firstAccordionButton.addEventListener("click", () => {
//       firstAccordion.classList.toggle("is-open");
//     });

//     i = i + 1;
//   }
// }

// for
// {
//   const accordionContainer = document.querySelector(".accordion__container");
//   const accordions = accordionContainer.querySelectorAll(".accordion");

//   for (let i = 0, l = accordions.length; i < l; i += 1) {
//     const firstAccordion = accordions.item(i);
//     const firstAccordionButton = firstAccordion.querySelector("button");
//     firstAccordionButton.addEventListener("click", () => {
//       firstAccordion.classList.toggle("is-open");
//     });
//   }
// }

// for..of
// {
//   const accordionContainer = document.querySelector(".accordion__container");
//   const accordions = accordionContainer.querySelectorAll(".accordion");
//   for (const accordion of accordions) {
//     const accordionButton = accordion.querySelector("button");
//     accordionButton.addEventListener("click", () => {
//       accordion.classList.toggle("is-open");
//     });
//   }
// }

// forEach
{
  const accordionContainer = document.querySelector(".accordion__container");
  const accordions = accordionContainer.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector("button");
    accordionButton.addEventListener("click", () => {
      accordion.classList.toggle("is-open");
    });
  });
}
