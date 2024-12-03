const user = {
  name: "Alia",
  age: 28,
  hobbies: [
    "Кітап оқу",
    "Волейбол ойнау",
    "тамақ пісіру",
    "Magan volleyball oinagan ote qatty unaidy",
  ],
};

function addHobby() {
  let newHobby = prompt("Enter new hobby");
  user.hobbies.push(newHobby);
  return `Жаңа хобби қосылды:${user.hobbies[user.hobbies.length - 1]}`;
}

function shortHobbies() {
  return user.hobbies.filter((hobby) => hobby.length <= 10);
}

console.log(shortHobbies());


alert(addHobby());



