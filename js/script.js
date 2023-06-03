function handleScroll() {
  let sections = document.querySelectorAll('.fade-in');
  
  sections.forEach(function(section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY;
    
    if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
      section.classList.add('visible');
    }
  });

  // setTimeout(() => {
  //   handleScroll();
  // }, 500);
}
// Запуск функции handleScroll при прокрутке страницы
window.addEventListener('scroll', handleScroll);


// Получение всех элементов вопросов
const questions = document.querySelectorAll('.question');

// Добавление обработчика событий для каждого вопроса
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Поиск следующего элемента после вопроса
    const answer = question.nextElementSibling;

    // Переключение отображения ответа
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.querySelector('.plus').classList.remove('minus');
    } else {
      answer.style.display = 'block';
      question.querySelector('.plus').classList.add('minus');
    }
  });
});

let buttons = document.querySelectorAll('.plus');
buttons.forEach(button => {
button.addEventListener('click', (e) => {
	e.target.classList.toggle('active')
})
});

// Получаем все вопросы в FAQ
let questions_hidden = document.querySelectorAll('.faq');

// Перебираем каждый вопрос и скрываем ответы
questions.forEach(function(questions_hidden) {
  let title = questions_hidden.querySelector('.question');
  let answer = questions_hidden.querySelector('.answer');

  // Добавляем класс "closed" или атрибут "hidden" к ответу
  answer.classList.add('closed'); // Или: answer.hidden = true;

  // Добавляем обработчик события клика на заголовок вопроса
  title.addEventListener('click', function() {
    // Проверяем, содержит ли ответ класс "closed" или атрибут "hidden"
    if (answer.classList.contains('closed')) {
      // Если содержит, то удаляем класс "closed" или атрибут "hidden"
      answer.classList.remove('closed'); // Или: answer.hidden = false;
    } else {
      // Если не содержит, то добавляем класс "closed" или атрибут "hidden"
      answer.classList.add('closed'); // Или: answer.hidden = true;
    }
  });
});

