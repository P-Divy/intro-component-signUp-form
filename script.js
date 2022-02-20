const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit' , e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();

    if (firstName === ''){
         errorFunc(fname, 'First Name cannot be empty');
    }
    else {
        successFunc(fname);
    }

    if (lastName === ''){
        errorFunc(lname, 'Last Name cannot be empty');
   }
   else {
       successFunc(lname);
   }

   if (emailVal === ''){
    errorFunc(email, 'Look Like this is not an email');
  } 
//   else if(!isValid(email)){
//       errorFunc(email, 'Look Like this is not an email');
//   }
  else {
    successFunc(email);
  }

  if (passwordVal === ''){
    errorFunc(password, 'Password cannot be empty');
  }
  else {
   successFunc(password);
  }

} )

function errorFunc(input,message){
    const formControl= input.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    input.className += 'error';
    span.className += 'error-text';
    input.style.color = "hsl(0, 100%, 74%)";
    if (input!==email){
        input.value= ' ';
    }
    else{
        input.style.color = "hsl(0, 100%, 74%)";
        input.value = "email@example/com";
    }

}

function successFunc(input){
    input.className += 'success';

}

// function isValid(email){
//     var re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     return re.test(String(email).toLowerCase());
// }

