(function($) {
    $.fn.extend({
        xmas: function() {
        	return this.each(function() {
        		position = $(this).css('position');
        		
        		if(position === 'static') $(this).css('position', 'relative');
        		
        		box = $('<div>').addClass('xmas');
        		box.appendTo(this);
        		
			    var obj = $(this);
			});
        }
    });
})(jQuery);