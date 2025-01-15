// script.js
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = 
    document.body.classList.contains('dark-mode') 
      ? 'Désactiver le mode sombre' 
      : 'Activer le mode sombre';
});
