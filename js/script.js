const toggleButton = document.querySelector('toggle-button');
const body = document.querySelector('body');

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});