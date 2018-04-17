
// insertAdjacentElement
// beforebegin
// afterbegin
// beforeend
// afterend

var body = document.getElementsByTagName('body')[0];

var formEl = document.createElement('form');
formEl.name = "login";
formEl.action = "google.com";

body.insertAdjacentElement('afterbegin', formEl);

var inputAgeEl = document.createElement('input');
inputAgeEl.type = "text";
inputAgeEl.name = "age";
inputAgeEl.placeholder = "enter your age";

var inputUsernameEl = document.createElement('input');
inputUsernameEl.type = "text";
inputUsernameEl.name = "username";
inputUsernameEl.placeholder = "username";

var inputDateEl = document.createElement('input');
inputDateEl.type = "text";
inputDateEl.name = "date";
inputDateEl.placeholder = "enter date";

var inputSubmitEl = document.createElement('input');
inputSubmitEl.type = "submit";
inputSubmitEl.value = "Validate Me";

var arrayInput = [];

arrayInput.push(inputAgeEl, inputUsernameEl, inputDateEl, inputSubmitEl);
for ( var i = 0; i < arrayInput.length; i++ ) {
  formEl.insertAdjacentElement('beforeend', arrayInput[i]);
}

for ( var i = 0; i < arrayInput.length; i++ ) {
  arrayInput[i].style.display = "block";
  arrayInput[i].style.marginBottom = "1em";
}

inputSubmitEl.addEventListener('click', validate);

// form validation
function validate(e) {
  e.preventDefault();
  
  // age input field validation
  if ( inputAgeEl.value === "" ) {
    alert ( "Please enter your age" )
    inputAgeEl.focus();
    return false;
  }

  var regExpNumber = /[^0-9]/;

  if ( regExpNumber.test(inputAgeEl.value) ) {
    alert( "Age field should contains only numbers" );
    inputAgeEl.focus();
    return false;
  }
  
  // name input filed validation
  if ( inputUsernameEl.value === "" ) {
    alert ( "Please enter your username, it should start from 'user_" )
    inputUsernameEl.focus();
    return false;
  }

  var regExpUser = /user_/;

  if ( !regExpUser.test(inputUsernameEl.value) || inputUsernameEl.value.match(regExpUser).index !== 0 ) {
    alert ( "username should start from 'user_'" )
    inputUsernameEl.focus();
    return false;
  }
  
  // date input filed validation
  if ( inputDateEl.value === "" ) {
    alert ( "Please enter current date (format dd/mm/yyyy)" )
    inputDateEl.focus();
    return false;
  }

  var regExpDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
  
  if ( !regExpDate.test(inputDateEl.value) ) {
    alert ( "Your data is invalid, format should be dd/mm/yyyy" )
    inputDateEl.focus();
    return false;
  }

  if ( regExpDate.test(inputDateEl.value ) ) {
    // Parse the date parts to integers
    let parts = inputDateEl.value.split('/');
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if ( year < 1000 || year > 3000 || month == 0 || month > 12 ) {
      alert ( "Your data is invalid" );
      inputDateEl.focus();
      return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if ( year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ) {
      monthLength[1] = 29;
    }
    
    // Check the range of the day
    if ( day == 0 || day > monthLength[month - 1] ) {
      alert ( 'Your data is invalid' );
      inputDateEl.focus();
      return false;
    }
  }

}



