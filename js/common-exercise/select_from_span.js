function exercise_span_selector(class1, class2,rhino,nextbutton){
            nextbutton.hide(0);
            
            class1.click(function(){
	            $('.gohide').hide(0);
	            rhino.update(true);
	            nextbutton.show(0);
	            var $this = $(this);
	            $(this).html($(this).html().replace(/\//g, ''));
	            if($this.hasClass("done")){
	              return true;
	            }
	            var $parent = $this.parent();
	            var $incorrect = $($parent).find(".incorrect");
	            class2.hide(0);
	            play_correct_incorrect_sound(true);
	            $this.addClass("done");
	            if($($parent).find(".notdone").length == 0)
	              correctlyanswered++;
	            var length = $(".done").length; 
          });
          
          class2.click(function(){
            rhino.update(false);
            var $this = $(this);
            if($this.hasClass("notdone")){
              return true;
            }
            play_correct_incorrect_sound(false);
            $this.addClass("notdone");
          });
}
