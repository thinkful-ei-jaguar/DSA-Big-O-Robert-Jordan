function countingsheep(num) {
  for(let i=0; i<num; i){
    console.log(num +' Another sheep jumps over the fence')
    num--;
  }
  console.log('All sheep jumped over the fence')
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
  if (!str.length) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
const teststr = reverseString('hello');
//console.log(teststr);










function ntriangularnumber(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return;
  }
  return num + ntriangularnumber(num - 1);
}
const factorial = ntriangularnumber(9);
//console.log(factorial);






function strspliter(param, str) {
  if (!str.length) {
    return '';
  }
  
  let i = 0;
  let newstr = '';
  
  if (str.includes(param)) {
    i = str.indexOf(param);
    newstr = str.slice(i + 1);
  }
  let thisstr = str.slice(0, i);
  // console.log(thisstr);
  return [thisstr, ...strspliter(param, newstr)];
}







function Fibonacci(num, total = 0) {
  if (num === 1) {
    return 1;
  }
  if (num <= 0) {
    return 0;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}
// console.log(Fibonacci(7));
  





function Factorial(num) {
  if (num === 1) {
    return 1;
  }
  return Factorial(num - 1) * num;
}
// console.log(Factorial(5));