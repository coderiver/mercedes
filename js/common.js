head.ready(document, function () {
	$(".js-cars-key").on("click", function(){
		$(this).parents(".range-cars").find(".js-cars-list").toggleClass("is-active");
		return false;
	});
	$(".js-nav-car").on("click", function(){
		$(this).parent().find(".js-nav-car-list").slideToggle(200);
		return false;
	});
});
