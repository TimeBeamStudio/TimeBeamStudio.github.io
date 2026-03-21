$(document).ready(function() {

	// OWL CAROUSEL INSTALLATION
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop : [1000,1],
      	itemsDesktopSmall : [900,1],
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:true
	});

	$("#home-slider").owlCarousel({
		items:1,
		itemsDesktop : [1000,1],
      	itemsDesktopSmall : [900,1],
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:false,
		navigation:true,
		navigationText:["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"]
	});

	/* Navigation Menu*/
	var offsettop = $('.navbar').offset().top;
	if (offsettop > 50) {
        $('.navbar').addClass('colored-nav');
        $('.navbar').addClass('gradient-violat');
        $("#scroll-top-div").fadeIn('500');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').removeClass('gradient-violat');
        $("#scroll-top-div").fadeOut('500');
    }

	var num = 50;

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.navbar').addClass('colored-nav');
	        $('.navbar').addClass('gradient-violat');
	        $("#scroll-top-div").fadeIn('500');
	    } else {
	        $('.navbar').removeClass('colored-nav');
	        $('.navbar').removeClass('gradient-violat');
	        $("#scroll-top-div").fadeOut('500');
	    }
	});

	/****************************BACK TO TOP************************************/
	$('#scroll-top-div').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

});