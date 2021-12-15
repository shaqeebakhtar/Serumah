const nav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const questions = document.querySelectorAll(".question");
const accordions = document.querySelectorAll(".accordion-item");

const carouselContainer = document.querySelector(".carousel__track-container");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

questions.forEach((question, i) => {
  question.addEventListener("click", () => {
    const visibility = accordions[i].getAttribute("data-visible");

    if (visibility === "false") {
      accordions[i].setAttribute("data-visible", true);
    } else {
      accordions[i].setAttribute("data-visible", false);
    }
  });
});

btnRight.addEventListener("click", () => {
  carouselContainer.style.transform = "translateX(-40%)";
  btnRight.classList.add("no-slide");
  btnLeft.classList.remove("no-slide");
});

btnLeft.addEventListener("click", () => {
  carouselContainer.style.transform = "translateX(0)";
  btnLeft.classList.add("no-slide");
  btnRight.classList.remove("no-slide");
});
