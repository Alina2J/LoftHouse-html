// Nav icon

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

// Phone mask
mask('[data-tel-input]');

// Удаляем "+" если больше ничего не введено, чтобы показать placeholder

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == "+") input.value = ""
    })

    input.addEventListener('blur', () => {
        if (input.value == "+") input.value = ""
    })
})

// Yandex map
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.338928, 59.943543],

                // Уровень масштабирования
                zoom: 16
            }
        }
    );

    const content = document.createElement('div');
    content.innerHTML = "<img src=\"../img/map/location-pin.svg\" />";
    content.style.width = "40px";
    content.style.height = "40px";
    content.style.position = "absolute";
    content.style.left = "-20px";
    content.style.top = "-40px";

    const marker = new YMapMarker(
        {
            type: "Point", 
            coordinates: [30.338928, 59.943543],
            draggable: false
        },
        content
      );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(marker);

}





