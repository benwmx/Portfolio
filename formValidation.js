const email = document.getElementById('email');
const form = document.querySelector('form');
const errorMsg = document.querySelector('form span');

const lowerCaseValidation = (input) => {
  const lowerInput = input.toLowerCase().trim();
  if (lowerInput !== input.trim()) return true;
  return false;
};
form.addEventListener('submit', (event) => {
  if (lowerCaseValidation(email.value)) {
    event.preventDefault();
    errorMsg.className = 'error';
    errorMsg.innerText = 'Please enter email in lowercase format!';
  } else {
    errorMsg.className = 'success';
    errorMsg.innerText = 'Good!';
  }
});
