//Drill #1 
// 1) Constant O(1) - our input size does not matter and we are looking for one particular answer 
// 2) Liner O(n) - our output (answer from the individuals) grows linear with our input (the amount of time we ask the questiong)


//Drill #2
/* function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
} */
//Constant O(1)- our input is 1 value so it will return 1 value back,runtime does not depend on size of input

//Drill #3
/* function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
} */
//polynomial O(n^2)- since there is a nested loop the function is polynomial taking that much time to solve.

// Drill #4
// function doubleArrayValues(array) {
//   for (let i = 0; i < array.length; i++) {
//       array[i] *= 2;
//   }
//   return array;
// }
// Constant O(1) - the output does not grow or change based on the input size 

//Drill #5 
// function naiveSearch(array, item) {
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] === item) {
//           return i;
//       }
//   }
// }
// Linear O(n) - the output and run time complexity iis porportional to the input size 