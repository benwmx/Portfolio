const email = document.getElementById('email');
const form = document.querySelector('form');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (event) => {
  if (email.value.trim().toLowerCase() !== email.value.trim()) {
    event.preventDefault();
    errorMsg.className = 'error';
    errorMsg.innerText = 'Please enter email in lowercase format!';
  } else {
    errorMsg.className = 'success';
    errorMsg.innerText = 'Good!';
  }
});
