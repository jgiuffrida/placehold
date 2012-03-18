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
					$wrapper = $('<span />'),
					$cover = $('<span />').text($this.attr('placeholder')),
					that = this,
					val = $this.attr('value');
					
				$wrapper.addClass('placeholder').css('position','relative');
				$cover.css({'position':'absolute','top':'0','left':'0','z-index':1});
				$this.wrap($wrapper);
				$this.parent().append($cover);


				$cover.on('click', function() {
					$this.focus();
				});

				$this.on('blur',function() {
					if(!val) {
						$cover.show();
					}	
				});

				$this.on('focus',function() {
					$cover.hide();
				});

				if(val) {
					$cover.hide();
				}
			}
		});
	};
})(jQuery);
