let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting";

function iCounter(lorem) {
  let words = lorem.split("");

  let iCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes("i") || words[i].includes("I")) {
      iCount++;
    }
  }
  return iCount;
}

console.log(iCounter(lorem));

let numbers = [2, 5, 6, 2, 6, 0, 3];

const findSix = function (nums) {
  let sixCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 6) {
      sixCount++;
    }
  }

  return sixCount;
};

let numbers1 = [3, 5, 6, 2, 6, 0, 3, 6, 6];

console.log(findSix(numbers1));
