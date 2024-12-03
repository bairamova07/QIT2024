let studens = [
  "Eldos",
  "Nazar",
  "Aidyn",
  "Abumansur",
  "Nursultan",
  "Mukhammedali",
  "Elnaz",
];
let threeStudends = studens.slice(0, 4);

console.log(threeStudends);

let numbers = [4, 7, 3, 9, 10, 34];

function getSlice(arr, start, end) {
  return arr.slice(start - 1, end);
}

let fourStudents = getSlice(studens, 1, 4);

let threeNumbers = getSlice(numbers, 3, 6);

console.log(threeNumbers);

console.log(numbers.length);
console.log(studens.length);

let student = [
  "Eldos",
  "Nazar",
  "Aidyn",
  "Abumansur",
  "Nursultan",
  "Mukhammedali",
  "Elnaz",
];
console.log(student.indexOf("aidyn"));

//if (ind >= 0) {
//  console.log("Found at index" + ind);
//} else {
//  console.log("Not Found in the array.");
//}

let isInArray = studens.includes("Nursultan");
console.log(isInArray);
if (isInArray) {
  console.log("Found in the array");
} else {
  console.log("Not Found in the array.");
}

let nums1 = [5, 7, 8, 10];
let nums2 = [7, 3, 1, 5];
let nums = nums1.concat(nums2, nums1, nums1); //Массивтерді қосады
console.log(nums);
console.log(nums1);
console.log(nums2);

nums2.sort();
console.log(nums2);

nums1.reverse();
console.log(nums1);

let nums3 = nums1;
nums3.push(1, 3, 7);
console.log(nums1);

let x = 5;
let y = x;
y = 10;
console.log(x);
