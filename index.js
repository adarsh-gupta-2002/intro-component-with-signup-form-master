

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const nameBox = document.getElementById('nameBox')
const lastNameBox = document.getElementById('lastNameBox')
const emailBox = document.getElementById('emailBox')
const passwordBox = document.getElementById('passwordBox')

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    
    return (false)
}
form.addEventListener('submit' , (e) =>{
    let errors = 0

    if(firstName.value === '' || firstName.value == null){
        firstName.placeholder = ""
       nameBox.classList.add('active')
       errors += 1
    }
    if(lastName.value === '' || lastName.value == null){
        lastName.placeholder = ""
        lastNameBox.classList.add('active')
       errors += 1
    }
    if(ValidateEmail(email.value) === false){
        emailBox.classList.add('active')
        emailBox.style.color = 'red'
        errors += 1;
    }

    if(password.value === '' || password.value == null){
        password.placeholder = ""
        passwordBox.classList.add('active')
        errors += 1
    }


    if(errors > 0){

        e.preventDefault()
    }
    
})