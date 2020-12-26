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
$(".navbar__link").on("click", function(e){
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
	
})


