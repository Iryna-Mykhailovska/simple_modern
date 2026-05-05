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
// marker.bindPopup("<b>Привет!</b><br>Я здесь!").openPopup();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // можна змінити на 'center' або 'end'
            });
        }
    });
});


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



// Инициализируем через переменную, чтобы она была доступна в области видимости
const lightbox = new SimpleLightbox('#gallery-grid a', { 
    alertError: false,
    captionDelay: 250,
    // Добавьте эту опцию, она помогает при динамической подгрузке
    uniqueImages: false 
});

lightbox.on('show.simplelightbox', function () {
    console.log('Галерея открыта');
});

lightbox.on('error.simplelightbox', function (e) {
    console.log('Ошибка:', e);
});

lightbox.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});
const btnMore = document.querySelector('.gallery__btn');
const galleryGrid = document.querySelector('#gallery-grid'); // Это наш основной контейнер с классом .lightbox

btnMore.addEventListener('click', () => {
    // Вставляем ТОЛЬКО ссылки. 
    // Весь блок сразу встанет в сетку гридов, так как galleryGrid уже имеет стили грида.
    const newItems = `
        <a class="gallery__item--big" href="./assets/img/gallery_1.jpg">
            <img src="./assets/img/thumbs/thumb1.jpg" alt="" />
        </a>
        <a class="gallery__item" href="./assets/img/gallery_2.jpg">
            <img src="./assets/img/thumbs/thumb2.jpg" alt="" title="Beautiful Image" />
        </a>
        <a class="gallery__item" href="./assets/img/gallery_3.jpg">
            <img src="./assets/img/thumbs/thumb3.jpg" alt="" title="Beautiful Image" />
        </a>
        <a class="gallery__item" href="./assets/img/gallery_4.jpg">
            <img src="./assets/img/thumbs/thumb4.jpg" alt="" title="Beautiful Image" />
        </a>
        <a class="gallery__item" href="./assets/img/gallery_5.jpg">
            <img src="./assets/img/thumbs/thumb5.jpg" alt="" title="Beautiful Image" />
        </a>
    `;

    // Вставляем контент в основной контейнер
    galleryGrid.insertAdjacentHTML('beforeend', newItems);

   // Даем браузеру микро-паузу, чтобы отрисовать DOM, прежде чем рефрешить
    setTimeout(() => {
        lightbox.refresh();
    }, 10);
});// --------------Buttons------
const buttonMoreProject1 = document.getElementById('project_1');
let project1Details = document.getElementById('project_1_details');
buttonMoreProject1.addEventListener('click', () => {
 const details = `
        
        <p>More details about project 1</p>
    `;
        project1Details.insertAdjacentHTML('beforeend', details);
        buttonMoreProject1.style.display = 'none';

});

const buttonMoreProject2 = document.getElementById('project_2');
let project2Details = document.getElementById('project_2_details');
buttonMoreProject2.addEventListener('click', () => {
 const details = `
        
        <p>More details about project 2</p>
    `;
        project2Details.insertAdjacentHTML('beforeend', details);
        buttonMoreProject2.style.display = 'none';

});
// ==============Form validation
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
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



document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Вылетает элемент:', el);
        el.style.outline = '2px solid red';
    }
});