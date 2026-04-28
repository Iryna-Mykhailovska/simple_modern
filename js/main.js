'use strict';
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
// 1. Инициализируем карту, указываем ID блока и координаты центра [широта, долгота], а также масштаб (13)
var map = L.map('map').setView([50.069358, 36.204282], 13); 

// 2. Подключаем слой с «плитками» (изображениями карты). 
// OpenStreetMap — самый популярный бесплатный вариант.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
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

// 50.069358, 36.204282
