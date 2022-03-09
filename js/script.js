// event pada saat link di klik
$('.page-scroll').on('click' , function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elementTujuan = $(tujuan);
	
	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');
	
	e.preventDefault();

});

// Parallax

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	// Portofolio

	if(wScroll > $('.portofolio').offset().top - 250){
		// muncul satu-satu
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			},300 * (i+1));
		});

		
	}
});