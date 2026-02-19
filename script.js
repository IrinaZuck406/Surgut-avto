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
const modal = document.querySelector(".pick-up-a-car__modal");
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
window.addEventListener("click", windowOnClick);
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
const carsDatabase = [
    // Лада
    { brand: 'Lada', model: 'Granta', gearbox: 'MT', drive: 'FWD', price: 699300, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Lada+Granta' },
    { brand: 'Lada', model: 'Vesta', gearbox: 'AT', drive: 'FWD', price: 1250000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Lada+Vesta' },
    { brand: 'Lada', model: 'Niva Travel', gearbox: 'MT', drive: '4WD', price: 1200000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Niva+Travel' },
    // Haval
    { brand: 'Haval', model: 'M6', gearbox: 'AT', drive: 'FWD', price: 1949000, body: 'crossover', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+M6' },
    { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: 'FWD', price: 2100000, body: 'crossover', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+Jolion' },
    { brand: 'Haval', model: 'Dargo', gearbox: 'AT', drive: '4WD', price: 3200000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Haval+Dargo' },
    // Kia
    { brand: 'Kia', model: 'Rio', gearbox: 'MT', drive: 'FWD', price: 1250000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Rio' },
    { brand: 'Kia', model: 'Picanto', gearbox: 'AT', drive: 'FWD', price: 1334900, body: 'hatchback', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Picanto' },
    { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: '4WD', price: 3150000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Kia+Sportage' },
    // Renault
    { brand: 'Renault', model: 'Logan', gearbox: 'MT', drive: 'FWD', price: 1124000, body: 'sedan', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Logan' },
    { brand: 'Renault', model: 'Duster', gearbox: 'AT', drive: '4WD', price: 2000000, body: 'suv', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Duster' },
    { brand: 'Renault', model: 'Arkana', gearbox: 'AT', drive: 'FWD', price: 2100000, body: 'coupe', image: 'https://via.placeholder.com/300x180/2d3e50/ffffff?text=Renault+Arkana' }
];

// ========== НАСТРОЙКА ВЫПАДАЮЩИХ СПИСКОВ ==========
document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы формы подбора (нужно убедиться, что селекторы верные)
    const brandSelect = document.querySelector('select[name="brand"]') || document.querySelector('.car-filter select:first-child') || createFallbackSelect('brand');
    const gearboxSelect = document.querySelector('select[name="gearbox"]') || document.querySelectorAll('.car-filter select')[1] || createFallbackSelect('gearbox');
    const driveSelect = document.querySelector('select[name="drive"]') || document.querySelectorAll('.car-filter select')[2] || createFallbackSelect('drive');
    const priceMinInput = document.querySelector('input[placeholder*="Цена от"]') || document.querySelectorAll('input[type="text"]')[0];
    const priceMaxInput = document.querySelector('input[placeholder*="Цена до"]') || document.querySelectorAll('input[type="text"]')[1];
    const submitButton = document.querySelector('button:contains("Подобрать")') || Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Подобрать'));

    // Функция для создания селектов, если их нет (на случай несовпадения селекторов)
    function createFallbackSelect(type) {
        console.warn(`Селект для ${type} не найден, создаю запасной вариант`);
        // Здесь можно добавить логику, но лучше просто вернуть null
        return null;
    }

    // Заполняем селекты, если они найдены
    if (brandSelect) {
        brandSelect.innerHTML = '<option value="">Выберите марку</option>' +
            '<option value="Lada">Lada</option>' +
            '<option value="Haval">Haval</option>' +
            '<option value="Kia">Kia</option>' +
            '<option value="Renault">Renault</option>';
    }

    if (gearboxSelect) {
        gearboxSelect.innerHTML = '<option value="">Любая КПП</option>' +
            '<option value="MT">Механика</option>' +
            '<option value="AT">Автомат</option>';
    }

    if (driveSelect) {
        driveSelect.innerHTML = '<option value="">Любой привод</option>' +
            '<option value="FWD">Передний</option>' +
            '<option value="RWD">Задний</option>' +
            '<option value="4WD">Полный</option>';
    }

    // ========== ЛОГИКА ПОИСКА И ПОПАП ==========
    const popupOverlay = document.getElementById('popupOverlay');
    const popupCarsList = document.getElementById('popupCarsList');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const getOfferBtn = document.getElementById('getOfferBtn');

    // Функция фильтрации автомобилей
    function filterCars() {
        const brand = brandSelect ? brandSelect.value : '';
        const gearbox = gearboxSelect ? gearboxSelect.value : '';
        const drive = driveSelect ? driveSelect.value : '';

        let minPrice = 0;
        let maxPrice = Infinity;

        if (priceMinInput && priceMinInput.value) {
            minPrice = parseInt(priceMinInput.value.replace(/\s/g, '')) || 0;
        }
        if (priceMaxInput && priceMaxInput.value) {
            maxPrice = parseInt(priceMaxInput.value.replace(/\s/g, '')) || Infinity;
        }

        return carsDatabase.filter(car => {
            if (brand && car.brand !== brand) return false;
            if (gearbox && car.gearbox !== gearbox) return false;
            if (drive && car.drive !== drive) return false;
            if (car.price < minPrice) return false;
            if (car.price > maxPrice) return false;
            return true;
        });
    }

    // Функция отображения автомобилей в попапе
    function showPopupWithCars(cars) {
        if (!popupCarsList) return;

        if (cars.length === 0) {
            popupCarsList.innerHTML = '<p class="popup-empty">К сожалению, нет автомобилей, соответствующих вашему запросу. Попробуйте изменить параметры.</p>';
        } else {
            popupCarsList.innerHTML = cars.map(car => `
                    <div class="popup-car-card">
                        <img src="${car.image}" alt="${car.brand} ${car.model}" class="popup-car-image">
                        <div class="popup-car-info">
                            <h4 class="popup-car-title">${car.brand} ${car.model}</h4>
                            <div class="popup-car-specs">
                                <span>КПП: ${car.gearbox === 'MT' ? 'Механика' : 'Автомат'}</span>
                                <span>Привод: ${car.drive === 'FWD' ? 'Передний' : car.drive === 'RWD' ? 'Задний' : 'Полный'}</span>
                                <span>Цена: ${car.price.toLocaleString()} ₽</span>
                            </div>
                        </div>
                        <button class="popup-select-btn" data-model="${car.brand} ${car.model}">Выбрать</button>
                    </div>
                `).join('');
        }

        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // блокируем прокрутку страницы
    }

    // Обработчик кнопки "Подобрать"
    if (submitButton) {
        submitButton.addEventListener('click', function (e) {
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

    // Закрытие по клику на оверлей
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Обработка кнопки "Получить предложение"
    if (getOfferBtn) {
        getOfferBtn.addEventListener('click', function () {
            alert('Спасибо за интерес! Наш менеджер свяжется с вами в ближайшее время для подтверждения заявки.');
            popupOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Обработка кнопок "Выбрать" внутри попапа (делегирование событий)
    if (popupCarsList) {
        popupCarsList.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup-select-btn')) {
                const carModel = e.target.getAttribute('data-model');
                alert(`Вы выбрали автомобиль ${carModel}. Отличный выбор! Наш менеджер свяжется с вами.`);
                popupOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Добавляем немного стилей для попапа (можно вставить в ваш CSS файл)
    /*  const style = document.createElement('style');
      style.textContent = `
           
              .popup-overlay {
                  display: none;
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: rgba(0, 0, 0, 0.7);
                  backdrop-filter: blur(5px);
                  z-index: 1000;
                  align-items: center;
                  justify-content: center;
                  padding: 1rem;
              }
              
              .popup-overlay.active {
                  display: flex;
              }
              
              .popup-content {
                  background: white;
                  border-radius: 30px;
                  max-width: 900px;
                  width: 100%;
                  max-height: 80vh;
                  overflow-y: auto;
                  padding: 2rem;
                  position: relative;
                  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                  animation: popupAppear 0.3s ease-out;
              }
              
              @keyframes popupAppear {
                  from {
                      opacity: 0;
                      transform: scale(0.9);
                  }
                  to {
                      opacity: 1;
                      transform: scale(1);
                  }
              }
              
              .popup-close {
                  position: absolute;
                  top: 1rem;
                  right: 1.5rem;
                  font-size: 2rem;
                  cursor: pointer;
                  border: none;
                  background: none;
                  color: #666;
                  transition: color 0.2s;
                  line-height: 1;
              }
              
              .popup-close:hover {
                  color: #000;
              }
              
              .popup-title {
                  font-size: 1.8rem;
                  margin-bottom: 2rem;
                  color: #333;
                  padding-right: 2rem;
              }
              
              .popup-cars-list {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                  gap: 1.5rem;
                  margin-bottom: 2rem;
              }
              
              .popup-car-card {
                  border: 1px solid #eee;
                  border-radius: 20px;
                  overflow: hidden;
                  background: #f9f9f9;
                  transition: transform 0.2s;
                  display: flex;
                  flex-direction: column;
              }
              
              .popup-car-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
              }
              
              .popup-car-image {
                  width: 100%;
                  height: 160px;
                  object-fit: cover;
                  background: #2d3e50;
              }
              
              .popup-car-info {
                  padding: 1rem;
                  flex: 1;
              }
              
              .popup-car-title {
                  font-size: 1.2rem;
                  margin-bottom: 0.5rem;
                  color: #222;
              }
              
              .popup-car-specs {
                  display: flex;
                  flex-direction: column;
                  gap: 0.3rem;
                  font-size: 0.9rem;
                  color: #555;
              }
              
              .popup-select-btn {
                  background: #e31b23;
                  color: white;
                  border: none;
                  padding: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background 0.2s;
                  border-top: 1px solid rgba(0,0,0,0.1);
              }
              
              .popup-select-btn:hover {
                  background: #c01018;
              }
              
              .popup-footer {
                  text-align: center;
                  padding-top: 1rem;
                  border-top: 1px solid #eee;
              }
              
              .popup-offer-btn {
                  background: #333;
                  color: white;
                  border: none;
                  padding: 1rem 3rem;
                  border-radius: 50px;
                  font-weight: 600;
                  font-size: 1.1rem;
                  cursor: pointer;
                  transition: background 0.2s;
              }
              
              .popup-offer-btn:hover {
                  background: #111;
              }
              
              .popup-empty {
                  text-align: center;
                  padding: 3rem;
                  color: #777;
                  font-size: 1.1rem;
              }
          `;
      document.head.appendChild(style);*/
});
