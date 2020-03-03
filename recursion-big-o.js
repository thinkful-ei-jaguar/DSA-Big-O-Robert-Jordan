// Drill # 8 Maze 
// const maze = function(labyrinth, position=0, row, col, direction='S',path){
//   if(col<0 || row < 0){
//       return;
//   }
//   if(col>=labyrinth[0].length || row>=labyrinth.length){
//       return;
//   }
 
//   path[position] = direction;
//   position++;

//   if (labyrinth[row][col] === 'e'){
//       PrintPath(path, 1, position - 1);
//       return;
//   }
//   if (labyrinth[row][col] === ' ') {
//       // The current cell is free. Mark it as visited
//       labyrinth[row][col] = 's';
//       // Invoke recursion to explore all possible directions
//       maze(labyrinth,position,row, col - 1, 'L',path); // left
//       maze(labyrinth,position,row - 1, col, 'U',path); // up
//       maze(labyrinth,position,row, col + 1, 'R',path); // right
//       maze(labyrinth,position,row + 1, col, 'D',path); // down
//       // Mark back the current cell as free
//       //lab[row][col] = ' ';
//   }
//   // Remove the last direction from the path
//   position--;

// }
// const PrintPath = function (path, startPos, endPos){
//   console.log('Found path to the exit: ');
//   console.log(path);
// }
// Exponential O(2^n) - the running time output increases with input 

//Drill #9 
// const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
//   if(col<0 || row < 0){
//       return;
//   }
//   if(col>=labyrinth[0].length || row>=labyrinth.length){
//       return;
//   }
 
//   path[position] = direction;
//   position++;

//   if (labyrinth[row][col] === 'e'){
//       PrintPath(path, 1, position - 1);
//       return;
//   }
//   if (labyrinth[row][col] === ' ') {
//       // The current cell is free. Mark it as visited
//       labyrinth[row][col] = 's';
//       // Invoke recursion to explore all possible directions
//       mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
//       mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
//       mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
//       mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
//       // Mark back the current cell as free
//       labyrinth[row][col] = ' ';
//   }
//   // Remove the last direction from the path
//   position--;
// }
// Exponential O(2^n) - the running time output increases with input 

//Drill #10 
// function anagrams(prefix, str){
//   if(str.length <= 1){
//       console.log(`The anagram is ${prefix}${str}`);
//   } else {
//       for(let i=0; i<str.length; i++){
//           let currentLetter = str.substring(i, i+1); 
//           let previousLetters = str.substring(0,i);
//           let afterLetters = str.substring(i+1);
//           anagrams(prefix+currentLetter, previousLetters+afterLetters);
//       }
//   }
// }
// function printAnagram(word){
//   //console.log(`The word for which we will find an anagram is ${word}`);
//   anagrams(' ', word);
// }
// Exponential O(2^n) - the longer the word (greater input) the longer the running time and output from the function
//Drill #11 
/* function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
} */
//O(1)-just manipulates data and organizes it 
//Drill #12
/* function binaryRep(input){
    if(input<=0){
        return '';
    } 
    let binary = Math.floor(input%2);
    return binaryRep(Math.floor(input/2)) + binary
} */
//polynomialO(n^k) it will keep on increasing for bigger numbers

