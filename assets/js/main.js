/* Nav */

$(document).ready(function() {
	if ($(window).width() <= 968) {
		$("#header").click(function() {
			$("#sub-links>li>ol").slideToggle("section-nav");
		});
	} else {
		$("#header").hover(function() {
			$("#sub-links>li>ol").slideToggle("section-nav");
		});
	}
});

/* Footer Social Links */

$(document).ready(function() {
	if ($(window).width() >= 1400) {
		$(".footer-links .fab").hover(function() {
			$(".fa-twitter").toggleClass("twitter");
			$(".fa-facebook-f").toggleClass("facebook");
			$(".fa-linkedin-in").toggleClass("linkedin");
			$(".fa-instagram").toggleClass("instagram");
		});
	}
});
