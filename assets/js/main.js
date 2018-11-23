$(function($) {
	var body = $('body'),
		children = body.children();

	body.hide();

	children.css('opacity', 0);

	setTimeout(function() {
		body.fadeIn(1000);

		children.each(function(index) {
			var child = $(this);

			setTimeout(function() {
				child.animate({opacity: 1}, 1000);
			}, 2000 * (index + 1));
		});
	}, 1000);
})(jQuery);
