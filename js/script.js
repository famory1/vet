// Сжатие изображений
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}
});

// Попап
// Попап открывается при нажатии на любую кнопку с классом, представленным ниже
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

// Чтобы не было двойных нажатий
let unlock = true;

const timeout = 400;

// Получение каждой кнопки открытия попапа
if (popupLinks.length > 0){
	for( let index = 0; index < popupLinks.length; index++){
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e){
			// Удаление решётки
			const popupName = popupLink.getAttribute('href').replace('#', '');
			// Получение объекта попапа
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
// Получение кнопки закрытия попапа
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}


// Функция открытия попапа
function popupOpen(curentPopup){
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		}else{
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

// Функция закрытия попапа
function popupClose (popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnLock();
		}
	}
}


// Функция блокирования бг
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if(lockPadding.length > 0) {
		for(let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout );
}

document.addEventListener('keydown', function (e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

function bodyUnLock() {
	setTimeout(function(){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unclock = false;
	setTimeout(function(){
		unclock = true;
	}, timeout);
}

// Burger Menu
$(document).ready(function(){
	$('.navbar__burger').click(function(event){
		$('.navbar__burger,.navbar__panel,.navbar__logo,.navbar__phone').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// Фильтр
$(document).ready(function(){
	let filter = $("[data-filter]");
	$('.price__filter-link1').addClass('active');
	$('.price__list-table1').addClass('hide');	
	filter.on("click", function(event){
		// Подсветка только активной клавиши
		$(this).addClass('active').siblings().removeClass('active');
		// При нажатии на наш фильтр, страница не будет обновляться и перекидывать нас в начало
		event.preventDefault();
		let cat = $(this).data('filter');
		$("[data-cat]").each(function(){
			let workCat = $(this).data('cat');
			if (workCat != cat){
				$(this).addClass('hide');
			}else{
				$(this).removeClass('hide');
			}

		});
	});
});

// Плавная прокуртка до нужного раздела
$(".navbar__link, .contact__link").on("click", function(e){
	$('.navbar__burger,.navbar__panel,.navbar__logo,.navbar__phone').removeClass('active');
	$('body').removeClass('lock');
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 50
    }, 1200);
});

// Фильтр для списка сотрудников 
$(document).ready(function(){
	let list = $("[data-list]");
	$('.doctors__item1').addClass('active');
	$('.doctors__person2,.doctors__person3,.doctors__person4').addClass('hide');	
	list.on("click", function(event){
		// Подсветка только активной клавиши
		$(this).addClass('active').siblings().removeClass('active');
		// При нажатии на наш фильтр, страница не будет обновляться и перекидывать нас в начало
		event.preventDefault();
		let person = $(this).data('list');
		$("[data-person]").each(function(){
			let workPerson = $(this).data('person');
			if (workPerson != person){
				$(this).addClass('hide');
			}else{
				$(this).removeClass('hide');
			}
		});
	});
});

// Слайдер
new Swiper('.reviews__slider', {
	// Стрелки
    navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	 },
	// Буллеты
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	// Количество слайдов на одной странице
	slidesPerView: 3,
	// активный слайд по центру
	centeredSlides: true,
	// Параметр бесконечности
	loop: true,
	// Скорость прокрутки слайдера
	speed: 500,
	breakpoints:{
		320:{
			slidesPerView: 2,
		},
		480:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 3,
		},
	}
});






