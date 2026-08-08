// Static certificate data
const validCertId = "TA-2026-FAZEL-DL-211";

const certificateData = {
  studentName: "Mohammad Fazel Masjedi",
  fatherName: "Ghulam Farooq Masjedi",
  programName: "Deep Learning: From Fundamentals to Applications",
  certId: validCertId,
  certNumber: "211",
  level: "Semi-specialized",
  instructor: "Naser Ahadi",
  startDate: "2026/2/15",
  endDate: "2026/5/1",
  issueDate: "2026/5/2",
  score: "91.85%",
  grade: "Excellent",
  status: "Valid — Certificate Verified"
};

document.addEventListener('DOMContentLoaded', function () {
  const verifyBtn = document.getElementById('verifyBtn');
  const certIdInput = document.getElementById('certIdInput');
  const errorMsg = document.getElementById('errorMsg');
  const certResultDiv = document.getElementById('certResult');
  const studentProfileDiv = document.getElementById('studentProfile');

  verifyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const enteredId = certIdInput.value.trim();

    // Hide previous results
    certResultDiv.classList.add('hidden');
    studentProfileDiv.classList.remove('profile-visible');
    errorMsg.style.display = 'none';

    if (enteredId === '') {
      errorMsg.textContent = 'Please enter a Certificate ID.';
      errorMsg.style.display = 'block';
      return;
    }

    if (enteredId === validCertId) {
      // Populate certificate fields
      document.getElementById('studentName').textContent = certificateData.studentName;
      document.getElementById('fatherName').textContent = certificateData.fatherName;
      document.getElementById('programName').textContent = certificateData.programName;
      document.getElementById('certId').textContent = certificateData.certId;
      document.getElementById('certNumber').textContent = certificateData.certNumber;
      document.getElementById('level').textContent = certificateData.level;
      document.getElementById('instructor').textContent = certificateData.instructor;
      document.getElementById('startDate').textContent = certificateData.startDate;
      document.getElementById('endDate').textContent = certificateData.endDate;
      document.getElementById('issueDate').textContent = certificateData.issueDate;
      document.getElementById('score').textContent = certificateData.score;
      document.getElementById('grade').textContent = certificateData.grade;
      document.getElementById('statusText').textContent = certificateData.status;

      certResultDiv.classList.remove('hidden');
      studentProfileDiv.classList.add('profile-visible');
    } else {
      errorMsg.textContent = 'Certificate not found. Please check the ID and try again.';
      errorMsg.style.display = 'block';
    }
  });

  // Allow Enter key to trigger verification
  certIdInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      verifyBtn.click();
    }
  });
});
