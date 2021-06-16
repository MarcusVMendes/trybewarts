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
