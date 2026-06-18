$(document).ready(function(){
	$(window).scroll(function(){
		var winwid = $(window).width();

		if(winwid > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

		}
	});

	$(window).resize(function(){
		var winwid = $(window).width();
		if(winwid < 800){
			$('header .textos').css({
				'transform': 'translate(0px, -' + scroll / 2 + '%)'
			});
		}
	});
});