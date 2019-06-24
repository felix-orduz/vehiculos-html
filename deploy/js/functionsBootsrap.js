$(document).ready(function(){

    // Carruseles Autos our Fleet
    $('.owl-fleet').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:true,
        pagination: true,
        responsive:{
            0:{
	            items:1
	        },
			500:{
	            items:2
	        },
			710:{
	            items:3
	        },
			920:{
	            items:4
	        }
        }
    })

    // Carrusel Testimonial
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        pagination: true,
        responsive:{
            0:{
	            items:1
	        },
			500:{
	            items:1
	        },
			710:{
	            items:1
	        },
			920:{
	            items:1
	        }
        }
    })

    // Carousel News
    $('.owl-news').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:true,
        pagination: true,
        responsive:{
            0:{
	            items:1
	        },
			500:{
	            items:2
	        },
			710:{
	            items:3
	        },
			920:{
	            items:3
	        }
        }
    })

})