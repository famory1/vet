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