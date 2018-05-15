// Even or odd
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else
    return false;
}

/*
O(1) or constant. The data set will always be only one value, so there is no need to worry about future growth. Also, the algorithm does not perform any expensive actions on the value, it simply checks one condition and returns either true or false.
*/



// Are you here?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*

O(n^2) or polynomial. The algorithm's loops will result in a growth in time dependent on the growth in the dataset. The algorithm also features a nested loop, meaning squaring the big O growth.

*/




// Doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*

O(n) or linear. This algorithm is dependent on the length of the array of data. The larger the dataset, the more time it will take to compute. Also, the best case and worst case scenarios are the same.

*/




// Naive Search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/* 

O(n) or linear. Although the best case scenario is O(1), (the item is the first element in the array), all the other cases are O(n) and are dependent on the length of the dataset. 

*/




// Creating pairs:
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }
}


/*

O(n^2) or polynomial. Again, this algorithm features a nested loop so we know that we can square the size of the dataset. Also, the best and worst case scenarios are the same.

*/




// Computing fibonaccis
// A fibonacci sequence is one where every number is the sum of the previous two numbers in the sequence. For example the following is a fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34. The first number always starts at 1 (technically it is 0). Then the second number is 0+1 = 1, the third number is the sum of the first and the second numbers (1 + 2 = 3) and the sequence continues in a similar manner.

// Here, we have a function generateFib that uses iteration to generate a fibonacci sequence. Determine its run time complexity in big O.

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/*

O(n) or linear. This algorithm is completely dependent on how many digits of the sequence you want to compute. There is only one loop and although the best and worst case scenarios are different, the computing time will grow proportionally with a larger num value.

*/





// An Efficient Search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.

// Assume that the input array is always sorted.

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}
// Random element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Is it prime?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}