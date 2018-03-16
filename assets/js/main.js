/* Navbar */

$(document).ready(function() {
	$("#home").hover(function() {
		$("#home>ol").slideToggle("visible");
	});		
	$("#gallery").hover(function() {
		$("#gallery>ol").slideToggle("visible");
	});	
	$("#about-us").hover(function() {
		$("#about-us>ol").slideToggle("visible");
	});
	$("#your-project").hover(function() {
		$("#your-project>ol").slideToggle("visible");
	});	
	$("#profile").hover(function() {
		$("#profile>ol").slideToggle("visible");
	});
	$("#shopping-cart").hover(function() {
		$("#shopping-cart>ol").slideToggle("visible");
	});
});