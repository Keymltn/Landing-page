let inputPasswordEl = document.getElementById("input_password");
let inputEmailEl = document.getElementById("input_email");
let formSubmitEl = document.getElementById("landing_form");
let demandEl = document.getElementById("landing_demand");
let submittedEl = document.getElementById("submitted_img");

formSubmitEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputPasswordEl.value === "" || inputPasswordEl.value === " ") {
    demandEl.innerHTML = "Please fill the input <mark>**</mark>";
  } else if (inputPasswordEl.value.length < 8) {
    demandEl.innerHTML = "Please write more than 8 characters <mark>**</mark>";
  } else if (inputPasswordEl.value.search(/[0-9]/) === -1) {
    demandEl.innerHTML = "Please write at least a number <mark>**</mark>";
  } else if (inputPasswordEl.value.search(/[A-Z]/) === -1) {
    demandEl.innerHTML = "Please write at least 1 upper case charecter <mark>**</mark>";
  } else {
    submittedEl.classList.remove("landing-none");
    alert("SUCCESFULLY SUBMITTED!");
    inputPasswordEl.value = "";
    inputEmailEl.value = "";
    demandEl.innerHTML = '';
  }
});
