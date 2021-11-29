// Write a for loop that prints to the console the numbers 0 through 9.
for ( var i = 0 ; i <= 9 ; i++ ) {
  console.log(i)
}

// Write a for loop that prints to the console 9 through 0.
for ( var i = 9 ; i >= 0 ; i-- ) {
  console.log(i)
}

// Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]
for ( let i=0; i < fruit.length; i++) {
    console.log(fruit[i]);
    }

// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
const numbers = [];
for ( let i=0; i<10; i++) {
    numbers.push(i);
}
console.log(numbers);

// Write a for loop that prints to the console only even numbers 0 through 100.
for ( let i=0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log (i)
    }
}

// Write a for loop that will push every other fruit to an array.
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const breakfast = [];
for ( let i=0; i < fruits.length; i++) {
    if (i % 2 === 0) {
        breakfast.push(fruits[i])
    }
}
console.log (breakfast);

// Silver Medal
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// Write a loop that will print out all the names of the people of the people array
for( let i=0 ; i < peopleArray.length ; i++ ) {
  console.log ( peopleArray[i].name );
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let names = [];
let occupations = [];
for( let i=0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log (names);
console.log (occupations);

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
let names2 = [];
let occupations2 = [];
for( let i=0; i < peopleArray.length; i++) {
  i % 2 === 0 ? names2.push(peopleArray[i].name) : occupations2.push(peopleArray[i].occupation);
}
console.log (names2);
console.log (occupations2);

// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
  // [[0, 0, 0], 
  // [0, 0, 0], 
  // [0, 0, 0]]
var grid = [];
for( var i = 0; i < 3; i++ ) {
  grid.push([]);
  for( var j = 0; j < 3; j++ ) {
    grid[i].push(0);
  }
}
console.log(grid);

// Create an array that mimics a grid like the following using nested for loops:
  // [[0, 0, 0], 
  // [1, 1, 1], 
  // [2, 2, 2]]
var grid = [];
for( var i = 0; i < 3; i++ ) {
  grid.push([]);
  for( var j = 0; j < 3; j++ ) {
    grid[i].push(i);
  }
}
console.log(grid);

// Create an array that mimics a grid like the following using nested for loops:
  // [[0, 1, 2], 
  // [0, 1, 2], 
  // [0, 1, 2]]
var grid = [];
for( var i = 0; i < 3; i++ ) {
  grid.push([]);
  for( var j = 0; j < 3; j++ ) {
    grid[i].push(j);
  }
}
console.log(grid);

// Given a grid like the previous ones, write a nested for loop that would change every number to an x.
  // [["x", ...], 
  //  ["x", ...], 
  //  ["x",...], ...] 
var grid = [[0, 1, 2] , [0, 1, 2] , [0, 1, 2]];
for( var i = 0; i < grid.length; i++ ) {
  for( var j = 0; j < 3; j++ ) {
    grid[i][j] = "x"
  }
}
console.log(grid);