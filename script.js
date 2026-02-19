const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.querySelector('body').classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
const iconMenuFooter = document.querySelector('.footer__menu-icon');
const footerMenuBody = document.querySelector('.footer__menu');
if (iconMenuFooter) {
    iconMenuFooter.addEventListener("click", function (e) {
        document.querySelector('body').classList.toggle('_lock');
        iconMenuFooter.classList.toggle('_active');
        footerMenuBody.classList.toggle('_active');
    });
}
/*-----------swiper pick-up-a-car__slider----------*/
const mySwiper = new Swiper('.pick-up-a-car__slider', {
    grabCursor: true,
    /*--кол-во слайдов--*/
    slidesPerView: 9,
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    autoplay: {
        //Пауза между прокруткой:
        delay: 1000,
        //Закончить на последнем слайде:
        stopOnLastSlide: false,
        //Отключить после ручного переключения:
        disableOnInteraction: false
    },
    breakpoints: {
        300: {
            slidesPerView: 2.5,
        },
        360: {
            slidesPerView: 2.5,
        },
        450: {
            slidesPerView: 3,
        },
        540: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 5,
        },
        750: {
            slidesPerView: 6,
        },
        770: {
            slidesPerView: 7,
        },
        850: {
            slidesPerView: 8,
        },
        1000: {
            slidesPerView: 9,
        }
    },
});

/*------В слайдере-------*/
const itemsWrapper = Array.from(document.querySelectorAll('.pick-up-a-car__slider-slide'));
for (let item of itemsWrapper) {
    item.addEventListener('click', () => {
        for (let item of itemsWrapper) {
            item.classList.remove('hidden');
        }
        item.classList.add('hidden');
    })
}
/*-------Модальное окно-------*/
/*const modal = document.querySelector(".pick-up-a-car__modal");
const trigger = document.querySelector(".pick-up-a-car__form-button2");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    document.querySelector('body').classList.toggle('_lock');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);*/
/*--------main-top---------*/
const mainTopButtons = document.querySelector('.main-top__buttons');
const mainTopButton = Array.from(mainTopButtons.querySelectorAll('.main-top__button'));
const mainTopLeft = document.querySelector('.main-top__left');
const mainTopRight = document.querySelector('.main-top__right');
mainTopButtons.addEventListener('click', function () {
    mainTopLeft.classList.toggle('hidden');
    mainTopRight.classList.toggle('active');
    for (let item of mainTopButton) {
        item.classList.toggle('active');
    }
})

/*--------Аккордион---------*/
const titles = document.querySelectorAll('.modification__accordion-title');
const contents = document.querySelectorAll('.modification__accordion-content');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))
/*--------Аккордион equipment---------*/
const titles1 = document.querySelectorAll('.equipment__accordion-title');
const contents1 = document.querySelectorAll('.equipment__accordion-content');

titles1.forEach(item => item.addEventListener('click', () => {
    const activeContent1 = document.querySelector('#' + item.dataset.tab);

    if (activeContent1.classList.contains('active')) {
        activeContent1.classList.remove('active');
        item.classList.remove('active');
        activeContent1.style.maxHeight = 0;
    } else {
        contents1.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles1.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent1.classList.add('active');
        activeContent1.style.maxHeight = activeContent1.scrollHeight + 'px';
    }
}));

// ========== БАЗА ДАННЫХ АВТОМОБИЛЕЙ ==========

