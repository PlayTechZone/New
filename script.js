// Questions Array
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1,
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Human"],
        correct: 1,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Jane Austen"],
        correct: 2,
    },
    {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "120°C", "80°C"],
        correct: 1,
    },
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultSection = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Load Question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });
}

// Check Answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show Result
function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultSection.style.display = "block";
    scoreEl.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultSection.style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
}

// Event Listeners
nextBtn.addEventListener("click", loadQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Initialize Quiz
loadQuestion();
