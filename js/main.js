'use strict';
// --------------------MAP
// 1. Инициализируем карту, указываем ID блока и координаты центра [широта, долгота], а также масштаб (13)
var map = L.map('map').setView([50.069358, 36.204282], 13); 

// 2. Подключаем слой с «плитками» (изображениями карты). 
// OpenStreetMap — самый популярный бесплатный вариант.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '© OpenStreetMap contributors'
}).addTo(map);
var myCustomIcon = L.icon({
    iconUrl: '../assets/img/Pin.png',    // Путь к вашему файлу
    iconSize: [106, 106],        // Размеры иконки в пикселях [ширина, высота]
    iconAnchor: [19, 38],      // Точка иконки, которая будет указывать на координаты (обычно центр низа)
    popupAnchor: [0, -35]      // Точка, из которой будет «вылетать» облако текста (относительно iconAnchor)
});
// 3. Добавляем маркер на карту
var marker = L.marker([50.069358, 36.204282], { icon: myCustomIcon }).addTo(map);

// 4. Добавляем всплывающее окно при клике на маркер
marker.bindPopup("<b>Привет!</b><br>Я здесь!").openPopup();



document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null, // следим относительно вьюпорта
    threshold: 0.2 // сработает, когда 20% блока будет видно
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем класс, который запускает CSS-анимацию
        entry.target.classList.add('is-visible');
        // Если хотим, чтобы анимация была единоразовой:
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Инициализируем наблюдение за всеми нужными блоками
  const scrollItems = document.querySelectorAll('.js-scroll-item');
  scrollItems.forEach(item => {
    observer.observe(item);
  });
});

// $(document).ready(function(){
//   $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     autoplay: true
//   });
// });
// --------------Buttons------
// const buttonMore = document.getElementById('project_1');
// buttonMore.addEventListener('click', () => {

//   alert('More details about project 1');
// });

// ==============Form validation
document.getElementById('feedbackForm').addEventListener('click', function(e) {
  e.preventDefault();
  
  let isValid = true;
  const inputs = this.querySelectorAll('.contact-form__input');

  inputs.forEach(input => {
    // Сброс стилей перед проверкой
    input.classList.remove('contact-form__input--invalid');

    // Проверка на пустоту
    if (!input.value.trim()) {
      showError(input);
      isValid = false;
    } 
    // Проверка email
    else if (input.name === 'email' && !validateEmail(input.value)) {
      showError(input);
      isValid = false;
    }
  });

  if (isValid) {
    alert('Форма успешно отправлена!');
    this.reset();
  }
});

function showError(input) {
  input.classList.add('contact-form__input--invalid');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}