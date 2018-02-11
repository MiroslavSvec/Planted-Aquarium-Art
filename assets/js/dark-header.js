$(document).ready(function() {
	$(document).scroll(function() {
		if ($(document).scrollTop() > 400) {
			$(".transparent-header").addClass("dark-header");
		} else {
			$(".transparent-header").removeClass("dark-header");
		}
	});
});
