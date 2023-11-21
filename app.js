function toggleDropdown() {
  const dropdownContainer = document.querySelector(".setup-guide");
  dropdownContainer.classList.toggle("active");
}

function toggleAccordion(index) {
  const accordionBoxes = document.querySelectorAll(".accordion-box");
  accordionBoxes.forEach((item, i) => {
    if (i === index - 1) {
      item.classList.toggle("close");
    } else {
      item.classList.add("close");
    }
  });
}
