// Assignment code here
// variables
var promptLength;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecial;
var allChars;

// variable values
numeric = '0123456789';
upperCase = 'abcdefghijklmnopqrstuvwxyz';
lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
special = '!@#$%^&*()_+-=[]\{}|"./<>?`~';

var generatePassword = function () {
  //ask for conditions
  var promptLength = parseInt(window.prompt ('How many characters would you like your password to containt?'));
  
  if (promptLength <8 || promptLength > 129) {
    window.alert('Password length must be between 8 to 128 characters');
    return generatePassword();
  }
  else if (!promptLength){
    alert("This cannot leave blank");
  }

  else {
  confirmSpecial = window.confirm('Click Ok to cinfirm including special characters'); 
  confirmNumeric = window.confirm('Click Ok to confirm including numeric characters');
  confirmLowerCase = window.confirm('Click Ok to confirm including lower case characters');
  confirmUpperCase = window.confirm('Click Ok to confirm including uppercase characters');
  }

  //set conditions for different combinations
  if (confirmSpecial && confirmNumeric && confirmLowerCase && confirmUpperCase) {
    allChars = special + numeric + lowerCase + upperCase;
  }

  else if (confirmSpecial && confirmNumeric && confirmLowerCase){
    allChars = special + numeric + lowerCase;
  }
  else if (confirmSpecial && confirmNumeric && confirmUpperCase){
    allChars = special + numeric + upperCase;
  }
  else if (confirmSpecial && confirmLowerCase && confirmUpperCase){
    allChars = special + lowerCase + special;
  }
  else if (confirmNumeric && confirmLowerCase && confirmUpperCase){
    allChars = numeric + upperCase + lowerCase;
  }
  else if (confirmSpecial && confirmNumeric){
    allChars = numeric + special;
  }
  else if (confirmSpecial && confirmLowerCase){
    allChars = lowerCase + special;
  }
  else if (confirmSpecial && confirmUpperCase){
    allChars = upperCase + special;
  }
  else if (confirmNumeric && confirmLowerCase){
    allChars = numeric + lowerCase;
  }
  else if (confirmNumeric && confirmUpperCase){
    allChars = numeric + upperCase;
  }
  else if (confirmLowerCase && confirmUpperCase){
    allChars = upperCase + lowerCase;
  }
  else if (confirmSpecial){
    allChars = special;
  }
  else if (confirmNumeric){
    allChars = numeric;
  }
  else if (confirmLowerCase){
    allChars = lowerCase;
  }
  else if (confirmUpperCase){
    allChars = upperCase;
  }

  //random iteration
  var pwd = [];
  for (var i = 0; i< promptLength; i++) {
    var characterList = allChars[Math.floor(Math.random()*allChars.length)];
    pwd.push(characterList);
  }

  // final print password
  var foo = pwd.join('');
  return foo;
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
