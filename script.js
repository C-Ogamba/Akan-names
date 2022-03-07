"use strict";

const button = document.querySelector("#btn1");
const genderChoice = document.querySelectorAll("#gender");
const showName = document.querySelector(".name");
const overlayButton = document.querySelector("#btn");
overlayButton.addEventListener("click", () => {
  document.querySelector(".overlay").classList.replace("show", "hide");
  document.querySelector(".page2").classList.replace("hide", "show");
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

const femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

button.addEventListener("click", function (x) {
  x.preventDefault();

  // console.log(maleAkanNames[day]);
  generateNames();
});

// generate names
const generateNames = () => {
  let userDateInput = document.querySelector("#date").value;
  let weekDay = new Date(userDateInput);
  let day = weekDay.getDay();

  // console.log(genderChoice);

  for (let gender of genderChoice) {
    // console.log(gender.value);

    let selectedGender = gender.value;
    if (selectedGender === "male") {
      showName.innerText = `Your Akan name is ${maleAkanNames[day]}`;
      // console.log(`Your Akan name is ${maleAkanNames[day]}`);
    } else if (selectedGender === "female") {
      showName.innerText = `Your Akan name is ${femaleAkanNames[day]}`;
      // console.log(`Your Akan name is ${femaleAkanNames[day]}`);
    }
  }
};
