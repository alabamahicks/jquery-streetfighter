$( document ).ready(function() {

	$('.ryu').mouseenter(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();

	})
	.mouseleave(function() {
		// alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	})
  	.mousedown(function() {
  	playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();


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
		}	
	});

$( document ).keyup(function( event ){
		if (event.which == 88){
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
		}	
	});