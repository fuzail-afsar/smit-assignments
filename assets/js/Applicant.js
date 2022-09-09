function Applicant() {
  function Applicant() {}
  Applicant.prototype = (function () {
    var applicants = getApplicantsFromDB();

    function add(data) {
      applicants[data.cnic] = data;
      setApplicantsInDB(applicants);
    }

    function update(data) {
      for (var key in data) {
        applicants[data.cnic][key] = data[key];
      }
      setApplicantsInDB(applicants);
    }

    function getApplicantByCnic(cnicNo) {
      return getApplicantsFromDB()[cnicNo];
    }

    function isApplicantExist(cnicNo) {
      return getApplicantByCnic(cnicNo) && true;
    }

    function deleteApplicant(cnicNo) {
      delete applicants[cnicNo];
      setApplicantsInDB(applicants);
    }

    function setApplicantsInDB(applicants) {
      localStorage.setItem("applicants", JSON.stringify(applicants));
    }

    function getApplicantsFromDB() {
      return JSON.parse(localStorage.getItem("applicants")) || {};
    }
    return {
      add: add,
      update: update,
      get: getApplicantByCnic,
      getAll: getApplicantsFromDB,
      delete: deleteApplicant,
      isExist: isApplicantExist,
    };
  })();
  return new Applicant();
}
