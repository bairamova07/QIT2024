const team = {
  name: "Barcelona",
  members: [
    {
      name: "Bauyrzhan",
      age: 30,
      hobbies: [
        { name: "football", startYear: 2010 },
        { name: "Golf", startYear: 2010 },
      ],
    },
    {
      name: "Alia",
      age: 20,
      hobbies: [
        { name: "football", startYear: 2011 },
        { name: "tennis", startYear: 2011 },
        { name: "volleyboll", startYear: 2018 },
      ],
    },
    {
      name: "Talshyn",
      age: 27,
      hobbies: [
        { name: "basketboll", startYear: 2021 },
        { name: "tennis", startYear: 2015 },
        { name: "volleyboll", startYear: 2014 },
      ],
    },
    {
      name: "Miras",
      age: 29,
      hobbies: [
        { name: "football", startYear: 2020 },
        { name: "tennis", startYear: 2017 },
      ],
    },
    {
      name: "Nursultan",
      age: 39,
      hobbies: [
        { name: "football", startYear: 2023 },
        { name: "tennis", startYear: 2019 },
        { name: "volleyboll", startYear: 2019 },
        { name: "listen to music", startYear: 2018 },
      ],
    },
  ],
};
//function addUserTeam() {
//  return team.members.filter((num) => num.age > 30);
//}

//console.log(addUserTeam());

//function addHobbyTeam() {
//  return team.members.filter((member) => member.hobbies.length >= 3);
//}

//console.log(addHobbyTeam());

//team.members[1].hobbies.push({ name: "Саяхаттау", startYear: 2024 });

//console.log(team.members[1]);

team.members[2].hobbies.pop();

console.log(team.members[2]);

console.log(team.members.flatMap((member) => member.hobbies));
