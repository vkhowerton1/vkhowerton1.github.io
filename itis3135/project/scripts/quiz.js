window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const correctAnswers = {
      q1: {
        answer: "Markup",
        explanation: "HTML stands for HyperText Markup Language — it's used to structure content on the web, not program logic."
      },
      q2: {
        answer: "10/12/1991",
        explanation: "HTML was first mentioned by Tim Berners-Lee on October 12th, 1991, as part of the early development of the World Wide Web."
      },
      q3: {
        answer: "<ul>",
        explanation: 'The <code>&lt;ul&gt;</code> tag is used for unordered (bulleted) lists. The <code>&lt;ol&gt;</code> tag is used for ordered (numbered) lists.'
      },
      q4: {
        answer: "Internal links point to pages on the same website; external links go to other websites.",
        explanation: "Internal links help navigate within your site; external links take you to a different domain."
      },
      q5: {
        answer: "Repetition",
        explanation: "Repetition reinforces design by repeating visual elements to create unity and consistency."
      },
      q6: {
        answer: "It's a fallback if the first font isn't available.",
        explanation: "The second font in a CSS list acts as a backup if the browser can't load the first one."
      },
      q7: {
        answer: "Makes it interactive and dynamic.",
        explanation: "JavaScript adds interactivity like animations, forms, games, and dynamic content."
      },
      q8: {
        answer: "To store and reuse data.",
        explanation: "Variables hold values that can change and be reused — key to all JavaScript logic."
      }
    };

    let incorrectAnswers = [];


    for (let question in correctAnswers) {
      if (question === "q2") continue;

      const selected = document.querySelector(`input[name="${question}"]:checked`);
      const correct = correctAnswers[question].answer;
      const explanation = correctAnswers[question].explanation;

      if (!selected || selected.value !== correct) {
        incorrectAnswers.push({
          question: question.slice(1),
          explanation: explanation
        });
      }
    }


    const selectedDate = document.querySelector("#datePicker").value.trim();
    const correctDate = correctAnswers.q2.answer.trim();


    if (selectedDate !== correctDate) {
      incorrectAnswers.push({
        question: "2",
        explanation: correctAnswers.q2.explanation
      });
    }

    const resultDiv = document.getElementById("result");
    if (incorrectAnswers.length > 0) {
      let feedback = "<h3>Incorrect Answers:</h3>";
      incorrectAnswers.forEach((item) => {
        feedback += `
          <div style="margin-bottom: 20px;">
            <strong>Question ${item.question}:</strong><br>
            📝 ${item.explanation}
          </div>
        `;
      });
      resultDiv.innerHTML = feedback;
    } else {
      resultDiv.innerHTML = "<h3>Congratulations! You answered all questions correctly.</h3>";
    }
  });
});