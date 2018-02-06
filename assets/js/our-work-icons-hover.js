$(document).ready(function() {
	$("#our-work").hover(
		function() {
			$("#our-work-icon").addClass("about-us-background-dark");
		},
		function() {
			$("#our-work-icon").removeClass("about-us-background-dark");
		}
	);
	$("#our-services").hover(
		function() {
			$("#our-services-icon").addClass("about-us-background-dark");
		},
		function() {
			$("#our-services-icon").removeClass("about-us-background-dark");
		}
	);
	$("#about-us").hover(
		function() {
			$("#about-us-icon").addClass("about-us-background-dark");
		},
		function() {
			$("#about-us-icon").removeClass("about-us-background-dark");
		}
	);
	$("#contact-us").hover(
		function() {
			$("#contact-us-icon").addClass("about-us-background-dark");
		},
		function() {
			$("#contact-us-icon").removeClass("about-us-background-dark");
		}
	);
});
