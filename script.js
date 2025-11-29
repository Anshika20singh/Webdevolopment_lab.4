// Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which programming language is used for web styling?", answer: "css" },
    { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which method converts a string to lowercase in JS?", answer: "tolowercase" }
];

// Function to Run the Quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (!userAnswer) {
            alert("No answer detected! Moving to next question.");
            continue;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer.toLowerCase().trim()) {
            score++;
            alert("Correct Answer! 🎉");
        } else {
            alert("Wrong Answer! ❌\nCorrect: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Finished! 🎯\nYour Score: " + score + "/" + quizQuestions.length);
}

runQuiz();