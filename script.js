const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change bulb emoji based on theme
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '💡'; // Bulb on
  } else {
    toggleButton.textContent = '🕯️'; // Candle for light mode
  }
});
