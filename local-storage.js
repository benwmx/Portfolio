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

const inputListeners = () => {
  document.getElementById('name').addEventListener('keyup', () => {
    addData();
  });
  document.getElementById('email').addEventListener('keyup', () => {
    addData();
  });
  document.getElementById('message').addEventListener('keyup', () => {
    addData();
  });
};

if (localStorage.getItem('userData') !== null) retrieveData();
inputListeners();
