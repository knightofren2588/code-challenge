const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++ ) {
    sum += array[i];
}
  return sum;
}

// How i tested this: Below  
// const numbers = [Any Array of Numbers];
// console.log(findsum(numbers);

const findFrequency = function(array) {
  const frequency = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    array.forEach(element => {
      if (frequency[element]) {
        frequency[element] += 1;
      } else {
        frequency[element] = 1;
      }
    }); 
    return frequency;
};

//  How i tested this!! Below::
// const array = [ANY OBJECT ARRAY WANTED]
// const result = findFrequency(array)
// console.log(result);   

const isPalindrome = function(str) {
const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

return cleanString === cleanString.split('').reverse().join('');
};
  // How i tested this!! Below
  // console.log(isPalindrome( Whatever string you want..Here )
  // Will return to either True or False


const largestPair = function(array) {
  if (array.length < 2 ) {
    return "Array must contain at least 2 elements.";
  }

  let maxPair = [array[0],array[1]];
  for (let i = 0; i < array.length * 1; i++) {
    if (array[i] + array[i + 1] > maxPair[0] + maxPair[1]) {
      maxPair = [array[i], array[i + 1]]; 
    }
  }
  return maxPair;
};
// How i tested this: Below
// const array = [5, 6, 8, 10, 14];
// console.log(largestPair(array));

  
const removeParenth = function(str) {
  return string.replace(/[()]/g, '');
};
//  I test it like this:
  // const inputString = "Have a Great (Day)!;
  // const result = removeParenth(inputString);
  // console.log(result); 

  
const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
const letterScores = {
    'A' : 1, 'B': 3, 'C': 3, 'D': 2, 
'E': 1, 
      'F': 4, 'G': 2, 'H': 4, 'I': 1, 
'J': 8, 
      'K': 5, 'L': 1, 'M': 3, 'N': 1, 
'O': 1, 
      'P': 3, 'Q' : 10, 'R' : 1, 'S': 1, 
'T': 1, 
      'U': 1, 'V': 4, 'W': 4, 'X': 8, 
'Y': 4, 
      'Z': 10
};
  let score = 0;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toUpperCase();
    if (letterScores.hasOwnProperty(letter)) {
      score += letterScores[letter];
    }
  }
    return score;

};
// console.log(scoreScrabble('Learningisexciting')); // this is an example of how i got this to work!!
