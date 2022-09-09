(function () {
  var cnicNo = functions().getParams().cnic;

  var appSecElem = document.getElementById("applicant-detail-section");
  var appFormElem = appSecElem.getElementsByTagName("form")[0];
  var appForm = FormValidation(appFormElem);

  var applicant = Applicant();
  var toast = Toast();

  function init() {
    authorizeApplicant();
    initEvents();
    appForm.init();
    toast.init();
    addApplicantDetailInDOM();
  }

  function initEvents() {
    appFormElem.addEventListener("submit", appFormSubmitHandler);
  }

  function addApplicantDetailInDOM() {
    var applicantDetail = applicant.get(cnicNo);

    var appImgElem = appSecElem.getElementsByTagName("img")[0];
    appImgElem.src = applicantDetail.picture;
    appImgElem.alt = applicantDetail.fullName;

    for (var key in applicantDetail) {
      var formElem = document.getElementById(key.camelCaseToKebabCase());
      if (formElem) {
        formElem.value = applicantDetail[key];
      }
    }
  }

  function isCnicParam() {
    if (cnicNo) return true;
  }

  function isApplicantExist() {
    if (applicant.get(cnicNo)) return true;
  }

  function authorizeApplicant() {
    if (isCnicParam() && isApplicantExist()) return true;
    window.location.assign("./index.html");
  }

  // Handlers
  function appFormSubmitHandler(event) {
    event.preventDefault();
    if (!appForm.isValidated()) return;
    var fields = event.target;
    var fieldsLen = fields.length;
    var updatedApplicantDetail = {};
    for (var i = 0; i < fieldsLen - 1; i++) {
      var key = fields[i].id.toCamelCase("-");
      var value = fields[i].value;
      updatedApplicantDetail[key] = value;
    }
    applicant.update(updatedApplicantDetail);
    toast.show("Success!", "Applicant detail updated");
    setTimeout(function () {
      script().showLoader();
      window.location.assign("admin.html");
    }, 1500);
  }

  return init();
})();
