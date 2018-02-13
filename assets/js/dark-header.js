$(document).ready(function() {
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 650) {
			$("#header").addClass("dark-header");
		} else {
			$("#header").removeClass("dark-header");
		}
	});
});
