//PASSWORD GENERATOR
let generateButton = document.querySelector("#generate");

let uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "@", "#","$","%","^","&","*","(",")","-","=","_","+"];

//writes password to 'textarea'
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listeners for generate button
generateButton.addEventListener("click", getCriteria);
generateButton.addEventListener("click", writePassword);

//prompts user for password length
function getLength() {
  length = Number(
    prompt(
      "How many characters would you like your password to be?\nPlease choose a value between 12 and 128."
    )
  );
  console.log("The user chose " + length);
}

//ensures user selects a valid response or ends function if they cancel
function confirmLength() {
  do {
    length = Number(prompt("You must choose a number between 12 and 128."));
    if (length === 0) {
      console.log("The user cancelled out of the prompt.");
      return;
    }
  } while (isNaN(length) || length < 12 || length > 128);
}

//gets the user's password criteria
function getCriteria() {
  getLength();
  if (length === 0) {
    console.log("The user cancelled out of the prompt.");
  } else if (isNaN(length) || length < 12 || length > 128) {
    confirmLength();
  } else {
    console.log("The password will be " + length + " characters long.");
    confirmUppers = confirm("Would you like to use upper case letters?");
    
    confirmLowers = confirm("Would you like to use lower case letters?");
    
    confirmNumbers = confirm("Would you like to use numbers?");
    
    confirmSymbols = confirm("Would you like to use special characters?");
    
  }
  //ensures the user selects at least one criteria
  while (!confirmUppers && !confirmLowers && !confirmNumbers && !confirmSymbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  };
  // if all criteria are chosen
  if (confirmUppers && confirmLowers && confirmNumbers && confirmSymbols) {
    choices = uppers.concat(lowers, numbers, symbols);
    console.log(choices);
  } 
  // if 3 criteria are chosen
  else if (confirmUppers && confirmLowers && confirmSymbols) {
    choices = uppers.concat(lowers, symbols)
    console.log(choices);
  }
  else if (confirmUppers && confirmNumbers && confirmSymbols) {
    choices = uppers.concat(numbers, symbols)
    console.log(choices);
  }
  else if (confirmUppers && confirmLowers && confirmNumbers) {
    choices = uppers.concat(lowers, numbers)
    console.log(choices);
  }
  else if (confirmLowers && confirmSymbols && confirmNumbers) {
    choices = lowers.concat(symbols, numbers)
    console.log(choices);
  }
  //if 2 criteria are chosen
  else if (confirmUppers && confirmLowers) {
    choices = uppers.concat(lowers)
    console.log(choices);
  } 
  else if (confirmUppers && confirmNumbers) {
    choices = uppers.concat(numbers);
    console.log(choices);
  } 
  else if (confirmUppers && confirmSymbols) {
    choices = uppers.concat(symbols);
    console.log(choices);
  } 
  else if (confirmLowers && confirmNumbers) {
    choices = lowers.concat(numbers);
    console.log(choices);
  } 
  else if (confirmLowers && confirmSymbols) {
    choices = lowers.concat(symbols);
    console.log(choices);
  } 
  else if (confirmNumbers && confirmSymbols) {
    choices = numbers.concat(symbols);
    console.log(choices);
  }
  // if 1 criteria is chosen
  else if (confirmUppers) {
    choices = uppers;
    console.log(choices);
  } 
  else if (confirmLowers) {
    choices = lowers;
    console.log(choices);
  } 
  else if (confirmNumbers) {
    choices = numbers;
    console.log(choices);
  } 
  else if (confirmSymbols) {
      choices = symbols;
      console.log(choices);
  };
}
//generates the password
function generatePassword() {
  let passwordGen = [];
//loop for random selection
  for (var i = 0; i < length; i++) {
    let allChoices = choices[Math.floor(Math.random() * choices.length)]
    passwordGen.push(allChoices);
  }
//join random selection and return
  let password = passwordGen.join("");
  console.log("Your password is " + password);
  return password;
}

//Ashton Moore @azm89