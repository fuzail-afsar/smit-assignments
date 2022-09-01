(function () {
  var quizModalElem = document.getElementById("quiz-modal");

  function init() {
    renderQuizzesHtml();
    quizModalElem.addEventListener("show.bs.modal", showQuizModalHandler);
  }

  function renderQuizzesHtml() {
    var quizzesElem = document.getElementsByClassName("quizzes")[0];
    var html = "";
    for (var i = 0; i < quizzesData.length; i++) {
      html += generateQuizzesColumnHtml(quizzesData[i], i);
    }
    quizzesElem.innerHTML = html;
  }

  function generateQuizzesColumnHtml(quiz, index) {
    return `
    <div class="col">
      <div
        class="card h-100 pointer"
        data-bs-toggle="modal"
        data-bs-target="#quiz-modal"
        data-quiz-index="${index}"
        data-total-questions="${quiz.totalQuestions}"
        data-duration="${quiz.duration}"
      >
        <img
          src="${IMAGES_DIRECTORY + quiz.image}"
          class="card-img-top"
          alt="${quiz.title}"
        />
        <div class="card-body">
          <h5 class="card-title mb-4">${quiz.title}</h5>
          <p class="card-text text-muted">
            <small>${quiz.totalQuestions} Questions | ${secToMins(
      quiz.duration
    )} Mins</small>
          </p>
        </div>
      </div>
    </div>
  `;
  }

  function setQuiz(quiz) {
    sessionStorage.setItem("quiz", JSON.stringify(quiz));
  }

  function showQuizModalHandler(event) {
    var relatedTarget = event.relatedTarget;
    var duration = relatedTarget.getAttribute("data-duration");
    var totalQuestions = relatedTarget.getAttribute("data-total-questions");
    var quizIndex = relatedTarget.getAttribute("data-quiz-index");

    var modalBodyElem = quizModalElem.querySelector(".modal-body");
    var startQuizBtnElem = quizModalElem.querySelector(".start-quiz");

    modalBodyElem.innerHTML = `
    <ol>
      <li>
        You will have only
        <span class="text-primary">${secToMins(
          duration
        )} Mins</span> for this quiz to
        complete.
      </li>
      <li>
        You will have <span class="text-primary">${totalQuestions} questions</span>.
      </li>
      <li>You can't exit from the Quiz while you're playing.</li>
      <li>You can't refresh the Quiz while you're playing.</li>
      <li>You'll get points on the basis of your correct answers.</li>
    </ol>
  `;

    startQuizBtnElem.addEventListener("click", function () {
      setQuiz({ index: quizIndex });
      window.location.assign("quiz.html");
    });
  }

  return init();
})();
