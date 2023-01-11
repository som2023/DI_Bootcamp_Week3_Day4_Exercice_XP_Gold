
/*@@@@@@@@@@@@@@@@@@--Exercice_1--@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

function isBlank(str) {
  return str.trim() === "";
}
console.log(isBlank("")); // true
console.log(isBlank("  ")); // true
console.log(isBlank("Hello")); // false

//For fun  i'm using Regex
function isBlank(str) {
  return str.replace(/\s/g, "") === "";
}
console.log(isBlank("")); // true
console.log(isBlank("  ")); // true
console.log(isBlank("Hello")); // false

/*@@@@@@@@@@@@@@@@@@--Exercice_2--@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

//Abbrev_name

function abbrevName(name) {
  // Split the name into an array of words
  const words = name.split(' ');
  
  // Get the first and last initials
  const firstInitial = words[0];
  const lastInitial = words[words.length - 1][0];
  
  // Return the abbreviated name
  return `${firstInitial} ${lastInitial}.`;
}


console.log(abbrevName("Yao Yann"));//-> Yao Y. 

/*@@@@@@@@@@@@@@@@@@--Exercice_3--@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

let input = prompt('Enter a string:');

function swapCase(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (c === c.toUpperCase()) {
            result += c.toLowerCase();
        } else {
            result += c.toUpperCase();
        }
    }
    return result;
}
console.log(swapCase(input));

/*@@@@@@@@@@@@@@@@@@--Exercice_4--@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

function isOmnipresent(arr, val) {
  for (const subarr of arr) {
    if (!subarr.includes(val)) {
      return false;
    }
  }
  return true;
}
