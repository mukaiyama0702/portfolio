$(function(){
  let tabs = $(".tab");
  $(".tab").on("click", function(){
    $(".active").removeClass("active");
    $(this).addClass("active");
    const index = tabs.index(this);
    $(".content-wrapper").removeClass("show").eq(index).addClass("show");
  });
});


$(document).ready(function() {
	$.fn.autoChanger = function() {
		var timeout = 3000;
		var speed = 1000;
		var element = $(this).children();
		var length = $(this).children().length;
		var current = 0;
		var next = 1;


		$(element).hide();
		$(element[0]).show();


		var change = function(){
			$(element[current]).fadeOut(speed);
			$(element[next]).fadeIn(speed);


			if ((next + 1) < element.length) {
				current = next;
				next++;
				timeout = 3000;
			} else {
				current = element.length - 1;
				next = 0;
				timeout = 10000;
			}


			timer = setTimeout(function() { change(); }, timeout);
		};


		var timer = setTimeout(function() { change(); }, timeout);
	}
	$(function() {
		$('#header-images').autoChanger();
	});
});

$(window).scroll(function(){
	var now = $(window).scrollTop();
	if(now > 200){
		$('.pagetop').fadeIn("slow");
	}else{
		$('.pagetop').fadeOut("slow");
	}
})

$(function() {
	$('.navToggle').click(function() {
			$(this).toggleClass('active');

			if ($(this).hasClass('active')) {
					$('.globalMenuSp').addClass('active');
			} else {
					$('.globalMenuSp').removeClass('active');
			}
	});
});