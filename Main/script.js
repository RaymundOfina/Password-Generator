// Different arrys for characters used.
var specialKeys = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var upperKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Generates button
var generateBtn = document.querySelector("#generate");


// Function to prompt user for password options
function getPasswordOptions() {

    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How long would you like your password to be?')
    )};

    // A check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Error,  Please enter a number response');
    return null;
  }

  // function to prompt password length
function passwordGen() {
    var length = prompt("Choose password length, must be between 8 - 128 characters.");
    
    if (length >= 8 && length <= 128) {
        window.alert("Your password will be " + length + " characters!")
    } else {
        window.alert("Password must be 8 - 128 characters.");
        lengthPrompt();
    }

    // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  )};
