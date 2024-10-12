// Функція для перемикання вкладок
function showContent(tab) {
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(tab).style.display = 'block';
}

// Встановлюємо головну сторінку видимою за замовчуванням
document.getElementById('home').style.display = 'block';

// Локалізація для української та англійської мови
const translations = {
    uk: {
        title: "Новини Майнкрафт сервера",
        newsTitle: "Новини",
        newsContent: "Тут будуть показуватися останні новини вашого сервера Майнкрафт.",
        mapTitle: "Мапа світу",
        mapContent: "Тут можна подивитися інтерактивну мапу вашого світу.",
        modpackTitle: "Модпак",
        modpackContent: "Скачайте модпак для гри на сервері.",
        downloadLink: "Завантажити модпак"
    },
    en: {
        title: "Minecraft Server News",
        newsTitle: "News",
        newsContent: "Here you will find the latest news from your Minecraft server.",
        mapTitle: "World Map",
        mapContent: "Here you can view an interactive map of your world.",
        modpackTitle: "Modpack",
        modpackContent: "Download the modpack to play on the server.",
        downloadLink: "Download modpack"
    }
};

// Функція для перемикання мови
function switchLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('news-title').textContent = translations[lang].newsTitle;
    document.getElementById('news-content').textContent = translations[lang].newsContent;
    document.getElementById('map-title').textContent = translations[lang].mapTitle;
    document.getElementById('map-content').textContent = translations[lang].mapContent;
    document.getElementById('modpack-title').textContent = translations[lang].modpackTitle;
    document.getElementById('modpack-content').textContent = translations[lang].modpackContent;
    document.getElementById('modpack-link').textContent = translations[lang].downloadLink;
}

// Ініціалізація карти регіонів
var regionsMap = L.map('regions-map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomControl: true
});

var regionsBounds = [[0, 0], [1000, 1000]]; // Налаштування меж карти
var regionsImage = L.imageOverlay('regions-map.png', regionsBounds).addTo(regionsMap); // Підключення зображення регіонів
regionsMap.fitBounds(regionsBounds);

// Ініціалізація карти міст
var citiesMap = L.map('cities-map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomControl: true
});

var citiesBounds = [[0, 0], [1000, 1000]]; // Налаштування меж карти
var citiesImage = L.imageOverlay('cities-map.png', citiesBounds).addTo(citiesMap); // Підключення зображення міст
citiesMap.fitBounds(citiesBounds);
