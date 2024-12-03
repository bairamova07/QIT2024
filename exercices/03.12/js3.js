const synyp = {
  name: 24 / 1,
  oqushylar: [
    {
      name: "Nazar",
      age: 11,
      subjects: [{ name: "Қазақ әдебиеті" }, { name: "Қ.тарих" }],
    },
    {
      name: "Abumansur",
      age: 13,
      subjects: [
        { name: "Д.ж.тарих" },
        { name: "Математика" },
        { name: "Қазақ әдебиеті" },
      ],
    },
    {
      name: "Kausar",
      age: 13,
      subjects: [{ name: "Дене шынықтыру" }, { name: "Д.ж.тарих" }],
    },
    {
      name: "Аяулым",
      age: 17,
      subjects: [{ name: "Қазақ тілі" }, { name: "Қазақ әдебиеті" }],
    },
    {
      name: "Айдын",
      age: 17,
      subjects: [{ name: "English" }, { name: "Дене шынықтыру" }],
    },
    {
      name: "Әсет",
      age: 16,
      subjects: [
        { name: "Өзін-өзі тану" },
        { name: "Дене шынықтыру" },
        { name: "Алғашқы әскери дайындық" },
      ],
    },
    {
      name: "Syrym",
      age: 20,
      subjects: [{ name: "English" }],
    },
    {
      name: "Mukhambetali",
      age: 17,
      subjects: [
        { name: "Информатика" },
        { name: "Математика" },
        { name: "Физика" },
      ],
    },
  ],
};

console.log(synyp.oqushylar.flatMap((number) => number.subjects));

console.log(synyp.oqushylar.filter((number) => number.age < 12));
