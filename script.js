var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = [" ", "!", "#", "$", '%', "'", "(", ")", "*", "&", "+", ",", "-", ".", "\"", "/", ":", ";", "<", "\\",  "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
    var length = 0;
    var result = "";
    var availableChars = []
    var lowerYN = false;
    var upperYN = false;
    var numYN = false;
    var specialYN = false;


    while (length < 8 || length >128 || isNaN(length)){
    length = window.prompt("How many characters would you like your password to include? Please choose a number between 8 and 128.");
    }
    while (lowerYN == false && upperYN == false && numYN == false && specialYN == false){
    alert("Please answer the following:")
    lowerYN = confirm("Would like lower case letters in your password?");
    upperYN = confirm("Would like upper case letters in your password?");
    numYN = confirm("Would like numbers in your password?");
    specialYN = confirm("Would like special charaters in your password?");
    }
    if (lowerYN){
    availableChars = availableChars.concat(lowerCasedCharacters)
    }
    if (upperYN){
    availableChars = availableChars.concat(upperCasedCharacters)
    }
    if (numYN){
    availableChars = availableChars.concat(numericCharacters)
    }
    if (specialYN){
    availableChars = availableChars.concat(specialCharacters)
    }
    var result = ""
    
    for (var i = 0; i<length; i++) {
    result = result + availableChars[Math.floor(Math.random() * availableChars.length)];
    }
// console.log(result);


    return result
}