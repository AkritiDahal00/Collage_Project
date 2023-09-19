function template_exercise_mcq_picture_choices_1(content, scoring, nosuffle){
	var $board			= $('.board');
	var $nextBtn		= $('#activity-page-next-btn-enabled');
	var $prevBtn		= $('#activity-page-prev-btn-enabled');
	var countNext		= 0;
	var testin			= new EggTemplate();
	var wrong_clicked 	= false;

	var total_page = content.length;

	function generaltemplate(){
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);
		
		$nextBtn.hide(0);
		$prevBtn.hide(0);
		
		testin.numberOfQuestions();

		/*for randomizing the options*/
		var parent = $(".option-block");
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}

		var ansClicked = false;
		var wrngClicked = false;

		$(".option-container").click(function(){
			if($(this).hasClass("class1")){
				if(!wrong_clicked){
					testin.update(true);
				}
				$(".option-container").css('pointer-events','none');
	 			play_correct_incorrect_sound(1);
				$(this).addClass('correct-ans');
				$(this).children('.correct-icon').show(0);
				wrong_clicked = false;
				if(countNext != total_page)
					$nextBtn.show(0);
			}
			else{
				testin.update(false);
	 			play_correct_incorrect_sound(0);
				$(this).addClass('incorrect-ans');
				$(this).children('.incorrect-icon').show(0);
				wrong_clicked = true;
			}
		}); 
	};


	function templateCaller(){
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');		
		// call the template
		generaltemplate();
	};
	
	this.create_exercise = function(){
		if(!nosuffle)
			content.shufflearray();
		if(typeof scoring != 'undefined'){
			testin = scoring;
		}
	 	testin.init(total_page);
 	
		templateCaller();	
		$nextBtn.on("click", function(){
			countNext++;
			testin.gotoNext();
			templateCaller();
		});
		$refreshBtn.click(function(){
		templateCaller();
	});
	
	$prevBtn.on('click',function () {
			countNext--;			
			templateCaller();
		});
	};
}
