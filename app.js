const bright = document.querySelector('.brigth')
const crossIcon = document.querySelector('.crossIcon')
const createPage = document.querySelector('.createPage')
const createAccount = document.querySelector('.CreateAccount')
const login = document.querySelector('.Login')
const rightChild = document.querySelector('.rightChild')

/*console.log(bright)
console.log(crossIcon)
console.log(createPage)
console.log(createAccount)
console.log(login)
console.log(rightChild)*/


// Cross Button Function
crossIcon.addEventListener('click',()=>{
    createPage.style.display = 'none'
    bright.style.display = 'none'
    createAccount.style.zIndex = 1;
    login.style.zIndex = 1;
    


})
const openSignUpForm = ()=>{
    createPage.style.display = 'block'
    bright.style.display = 'block'
    createAccount.style.zIndex = 0;
    login.style.zIndex = 0;
    
    
}
createAccount.addEventListener('click',openSignUpForm)

// signUp Button and Form fields
const signUp = document.querySelector('.signUp')
const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const cellNumber = document.querySelector('.cellNumber')
const password = document.querySelector('.passWord')
const day = document.querySelector('.day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const gender = document.getElementsByName('inlineRadioOptions')

const users = JSON.parse(localStorage.getItem('users')) || []

signUp.addEventListener('click' ,signUpHander)

//                     signUp Function

function signUpHander() {
    let genValue;
    for (let i= 0; i<gender.length; i++) {
        if(gender[i].checked) genValue = gender[i].value
    } 
    if(firstName.value !== "" && lastName.value !== "" && cellNumber.value !== "" && password.value !== "" && genValue !== undefined) {
        if (password.value.length < 8) return alert("password should contain 8 characters")

        const usersData = {
            firstName: firstName.value,
            lastName : lastName.value,
            mobileNo : cellNumber.value,
            password : password.value,
            dateOfBirth : new Date(`${year.value}-${month.value}-${day.value}`),
            gender: genValue
        }
        users.push(usersData)
        localStorage.setItem('users', JSON.stringify(users))
        alert("User SignUp Successfully")

        firstName.value = ""
        lastName.value = ""
        cellNumber.value = ""
        password.value = ""
    
    // console.log(usersData)
    }else {
        alert("Please Fillup all the fields to see the magic")
    }

} 

//         Login Function

const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')

function loginHandler(){
    console.log(emailInput.value)
    
    if(!emailInput.value || !passwordInput.value) return alert("Please write email and password to continue")
  const userCheck =  users.filter((item) =>{
    return item.mobileNum === emailInput.value
  })
//   console.log(userCheck)
  if(!userCheck.length) return alert("This user is not registered, kindly create an account first")
  if(userCheck[0].password == passwordInput.value) {
    alert("user is logging in")
    
    localStorage.setItem('isLoggedInUser', JSON.stringify(userCheck[0]))


    window.location.href="./dashboard/index.html";


} else {
    alert("password is incorrect")
}

}

login.addEventListener('click',loginHandler)
   
//    logging in with enter Btn

passwordInput.addEventListener('keydown', (a)=> {
    if(a.key === 'Enter') {
        console.log('je')
        loginHandler()
    }
})


