function checkAnswer() {
    var correctAnswer = "4";
    var selectedRadio = document.querySelector('input[name="quiz"]:checked');
    var feedback = document.getElementById('feedback');
    var userAnswer = selectedRadio ? selectedRadio.value : null;

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
