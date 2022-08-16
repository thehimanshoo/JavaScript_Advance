// Form Validation
let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Stops auto form Submission

    if (validateForm()){
        alert('Form is Submitted Successfully');
    }
    else{
        alert('Something Went Wrong');
    }

});

let validateForm = () => {
    return (checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());

  // checkUserName();
  // checkEmail();
  // checkPassword();
  // checkConfirmPassword();
};

  // Username Section

let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#username-feedback');

    // Regular Expression, like what we allow writing, and how we allow
    let regExp = /^[a-zA-Z0-9]{4,30}$/;

    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};


// Email Section

let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');

    // Regular Expression, like what we allow writing, and how we allow
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

// Password Section

let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');

    // Regular Expression, like what we allow writing, and how we allow
    let regExp = /^[A-Za-z]\w{8,16}$/;

    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};

// Confirm Password Section

let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#c_password-feedback');

    // Regular Expression, like what we allow writing, and how we allow
    let regExp = /^[A-Za-z]\w{8,16}$/;

    if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl, inputFeedbackEl);
        return false;
    }
};


// make Valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';

};

// make Invalid
let makeInvalid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-invalid');
    inputEl.classList.remove('is-form-valid');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;

};


// Username field with keyup event
let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup', function () {
   checkUserName();
});


// Email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function () {
    checkEmail();
});


// Password field with keyup event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function () {
    checkPassword();
});


// Confirm Password field with keyup event
let confirmPasswordEl = document.querySelector('#c_password');
confirmPasswordEl.addEventListener('keyup', function () {
    checkConfirmPassword();
});