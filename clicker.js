document.addEventListener("DOMContentLoaded", function() {
  const clickButton = document.getElementById("clickButton");
  const resetButton = document.getElementById("resetButton");
  const scoreDisplay = document.getElementById("score");

  let score = 0;

  // Функція для оновлення лічильника очок
  function updateScore() {
      scoreDisplay.textContent = `Твої очки: ${score}`;
  }

  // Обробник кліку на кнопку "Натискай!"
  clickButton.addEventListener("click", function() {
      score++;
      updateScore();
      // Тут можна додати код для збереження очок у базі даних
  });

  // Обробник кліку на кнопку "Скинути очки"
  resetButton.addEventListener("click", function() {
      score = 0;
      updateScore();
      // Тут можна додати код для скидання очок у базі даних
  });

  // Ініціалізація лічильника
  updateScore();
});
