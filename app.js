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

function showNotification() {
  const notificationBox = document.querySelector(".user-store");
  const usernameBox = document.querySelector(".header-username-box");

  notificationBox.style.display = "block";
  usernameBox.style.backgroundColor = "#656266";
}

function hideNotification() {
  const notificationBox = document.querySelector(".user-store");
  const usernameBox = document.querySelector(".header-username-box");

  notificationBox.style.display = "none";
  usernameBox.style.backgroundColor = "#49484a";
}

function showAlert() {
  const alertBox = document.querySelector(".user-alert");
  const notificationIcon = document.querySelector(".header-notification");

  alertBox.style.display = "block";
  notificationIcon.style.backgroundColor = "#656266";
}

function hideAlert() {
  const alertBox = document.querySelector(".user-alert");
  const notificationIcon = document.querySelector(".header-notification");

  alertBox.style.display = "none";
  notificationIcon.style.backgroundColor = "#49484a";
}
