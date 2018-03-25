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

/* about-us.hmtl */

/* Slide Show */

$(document).ready(function() {

	var func = setInterval(slideShow, 3000);
	function slideShow() {
		$(".quote-container .quote:gt(0)").hide();
		$(".quote-container>:first-child")
			.fadeOut()
			.next(".quote")
			.fadeIn()
			.end()
			.appendTo(".quote-container");
	}

	$("#next-button").click(function() {
		clearInterval(func);
		func = setInterval(slideShow, 1000);
		$(".quote-container>:first-child")
			.fadeOut()
			.next(".quote")
			.fadeIn()
			.end()
			.appendTo(".quote-container");
		clearInterval(func);
		func = setInterval(slideShow, 5000);
	});

	$("#previous-button").click(function() {
		clearInterval(func);
		func = setInterval(slideShow, 1000);
			$(".quote-container>:first-child")
				.fadeOut()
				.appendTo(".quote-container");
			$(".quote-container>:last-child")
				.prev(".quote")
				.fadeIn()
				.appendTo(".quote-container");
		clearInterval(func);
		func = setInterval(slideShow, 5000);
	});

	/* this part hass been done by @robinz */

	$(".quote-container").hover(
		function() {
			clearInterval(func);
			func = setInterval(slideShow, 7000);
		},
		function() {
			clearInterval(func);
			func = setInterval(slideShow, 5000);
		}
	);
});
