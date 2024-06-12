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
  
  array.forEach(element => {
    if(frequencyMap[element]) {
      
      frequencyMap[element]++;
    
    } else {
      frequencyMap[element]= 1;

    } 
  });

    let mostFrequent = null;
    let leastFrequent = null;
    let maxFrequency = -Infinity;
    let minFrequency = Infinity;

    for(const element in frequencyMap) {
      const frequency = frequencyMap[element];

      if (frequency > maxFrequency) {
        maxFrequency = frequency;
          mostFrequent = element;
      }

      if (frequency < minFrequency) {
        minFrequency = frequency;
        leastFrequent = element;
      }
    }

      return {
        most: mostFrequent,
        least: leastFrequent,
      };
};

  const array = ['a', 'a', 'b', 'b', 'c', 'd', 'd', 'd'];
  const result = findFrequency(array);

// 

const isPalindrome = function(str) {

  str = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    return str === str.split('').reverse().join('');
}

// 

const largestPair = function(array) {
  if (array.length < 2) {
    return null;
  }

  let maxProduct = array[0] * array[1];
  
  for (let i = 0; i < array.length; i++) {
    
    let product = array[i] * array[i + 1];
      if(product > maxProduct) {
        maxProduct = product;
      }
  }
    return maxProduct;
}
  const array = [3,6,-2,-6,7,9];

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
