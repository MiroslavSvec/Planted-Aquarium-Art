/* Header / Nav */

$(document).ready(function() {
	if ($(window).width() <= 968) {
		$(".header").click(function() {
			$("#sub-links>li>ol").slideToggle("section-nav");
		});
	} else {
		$(".header").hover(function() {
			$("#sub-links>li>ol").slideToggle("section-nav");
		});
	}
});

$(document).ready(function() {
	$(document).scroll(function() {
		if ($(document).scrollTop() >= 650) {
			$(".header").addClass("dark-header");
		} else {
			$(".header").removeClass("dark-header");
		}
	});
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
	
	var func = setInterval(slideShow, 0.0001);

	function slideShow() {
		$(".quote-container .quote:gt(0)").hide(); 
		$(".quote-container>:first-child")
			.fadeOut()
			.next(".quote")
			.fadeIn()
			.end()
			.appendTo(".quote-container");
		clearInterval(func);
		func = setInterval(slideShow, 5000);
	}

	$("#next-button").click(function() {
		clearInterval(func);
		func = setInterval(slideShow, 0.0001);
		slideShow();
	});
	
	$("#previous-button").click(function() {
		clearInterval(func);
		func = setInterval(slideShow, 0.0001);
		$(".quote-container .quote:gt(0)").hide();
		$(".quote-container>:first-child")
			.fadeOut()
			.appendTo(".quote-container");
		$(".quote-container>:last-child")
			.prev(".quote")
			.fadeIn();
		$(".quote-container .quote:gt(0)").hide();
		$(".quote-container>:first-child")
			.fadeOut()
			.appendTo(".quote-container");
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
