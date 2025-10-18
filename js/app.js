const btnSave = document.querySelector(".btnSave");
const message = document.querySelector(".message");

const name = document.querySelector(".nombre");
const email = document.querySelector(".email");
const age = document.querySelector(".edad");
const country = document.querySelector(".pais");

const dataDiv = document.querySelector(".summary");
const savedName = document.querySelector(".nameSave");
const savedEmail = document.querySelector(".emailSave");
const savedAge = document.querySelector(".ageSave");
const savedCountry = document.querySelector(".countrySave");

const previousName = localStorage.getItem("name");
const previousEmail = localStorage.getItem("email");
const previousAge = localStorage.getItem("age");
const previousCountry = localStorage.getItem("country");

if (previousName && previousEmail && previousAge && previousCountry) {
    savedName.textContent = `Name: ${previousName}`;
    savedEmail.textContent = `Email: ${previousEmail}`;
    savedAge.textContent = `Age: ${previousAge}`;
    savedCountry.textContent = `Country: ${previousCountry}`;
}

btnSave.addEventListener("click", () => {
    const nameVal = name.value;
    const emailVal = email.value;
    const ageVal = age.value;
    const countryVal = country.value;
    if (!nameVal || !emailVal || !ageVal || !countryVal) {
        message.textContent = "Please complete all fields.";
        message.style.color = "red";
        if (!nameVal) name.classList.add("error"); else name.classList.remove("error");
        if (!emailVal) email.classList.add("error"); else email.classList.remove("error");
        if (!ageVal) age.classList.add("error"); else age.classList.remove("error");
        if (!countryVal) country.classList.add("error"); else country.classList.remove("error");
        return;
    }

    localStorage.setItem("name", nameVal);
    localStorage.setItem("email", emailVal);
    localStorage.setItem("age", ageVal);
    localStorage.setItem("country", countryVal);

    savedName.textContent = `Name: ${nameVal}`;
    savedEmail.textContent = `Email: ${emailVal}`;
    savedAge.textContent = `Age: ${ageVal}`;
    savedCountry.textContent = `Country: ${countryVal}`;

    message.textContent = "Form submitted successfully.";
    message.style.color = "green";

    name.value = "";
    email.value = "";
    age.value = "";
    country.value = "";
});