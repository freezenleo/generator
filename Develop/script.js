// Assignment code here
var confirmNumeric = '0123456789';
var confirmUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var confirmLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var confirmSpecial = '!@#$%^&*()_+{}|:<>?-=[]\,/';

var generatePassword = function () {
  var promptLength = parseInt(window.prompt ('How many characters would you like your password to containt?'));
  if (promptLength <8 || promptLength > 129) {
    window.alert('Password length must be between 8 to 128 characters');
    return generatePassword();
  }
  else {
  confirmSpecial = window.confirm('Click Ok to cinfirm including special characters'); 
  confirmNumeric = window.confirm('Click Ok to confirm including numeric characters');
  confirmLowerCase = window.confirm('Click Ok to confirm including lower case characters');
  confirmUpperCase = window.confirm('Click Ok to confirm including uppercase characters');
  }

  if (confirmSpecial && confirmNumeric && confirmLowerCase && confirmUpperCase) {
    allChars = confirmNumeric + confirmUpperCase + confirmLowerCase + confirmSpecial;
  }

  else if (confirmSpecial && confirmNumeric && confirmLowerCase){
    allChars = confirmNumeric + confirmLowerCase + confirmSpecial;
  }
  else if (confirmSpecial && confirmNumeric && confirmUpperCase){
    allChars = confirmNumeric + confirmUpperCase + confirmSpecial;
  }
  else if (confirmSpecial && confirmLowerCase && confirmUpperCase){
    allChars = confirmUpperCase + confirmLowerCase + confirmSpecial;
  }
  else if (confirmNumeric && confirmLowerCase && confirmUpperCase){
    allChars = confirmNumeric + confirmUpperCase + confirmLowerCase;
  }
  else if (confirmSpecial && confirmNumeric){
    allChars = confirmNumeric + confirmSpecial;
  }
  else if (confirmSpecial && confirmLowerCase){
    allChars = confirmLowerCase + confirmSpecial;
  }
  else if (confirmSpecial && confirmUpperCase){
    allChars = confirmUpperCase + confirmSpecial;
  }
  else if (confirmNumeric && confirmLowerCase){
    allChars = confirmNumeric + confirmLowerCase;
  }
  else if (confirmNumeric && confirmUpperCase){
    allChars = confirmNumeric + confirmUpperCase;
  }
  else if (confirmLowerCase && confirmUpperCase){
    allChars = confirmUpperCase + confirmLowerCase;
  }
  else if (confirmSpecial){
    allChars = confirmSpecial;
  }
  else if (confirmNumeric){
    allChars = confirmNumeric;
  }
  else if (confirmLowerCase){
    allChars = confirmLowerCase;
  }
  else if (confirmUpperCase){
    allChars = confirmUpperCase;
  }

  

  return writePassword(ranPasswordArray.map(function(x){ return x[Math.floor(Math.random()*x.length)]})).join('');                      
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
