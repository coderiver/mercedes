head.ready(document, function () {
	$(".js-cars-key").on("click", function(){
		$(this).parents(".range-cars").find(".js-cars-list").toggleClass("is-active");
		return false;
	});
});
