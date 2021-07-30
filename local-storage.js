let data = {
  name: '',
  email: '',
  message: '',
};
const retrieveData = () => {
  data = JSON.parse(localStorage.getItem('userData'));
  document.getElementById('name').value = data.name;
  document.getElementById('email').value = data.email;
  document.getElementById('message').value = data.message;
};
const addData = () => {
  data.name = document.getElementById('name').value;
  data.email = document.getElementById('email').value;
  data.message = document.getElementById('message').value;
  localStorage.setItem('userData', JSON.stringify(data));
};

document.getElementById('submit', () => {
  addData();
});
retrieveData();
