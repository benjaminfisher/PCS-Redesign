/* Author: Benjamin J. Fisher
 * Date: Dec 10, 2011
*/

$(function(){
	var $overlay = $('.overlay');
	
	$overlay.parent().hover(function(){
		$(this)
			.children('.overlay')
			.hide()
			.slideDown();
	}, function(){
		$(this)
			.children('.overlay')
			.slideUp();
	});
	
	$('#main_nav li').click(function(){
		
		open = $(this).children('ul').hasClass('open');
		
		if(!open){
			$('.open')
				.slideUp()
				.removeClass('open');
				
			$(this).children('ul')
				.slideDown()
				.addClass('open');
		};
	})
	
	$('.xmas').xmas();
})
