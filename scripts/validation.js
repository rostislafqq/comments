const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const textInput = document.getElementById('text');
const textError = document.getElementById('text-error');
nameInput.addEventListener('input', function () {
  if (nameInput.value.trim() !== '') {
    nameError.style.display = 'none';
  }
});

textInput.addEventListener('input', function () {
  if (textInput.value.trim() !== '') {
    textError.style.display = 'none';
  }
});
