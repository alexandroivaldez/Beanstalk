let students = [
    {
    "firstName": "Alex",
    "lastName": "Valdez",
    "assignment1": 34  
  },
  {
    "firstName": "Billy",
    "lastName": "Bob",
    "assignment1": 68  
  },
  {
    "firstName": "Steven",
    "lastName": "Seagull",
    "assignment1": 78  
  },
  {
    "firstName": "Kevin",
    "lastName": "Nguyen",
    "assignment1": 88 
  },
  {
    "firstName": "Bob",
    "lastName": "Lazar",
    "assignment1": 29  
  },
  {
    "firstName": "Kendrick",
    "lastName": "Lamar",
    "assignment1": 99  
  },
  {
    "firstName": "Hugh",
    "lastName": "Mungus",
    "assignment1": 15  
  }
];

//Sort students from least to greatest score.
students.sort((a, b) => {
    return a.assignment1 - b.assignment1;
});

let group1 = [];
let twoDimensions = [];

//Group top student with bottom two students if class size is uneven.
if(students.length % 2 != 0){
    console.log("Arr is odd!");
    group1.push(students.shift());
  group1.push(students.shift());
  group1.push(students.pop());
  twoDimensions.push(group1);
}

//Spread original array and reverse it.
//Greatest to least.
let reversedArr = [...students];
reversedArr.reverse();

//Create groupings
for(let x of students){
  let tempArr = [];
  tempArr.push(students.pop());
  tempArr.push(reversedArr.pop());
  twoDimensions.push(tempArr);
}

console.log(twoDimensions);