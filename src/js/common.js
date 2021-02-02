$(function () {
	$('a[href^="#"]').click(function () {
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
	$(function () {
		var url = window.location.href;
		$(".c-gnav a").each(function () {
			if (url == (this.href)) {
				$(this).closest("li").addClass("is-current");
			}
		});
	});
	$(".menu-sp_span").click(function () {
		$(this).toggleClass("is-open");
		$(".menu-sp").toggleClass("is-open");
		$(".c-gnav").toggleClass("is-open");
		$(".l-header__logo").toggleClass("is-open");
		$(".l-body").toggleClass("is-open");
	});
});
