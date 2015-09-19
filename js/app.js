$( document ).ready(function() {

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();


	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		$('.ryu-throwing').hide();

	})
  	.mousedown(function() {
  	playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.ryu-still').hide();



    $('.hadouken').finish().show().animate(
     	{'left': '1020px'},
     	500,
     	function() {
     		$(this).hide();
     		$(this).css('left', '520px');
     	});
  	})
  	.mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	$('.ryu-still').hide();
    $('.ryu-cool').hide();
	
	});

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$( document ).keydown(function( event ){
		if (event.which == 88){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.ryu-throwing').hide();

		}	
	});

$( document ).keyup(function( event ){
		if (event.which == 88){
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
			$('.ryu-throwing').hide();

		}	
	});