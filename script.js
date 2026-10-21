const treatmentList = document.querySelector(".treatment-list");
const previousButton = document.querySelector('[aria-label="Previous treatments"]');
const nextButton = document.querySelector('[aria-label="Next treatments"]');

const updateCarouselButtons = () => {
  previousButton.disabled = treatmentList.scrollLeft <= 1;
  nextButton.disabled =
    treatmentList.scrollLeft + treatmentList.clientWidth >= treatmentList.scrollWidth - 1;
};

const scrollTreatments = (direction) => {
  const firstCard = treatmentList.querySelector(".treatment-card");
  const gap = Number.parseFloat(getComputedStyle(treatmentList).columnGap);

  treatmentList.scrollBy({
    left: direction * (firstCard.getBoundingClientRect().width + gap),
    behavior: "smooth",
  });
};

previousButton.addEventListener("click", () => scrollTreatments(-1));
nextButton.addEventListener("click", () => scrollTreatments(1));
treatmentList.addEventListener("scroll", updateCarouselButtons, { passive: true });
window.addEventListener("resize", updateCarouselButtons);

updateCarouselButtons();
