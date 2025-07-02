/* global gsap*/

{
  const body = document.body;
  const modal_open_button = document.querySelector("main .modal-open-button");
  const modal_overlay = document.querySelector(".modal-overlay");
  const waveHand = document.querySelector(".wave-hand");

  modal_open_button.addEventListener("click", openModalDialog);
  modal_overlay.addEventListener("click", closeModalDialog);

  animateRisingUp();

  function openModalDialog() {
    body.classList.add("modal-is-open");
    animateWaveHand();
  }

  function closeModalDialog(e) {
    const target = e.target;

    if (
      !target.closest(".modal-dialog") ||
      target.closest(".modal-close-button")
    )
      body.classList.remove("modal-is-open");
  }

  function animateRisingUp() {
    gsap.from(".point-hand", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.inOut4",
      repeat: -1,
      repeatDelay: 0.4,
      yoyo: true,
    });
  }

  function animateWaveHand() {
    gsap
      .timeline({ default: { duration: 0.15 } })
      .from(waveHand, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(3)",
      })
      .set(waveHand, { TransformOrigin: "center bottom" })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: -15 })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: -15 })
      .to(waveHand, { rotation: 15 })
      .to(waveHand, { rotation: 0 });
  }
}
