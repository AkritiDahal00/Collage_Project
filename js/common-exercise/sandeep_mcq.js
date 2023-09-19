mcqClickType1 = function(clickClass, rightClass, score, correctClass, incorrectClass, nextBtn, sendDataArr){
	var wrong_clicked = 0;
	$(clickClass).click(function(){
		if($(this).hasClass(rightClass)){
			if(wrong_clicked<1) score.update(true);
			$(clickClass).css('pointer-events','none');
 			play_correct_incorrect_sound(1);
			$(this).addClass(correctClass);
			$(this).parent().children('.correct-icon').show(0);
			wrong_clicked = 0;
			nextBtn.show(0);
		}
		else{
			if(wrong_clicked<1) score.update(false);
 			play_correct_incorrect_sound(0);
			$(this).addClass(incorrectClass);
			$(this).parent().children('.incorrect-icon').show(0);
			wrong_clicked++;
		}
	}); 
};