init();

function init() {
  renderReportHtml();
}

function renderReportHtml() {
  var mainElem = document.getElementsByTagName("main")[0];
  var resultElem = mainElem.getElementsByClassName("list-group")[0];

  var results = getUserResult(getLoggedInUser().username);
  var html = "";
  for (var quizKey in results) {
    var result = results[quizKey];
    html += generateReportHtml({
      quiz: quizKey,
      percent: result.percent,
      status: result.status,
    });
  }
  resultElem.innerHTML = html;
}

function generateReportHtml(data) {
  return `
        <li class="list-group-item d-flex align-items-center">
            <h2 class="flex-grow-1 flex-shrink-1 h6 mb-0">
            ${data.quiz.split("_").join(" ")}
            </h2>
            <span class="me-3 text-capitalize status">${
              data.status
            }</span><span class="percent">${data.percent.toFixed()}%</span>
        </li>
    `;
}
