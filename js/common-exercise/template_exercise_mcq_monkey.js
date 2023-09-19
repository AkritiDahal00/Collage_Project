function template_exercise_mcq_monkey(content, scoring, shuffit) {
	var $board = $('.board');
	var $nextBtn = $('#activity-page-next-btn-enabled');
	var $prevBtn = $('#activity-page-prev-btn-enabled');
	var $refreshBtn = $('#activity-page-refresh-btn');
	var countNext = 0;
	var testin = new EggTemplate();
	var wrong_clicked = false;

	var total_page = content.length;

	function generaltemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);

		$nextBtn.hide(0);
		$prevBtn.hide(0);

		testin.numberOfQuestions();

		/*for randomizing the options*/
		var option_position = [1, 2, 3, 4];
		option_position.shufflearray();
		for (var op = 0; op < 4; op++) {
			$('.main-container').eq(op).addClass('option-pos-' + option_position[op]);
		}
		//top-left
		$('.option-pos-1').hover(function () {
			$('.center-sundar').attr('src', 'images/sundar/top-right.png');
			$('.center-sundar').css('transform', 'scaleX(-1)');
		}, function () {

		});
		//bottom-left
		$('.option-pos-3').hover(function () {
			$('.center-sundar').attr('src', 'images/sundar/bottom-right.png');
			$('.center-sundar').css('transform', 'scaleX(-1)');
		}, function () {

		});
		//top-right
		$('.option-pos-2').hover(function () {
			$('.center-sundar').attr('src', 'images/sundar/top-right.png');
			$('.center-sundar').css('transform', 'none');
		}, function () {

		});
		//bottom-right
		$('.option-pos-4').hover(function () {
			$('.center-sundar').attr('src', 'images/sundar/bottom-right.png');
			$('.center-sundar').css('transform', 'none');
		}, function () {

		});


		var wrong_clicked = 0;
		var correct_images = ['correct-1.png', 'correct-2.png', 'correct-3.png'];
		$(".option-container").click(function () {
			if ($(this).hasClass("class1")) {
				if (wrong_clicked < 1) {
					testin.update(true);
				}
				var rand_img = Math.floor(Math.random() * correct_images.length);
				$('.option-pos-1, .option-pos-2, .option-pos-3, .option-pos-4').off('mouseenter mouseleave');
				$('.center-sundar').attr('src', 'images/sundar/' + correct_images[rand_img]);
				$(".option-container").css('pointer-events', 'none');
				play_correct_incorrect_sound(1);
				$(this).addClass('correct-ans');
				$(this).parent().children('.correct-icon').show(0);
				wrong_clicked = 0;
				if (countNext != total_page)
					$nextBtn.show(0);
			}
			else {
				var classname_monkey = $(this).parent().attr('class').replace(/main-container/, '');
				classname_monkey = classname_monkey.replace(/ /g, '');
				$('.' + classname_monkey).off('mouseenter mouseleave');
				if (wrong_clicked == 0) {
					$('.center-sundar').attr('src', 'images/sundar/incorrect-1.png');
				} else if (wrong_clicked == 1) {
					$('.center-sundar').attr('src', 'images/sundar/incorrect-2.png');
				} else {
					$('.center-sundar').attr('src', 'images/sundar/incorrect-3.png');
				}
				testin.update(false);
				play_correct_incorrect_sound(0);
				$(this).addClass('incorrect-ans');
				$(this).parent().children('.incorrect-icon').show(0);
				wrong_clicked++;
			}
		});
	};


	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');
		// call the template
		generaltemplate();

	};

	this.create_exercise = function () {
		if (shuffit == true)
			content.shufflearray();
		if (typeof scoring != 'undefined') {
			testin = scoring;
		}
		testin.init(total_page);

		templateCaller();
		$nextBtn.on("click", function () {
			countNext++;
			testin.gotoNext();
			templateCaller();
		});
		$refreshBtn.click(function () {
			templateCaller();
		});

		$prevBtn.on('click', function () {
			countNext--;
			templateCaller();
		});
	};

	// added by dilak for grade5 percentage
	this.getCountNext = function () {
		return countNext;
	}
}
