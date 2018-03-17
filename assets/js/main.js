/* Navbar */

$(document).ready(function() {
	$("#main-links li:first").insertAfter($("#main-links li:nth-child(4)"));
	$("#sub-links li:first").insertAfter($("#sub-links li:nth-child(4)"));
	$(".visible").addClass("section-nav");
	$(".visible").removeClass("visible");
	$("#sub-links ol:first").addClass("visible");
});