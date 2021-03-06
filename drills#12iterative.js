function countingsheep(num) {
  for(let i=0; i<num; i){
    console.log(num +' Another sheep jumps over the fence');
    num--;
  }
  console.log('All sheep jumped over the fence');
}
//O(n)- retruning the same amount of numbers
//countingsheep(10);


function PowerCalculator(number, exp) {
  let result = number;
  for (let i = 1; i < exp; i++) {
    if (exp < 0) {
      return console.log('exponent should be >= 0');
    }
    if (exp === 0) {
      return 1;
    }
    result *= number;
  }
  return result;
}
const a = PowerCalculator(3, 3);
// console.log(a);
// Constant O(1) - there is afixed number of operations being run 

function reverseString(str) {
  let reverstr=[];
  for(let i=0;i<str.length;i++){
    reverstr.push(str[str.length-1-i]);
  }
  return reverstr.join('');
}
//const teststr = reverseString('hello');
//console.log(teststr);
//Constant O(n)-going throught each letter and doing the same for each letter

function ntriangularnumber(num) {
  let result = num;
  for (let i = 1; i < num; i++) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      return;
    }
    result += i;
  }

  return result;
}
const factorial = ntriangularnumber(3);
// console.log(factorial);
// Linear O(n) - the operations are ran for every input 



function spliter2 (param, str) {
  let fullword = [];
  let counter = 0;

  while(true) {
    let idx = str.indexOf(param); //if it cant find the index, returns -1
    if (idx == -1) {
      break;
    }

    fullword.push(str.slice(0, idx));
    str = str.slice(idx + param.length);
    counter ++;
  }
  fullword.push(str);
  console.log(counter, 'counter');
  return fullword;
}

// const s = '25/39/15';
// console.log(spliter2('/',s));
// Linear O(n) - the run time increases with linearly with the param input 




function Fibonacci(num) {
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
}
//console.log(Fibonacci(7));
//O(n)-linear beacuse you get back the same amount you inputted
  





function Factorial(num) {
  let result = num;
  for (let i = 1; i < num; i++) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      return;
    }
    result *= i;
  }

  return result;
}
// console.log(Factorial(5));
// Linear O(n) - the same operations are ran for every input 