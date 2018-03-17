/* Nav */

$(document).ready(function() {
	$("#header").hover(function() {
		$("#sub-links>li>ol").slideToggle("section-nav");
	});
});