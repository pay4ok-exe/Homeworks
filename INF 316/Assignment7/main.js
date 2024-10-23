const quizQuestions = [
  {
    question: "Who is the main character of AOT?",
    options: ["Eren", "Armin", "Mikasa", "Levi"],
    correctAnswer: 0,
    image: "image1.png", // Replace with actual image path
  },
  {
    question: "Who killed the Female Titan?",
    options: ["Levi", "Mikasa", "Eren", "Armin"],
    correctAnswer: 0,
    image: "image2.png",
  },
  {
    question: "What is the name of the island where the story begins?",
    options: ["Paradis", "Marley", "Shiganshina", "Hizuru"],
    correctAnswer: 0,
    image: "image3.png",
  },
  {
    question: "Which titan form does Eren possess?",
    options: ["Colossal Titan", "Armored Titan", "Attack Titan", "Beast Titan"],
    correctAnswer: 2,
    image: "image4.png",
  },
  {
    question: "Who is the commander of the Survey Corps after Erwin?",
    options: ["Hange", "Mikasa", "Levi", "Jean"],
    correctAnswer: 0,
    image: "image5.png",
  },
  {
    question: "Which titan can control other titans?",
    options: ["Armored Titan", "Beast Titan", "Founding Titan", "Cart Titan"],
    correctAnswer: 2,
    image: "image6.png",
  },
  {
    question: "Who was Eren's father?",
    options: [
      "Zeke Yeager",
      "Grisha Yeager",
      "Kenny Ackerman",
      "Floch Forster",
    ],
    correctAnswer: 1,
    image: "image7.png",
  },
  {
    question: "What is Armin's titan form?",
    options: ["Beast Titan", "War Hammer Titan", "Colossal Titan", "Jaw Titan"],
    correctAnswer: 2,
    image: "image8.png",
  },
  {
    question: "Which nation is the enemy of Paradis?",
    options: ["Hizuru", "Marley", "Mid-East", "Liberio"],
    correctAnswer: 1,
    image: "image9.png",
  },
  {
    question: "What is Levi's last name?",
    options: ["Ackerman", "Smith", "Braun", "Forster"],
    correctAnswer: 0,
    image: "image10.png",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const quizForm = document.getElementById("quiz-form");
const questionImage = document.getElementById("question-image");
const scoreDisplay = document.getElementById("score");
const correctAnswersDisplay = document.getElementById("correct-answers");

function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;

  quizForm.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
        <input type="radio" name="answer" value="${index}">
        ${option}
      `;
    quizForm.appendChild(label);
  });

  nextBtn.disabled = true;
}

function showResult() {
  document.getElementById("quiz-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");

  scoreDisplay.textContent = score;
  correctAnswersDisplay.innerHTML = quizQuestions
    .map((q) => {
      return `<p>${q.question}: <strong>${
        q.options[q.correctAnswer]
      }</strong></p>`;
    })
    .join("");
}

startBtn.addEventListener("click", () => {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("quiz-screen").classList.add("active");
  loadQuestion();
});

quizForm.addEventListener("change", () => {
  nextBtn.disabled = false;
});

nextBtn.addEventListener("click", () => {
  const selectedOption = quizForm.querySelector("input[name='answer']:checked");
  if (!selectedOption) return;

  const answerValue = parseInt(selectedOption.value);
  if (answerValue === quizQuestions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("start-screen").classList.add("active");
});
