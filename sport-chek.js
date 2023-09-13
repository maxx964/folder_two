// Отримайте посилання на елемент з ідентифікатором "exercise-list"
const exerciseList = document.getElementById('exercise-list');

// Створіть масив з вправами та їх описами
const exercises = [
  {
    name: 'Кардио разминка',
    description: '15 минут',
  },
  {
    name: 'Подъем корпуса на пресс лежа на спине',
    description: '25 раз',
  },
  {
    name: 'Жим грифа штанги лежа',
    description: '20 раз',
    },
  
  
   {
    name: 'Подтягивание в гравитроне',
    description: '8-10 раз',
    },
    {
    name: 'Присед со штангой (грифом) на плечах',
    description: '20 раз',
    },
     {
    name: 'Жим гантелей сидя вверх',
    description: '12 раз',
    },
      {
    name: 'Становая тяга',
    description: '10-15 раз',
    },
       {
    name: 'Подъем на носки в тренажере	',
    description: '20 раз',
    },
        {
    name: 'Французский жим лежа на скамье',
    description: '10-12 раз',
    },
         {
    name: 'Подъем z-грифа штанги на бицепс',
    description: '10-12 раз',
    },
          {
    name: 'Кардио пробежка',
    description: '10 минут ',
    },
          
  // Додайте інші вправи тут
];

// Пройдіться по масиву вправ і створіть чекбокси для кожної вправи
exercises.forEach((exercise, index) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `exercise-${index}`;
  checkbox.value = exercise.name;

  const label = document.createElement('label');
  label.htmlFor = `exercise-${index}`;
  label.innerText = `${exercise.name} (${exercise.description})`;

  // Додайте обробник події для чекбоксу
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      // Якщо чекбокс вибраний, покажіть модальне вікно на 3 секунди
      showModal('Вправу виконано вітаю!');

      // Зняти вибір чекбоксу після показу модального вікна
      setTimeout(() => {
        label.innerText = `${exercise.name} (${exercise.description}) (Виконано!)`
      }, 3000);
    }
  });

  // Додайте чекбокс і мітку до списку вправ
  exerciseList.appendChild(checkbox);
  exerciseList.appendChild(label);
  exerciseList.appendChild(document.createElement('br'));
});

// Функція для показу модального вікна з заданим текстом
function showModal(text) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <p>${text}</p>
    </div>
  `;

  // Додайте модальне вікно до body
  document.body.appendChild(modal);

  // Закрийте модальне вікно через 3 секунди
  setTimeout(() => {
    modal.remove();
  }, 3000);
}


// Отримати всі чекбокси
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Отримати контейнер, де виводити повідомлення
const messageContainer = document.getElementById('message-container');

// Функція для перевірки, чи всі чекбокси відмічені
function areAllCheckboxesChecked() {
    return Array.from(checkboxes).every((checkbox) => checkbox.checked);
}

// Функція для відображення повідомлення
function displayMessage() {
    if (areAllCheckboxesChecked()) {
        messageContainer.innerText = 'Ви сьогодні неперевершенні в занняті спортом';
    } else {
        messageContainer.innerText = '';
    }
}

// Додати обробник події для кожного чекбокса
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', displayMessage);
});
