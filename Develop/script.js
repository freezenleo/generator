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

//numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//special = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]"];


// var getRandomNumeric = confirmNumeric[Math.floor(Math.random()*confirmNumeric.length)];
// var getRandomUpperCase = confirmUpperCase[Math.floor(Math.random()*confirmUpperCase.length)];
// var getRandomLowerCase = confirmLowerCase[Math.floor(Math.random()*confirmLowerCase.length)];
// var getRandomSpecial = confirmSpecial[Math.floor(Math.random()*confirmSpecial.length)];
// console.log(getRandomNumeric, getRandomUpperCase, getRandomLowerCase, getRandomSpecial);

// var randomFunc = [getRandomNumeric, getRandomUpperCase, getRandomLowerCase, getRandomSpecial];
// console.log(randomFunc);

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

//   var generatePassword="";

//   var allChars = getRandomNumeric + getRandomUpperCase + getRandomUpperCase + getRandomSpecial;
  
//   console.log('allChars', allChars);

//   var charsArray = [{getRandomSpecial}, {getRandomNumeric}, {getRandomLowerCase}, 
//     {getRandomUpperCase}].filter(item => Object.values(item)[0]);

//   console.log('charsArry', charsArray);

//   if (allChars === 0) {
//     return '';
//   }
  
//   for (var i=0; i < promptLength; i += allChars){
//     charsArray.forEach(type => {
//       var funcName = Object.keys(type)[0];
//       generatePassword += randomFunc[funcName]();
//       console.log(generatePassword);
//     });
//   }

// }



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

  console.log(allChars);

  var pwd = [];
  for (var i = 0; i< promptLength; i++) {
    var pwds = allChars[Math.floor(Math.random()*allChars.length)];
    pwd.push(pwds);
    console.log("pwd " + pwd);
  }


  var foo = pwd.join('');
  console.log("password " + foo);
 
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
