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
  var passwordStrn = "";
  var characterCheckLength;
  var characterCheck = "";
  var lengthInt;
  var lengthStr = window.prompt ("How many characters do you want in your password?:", "");
  
  if (lengthStr == "")
    {
      alert("Error! Input does not meet criteria.");
      return "";
    }
  
  if (isNumeric(lengthStr) == false)
    {
      alert("Error! Not a number.");
    }

  lengthInt = parseInt(lengthStr);
  if (lengthInt < 8)
    {
      alert("Error! Password must be greater than 7");
      return "";
    }
  if (lengthInt > 128)
    {
      alert("Error! Password must be less than 129");
      return "";
    }
  if (window.confirm ("Do you want the password to include special characters?", "") == true)
    {
      characterCheck += "!#@$%^&*()_+=-[]{};:,.<>?";
    }
  if (window.confirm ("Do you want the password to include upper case letters?", "") == true)
    {
      characterCheck += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (window.confirm ("Do you want the password to include lower case letters?", "") == true)
    {
      characterCheck += "abcdefghijklmnopqrstuvwxyz";
    }
  if (window.confirm ("Do you want the password to include numbers?", "") == true)
    {
      characterCheck += "0123456789";
    }
  if (characterCheck == "")
    {
      alert("Error! No input");
      return "";
    }

    characterCheckLength = characterCheck.length;

   

  for (var i = 0; i < lengthInt; i++)
    {
      passwordStrn += characterCheck.charAt(Math.floor(Math.random() * characterCheckLength))
    }

    return passwordStrn;
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
