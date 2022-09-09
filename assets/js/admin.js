(function () {
  var appTableElem = document.getElementById("applicant-table");
  var appTableBodyElem = appTableElem.querySelector("tbody");
  var deleteApplicantModalElem = document.getElementById(
    "delete-applicant-modal"
  );
  var deleteApplicantModal = new bootstrap.Modal(deleteApplicantModalElem);

  var applicant = Applicant();
  var toast = Toast();

  function init() {
    toast.init();
    initEvents();
    renderApplicantsTableRow();
  }

  function initEvents() {
    appTableBodyElem.addEventListener("click", tableBodyClickHandler);
    deleteApplicantModalElem.addEventListener(
      "show.bs.modal",
      deleteApplicantModalHandler
    );
  }

  function renderApplicantsTableRow() {
    var allApplicants = applicant.getAll();
    var html = "";
    var count = 0;
    for (var key in allApplicants) {
      html += generateApplicantTableRow(allApplicants[key], ++count);
    }
    appTableBodyElem.innerHTML = html;
  }

  function generateApplicantTableRow(data, serialNo) {
    return `
        <tr>
            <td>
                ${serialNo}
            </td>
            <td>
                ${data.fullName}
            </td>
            <td>
                ${data.fatherName}
            </td>
            <td>
                ${data.cnic}
            </td>
            <td>
                ${data.email}
            </td>
            <td>
              <div class="d-flex justify-content-around align-items-center">
                <a href="./applicant-detail.html?cnic=${data.cnic}"><img src="./assets/images/eye-solid.svg" alt="view" /></a>
                <button class="bg-transparent border-0"><img src="./assets/images/trash-solid.svg" alt="delete" /></button>
              </div>
            </td>
        </tr>
    `;
  }

  // Handlers
  function tableBodyClickHandler(event) {
    var target = event.target;
    if (!target.closest("button")) return;
    deleteApplicantModal.show(
      target.closest("tr").getElementsByTagName("td")[3].innerText
    );
  }

  function deleteApplicantModalHandler(event) {
    event.target
      .getElementsByTagName("button")[2]
      .addEventListener("click", function () {
        applicant.delete(event.relatedTarget);
        renderApplicantsTableRow();
        deleteApplicantModal.hide();
        toast.show("Success!", "Applicant deleted");
      });
  }

  return init();
})();