// ========== БАЗА ДАННЫХ АВТОМОБИЛЕЙ ==========
/*const carsDatabase = [
    { brand: 'Lada', model: 'Granta', gearbox: 'MT', drive: 'FWD', price: 699300, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Lada+Granta' },
    { brand: 'Lada', model: 'Vesta', gearbox: 'AT', drive: 'FWD', price: 1250000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Lada+Vesta' },
    { brand: 'Lada', model: 'Niva Travel', gearbox: 'MT', drive: '4WD', price: 1200000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Niva+Travel' },
    { brand: 'Haval', model: 'M6', gearbox: 'AT', drive: 'FWD', price: 1949000, body: 'crossover', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+M6' },
    { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: 'FWD', price: 2100000, body: 'crossover', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+Jolion' },
    { brand: 'Haval', model: 'Dargo', gearbox: 'AT', drive: '4WD', price: 3200000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+Dargo' },
    { brand: 'Kia', model: 'Rio', gearbox: 'MT', drive: 'FWD', price: 1250000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Rio' },
    { brand: 'Kia', model: 'Picanto', gearbox: 'AT', drive: 'FWD', price: 1334900, body: 'hatchback', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Picanto' },
    { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: '4WD', price: 3150000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Sportage' },
    { brand: 'Renault', model: 'Logan', gearbox: 'MT', drive: 'FWD', price: 1124000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Logan' },
    { brand: 'Renault', model: 'Duster', gearbox: 'AT', drive: '4WD', price: 2000000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Duster' },
    { brand: 'Renault', model: 'Arkana', gearbox: 'AT', drive: 'FWD', price: 2100000, body: 'coupe', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Arkana' },
    { brand: 'Toyota', model: 'Camry', gearbox: 'AT', drive: 'FWD', price: 3500000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Toyota+Camry' },
    { brand: 'Toyota', model: 'RAV4', gearbox: 'CVT', drive: '4WD', price: 3800000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Toyota+RAV4' },
    { brand: 'Hyundai', model: 'Solaris', gearbox: 'MT', drive: 'FWD', price: 1400000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Hyundai+Solaris' },
    { brand: 'Hyundai', model: 'Creta', gearbox: 'AT', drive: 'FWD', price: 2200000, body: 'crossover', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Hyundai+Creta' }
];

document.addEventListener('DOMContentLoaded', function () {
    // ========== ПОЛУЧАЕМ ЭЛЕМЕНТЫ ==========
    const brandItems = document.querySelectorAll('#brand-select li');
    const gearboxItems = document.querySelectorAll('#gearbox-select li');
    const driveItems = document.querySelectorAll('#drive-select li');
    const priceMinInput = document.getElementById('price-min');
    const priceMaxInput = document.getElementById('price-max');
    const submitBtn = document.getElementById('submit-filter-btn');

    // Элементы для отображения выбранного значения
    const brandDisplay = document.querySelector('.pick-up-a-car__filter-item:first-child .pick-up-a-car__text:first-child');
    const gearboxDisplay = document.querySelector('.pick-up-a-car__filter-item:nth-child(2) .pick-up-a-car__text:first-child');
    const driveDisplay = document.querySelector('.pick-up-a-car__filter-item:nth-child(3) .pick-up-a-car__text:first-child');

    // ========== СОСТОЯНИЕ ВЫБРАННЫХ ЗНАЧЕНИЙ ==========
    let selectedFilters = {
        brand: '',
        gearbox: '',
        drive: ''
    };

    // ========== ФУНКЦИЯ ДЛЯ ОБРАБОТКИ ВЫБОРА ==========
    function setupCustomSelect(items, displayElement, filterType) {
        items.forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();

                // Получаем значение из data-value или текста
                const value = this.dataset.value || this.textContent.trim();
                const text = this.textContent.trim();

                // Обновляем отображение
                if (displayElement) {
                    displayElement.textContent = text;
                }

                // Сохраняем значение в состояние
                selectedFilters[filterType] = value;

                // Закрываем выпадающий список (если у вас есть логика открытия/закрытия)
                const parentMenu = this.closest('.pick-up-a-car-icon__sub-menu');
                if (parentMenu) {
                    parentMenu.classList.remove('active');
                }

                console.log(`Выбрано: ${filterType} = ${value}`);
            });
        });
    }

    // Применяем функцию ко всем спискам
    setupCustomSelect(brandItems, brandDisplay, 'brand');
    setupCustomSelect(gearboxItems, gearboxDisplay, 'gearbox');
    setupCustomSelect(driveItems, driveDisplay, 'drive');

    // ========== ФУНКЦИЯ ФИЛЬТРАЦИИ ==========
    function filterCars() {
        return carsDatabase.filter(car => {
            // Фильтр по марке
            if (selectedFilters.brand && car.brand !== selectedFilters.brand) return false;

            // Фильтр по КПП
            if (selectedFilters.gearbox && car.gearbox !== selectedFilters.gearbox) return false;

            // Фильтр по приводу
            if (selectedFilters.drive && car.drive !== selectedFilters.drive) return false;

            // Фильтр по цене
            if (priceMinInput && priceMinInput.value) {
                const minPrice = parseInt(priceMinInput.value.replace(/\s/g, '').replace('Р', '')) || 0;
                if (car.price < minPrice) return false;
            }

            if (priceMaxInput && priceMaxInput.value) {
                const maxPrice = parseInt(priceMaxInput.value.replace(/\s/g, '').replace('Р', '')) || Infinity;
                if (car.price > maxPrice) return false;
            }

            return true;
        });
    }

    // ========== ПОПАП (вставьте вашу разметку попапа) ==========


    // Элементы попапа
    const popupOverlay = document.getElementById('popupOverlay');
    const popupCarsList = document.getElementById('popupCarsList');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const getOfferBtn = document.getElementById('getOfferBtn');

    // Функция показа попапа
    function showPopupWithCars(cars) {
        if (!popupCarsList || !popupOverlay) return;

        if (cars.length === 0) {
            popupCarsList.innerHTML = '<p class="popup-empty">К сожалению, нет автомобилей, соответствующих вашему запросу. Попробуйте изменить параметры.</p>';
        } else {
            popupCarsList.innerHTML = cars.map(car => `
                    <div class="popup-car-card">
                        <img src="${car.image}" alt="${car.brand} ${car.model}" class="popup-car-image">
                        <div class="popup-car-info">
                            <h4 class="popup-car-title">${car.brand} ${car.model}</h4>
                            <div class="popup-car-specs">
                                <span>КПП: ${car.gearbox === 'MT' ? 'Механика' : car.gearbox === 'AT' ? 'Автомат' : car.gearbox === 'CVT' ? 'Вариатор' : 'Робот'}</span>
                                <span>Привод: ${car.drive === 'FWD' ? 'Передний' : car.drive === 'RWD' ? 'Задний' : 'Полный'}</span>
                                <span>Цена: ${car.price.toLocaleString()} ₽</span>
                            </div>
                        </div>
                        <button class="popup-select-btn" data-model="${car.brand} ${car.model}">Выбрать</button>
                    </div>
                `).join('');
        }

        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Обработчик кнопки "Подобрать"
    if (submitBtn) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const filteredCars = filterCars();
            showPopupWithCars(filteredCars);
        });
    }

    // Закрытие попапа
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function () {
            popupOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Закрытие по клику на фон
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Кнопка "Получить предложение"
    if (getOfferBtn) {
        getOfferBtn.addEventListener('click', function () {
            alert('Спасибо за интерес! Наш менеджер свяжется с вами для оформления заявки.');
            popupOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Делегирование на кнопки "Выбрать"
    if (popupCarsList) {
        popupCarsList.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup-select-btn')) {
                const carModel = e.target.getAttribute('data-model');
                alert(`Вы выбрали ${carModel}. Отличный выбор! Менеджер свяжется с вами.`);
                popupOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }


});*/
// ========== БАЗА ДАННЫХ ==========
/*const carsDatabase = [
    // Lada
    { brand: 'Lada', model: 'Granta', gearbox: 'MT', drive: 'FWD', price: 699300 },
    { brand: 'Lada', model: 'Granta', gearbox: 'AT', drive: 'FWD', price: 799300 },
    { brand: 'Lada', model: 'Vesta', gearbox: 'MT', drive: 'FWD', price: 1250000 },
    { brand: 'Lada', model: 'Vesta', gearbox: 'AT', drive: 'FWD', price: 1350000 },
    { brand: 'Lada', model: 'Niva Travel', gearbox: 'MT', drive: '4WD', price: 1200000 },

    // Haval
    { brand: 'Haval', model: 'M6', gearbox: 'MT', drive: 'FWD', price: 1749000 },
    { brand: 'Haval', model: 'M6', gearbox: 'AT', drive: 'FWD', price: 1949000 },
    { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: 'FWD', price: 2100000 },
    { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: '4WD', price: 2400000 },
    { brand: 'Haval', model: 'Dargo', gearbox: 'AT', drive: '4WD', price: 3200000 },

    // Kia
    { brand: 'Kia', model: 'Rio', gearbox: 'MT', drive: 'FWD', price: 1150000 },
    { brand: 'Kia', model: 'Rio', gearbox: 'AT', drive: 'FWD', price: 1250000 },
    { brand: 'Kia', model: 'Picanto', gearbox: 'AT', drive: 'FWD', price: 1334900 },
    { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: 'FWD', price: 2950000 },
    { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: '4WD', price: 3150000 },

    // Renault
    { brand: 'Renault', model: 'Logan', gearbox: 'MT', drive: 'FWD', price: 1024000 },
    { brand: 'Renault', model: 'Logan', gearbox: 'AT', drive: 'FWD', price: 1124000 },
    { brand: 'Renault', model: 'Duster', gearbox: 'MT', drive: '4WD', price: 1800000 },
    { brand: 'Renault', model: 'Duster', gearbox: 'AT', drive: '4WD', price: 2000000 },
    { brand: 'Renault', model: 'Arkana', gearbox: 'CVT', drive: 'FWD', price: 2100000 }
];

document.addEventListener('DOMContentLoaded', function () {
    // ========== ЭЛЕМЕНТЫ ==========
    const brandDisplay = document.getElementById('selected-brand');
    const gearboxDisplay = document.getElementById('selected-gearbox');
    const driveDisplay = document.getElementById('selected-drive');
    const modelDisplay = document.getElementById('selected-model');

    const brandList = document.getElementById('brand-list');
    const gearboxList = document.getElementById('gearbox-list');
    const driveList = document.getElementById('drive-list');
    const modelList = document.getElementById('model-list');

    const priceMin = document.getElementById('price-min');
    const priceMax = document.getElementById('price-max');
    const submitBtn = document.getElementById('submit-filter');
    const resetBtn = document.getElementById('reset-filters');

    // ========== СОСТОЯНИЕ ==========
    let filters = {
        brand: '',
        gearbox: '',
        drive: '',
        model: '',
        minPrice: 0,
        maxPrice: Infinity
    };

    // ========== ЗАГРУЗКА МОДЕЛЕЙ ПО МАРКЕ ==========
    function updateModelsByBrand(selectedBrand) {
        // Очищаем список моделей
        modelList.innerHTML = '';

        if (!selectedBrand) {
            modelList.innerHTML = '<li>Сначала выберите марку</li>';
            modelDisplay.textContent = 'Модель';
            filters.model = '';
            return;
        }

        // Получаем уникальные модели для выбранной марки
        const models = [...new Set(
            carsDatabase
                .filter(car => car.brand === selectedBrand)
                .map(car => car.model)
        )];

        if (models.length === 0) {
            modelList.innerHTML = '<li>Нет доступных моделей</li>';
        } else {
            // Добавляем опцию "Все модели"
            modelList.innerHTML = '<li data-value="">Все модели</li>';

            // Добавляем конкретные модели
            models.forEach(model => {
                const li = document.createElement('li');
                li.setAttribute('data-value', model);
                li.textContent = model;
                modelList.appendChild(li);
            });
        }
    }

    // ========== ОБРАБОТЧИКИ ВЫБОРА ==========
    // Марка
    brandList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const value = e.target.dataset.value || e.target.textContent;
            const text = e.target.textContent;

            brandDisplay.textContent = text;
            filters.brand = value;

            // Обновляем список моделей
            updateModelsByBrand(value);

            // Закрываем дропдаун
            this.classList.remove('active');
        }
    });

    // КПП
    gearboxList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const value = e.target.dataset.value;
            const text = e.target.textContent;

            gearboxDisplay.textContent = text;
            filters.gearbox = value;
            this.classList.remove('active');
        }
    });

    // Привод
    driveList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const value = e.target.dataset.value;
            const text = e.target.textContent;

            driveDisplay.textContent = text;
            filters.drive = value;
            this.classList.remove('active');
        }
    });

    // Модель
    modelList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const value = e.target.dataset.value || '';
            const text = e.target.textContent;

            modelDisplay.textContent = text;
            filters.model = value;
            this.classList.remove('active');
        }
    });

    // ========== ФИЛЬТРАЦИЯ ==========
    function filterCars() {
        return carsDatabase.filter(car => {
            if (filters.brand && car.brand !== filters.brand) return false;
            if (filters.gearbox && car.gearbox !== filters.gearbox) return false;
            if (filters.drive && car.drive !== filters.drive) return false;
            if (filters.model && car.model !== filters.model) return false;

            const minPrice = parseInt(priceMin.value.replace(/\s/g, '')) || 0;
            const maxPrice = parseInt(priceMax.value.replace(/\s/g, '')) || Infinity;

            if (car.price < minPrice) return false;
            if (car.price > maxPrice) return false;

            return true;
        });
    }

    // ========== СБРОС ФИЛЬТРОВ ==========
    function resetFilters() {
        filters = {
            brand: '',
            gearbox: '',
            drive: '',
            model: '',
            minPrice: 0,
            maxPrice: Infinity
        };

        brandDisplay.textContent = 'Марка';
        gearboxDisplay.textContent = 'КПП';
        driveDisplay.textContent = 'Привод';
        modelDisplay.textContent = 'Модель';

        priceMin.value = '';
        priceMax.value = '';

        updateModelsByBrand('');
    }

    // ========== ПОКАЗ РЕЗУЛЬТАТОВ ==========
    function showResults() {
        const results = filterCars();

        if (results.length === 0) {
            alert('По вашему запросу ничего не найдено. Попробуйте изменить параметры.');
        } else {
            // Здесь можно открыть попап с результатами
            alert(`Найдено ${results.length} автомобилей. Первый: ${results[0].brand} ${results[0].model}`);

            // Или вызвать функцию показа попапа из предыдущего кода
            // showPopupWithCars(results);
        }
    }

    // ========== ОБРАБОТЧИКИ КНОПОК ==========
    if (submitBtn) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showResults();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function (e) {
            e.preventDefault();
            resetFilters();
        });
    }

    // ========== ОТКРЫТИЕ/ЗАКРЫТИЕ ДРОПДАУНОВ ==========
    // Добавьте эту логику, если её еще нет
    document.querySelectorAll('.pick-up-a-car__filter-item').forEach(item => {
        const trigger = item.querySelector('.pick-up-a-car__text:first-child');
        const menu = item.querySelector('.pick-up-a-car-icon__sub-menu');

        if (trigger && menu) {
            trigger.addEventListener('click', function (e) {
                e.stopPropagation();

                // Закрываем все другие меню
                document.querySelectorAll('.pick-up-a-car-icon__sub-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('active');
                });

                menu.classList.toggle('active');
            });
        }
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function () {
        document.querySelectorAll('.pick-up-a-car-icon__sub-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    });
});*/

