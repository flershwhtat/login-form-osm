const emailInput = document.getElementById("email-input");
const emailLabel = document.getElementById("email-label");

emailInput.addEventListener("input", function () {
  if (emailInput.value !== "") {
    emailLabel.classList.add("filled");
  } else {
    emailLabel.classList.remove("filled");
  }
});
