document.getElementById("btn-submit").addEventListener("click", function () {
  const emailText = document.getElementById("email-field");
  const emailFieldValue = emailText.value;
  const passwordText = document.getElementById("password-field");
  const passwordFieldValue = passwordText.value;

  if (
    emailFieldValue === "Taiab@gmail.com" &&
    passwordFieldValue === "123456"
  ) {
    window.location = "deposit.html";
  } else {
    alert("Please Provide a valid email and password !!!!");
  }
});
