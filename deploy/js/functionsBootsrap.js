$(document).ready(function(){

    // Carruseles Autos
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
			490:{
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
})