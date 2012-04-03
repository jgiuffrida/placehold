// placehold. Yet Another Placeholder Plugin.. (c) Joseph Giuffrida MIT/GPLv2 Lic. http://www.github.com/hots0uce/placehold

(function($) {
	$.fn.placehold = function() {
		var nativeSupport = (function() {
			var el = document.createElement('input');
			return ('placeholder' in el);
		})();
		
		return this.each(function() {
			if(!nativeSupport) {
				var $this = $(this),
					$wrapper = $('<span />').addClass('placeholder-wrapper').css('position','relative'),
					$cover = $('<span />').css({'position':'absolute','top':'0','left':'0','z-index':1}),
					that = this,
					val = $this.attr('value');
					
				$cover.text($this.attr('placeholder'));

				$this.wrap($wrapper);
				$this.parent().append($cover);


				$cover.click(function() {
					$this.focus();
				});

				$this.blur(function() {
					if(!val) {
						$cover.show();
					}	
				});

				$this.focus(function() {
					$cover.hide();
				});

				if(val) {
					$cover.hide();
				}
			}
		});
	};
})(jQuery);
