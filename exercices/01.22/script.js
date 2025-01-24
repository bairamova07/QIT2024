const questions = [
  {
    question: "Қазақстанның астанасы қай қала?",
    answers: ["Алматы", "Астана", "Шымкент", "Ақтау"],
    correct: 1,
  },
  {
    question: "Әнұранның авторлары кімдер?",
    answers: [
      "Нұрсұлтан Назарбаев пен Жұмекен Нәжімеденов",
      "Шәмші Қалдаяқов пен Нұрсұлтан Назарбаев",
      "Жұмекен Нәжімеденов пен Шәмші Қалдаяқов",
      "Мұхтар Шаханов пен Абай Құнанбаев",
    ],
    correct: 2,
  },
  {
    question: "Қазақстанда қанша облыс бар?",
    answers: ["14", "17", "12", "20"],
    correct: 1,
  },
  {
    question: "Қазақстан Тәуелсіздігін қай жылы алды?",
    answers: ["1991", "1986", "1995", "2000"],
    correct: 0,
  },
  {
    question: "Қазақстанның ең биік тауы қайсы?",
    answers: ["Алатау", "Хан Тәңірі", "Мұзтау", "Қаратау"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-question");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function startTimer() {
  timeLeft = 15;
  timerElement.textContent = `Уақыт: ${timeLeft}`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = ` Уақыт: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      showNextQuestion();
    }
  }, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answersElement.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const answerDiv = document.createElement("div");
    answerDiv.classList.add(
      "answer",
      ["blue", "green", "yellow", "red"][index]
    );
    answerDiv.textContent = answer;
    answerDiv.onclick = () => {
      clearInterval(timer);
      if (index === currentQuestion.correct) {
        score++;
        answerDiv.style.backgroundColor = "#28A745"; // Жасыл
      } else {
        answerDiv.style.backgroundColor = "#DC3545"; // Қызыл
      }
      setTimeout(showNextQuestion, 1000);
    };
    answersElement.appendChild(answerDiv);
  });

  startTimer();
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-container").classList.add("hidden");
  resultElement.classList.remove("hidden");
  scoreElement.textContent = score;
}

nextButton.addEventListener("click", showNextQuestion);

loadQuestion();
