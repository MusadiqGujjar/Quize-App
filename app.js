const questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
    answer: "Islamabad",
    type: "mcq"
  },
  {
    question: "JavaScript is a compiled language. (True/False)",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "HTML stands for Hyper Text Markup Language.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which is the largest ocean?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
    type: "mcq"
  },
  {
    question: "CSS is used for styling web pages.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "2 + 2 = 5",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which language is used to make websites interactive?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "JavaScript",
    type: "mcq"
  },
  {
    question: "Sun rises from west.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "Ruby", "HTML", "Java"],
    answer: "HTML",
    type: "mcq"
  },
  {
    question: "The currency of Japan is Yen.",
    options: ["True", "False"],
    answer: "True",
    type: "tf"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    type: "mcq"
  },
  
{
  question: "Which HTML tag is used to insert an image?",
  options: ["<img>", "<image>", "<pic>", "<src>"],
  answer: "<img>",
  type: "mcq"
},
{
  question: "Which CSS property is used to change text color?",
  options: ["background-color", "font-style", "color", "text-color"],
  answer: "color",
  type: "mcq"
},
{
  question: "Which JavaScript method is used to output text in the browser console?",
  options: ["console.log()", "alert()", "document.write()", "print()"],
  answer: "console.log()",
  type: "mcq"
},
{
  question: "What is the correct HTML tag for a paragraph?",
  options: ["<p>", "<para>", "<paragraph>", "<text>"],
  answer: "<p>",
  type: "mcq"
},
  {
    question: "Which year did Pakistan get independence?",
    options: ["1945", "1947", "1950", "1946"],
    answer: "1947",
    type: "mcq"
  },
  {
  question: "CSS stands for Computer Style Sheets.",
  options: ["True", "False"],
  answer: "False",
  type: "tf"
},
{
  question: "JavaScript can be used to make websites interactive.",
  options: ["True", "False"],
  answer: "True",
  type: "tf"
},
{
  question: "The <title> tag is used inside the <body> tag.",
  options: ["True", "False"],
  answer: "False",
  type: "tf"
},
{
    question: "React is a backend framework.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "The Great Wall of China is visible from space.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which company created Windows OS?",
    options: ["Apple", "Microsoft", "Google", "IBM"],
    answer: "Microsoft",
    type: "mcq"
  },

{
  question: "Who was the founder of Pakistan?",
  options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Zulfiqar Ali Bhutto"],
  answer: "Quaid-e-Azam",
  type: "mcq"
},
{
  question: "How many provinces are there in Pakistan?",
  options: ["3", "4", "5", "6"],
  answer: "4",
  type: "mcq"
},
{
    question: "Which tag is used to link CSS in HTML?",
    options: ["<css>", "<link>", "<style>", "<script>"],
    answer: "<link>",
    type: "mcq"
  },
  {
    question: "Earth is flat.",
    options: ["True", "False"],
    answer: "False",
    type: "tf"
  },
  {
    question: "Which is the smallest continent?",
    options: ["Asia", "Europe", "Australia", "Africa"],
    answer: "Australia",
    type: "mcq"
  },
  {
  question: "Which city is called the heart of Pakistan?",
  options: ["Islamabad", "Karachi", "Lahore", "Peshawar"],
  answer: "Lahore",
  type: "mcq"
},
{
  question: "Which is the national animal of Pakistan?",
  options: ["Tiger", "Markhor", "Lion", "Goat"],
  answer: "Markhor",
  type: "mcq"
},
{
  question: "HTML is used to structure web pages.",
  options: ["True", "False"],
  answer: "True",
  type: "tf"
},
{
  question: "HTML is used to structure web pages.",
  options: ["True", "False"],
  answer: "True",
  type: "tf"
},


];

let current = 0;
let score = 0;
let timeLeft = 15 * 60; 


const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const resultDiv = document.getElementById("result");

function startQuiz() {
  showQuestion();
  updateTimer();
  setInterval(updateTimer, 1000);
}

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;
  questionNumber.textContent = `Question ${current + 1} of ${questions.length}`;
  optionsList.innerHTML = "";

  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => selectAnswer(li, opt);
    optionsList.appendChild(li);
  });
}

function selectAnswer(selectedLi, selectedOption) {
  const correct = questions[current].answer;

  if (selectedOption === correct) {
    score++;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-container").style.display = "none";
  nextBtn.style.display = "none";
  resultDiv.classList.remove("hidden");
  resultDiv.textContent = `Your Score: ${score} out of ${questions.length}`;
}

function updateTimer() {
  const timerEl = document.getElementById("timer");
  if (timeLeft <= 0) {
    endQuiz();
    return;
  }
  let mins = Math.floor(timeLeft / 60);
  let secs = timeLeft % 60;
  timerEl.textContent = `Time Left: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  timeLeft--;
}

nextBtn.addEventListener("click", () => {
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

startQuiz();
