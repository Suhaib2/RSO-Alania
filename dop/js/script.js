function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
	scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
