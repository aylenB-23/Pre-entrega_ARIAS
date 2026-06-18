$(document).ready(function(){
// EFECTO MENU

	$('.menu a').each(function(index,){
		$(this).css({
			'top': '-100px'
		});
		$(this).animate({
			'top': '0px'
		},2000 +(index * 500));
	});

// EFECTO HEADER

	if( $(window).width() > 800 ){
		$('header .textos').css({
			opacity: 0,
			marginTop:0
		});
		$('header .textos').animate({
			opacity: 1,
			marginTop:'-50px'
		},1500);}

// SCROLL ELEMENTOS MENU

		var qs = $('#qs').offset().top,
			menu = $('#platos').offset().top,
			gal = $('#gal').offset().top,
			ubi = $('#ubi').offset().top;

		$('#btn-qs').on('click',function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: qs
			},500);
		});
		$('#btn-m').on('click',function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: menu
			},500);
		});
		$('#btn-g').on('click',function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: gal
			},500);
		});
		$('#btn-u').on('click',function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: ubi
			},500);
		});
});