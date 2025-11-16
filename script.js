// Get form and input elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  Validate();
});

// last display after form successfuly submit
const displaySuccessmsg = (username, email, phone, password, cpassword) => {
  let formco = document.getElementsByClassName("form-control");
  let count = 0;

  for (let i = 0; i < formco.length; i++) {
    if (formco[i].classList.contains("success")) {
      count++;
    }
  }

  if (count === formco.length) {
    username.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    cpassword.value = "";
    alert("Successfully submitted!");
    location.href = "demo.html";
  }
};

// Main validation function
const Validate = () => {
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();

  // Validation of username
  if (usernameval === "") {
    setErrormsg(username, "Username cannot be blank");
  } else if (usernameval.length <= 2) {
    setErrormsg(username, "Username must be at least 3 characters");
  } else if (!/^[A-Za-z]+$/.test(usernameval)) {
    setErrormsg(username, "Username can contain only letters");
  } else {
    setSuccessmsg(username);
  }

  // Validation of email
  if (emailval === "") {
    setErrormsg(email, "Email cannot be blank");
  } else if (!isemail(emailval)) {
    setErrormsg(email, "Not a valid Email");
  } else {
    setSuccessmsg(email);
  }

  // Validation of phone no
  if (phoneval === "") {
    setErrormsg(phone, "phone cannot be blank");
  } else if (phoneval.length != 10) {
    setErrormsg(phone, "ten integer value require");
  } else {
    setSuccessmsg(phone);
  }

  // Validation of password
  if (passwordval === "") {
    setErrormsg(password, "password cannot be blank");
  } else if (passwordval.length < 8) {
    setErrormsg(password, "minimum eight characters require");
  } else {
    setSuccessmsg(password);
  }

  // Validation of confirm password
  if (cpasswordval === "") {
    setErrormsg(cpassword, "confirm password cannot be blank");
  } else if (cpasswordval !== passwordval) {
    setErrormsg(cpassword, "confirm password should be match with password");
  } else if (cpasswordval.length < 8) {
    setErrormsg(cpassword, "minimum eight characters require");
  } else {
    setSuccessmsg(cpassword);
  }

  displaySuccessmsg(username, email, phone, password, cpassword);
};

// Function to show error
function setErrormsg(input, erromsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = erromsgs;
}

// Function to show success
function setSuccessmsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email validation function
const isemail = (emailval) => {
  var atsymbol = emailval.indexOf("@");
  if (atsymbol < 1) return false;
  var dot = emailval.lastIndexOf(".");
  if (dot <= atsymbol + 2) return false;
  if (dot === emailval.length - 1) return false;
  return true; // return true if email passes all checks
};
