$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 300) {
		$(".transparent-header").addClass("dark-header");
	} else {
		$(".transparent-header").removeClass("dark-header");
	}
});
