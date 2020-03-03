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

//Drill #6              
/* function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
} */
//constant O(1) - its just returning the double size of that array so 2 is o miniscule that it get taken out from complexity.

//Drill #7 //fibbonacci
/* function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
} */
// 
/* const l = compute(10);
console.log(l);
 */

