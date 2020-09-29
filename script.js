// Assignment Code
var generateBtn = document.querySelector("#generate");



function isNumeric(num){
  if (num.indexOf(".") > -1)
  {
    return false;
  }

  return !isNaN(num);

}

function generatePassword() {
  var lengthstr = window.prompt ("How mandy characters do you want in your password?:", "");
  if (lengthstr == "")
  {
    alert("Error! Input does not meet criteria.");
    return "";
  }
  
  if (isNumeric(lengthstr) == false)
  {
    alert("Error! Not a number.");
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
