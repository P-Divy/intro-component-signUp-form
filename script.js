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
        removeErrorFrom(fname);
    }

    if (lastName === ''){
        errorFunc(lname, 'Last Name cannot be empty');
   }
   else {
       removeErrorFrom(lname);
   }

   if (emailVal === ''){
    errorFunc(email, 'Look Like this is not an email');
  } 
  else {
   removeErrorFrom(email);
  }

  if (passwordVal === ''){
    errorFunc(password, 'Password cannot be empty');
  }
  else {
   removeErrorFrom(password);

  }

} )

function errorFunc(input,message){
    const formControl= input.parentNode;
    formControl.classList.add('error');

    const span = formControl.querySelector('small');
    span.innerText = message;

}

function removeErrorFrom(input) {
	const formControl = input.parentNode;
	formControl.classList.remove('error');
    input.className = 'success';
}


