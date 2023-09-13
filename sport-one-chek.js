// Отримайте посилання на елемент з ідентифікатором "exercise-list-2" (інший список вправ)
const exerciseList2 = document.getElementById('exercise-list-2');

// Створіть масив з іншими вправами та їх описами
const exercises2 = [
  {
    name: 'Жим лежа',
    description: '3x10',
  },
  {
    name: 'Разведение гантелей лежа',
    description: '3x10',
  },
  {
    name: 'Французский жим лежа',
    description: '3x10',
    },
  {
    name: 'Подтягивания на брусьях',
    description: '3x10',
    },
  {
    name: '	Подтягивание на турнике',
    description: '3x10',
    },
  {
    name: 'Подъем штанги или гантелей на бицепс',
    description: '3x10',
    },
  {
    name: 'Тяга верхнего блок',
    description: '3x10',
    },
  {
    name: 'Подтягивания на брусьях',
    description: '3x10',
    },
  
  {
    name: 'Присед',
    description: '4x15',
    },
  {
    name: 'Сгибание и разгибание ног на тренажере',
    description: '3x15',
    },
  {
    name: 'Французский жим лежа',
    description: '3x15',
    },
]

// Пройдіться по масиву інших вправ і створіть чекбокси для кожної вправи
exercises2.forEach((exercise, index) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `exercise-${index}-2`;
  checkbox.value = exercise.name;

  const label = document.createElement('label');
  label.htmlFor = `exercise-${index}-2`;
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
  exerciseList2.appendChild(checkbox);
  exerciseList2.appendChild(label);
  exerciseList2.appendChild(document.createElement('br'));
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


// Отримайте всі чекбокси для першої сторінки
const checkboxes1 = document.querySelectorAll('#exercise-list-2 input[type="checkbox"]');





// Отримайте контейнери для виведення повідомлень для обох сторінок
const messageContainer1 = document.getElementById('message-container-1');



// Функція для перевірки, чи всі чекбокси відмічені на першій сторінці
function areAllCheckboxesChecked1() {
    return Array.from(checkboxes1).every((checkbox) => checkbox.checked);
}

// Функція для відображення повідомлення на першій сторінці
function displayMessage1() {
    if (areAllCheckboxesChecked1()) {
        messageContainer1.innerText = 'Ви сьогодні неперевершенні в занятті спортом';
    } else {
        messageContainer1.innerText = '';
    }
}

// Додати обробник події для кожного чекбоксу на першій сторінці
checkboxes1.forEach((checkbox) => {
    checkbox.addEventListener('change', displayMessage1);
});

// Функція для перевірки, чи всі чекбокси відмічені на другій сторінці
function areAllCheckboxesChecked2() {
    return Array.from(checkboxes2).every((checkbox) => checkbox.checked);
}

// Функція для відображення повідомлення на другій сторінці
function displayMessage2() {
    if (areAllCheckboxesChecked2()) {
        messageContainer2.innerText = 'Ви сьогодні неперевершенні в занятті спортом на другій сторінці';
    } else {
        messageContainer2.innerText = '';
    }
}

// Додати обробник події для кожного чекбоксу на другій сторінці
checkboxes2.forEach((checkbox) => {
    checkbox.addEventListener('change', displayMessage2);
});
