// create a variable called 'password' and set it equal to your password.
// check to see if the password matches your string 'password', if so grant permission.
// check to see if the password is at least 10 characters.
// check to see if the password is less that 20 characters.
// check to see if password contains 'Common Passwords'.
// check to see if password includes at least one number.
// any other password, deny permission.



let password = 'Abcdefg123'
// checks variables to make sure requirements are met.
let minChars = false
let numCheck = false
let upperCheck = false
let letterCheck = false

for (let i = 0; i < password.length; i++){
    //checking if the character can be converted to a number data type
    if(isNaN(+password[i])){
        numCheck = true
        console.log(password[i])
    }
    // checking if the number is uppercase
    if(password[i] === password[i].toUpperCase() && isNaN(+password[i])){
    upperCheck = true
 }
}
// check that the password has a letter.
if(/[a-zA-Z].test(password)/){
letterCheck = true
}


// check that password meets minimum and maximum characters.
if(password.length >= 10 && password.length <= 20){
minChars = true
} 

if(minChars && letterCheck && upperCheck && numCheck){
    console.log('Your password fills all the requirements!')
} else {
    console.log("Password does not fill all requirements!")
}
