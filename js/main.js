$(function(){

	$('.carousel__inner').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 855,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 516,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

});