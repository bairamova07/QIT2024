const student = {
  name: "Махамбет",
  surname: "Абай",
  birthday: "10/04.20010",
  course: "Бағдарламалау",
  address: "Ұлы дала көшесі,23",
  phone: 877198870655,
};

student.birthday = "11/04/2010";
student.ru = "Argyn";

console.log(
  student.name + "" + " студенттің оқып жатқан курсы " + student.course
);

console.log(student.birthday);
console.log(student.ru);

const calculator = {
  plus: (a, b) => {
    return a + b;
  },
  minus: (a, b) => {
    return a - b;
  },
  multiplication: (a, b) => {
    return a * b;
  },
};

console.log(calculator.plus(5, 4));
console.log(calculator.minus(10, 4));
console.log(calculator.multiplication(2, 8));


//300-(300*20)/100=240