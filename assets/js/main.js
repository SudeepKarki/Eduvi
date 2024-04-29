// // Tab Nav Active State

const buttons = document.querySelectorAll(".tab-nav__link");

function handleButtonClick(event) {
  event.preventDefault();
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  event.target.classList.add("active");
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

buttons[0].classList.add("active");

//  View Password
const passwordField = document.getElementById("InputPassword");
const toggleButton = document.getElementById("ViewPass");

toggleButton.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    // Need to hide eye icon and display crossed eye icon -- crossed eye icon not available
  } else {
    passwordField.type = "password";
    // Need to hide crossed eye icon and display eye icon
  }
});
