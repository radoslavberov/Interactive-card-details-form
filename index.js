let cardHolderName = document.querySelector("#name");
let cardHolderNumber = document.querySelector('#card-number');
let cardHolderMonth = document.querySelector('#month');
let cardHolderYear = document.querySelector('#year');
let cardHolderCvc = document.querySelector('#cvc');
let personCardName = document.querySelector('#person-name');
let personCardNumber = document.querySelector('#person-card-number');
let personCardExpDate = document.querySelector('#person-card-exp-date');
let personCardCvc = document.querySelector('#person-cvc');
let modalContainer = document.querySelector(".modal");
let closeModalButton = document.querySelector(".close-modal");

let form = document.querySelector('form');

const checkUserName = () => {
    let check = false;
    let min = 3;
    let max = 20;
    let name = cardHolderName.value
    if(!isRequired(name)){
        showError(cardHolderName, 'Name cannot be empty!');
    }else if(!isBetween(name.length, min, max)){
        showError(cardHolderName, `Name must be between ${min} and ${max} symbols!`)
    }else{
        check = true;
    }
    return check;
}
const checkCardNUmber = () => {
    let check = false;
    let cardNumber = cardHolderNumber.value;
    if (!isRequired(cardNumber)) {
        showError(cardHolderNumber, 'Card number cannot be empty!');
    } else if (!isCardNumberValid(cardNumber)) {
        console.log(cardNumber);
        showError(cardHolderNumber, 'Card number is not valid.')
    }else{
        check = true;
    }
    return check;
}
const checkMonth = () => {
    let check = false;
    let daysValue = cardHolderMonth.value
    if (!isRequired(daysValue)) {
        showError(cardHolderMonth, 'Month cannot be empty!');
    }else{
        check = true;
    }
    return check;
}

const checkYear = () => {
    let check = false;
    let yearsValue = cardHolderYear.value
    if (!isRequired(yearsValue)) {
        showError(cardHolderYear, 'Year cannot be empty!');
    }else{
        check = true;
    }
    return check; 
}

const checkCVC = () =>{
    let check = false;
    let max = 3;
    let min = 3;
    let cvcCode = cardHolderCvc.value
    if (!isRequired(cvcCode)) {
        showError(cardHolderCvc, 'CVC cannot be empty!');
    }else if(!isBetween(cvcCode.length, min, max)){
        showError(cardHolderCvc, `CVC must be between ${min} and ${max} symbols!`);
    }else{
        check = true;
    }
    return check;
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => {
    return length >= min && length <= max;
  };

const isCardNumberValid = (value) =>{
    let regex = /^\d{4} \d{4} \d{4} \d{4}$/;
    return regex.test(value)
}

const showError = (input, message) => {
    let formField = input.parentElement;

    formField.classList.add('error');

    let error = formField.querySelector('small');
    error.textContent = message;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let isNameValid = checkUserName();
    let isCardNumberValid = checkCardNUmber();
    let isMonthValid = checkMonth();
    let isYearValid = checkYear();
    let isCvcValid = checkCVC();

    let formInputs = isNameValid && isCardNumberValid && isMonthValid && isYearValid && isCvcValid;
    if(formInputs){
        personCardNumber.textContent = cardHolderNumber.value;
        personCardName.textContent = cardHolderName.value;
        personCardExpDate.textContent = cardHolderMonth.value + '/' + cardHolderYear.value;
        personCardCvc.textContent = cardHolderCvc.value;
        form.style.display = "none";
        modalContainer.style.display = "flex";
    }
    
});
closeModalButton.addEventListener('click', function(){
    modalContainer.style.display = "none";
    form.style.display = "flex";
})