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
	$('.price__list-table2,.price__list-table3').addClass('hide');	
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


// Плавная прокрутка до нужного раздела 
$(function(){
	$('.about').on('click', function(event){
	  $('html,body').stop().animate({ scrollTop: $('.about__body').offset().top }, 1200);
	  event.preventDefault();
	});
	$('.price').on('click', function(event){
	  $('html,body').stop().animate({ scrollTop: $('.price__body').offset().top }, 1200);
	  event.preventDefault();
	});
});




