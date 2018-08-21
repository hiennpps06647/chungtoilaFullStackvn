// Main
$(document).ready(function () {
	$('.home_slider .owl-carousel').owlCarousel({
		loop:false,
		margin:0,
		nav:false,
		items: 1,
		dots: true,
		responsive : {
			0 : {
				nav:true,
				items: 1,
				dots: false,
			},
			480 : {
				nav:true,
				items: 1,
				dots: false,
			},
			768 : {
				nav:false,
				items: 1,
				dots: true,
			}
		}
	})
	var owl = $('.home_clients .owl-carousel');
		owl.owlCarousel({
			items:6,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:1000,
			autoplayHoverPause:true,
			responsive : {
				0 : {
					items: 2,
				},
				480 : {
					items: 3,
				},
				768 : {
					items: 4,
				},
				1000 : {
					items: 6,
				}
			}
		});
		$('.play').on('click',function(){
			owl.trigger('play.owl.autoplay',[1000])
		})
		$('.stop').on('click',function(){
			owl.trigger('stop.owl.autoplay')
		})
});
