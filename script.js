const iconMenu=document.querySelector('.header__menu-icon');
	const menuBody=document.querySelector('.header__menu');
	if(iconMenu){      
		iconMenu.addEventListener("click",function(e){
		document.querySelector('body').classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
	}
const iconMenuFooter=document.querySelector('.footer__menu-icon');
	const footerMenuBody=document.querySelector('.footer__menu');
	if(iconMenuFooter){      
		iconMenuFooter.addEventListener("click",function(e){
		document.querySelector('body').classList.toggle('_lock');
		iconMenuFooter.classList.toggle('_active');
		footerMenuBody.classList.toggle('_active');
	});
	}
	/*-----------swiper pick-up-a-car__slider----------*/
	const mySwiper = new Swiper('.pick-up-a-car__slider',{
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
      breakpoints:{
   300:{
      slidesPerView: 2.5,
    },
      360:{
      slidesPerView: 2.5,
    },
      450:{
      slidesPerView: 3,
    },
      540:{
      slidesPerView: 4,
    },
      630:{
      slidesPerView: 5,
    },
     750:{
      slidesPerView: 6,
    },
    770:{
      slidesPerView: 7,
    },
    850:{
      slidesPerView: 8,
    },
    1000:{
      slidesPerView: 9,
    }
    },
	});

/*------В слайдере-------*/
const itemsWrapper = Array.from(document.querySelectorAll('.pick-up-a-car__slider-slide'));
for(let item of itemsWrapper){
	item.addEventListener('click', () =>{
		for(let item of itemsWrapper){
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
mainTopButtons.addEventListener('click', function(){
	mainTopLeft.classList.toggle('hidden');
	mainTopRight.classList.toggle('active');
	for(let item of mainTopButton){
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
    }))
