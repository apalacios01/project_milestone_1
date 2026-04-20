document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const resultsDiv = document.getElementById("results");
    const quizForm = document.getElementById("quizForm");

    // Correct answers 
    const correctAnswers = {
        q1: "cookies",
        q2: "session",
        q3: "tracking",
        q4: "gdpr",
        q5: ["login", "preferences", "tracking"]
    };

    // Grade quiz when user clicks submit
    submitBtn.addEventListener("click", function () {
        let score = 0;
        const totalQuestions = 5;
        let resultsHTML = "<h2>Quiz Results</h2>";

        // Question 1 fill in the blank
        const q1Answer = document.getElementById("q1").value.trim().toLowerCase();
        if (q1Answer === correctAnswers.q1) {
            score++;
            resultsHTML += `<p><strong>Question 1:</strong> <span class="correct-answer">Correct</span><br>Answer: cookies</p>`;
        } else {
            resultsHTML += `<p><strong>Question 1:</strong> <span class="wrong-answer">Incorrect</span><br>Correct answer: cookies</p>`;
        }

        // Question 2 mc
        const q2Selected = document.querySelector('input[name="q2"]:checked');
        if (q2Selected && q2Selected.value === correctAnswers.q2) {
            score++;
            resultsHTML += `<p><strong>Question 2:</strong> <span class="correct-answer">Correct</span><br>Answer: Session cookie</p>`;
        } else {
            resultsHTML += `<p><strong>Question 2:</strong> <span class="wrong-answer">Incorrect</span><br>Correct answer: Session cookie</p>`;
        }

        // Question 3 mc
        const q3Selected = document.querySelector('input[name="q3"]:checked');
        if (q3Selected && q3Selected.value === correctAnswers.q3) {
            score++;
            resultsHTML += `<p><strong>Question 3:</strong> <span class="correct-answer">Correct</span><br>Answer: Because they can track browsing behavior</p>`;
        } else {
            resultsHTML += `<p><strong>Question 3:</strong> <span class="wrong-answer">Incorrect</span><br>Correct answer: Because they can track browsing behavior</p>`;
        }

        // Question 4 mc
        const q4Selected = document.querySelector('input[name="q4"]:checked');
        if (q4Selected && q4Selected.value === correctAnswers.q4) {
            score++;
            resultsHTML += `<p><strong>Question 4:</strong> <span class="correct-answer">Correct</span><br>Answer: GDPR</p>`;
        } else {
            resultsHTML += `<p><strong>Question 4:</strong> <span class="wrong-answer">Incorrect</span><br>Correct answer: GDPR</p>`;
        }

        // Question 5 mc
        const q5Selected = document.querySelectorAll('input[name="q5"]:checked');
        let selectedAnswers = [];

        q5Selected.forEach(function (item) {
            selectedAnswers.push(item.value);
        });

        selectedAnswers.sort();
        const correctQ5 = [...correctAnswers.q5].sort();

        if (JSON.stringify(selectedAnswers) === JSON.stringify(correctQ5)) {
            score++;
            resultsHTML += `<p><strong>Question 5:</strong> <span class="correct-answer">Correct</span><br>Correct answers: Remember login sessions, Save user preferences, Track browsing activity</p>`;
        } else {
            resultsHTML += `<p><strong>Question 5:</strong> <span class="wrong-answer">Incorrect</span><br>Correct answers: Remember login sessions, Save user preferences, Track browsing activity</p>`;
        }

        // Final result
        const percentage = (score / totalQuestions) * 100;
        let passFailText = "";

        if (percentage >= 70) {
            passFailText = `<p class="pass-text">Pass</p>`;
        } else {
            passFailText = `<p class="fail-text">Fail</p>`;
        }

        resultsHTML =
            passFailText +
            `<p><strong>Total Score:</strong> ${score} / ${totalQuestions} (${percentage.toFixed(0)}%)</p>` +
            resultsHTML;
        // Display results
        resultsDiv.innerHTML = resultsHTML;
        resultsDiv.style.display = "block";
    });

    // Reset quiz and clear results
    resetBtn.addEventListener("click", function () {
        quizForm.reset();
        resultsDiv.innerHTML = "";
        resultsDiv.style.display = "none";
    });
});