//Dummy array for student grades. Sort it from lowest score to highest score.
let studentGrades = [34, 77, 89, 90, 92, 43, 23, 100, 100, 98, 27, 57, 98, 70, 72];
studentGrades.sort();

let group1 = [];
let twoDimensions = [];

//Group top student with bottom two students if class size is uneven.
if(studentGrades.length % 2 != 0){
	group1.push(studentGrades.shift());
  group1.push(studentGrades.shift());
  group1.push(studentGrades.pop());
  twoDimensions.push(group1);
}

//Spread original array and reverse it.
let reversedArr = [...studentGrades];
reversedArr.reverse();

//Pop and push first element of each array into another sepearte array. Then push that array into the 2D array.
for(let x of studentGrades){
	let tempArr = [];
  tempArr.push(studentGrades.pop());
  tempArr.push(reversedArr.pop());
  twoDimensions.push(tempArr);
}

//Print groupings
console.log(twoDimensions);