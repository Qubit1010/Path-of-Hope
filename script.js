// Contact Form Data Integration
const formName = document.querySelector("#name");
const formEmail = document.querySelector('#email')
const formMessage = document.querySelector('#message')

let nameValue = "";
let emailValue = "";
let messageValue = "";


// Contact Form Data Post Function
async function formDataHandler(form) {
  await fetch(
    "https://website-test-b9834-default-rtdb.firebaseio.com/contact-data.json",
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Contact Form Data Get Function
async function getFormDataHandler() {
  try {
    const response = await fetch(
      "https://website-test-b9834-default-rtdb.firebaseio.com/contact-data.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    console.log(data);
    const loadedData = [];

    for(const key in data){
      loadedData.push({
        id: key,
        name: data[key].name,
        email: data[key].email,
        message: data[key].message,
      })  
    }  

    console.log(loadedData.length)
  } catch (error) {
    setError(error.message);
  }
}

getFormDataHandler();

function nameUpdateValue(e) {
  nameValue = e.target.value;
  return nameValue
}

function emailUpdateValue(e) {
  emailValue = e.target.value;
  return emailValue
}

function messageUpdateValue(e) {
  messageValue = e.target.value;
  return messageValue
}


function submitHandler(event) {
  event.preventDefault();
  
  // could add validation here...
  
  const formData = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };
  
  formDataHandler(formData);
  
  // setIsSuccess(true);
  
  // setTimeout(() => {
    //   setIsSuccess(false);
    // }, "4000");
    
    // }
    
    console.log(formData);
}
  
  
formName.addEventListener('input', nameUpdateValue);
formEmail.addEventListener('input', emailUpdateValue);
formMessage.addEventListener('input', messageUpdateValue);