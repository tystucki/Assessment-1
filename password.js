// create a variable called 'password' and set it equal to your password.
// check to see if the password matches your string 'password', if so grant permission.
// check to see if the password is at least 10 characters.
// check to see if the password is less that 20 characters.
// check to see if password contains 'Common Passwords'.
// check to see if password includes at least one number.
// any other password, deny permission.

let password = 'CodingIsCool00'
if (password === 'CodingIsCool00') {
    console.log('ACCESS GRANTED')
} else if(password.length < 10) {
    console.log('Password must be at least 10 Characters!')
} else if(password.length >= 20)
        {console.log('Password must be less than 20 Characters')}
     else if(password === 'password12345') {
    console.log('Try Again!')
} else if(password !== [0-9]){
    console.log("Password requires at least one number.")
} else 
{ console.log('PERMISSION DENIED')}