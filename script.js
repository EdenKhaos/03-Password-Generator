// Assignment Code
var generateBtn = document.querySelector("#generate"); //given first piece of code to generate the start of each of the character type variables
// create variables that allow for special types of characters, standard characters by defining the character lengths and checks before defining the functions
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var uppercaseCheck;
var numberCheck;
var specialCheck;
var passwordLength;

// first go by order of prompts needed to set up password, first create a function to determine the length of the password
function decideLength() {
  passwordLength = prompt("How many characters would you like your password to be (between 8-128 characters:");
  
  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters" );
    decideLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters" );
    decideLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters" );
    decideLength();
  } else { 
    alert("In the following screens, check for what type of characters you would like in your password. If 'no' for all our password will only contain lowercase letters.");
  }
  return passwordLength;
}

// second create a function to determine if there are uppercase letters in the password yes/no only
function decideUppercase() {
  uppercaseCheck = prompt("Do you want uppercase letters in your password? (yes or no) ");
    uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer yes or no");
    decideUppercase();

  } else if (uppercaseCheck === "yes" || uppercaseCheck ==="y") {
    uppercaseCheck = true;
    return uppercaseCheck;

  } else if (uppercaseCheck === "no" || uppercaseCheck ==="n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  
  } else {
    alert("Please answer yes or no");
    decideUppercase();
  }
  return uppercaseCheck;
}

// third create a function to decide to include numbers in the password
function decideNumbers() {
  numberCheck = prompt("Do you want numbers in your password? (yes or no)");
    numberCheck  = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer yes or no");
    decideNumbers();

  } else if (numberCheck === "yes" || numberCheck ==="y") {
    numberCheck = true;
    return numberCheck;

  } else if (numberCheck === "no" || numberCheck ==="n") {
    numberCheck = false;
    return numberCheck;
    
  } else {
    alert("Please answer yes or no");
    decideNumbers();
  }
  return numberCheck;
}

// fourth create a function to decide if a special character will be in the password
function decideSpecial() {
  specialCheck = prompt("Do you want numbers in your password? (yes or no)");
    specialCheck  = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === ""){
    alert("Please answer Yes or No");
    decideSpecial();

  } else if (specialCheck === "yes" || specialCheck ==="y"){
    specialCheck = true;
    return specialCheck;

  } else if (specialCheck === "no" || specialCheck ==="n"){
    specialCheck = false;
    return specialCheck;
    
  } else {
    alert("Please answer Yes or No");
    decideSpecial();
  }
  return specialCheck;
}  

// create a function where all of the previous functions are combined to create a random number
function generatePassword() {
  decideLength();
  console.log(passwordLength);
  decideUppercase();
  console.log(uppercaseCheck);
  decideNumbers();
  console.log(numberCheck);
  decideSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar; // checking all functions for character types, numbers, case type and special characters
  var password = "";
  if (uppercaseCheck && numberCheck & specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;

  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;
  
  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  
  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;
  
  } else if (uppercaseCheck) {
    characters += uppercaseChar;
  
  } else if(numberCheck) {
    characters += numberChar;
  
  } else if (specialCheck) {
    characters += specialChar;
  
  } else {
    characters === lowercaseChar;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length)); // random number to be generated
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password1 = ""; //new variable of the password
  password1 = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
