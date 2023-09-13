document.addEventListener('DOMContentLoaded', function () {
  const gifContainer = document.querySelector('.gif-container');
  const mainContent = document.getElementById('main-content');

  // Покажіть GIF-зображення перед завантаженням основного контенту
  gifContainer.style.display = 'flex';

  // Встановіть таймер для затримки відображення основного контенту
  setTimeout(() => {
    gifContainer.style.display = 'none'; // Сховайте GIF-контейнер
    mainContent.style.display = 'block'; // Покажіть основний контент
  }, 5000); // Затримка в 5 секунд
});
