$(document).ready(function() {
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 650) {
			$("#nav").addClass("dark-header");
		} else {
			$("#nav").removeClass("dark-header");
		}
	});
});
