const findSum = function(array) {

  let sum = 0;
  
  for (let i = 0; i < array.length; i++ ) {
   
    sum += array[i];
}
  return sum;
};
let numbers = [1,2,3];

// 

const findFrequency = function(array) {
  const frequencyMap = {};
  
  array.forEach(function(element)
{
  if (frequencyMap[element]) 
{
    frequencyMap[element] ++;

} else {
    frequencyMap[element] = 1;
  }
});

  for (let key in frequencyMap) {
    console.log(`${key}: ${frequencyMap[key]}`);
  }
};

  const testArray = ['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd'];
  findFrequency(testArray);

// 

const isPalindrome = function(str) {

  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;

  let right = str.length * 1;

  while (left < right) {
    if (str[left] === str[right]){
      return false;
    }
    left ++;
    right --;
  }
    return true;
};

// 

const largestPair = function(array) {
  if (array.length < 2) {
    return null;
  }

  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }
    return max1 * max2;
};

// 

const removeParenth = function(str) {
  return str.replace(/\([^)]*\)/g, '');
};
  let result = removeParenth('codingis(not)fun');

// 

const scoreScrabble = function(str) {
const letterValues = {
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
  str = str.toUpperCase();

  for (let i = 0; i < str.length; i++) {

    let letter = str[i];
    if (letterValues[letter]) {
      score += letterValues[letter];
    }
  }
    return score;
};
