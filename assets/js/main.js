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

/* Alert popup */

function alerts_box_animation() {
	$("#message-box").html(warningMessage);
	$("#alerts").slideDown(500);
	var y = setTimeout(slide, 2000);
	function slide() {
		$("#alerts").slideUp(1000);
	}
}

/* Form Functions */

$(document).ready(function() {
	$("#name, #userEmail, #message").click(function() {
		$(this).removeClass("red-border");
	});
});

function validForm(formValues) {

	for (var i = 0; i < 3; i++) {

		if (formValues[i].value == null || formValues[i].value == "") {
			$(formValues[i]).addClass("red-border");
			warningMessage = "PLease fill up the form...";
			alerts_box_animation(warningMessage);
			return false;
		}
	}

	if (formValues.message.value.length <= 15) {
		$(formValues.message).addClass("red-border");
		warningMessage = "PLease fill up the form... <br> Your message needs to be longer then 15 characters.";
		alerts_box_animation(warningMessage);
		return false;
	} else {
		sendMail(formValues);
	}

	warningMessage = "Your message has been sent. <br> Thank you!";
	$("#contactForm").trigger("reset");
	alerts_box_animation(warningMessage);
	return false;
};

function sendMail(formValues) {
	
    emailjs.send("gmail", "test", {
        "name": formValues.author.value,
        "email": formValues.email.value,
        "message": formValues.message.value
    })
    .then(
        function(response) {
			console.log("SUCCESS", response); 			            
        },
        function(error) { 
            console.log("ERROR", error);
        }
    );
    return false; 
};

/* Footer Social Links */

$(document).ready(function() {
	if ($(window).width() >= 1400) {
		$(".footer-links .fab").hover(function() {
			$(".fa-twitter").toggleClass("twitter");
			$(".fa-facebook-f").toggleClass("facebook");
			$(".fa-linkedin-in").toggleClass("linkedin");
			$(".fa-instagram").toggleClass("instagram");
		});
	};
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
	};

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

