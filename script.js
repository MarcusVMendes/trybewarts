// Requisito 3
function validateForm() {
  const loginIsValid = document.getElementById('user-login').value;
  const passwordIsValid = document.getElementById('user-password').value;
  if (loginIsValid === 'tryber@teste.com' && passwordIsValid === '123456') {
    alert('Olá, Tryber!');
    return false;
  }
  if (loginIsValid !== 'tryber@teste.com' && passwordIsValid !== '123456') {
    alert('Login ou senha inválidos.');
    return false;
  }
}
const getBtn = document.getElementById('btn-login');
getBtn.addEventListener('click', validateForm);

// Requisito 18
const checkedBox = document.getElementById('agreement');

function checkCheckbox() {
  const buttonSubmit = document.getElementById('submit-btn');
  if (checkedBox.checked === true) {
    buttonSubmit.disabled = false;
  }
}

checkedBox.addEventListener('click', checkCheckbox);
