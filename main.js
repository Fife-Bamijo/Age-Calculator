const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btnEl = document.getElementById("btn");

let isValid = false;
const dayOutput = document.getElementById("day-span");
const monthOutput = document.getElementById("month-span");
const yearOutput = document.getElementById("year-span");

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

btnEl.addEventListener("click", () => {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    dayOutput.textContent = ageDay;
    monthOutput.textContent = ageMonth;
    yearOutput.textContent = ageYears;
  } else {
    alert("error");
  }
});

dayInput.addEventListener("input", () => {
  if (dayInput.value > 31) {
    isValid = false;

    dayError.textContent = "Input is invalid";
    return;
  } else if (dayInput.value === 0) {
    isValid = false;
    dayError.textContent = "Input is invalid";
    return;
  } else {
    isValid = true;
    dayError.textContent = " ";
  }
});

monthInput.addEventListener("input", () => {
  if (monthInput.value > 12) {
    isValid = false;
    monthError.textContent = "Input is invalid";
    return;
  } else if (dayInput.value === 0) {
    isValid = false;
    monthError.textContent = "Input is invalid";
    return;
  } else {
    isValid = true;
    monthError.textContent = " ";
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value > 2024) {
    isValid = false;
    yearError.textContent = "Input is invalid";
    return;
  } else if (yearInput.value === 0) {
    isValid = false;
    yearError.textContent = "Input is invalid";
    return;
  } else {
    isValid = true;
    yearError.textContent = " ";
  }
});
