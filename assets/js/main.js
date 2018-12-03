/* Header / Nav */

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
	
	setTimeout(function() {
		$("#alerts").slideUp(1000);
	}, 5000);
	
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
			warningMessage = "Please fill up the form...";
			alerts_box_animation(warningMessage);
			return false;
		}
	}

	if (formValues.message.value.length <= 15) {
		$(formValues.message).addClass("red-border");
		warningMessage = "Your message must be longer then 15 characters.";
		alerts_box_animation(warningMessage);
		return false;
	} else {
		sendMail(formValues);
	}	

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
	
	warningMessage = "Your message has been sent. <br> Thank you!";
	$("#contactForm").trigger("reset");
	alerts_box_animation(warningMessage);
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



function initMap() {
	var companyLocation = { lat: 52.0495218, lng: -0.8240154 };
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: companyLocation
	});
	var marker = new google.maps.Marker({
		position: companyLocation,
		map: map
	});
}

	

