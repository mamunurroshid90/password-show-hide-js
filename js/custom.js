const password = document.getElementById("password");
const eye_icon = document.getElementById("eye_icon");

eye_icon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eye_icon.src = "/images/eye-open.png";
  } else {
    password.type = "password";
    eye_icon.src = "/images/eye-close.png";
  }
});
