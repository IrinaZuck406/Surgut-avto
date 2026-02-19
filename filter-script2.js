// ========== БАЗА ДАННЫХ ==========
const carsDatabase = [
   // Lada
   { brand: 'Lada', model: 'Granta', gearbox: 'MT', drive: 'FWD', price: 699300, image: 'images/granta.jpg' },
   { brand: 'Lada', model: 'Granta', gearbox: 'AT', drive: 'FWD', price: 799300, image: 'images/granta.jpg' },
   { brand: 'Lada', model: 'Vesta', gearbox: 'MT', drive: 'FWD', price: 1250000, image: 'images/vesta.jpg' },
   { brand: 'Lada', model: 'Vesta', gearbox: 'AT', drive: 'FWD', price: 1350000, image: 'images/vesta.jpg' },
   { brand: 'Lada', model: 'Niva Travel', gearbox: 'MT', drive: '4WD', price: 1200000, image: 'images/niva.jpg' },

   // Haval
   { brand: 'Haval', model: 'M6', gearbox: 'MT', drive: 'FWD', price: 1749000, image: 'images/haval-m6.jpg' },
   { brand: 'Haval', model: 'M6', gearbox: 'AT', drive: 'FWD', price: 1949000, image: 'images/haval-m6.jpg' },
   { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: 'FWD', price: 2100000, image: 'images/jolion.jpg' },
   { brand: 'Haval', model: 'Jolion', gearbox: 'AT', drive: '4WD', price: 2400000, image: 'images/jolion.jpg' },
   { brand: 'Haval', model: 'Dargo', gearbox: 'AT', drive: '4WD', price: 3200000, image: 'images/dargo.jpg' },

   // Kia
   { brand: 'Kia', model: 'Rio', gearbox: 'MT', drive: 'FWD', price: 1150000, image: 'images/rio.jpg' },
   { brand: 'Kia', model: 'Rio', gearbox: 'AT', drive: 'FWD', price: 1250000, image: 'images/rio.jpg' },
   { brand: 'Kia', model: 'Picanto', gearbox: 'AT', drive: 'FWD', price: 1334900, image: 'images/picanto.jpg' },
   { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: 'FWD', price: 2950000, image: 'images/sportage.jpg' },
   { brand: 'Kia', model: 'Sportage', gearbox: 'AT', drive: '4WD', price: 3150000, image: 'images/sportage.jpg' },

   // Renault
   { brand: 'Renault', model: 'Logan', gearbox: 'MT', drive: 'FWD', price: 1024000, image: 'images/logan.jpg' },
   { brand: 'Renault', model: 'Logan', gearbox: 'AT', drive: 'FWD', price: 1124000, image: 'images/logan.jpg' },
   { brand: 'Renault', model: 'Duster', gearbox: 'MT', drive: '4WD', price: 1800000, image: 'images/duster.jpg' },
   { brand: 'Renault', model: 'Duster', gearbox: 'AT', drive: '4WD', price: 2000000, image: 'images/duster.jpg' },
   { brand: 'Renault', model: 'Arkana', gearbox: 'CVT', drive: 'FWD', price: 2100000, image: 'images/arkana.jpg' }
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function formatPrice(price) {
   return price.toLocaleString() + ' ₽';
}

function getMinMaxPrices() {
   const prices = carsDatabase.map(car => car.price);
   return {
      min: Math.min(...prices),
      max: Math.max(...prices)
   };
}

document.addEventListener('DOMContentLoaded', function () {
   // ========== ЭЛЕМЕНТЫ ФИЛЬТРОВ ==========
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

   // ========== УСТАНАВЛИВАЕМ РЕАЛЬНЫЕ ДИАПАЗОНЫ ЦЕН ==========
   const priceRange = getMinMaxPrices();
   if (priceMin) {
      priceMin.placeholder = `от ${formatPrice(priceRange.min)}`;
      priceMin.setAttribute('data-min', priceRange.min);
   }
   if (priceMax) {
      priceMax.placeholder = `до ${formatPrice(priceRange.max)}`;
      priceMax.setAttribute('data-max', priceRange.max);
   }

   // ========== СОЗДАЕМ ПОПАП ==========
   function createPopup() {
      if (document.getElementById('results-popup')) return;

      const popupHTML = `
            <div class="popup-overlay" id="results-popup">
                <div class="popup-container">
                    <div class="popup-header">
                        <h3 class="popup-title">Подобранные автомобили</h3>
                        <button class="popup-close" id="popup-close-btn">&times;</button>
                    </div>
                    <div class="popup-content" id="popup-results"></div>
                    <div class="popup-footer">
                        <button class="popup-callback-btn" id="callback-btn">Заказать обратный звонок</button>
                    </div>
                </div>
            </div>
        `;

      document.body.insertAdjacentHTML('beforeend', popupHTML);

      if (!document.getElementById('popup-styles')) {
         const styles = `
                <style id="popup-styles">
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
                        padding: 20px;
                    }
                    
                    .popup-overlay.active {
                        display: flex;
                    }
                    
                    .popup-container {
                        background: white;
                        border-radius: 20px;
                        max-width: 1000px;
                        width: 100%;
                        max-height: 80vh;
                        overflow: hidden;
                        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
                        animation: popup-appear 0.3s ease-out;
                    }
                    
                    @keyframes popup-appear {
                        from {
                            opacity: 0;
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                    
                    .popup-header {
                        padding: 20px 30px;
                        border-bottom: 1px solid #eee;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #f8f8f8;
                    }
                    
                    .popup-title {
                        font-size: 1.5rem;
                        color: #333;
                        margin: 0;
                    }
                    
                    .popup-close {
                        background: none;
                        border: none;
                        font-size: 2rem;
                        cursor: pointer;
                        color: #666;
                        padding: 0 10px;
                        line-height: 1;
                    }
                    
                    .popup-close:hover {
                        color: #000;
                    }
                    
                    .popup-content {
                        padding: 20px;
                        overflow-y: auto;
                        max-height: calc(80vh - 140px);
                    }
                    
                    .popup-footer {
                        padding: 20px;
                        border-top: 1px solid #eee;
                        text-align: center;
                        background: #f8f8f8;
                    }
                    
                    .popup-callback-btn {
                        background: #e31b23;
                        color: white;
                        border: none;
                        padding: 12px 40px;
                        border-radius: 50px;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: background 0.2s;
                    }
                    
                    .popup-callback-btn:hover {
                        background: #c01018;
                    }
                    
                    .cars-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 20px;
                    }
                    
                    .car-card {
                        border: 1px solid #eee;
                        border-radius: 15px;
                        overflow: hidden;
                        transition: transform 0.2s, box-shadow 0.2s;
                    }
                    
                    .car-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    }
                    
                    .car-image {
                        width: 100%;
                        height: 160px;
                        background: #f0f0f0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #999;
                        font-size: 0.9rem;
                    }
                    
                    .car-info {
                        padding: 15px;
                    }
                    
                    .car-title {
                        font-size: 1.2rem;
                        margin: 0 0 10px 0;
                        color: #333;
                    }
                    
                    .car-specs {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                        font-size: 0.95rem;
                        color: #666;
                        margin-bottom: 15px;
                    }
                    
                    .car-price {
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: #e31b23;
                        margin-bottom: 15px;
                    }
                    
                    .car-select-btn {
                        width: 100%;
                        padding: 10px;
                        background: #333;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background 0.2s;
                    }
                    
                    .car-select-btn:hover {
                        background: #111;
                    }
                    
                    .price-badge {
                        font-size: 0.9rem;
                        color: #666;
                        margin-top: 5px;
                        font-weight: normal;
                    }
                    
                    .no-results {
                        text-align: center;
                        padding: 40px;
                        color: #666;
                        font-size: 1.1rem;
                    }
                </style>
            `;
         document.head.insertAdjacentHTML('beforeend', styles);
      }
   }

   createPopup();

   // ========== ЭЛЕМЕНТЫ ПОПАПА ==========
   const popup = document.getElementById('results-popup');
   const popupResults = document.getElementById('popup-results');
   const popupClose = document.getElementById('popup-close-btn');
   const callbackBtn = document.getElementById('callback-btn');

   // ========== ФУНКЦИЯ ПОКАЗА РЕЗУЛЬТАТОВ ==========
   function showResults(results) {
      if (!popupResults || !popup) return;

      if (results.length === 0) {
         popupResults.innerHTML = `
                <div class="no-results">
                    <p>😕 К сожалению, нет автомобилей, соответствующих вашему запросу.</p>
                    <p>Попробуйте изменить параметры поиска.</p>
                </div>
            `;
      } else {
         // Группируем по моделям
         const uniqueCars = [];
         const seen = new Set();

         results.forEach(car => {
            const key = `${car.brand}-${car.model}-${car.gearbox}-${car.drive}`;
            if (!seen.has(key)) {
               seen.add(key);
               uniqueCars.push(car);
            }
         });

         // Сортируем по цене
         uniqueCars.sort((a, b) => a.price - b.price);

         popupResults.innerHTML = `
                <div class="cars-grid">
                    ${uniqueCars.map(car => `
                        <div class="car-card">
                            <div class="car-image">
                                ${car.image ? `<img src="${car.image}" alt="${car.brand} ${car.model}" style="width:100%;height:100%;object-fit:cover;">` : '🖼️ Фото скоро появится'}
                            </div>
                            <div class="car-info">
                                <h4 class="car-title">${car.brand} ${car.model}</h4>
                                <div class="car-specs">
                                    <span>🚗 КПП: ${car.gearbox === 'MT' ? 'Механика' : car.gearbox === 'AT' ? 'Автомат' : 'Вариатор'}</span>
                                    <span>⛰️ Привод: ${car.drive === 'FWD' ? 'Передний' : car.drive === 'RWD' ? 'Задний' : 'Полный'}</span>
                                </div>
                                <div class="car-price">
                                    ${formatPrice(car.price)}
                                    ${results.filter(c => c.brand === car.brand && c.model === car.model).length > 1 ?
               `<div class="price-badge">+ другие комплектации</div>` : ''}
                                </div>
                                <button class="car-select-btn" data-model="${car.brand} ${car.model}" 
                                        data-price="${car.price}" data-gearbox="${car.gearbox}" data-drive="${car.drive}">
                                    Выбрать
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${results.length > uniqueCars.length ?
               `<p style="text-align:center; margin-top:20px; color:#666;">
                        Показаны лучшие предложения. Всего найдено: ${results.length} вариантов
                    </p>` : ''}
            `;
      }

      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
   }

   // ========== СОСТОЯНИЕ ФИЛЬТРОВ ==========
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
      modelList.innerHTML = '';

      if (!selectedBrand) {
         modelList.innerHTML = '<li>Сначала выберите марку</li>';
         modelDisplay.textContent = 'Модель';
         filters.model = '';
         return;
      }

      const models = [...new Set(
         carsDatabase
            .filter(car => car.brand === selectedBrand)
            .map(car => car.model)
      )];

      if (models.length === 0) {
         modelList.innerHTML = '<li>Нет доступных моделей</li>';
      } else {
         modelList.innerHTML = '<li data-value="">Все модели</li>';
         models.forEach(model => {
            const li = document.createElement('li');
            li.setAttribute('data-value', model);
            li.textContent = model;
            modelList.appendChild(li);
         });
      }
   }

   // ========== ОБРАБОТЧИКИ ВЫБОРА ==========
   brandList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
         const value = e.target.dataset.value || e.target.textContent;
         const text = e.target.textContent;

         brandDisplay.textContent = text;
         filters.brand = value;
         updateModelsByBrand(value);
         this.classList.remove('active');
      }
   });

   gearboxList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
         const value = e.target.dataset.value;
         const text = e.target.textContent;

         gearboxDisplay.textContent = text;
         filters.gearbox = value;
         this.classList.remove('active');
      }
   });

   driveList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
         const value = e.target.dataset.value;
         const text = e.target.textContent;

         driveDisplay.textContent = text;
         filters.drive = value;
         this.classList.remove('active');
      }
   });

   modelList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
         const value = e.target.dataset.value || '';
         const text = e.target.textContent;

         modelDisplay.textContent = text;
         filters.model = value;
         this.classList.remove('active');
      }
   });

   // ========== ВАЛИДАЦИЯ ЦЕН ==========
   function validatePrice(value, type) {
      // Убираем все кроме цифр
      let num = parseInt(value.replace(/[^\d]/g, ''));
      if (isNaN(num)) return '';

      // Ограничиваем диапазоном из базы
      if (type === 'min') {
         num = Math.max(priceRange.min, Math.min(num, priceRange.max));
      } else {
         num = Math.max(priceRange.min, Math.min(num, priceRange.max));
      }

      return formatPrice(num).replace(' ₽', '');
   }

   if (priceMin) {
      priceMin.addEventListener('blur', function () {
         this.value = validatePrice(this.value, 'min');
      });
   }

   if (priceMax) {
      priceMax.addEventListener('blur', function () {
         this.value = validatePrice(this.value, 'max');
      });
   }

   // ========== ФИЛЬТРАЦИЯ ==========
   function filterCars() {
      return carsDatabase.filter(car => {
         // Бренд
         if (filters.brand && car.brand !== filters.brand) return false;

         // КПП
         if (filters.gearbox && car.gearbox !== filters.gearbox) return false;

         // Привод
         if (filters.drive && car.drive !== filters.drive) return false;

         // Модель
         if (filters.model && car.model !== filters.model) return false;

         // Цена от
         if (priceMin && priceMin.value) {
            const minVal = parseInt(priceMin.value.replace(/[^\d]/g, '')) || 0;
            if (car.price < minVal) return false;
         }

         // Цена до
         if (priceMax && priceMax.value) {
            const maxVal = parseInt(priceMax.value.replace(/[^\d]/g, '')) || Infinity;
            if (car.price > maxVal) return false;
         }

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

      if (priceMin) priceMin.value = '';
      if (priceMax) priceMax.value = '';

      updateModelsByBrand('');
   }

   // ========== ОБРАБОТЧИКИ КНОПОК ==========
   if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
         e.preventDefault();
         const results = filterCars();
         showResults(results);
      });
   }

   if (resetBtn) {
      resetBtn.addEventListener('click', function (e) {
         e.preventDefault();
         resetFilters();
      });
   }

   // ========== ЗАКРЫТИЕ ПОПАПА ==========
   if (popupClose) {
      popupClose.addEventListener('click', function () {
         popup.classList.remove('active');
         document.body.style.overflow = '';
      });
   }

   if (popup) {
      popup.addEventListener('click', function (e) {
         if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
         }
      });
   }

   if (callbackBtn) {
      callbackBtn.addEventListener('click', function () {
         alert('Спасибо! Наш менеджер свяжется с вами в ближайшее время.');
         popup.classList.remove('active');
         document.body.style.overflow = '';
      });
   }

   // Выбор автомобиля
   if (popupResults) {
      popupResults.addEventListener('click', function (e) {
         if (e.target.classList.contains('car-select-btn')) {
            const model = e.target.dataset.model;
            const price = e.target.dataset.price;
            const gearbox = e.target.dataset.gearbox === 'MT' ? 'механикой' : 'автоматом';
            const drive = e.target.dataset.drive === '4WD' ? 'полным приводом' : 'передним приводом';

            alert(`✨ Отличный выбор!\n\n${model} с ${gearbox} и ${drive}\nЦена: ${formatPrice(parseInt(price))}\n\nМенеджер свяжется с вами для уточнения деталей.`);

            popup.classList.remove('active');
            document.body.style.overflow = '';
         }
      });
   }

   // ========== ОТКРЫТИЕ/ЗАКРЫТИЕ ДРОПДАУНОВ ==========
   document.querySelectorAll('.pick-up-a-car__filter-item').forEach(item => {
      const trigger = item.querySelector('.pick-up-a-car__text:first-child');
      const menu = item.querySelector('.pick-up-a-car-icon__sub-menu');

      if (trigger && menu) {
         trigger.addEventListener('click', function (e) {
            e.stopPropagation();

            document.querySelectorAll('.pick-up-a-car-icon__sub-menu').forEach(m => {
               if (m !== menu) m.classList.remove('active');
            });

            menu.classList.toggle('active');
         });
      }
   });

   document.addEventListener('click', function () {
      document.querySelectorAll('.pick-up-a-car-icon__sub-menu').forEach(menu => {
         menu.classList.remove('active');
      });
   });
});