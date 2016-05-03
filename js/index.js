$(function(){
	var $imgBox=$('.home-banner-wrapper');
	var $img=$('.home-banner-wrapper li');
	var $imgW=$img.outerWidth();
	var now=0;
	var next=0;
	var t=setInterval(move,3000);
	function move () {
		next++;
		if (next>$img.length-1) {
			next=0;
		};
		$img.eq(next).css({display:'block'});
		if (now==$img.length-1) {
			$imgBox.css({left:-$imgW}).animate({left:0});
			now=next;
		}else{
			$imgBox.animate({left:-$imgW},function(){
				$img.eq(now).css({display:'none'});
				$imgBox.css({left:0});
				now=next;
			});
		}
	}
})