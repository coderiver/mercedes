head.ready(document, function () {
	$(".js-cars-key").on("click", function(){
		$(this).parents(".range-cars").find(".js-cars-list").toggleClass("is-active");
		return false;
	});
	$(".js-nav-car").on("click", function(){
		$(this).parent().find(".js-nav-car-list").slideToggle(200);
		return false;
	});


	$(".js-gallery").each(function(){
		var gallery = $(this);
		var img = gallery.find(".js-gallery-img img");
		var preview_first = gallery.find(".js-gallery-preview a").first();
		var first_img = preview_first.attr("href");
		preview_first.addClass("is-active");
		img.attr("src", first_img);
	});
	$(".js-gallery-preview a").on("click", function(){
		var img = $(this).attr("href");
		$(".js-gallery-preview a").removeClass("is-active");
		$(this).addClass("is-active");
		$(this).parents(".js-gallery").find(".js-gallery-img img").attr("src", img)
		return false;
	});

});
