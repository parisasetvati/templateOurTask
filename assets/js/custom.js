const usernameEl = document.querySelector('#name');

const lastnameEl = document.querySelector('#lastname');

const emailEl = document.querySelector('#email');

const massageEl=document.querySelector('#massage');
const dateEl=document.querySelector('#date');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;
    
    const username = usernameEl.value.trim();
    
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    }else if (!allLetter(usernameEl)) {
        showError(usernameEl, `Username must be enter letter.`);
}
     else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
     }  else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkLastname = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const lastname = lastnameEl.value.trim();

    if (!isRequired(lastname)) {
        showError(lastnameEl, 'Lastname cannot be blank.');
       }else if (!allLetter(lastnameEl)) {
        showError(lastnameEl, `Lastname must be enter letter.`);
}
    else if (!isBetween(lastname.length, min, max)) {
        showError(lastnameEl, `Lastname must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(lastnameEl);
        valid = true;
    }
    return valid;
};
const checkDate = () => {

    let valid = false;

   
    const date = dateEl.value;

    if (!isRequired(date)) {
        showError(dateEl, 'Date cannot be blank.');
   
    } else {
        showSuccess(dateEl);
        valid = true;
    }
    return valid;
};
const checkMassage = () => {

    let valid = false;

    const min = 10,
        max = 250;

    const massage = massageEl.value.trim();

    if (!isRequired(massage)) {
        showError(massageEl, 'Massage cannot be blank.');
    } else if (!isBetween(massage.length, min, max)) {
        showError(massageEl, `Massage must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(massageEl);
        valid = true;
    }
    return valid;
};
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
// const isLetters=value=> value === '/^[A-Za-z]+$/' ? true : false;
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
   
      return true;
      }
      else
      {
    
      return false;
      }
      }
const showError = (input, message) => {
    // get the contact-form element
    const contactform = input.parentElement;
    // add the error class
    contactform.classList.remove('success');
    contactform.classList.add('error');

    // show the error message
    const error =  contactform.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the contact-form element
    const  contactform = input.parentElement;

    // remove the error class
    contactform.classList.remove('error');
    contactform.classList.add('success');

    // hide the error message
    const error =  contactform.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
    isLastnameValid = checkLastname(),
    isEmailValid = checkEmail(),
    isDateValid=checkDate(),
    isMassageValid=checkMassage();
      
    let isFormValid = isUsernameValid &&
    isLastnameValid &&
        isEmailValid &&
        isDateValid &&
       isMassageValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 20) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkUsername();
            break;
            case 'lastname':
                checkLastname();
                break;
        case 'email':
            checkEmail();
            break;
            case 'date':
                checkDate();
                break;
        case 'massage':
            checkMassage();
            break;
      
    }
}));