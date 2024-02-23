const ps = require("prompt-sync");
const prompt = ps();
const question = {
  Q1: {
    questionText: "What is the capital of France?",
    answers: [
      { option: "A", text: "London" },
      { option: "B", text: "Paris" },
      { option: "C", text: "Berlin" },
      { option: "D", text: "Rome" },
    ],
    correctAnswer: "B",
  },
  Q2: {
    questionText: "What is the largest planet in our solar system?",
    answers: [
      { option: "A", text: "Jupiter" },
      { option: "B", text: "Mars" },
      { option: "C", text: "Earth" },
      { option: "D", text: "Saturn" },
    ],
    correctAnswer: "A",
  },
  Q3: {
    questionText: "Who is the author of Harry Potter series?",
    answers: [
      { option: "A", text: "J.K. Rowling" },
      { option: "B", text: "Stephenie Meyer" },
      { option: "C", text: "Veronica Roth" },
      { option: "D", text: "George R. R. Martin" },
    ],
    correctAnswer: "A",
  },
};

let score = 0;

for (const key in question) {
  const currentQuestion = question[key];
  console.log(currentQuestion.questionText); // Displays the question to be answered
  displayAnswers(currentQuestion);

  let inputAnswer = prompt("Enter your answer (A/B/C/D): ").toUpperCase();
  checkAnswer(inputAnswer, currentQuestion);
}

console.log("Your score is: " + score + "/3");

function displayAnswers(question) {
  question.answers.forEach((answer) => {
    console.log(answer.option + ": " + answer.text);
  });
}

function checkAnswer(inputAnswer, question) {
  if (inputAnswer === question.correctAnswer) {
    console.log("Correct answer!");
    score++;
  } else {
    console.log(
      `Wrong answer! The correct answer is ${question.correctAnswer}.`
    );
  }
}
