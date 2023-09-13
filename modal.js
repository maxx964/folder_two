// Отримайте необхідні елементи з DOM
const modals = document.querySelectorAll('.modal');
const images = document.querySelectorAll('.age-group img');

// Додайте обробник події для кожного зображення
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modals[index].style.display = 'block'; // Відкриття вікна
  });
});

// Закриття вікна при кліку за межами вікна
window.addEventListener('click', (e) => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Додаємо обробник події для рядків таблиці
const exerciseRows = document.querySelectorAll('.exercise-row');

exerciseRows.forEach((row) => {
    row.addEventListener('click', () => {
        const imageLink = row.getAttribute('data-image');
        const exerciseImage = document.createElement('img');
        exerciseImage.src = imageLink;
        exerciseImage.alt = 'Exercise Image';
        exerciseImage.className = 'exercise-image'; // Додаємо клас для зображення

        const existingImage = row.querySelector('.exercise-image');
        if (existingImage) {
            existingImage.remove(); // Видаляємо попереднє зображення, якщо воно вже існує
        } else {
            row.appendChild(exerciseImage); // Вставляємо зображення в рядок таблиці
        }
    });
});


