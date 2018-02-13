$(document).ready(function() {
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 5) {
			$("#header").addClass("dark-header");
		} else {
			$("#header").removeClass("dark-header");
		}
	});
});
