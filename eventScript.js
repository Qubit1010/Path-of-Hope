const firstInput = document.querySelector("#first-email");
const firstForm = document.querySelector(".first-event-form");
const firstPopup = document.querySelector(".first-pop-up");
const firstMaxPopup = document.querySelector(".first-max-pop-up");
const firstRegisteredNumber = document.querySelector(".first-registered-number");

const secondInput = document.querySelector("#second-email");
const secondForm = document.querySelector(".second-event-form");
const secondPopup = document.querySelector(".second-pop-up");
const secondMaxPopup = document.querySelector(".second-max-pop-up");
const secondRegisteredNumber = document.querySelector(".second-registered-number");


// console.log(secondForm, secondInput, secondPopup, secondMaxPopup, secondRegisteredNumber)

let firstInputValue = "";
let secondInputValue = "";

// First Input Event Form Data Post Function
async function firstFormDataHandler(form) {
  await fetch(
    "https://path-of-hope-default-rtdb.firebaseio.com/upcoming-event-first-input.json",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// First Input Event Form Data Get Function
async function firstGetFormDataHandler() {
  try {
    const response = await fetch(
      "https://path-of-hope-default-rtdb.firebaseio.com/upcoming-event-first-input.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log(data);

    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        email: data[key].email,
      });
    }

    firstRegisteredNumber.textContent = loadedData.length
    console.log(loadedData.length);

    if(loadedData.length >= 10) {
      firstForm.style.display = "none";
      firstMaxPopup.style.display = "block";
    } else {
      firstForm.style.display = "block";
      firstMaxPopup.style.display = "none";
    }

  } catch (error) {
    setError(error.message);
  }
}

firstGetFormDataHandler();

function firstUpdateValue(e) {
  firstInputValue = e.target.value;
  return firstInputValue;
}

function firstSubmitHandler(event) {
  event.preventDefault();

  const formData = {
    email: firstInputValue,
  };

  firstFormDataHandler(formData);

  firstForm.style.display = "none";
  firstPopup.style.display = "block";
}


// Second Input Event Form Data Post Function
async function secondFormDataHandler(form) {
  await fetch(
    "https://path-of-hope-default-rtdb.firebaseio.com/upcoming-event-second-input.json",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Second Input Event Form Data Get Function
async function secondGetFormDataHandler() {
  try {
    const response = await fetch(
      "https://path-of-hope-default-rtdb.firebaseio.com/upcoming-event-second-input.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log(data);

    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        email: data[key].email,
      });
    }

    secondRegisteredNumber.textContent = loadedData.length
    console.log(loadedData.length);

    if(loadedData.length >= 10) {
      secondForm.style.display = "none";
      secondMaxPopup.style.display = "block";
    } else {
      secondForm.style.display = "block";
      secondMaxPopup.style.display = "none";
    }

  } catch (error) {
    setError(error.message);
  }
}

secondGetFormDataHandler();

function secondUpdateValue(e) {
  secondInputValue = e.target.value;
  return secondInputValue;
}

function secondSubmitHandler(event) {
  event.preventDefault();

  const formData = {
    email: secondInputValue,
  };

  secondFormDataHandler(formData);

  secondForm.style.display = "none";
  secondPopup.style.display = "block";
}

console.log(firstInput);
console.log(secondInput);
firstInput.addEventListener("input", firstUpdateValue);
secondInput.addEventListener("input", secondUpdateValue);
