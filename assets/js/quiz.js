var quizData = {};
var quesIndex = 0;
var isQuizRun = true;
var emoji = { excellent: "🎉", good: "😎", pass: "😐", fail: "😞" };
var message = {
  excellent: "congrats!",
  good: "nice",
  pass: "fair",
  fail: "sorry",
};

var quizFormElem = document.getElementsByTagName("form")[0];
var quizTitleElem = quizFormElem.getElementsByTagName("h1")[0];
var quizTimeLeftElem = quizFormElem.getElementsByClassName("time-left")[0];
var quizQuesElem = quizFormElem.getElementsByTagName("legend")[0];
var quizOptionsElem = quizFormElem.getElementsByClassName("quiz-options")[0];
var quizQuestionCountElem = quizFormElem.querySelector("#questions-count");
var quizTotalQuestionElem = quizFormElem.querySelector("#total-questions");
var nextQuesBtnElem = quizFormElem.getElementsByTagName("button")[0];
var quizModalElem = document.getElementById("quiz-modal");

var quizModal = new bootstrap.Modal(quizModalElem, {
  keyboard: false,
  backdrop: "static",
});

init();

function init() {
  initQuizData(initQuizDataInDOM);
}

function initQuizData(callback) {
  var quiz = getQuiz();
  if (quiz === null || quiz === undefined)
    return window.location.assign("quizzes.html");
  quizData = quizzesData[quiz.index];
  quizData.questions.shuffle();
  callback && typeof callback === "function" && callback();
}

function initQuizDataInDOM() {
  quizTitleElem.innerHTML = quizData.title;
  setQuestion(quesIndex);
  quizTotalQuestionElem.innerHTML = quizData.totalQuestions;

  timer(quizData.duration, 1000, function (time) {
    if (time <= 0) return submitQuiz();
    var hms = secToHourMinutesSeconds(time);
    quizTimeLeftElem.innerHTML = `${hms.mins}:${hms.sec}`;
    return isQuizRun;
  });

  if (isPageReloaded()) {
    setTimeout(submitQuiz, 1000);
  }
}

function setQuestion(index) {
  var currentQuestion = quizData.questions[index];

  quizQuesElem.innerHTML = index + 1 + ". " + currentQuestion.question;
  nextQuesBtnElem.disabled = true;
  renderQuizOptions(currentQuestion.options.shuffle());

  quizQuestionCountElem.innerHTML = index + 1;
}

function renderQuizOptions(options) {
  var html = "";
  for (var i = 0; i < options.length; i++) {
    html += generateQuizOptionHtml(options[i], i);
  }
  quizOptionsElem.innerHTML = html;
}

function generateQuizOptionHtml(label, index) {
  return `
        <input
            class="d-none"
            type="radio"
            name="quiz"
            value="${label}"
            id="${index}"
        />
        <label for="${index}">
            <span>${String.fromCharCode(index + 65)}</span> ${label}
        </label>
    `;
}

function calculateResult() {
  var correct = calculateCorrectAnswers();
  var percent = (correct / quizData.totalQuestions) * 100;
  var status = "fail";
  if (percent >= 90) {
    status = "excellent";
  } else if (percent >= 80) {
    status = "good";
  } else if (percent >= 50) {
    status = "pass";
  }

  return { correct, percent, status };
}

function calculateCorrectAnswers() {
  var questions = quizData.questions;
  var correctCount = 0;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].answer === questions[i].correctOption) correctCount++;
  }
  return correctCount;
}

function submitQuiz() {
  isQuizRun = false;
  var result = calculateResult();
  setUserResult(getLoggedInUser().username, quizData.title, result);
  quizModal.show(result);
}

// Handlers
function quizOptionChangeHandler(event) {
  nextQuesBtnElem.disabled = false;
}
function quizFormSubmitHandler(event) {
  event.preventDefault();
  var checkedOptionElem = quizOptionsElem.querySelector(
    "input[name='quiz']:checked"
  );
  if (!checkedOptionElem) return;
  quizData.questions[quesIndex].answer = checkedOptionElem.value;
  if (quesIndex === quizData.totalQuestions - 1) return submitQuiz();

  setQuestion(++quesIndex);
  if (quesIndex === quizData.totalQuestions - 1)
    nextQuesBtnElem.innerHTML = "Submit";
}

function quizModalHandler(event) {
  var relatedTarget = event.relatedTarget;
  var status = relatedTarget.status;
  var messageElem = event.target.getElementsByClassName("message")[0];
  var quitQuizBtnElem = event.target.getElementsByTagName("button")[0];

  messageElem.innerHTML = `and ${message[status]} ${emoji[status]}, You got ${relatedTarget.correct} out of ${quizData.totalQuestions}`;

  quitQuizBtnElem.addEventListener("click", quitQuizBtnClickHandler);
}

function quitQuizBtnClickHandler() {
  quizModal.hide();
  window.location.assign("quizzes.html");
}

// Events
quizOptionsElem.addEventListener("change", quizOptionChangeHandler);
quizFormElem.addEventListener("submit", quizFormSubmitHandler);
quizModalElem.addEventListener("show.bs.modal", quizModalHandler);

document.addEventListener("visibilitychange", submitQuiz);
