/**
 * pass in the total pages
 * passin a true flag if it is the last page else pass in false or let it be null
 *
 *
 * vocab_controller_obj: is the vocabulary library controller
 * Note: Last page not last slide
*/

function AudioController(total_page, last_page, speech_speed, break_interval, vocab_controller_obj) {
	/*
	this.totalpages = totalpages;
		this.last_page = */
	(last_page == null)? false: last_page;
	var $nextBtn = $('#activity-page-next-btn-enabled');
  	var $prevBtn = $('#activity-page-prev-btn-enabled');

	var isFirefox = typeof InstallTrigger !== 'undefined';

	//flag to indicate if the browser is Firefox or not
	// var isFirefox = typeof InstallTrigger !== 'undefined';
	// console.log("isFirefox");
	// isFirefox = true;

	//this array store the array of sound files that need to be played
	var audioarray = [];
	// this array stores jq objects of divs corresponding to the audio in audioarray
	var $textsforaudio = [];
	// true if it is the last slide
	var countNext = 0;
	//when animation is in progress this flag is set
	var animationinprogress = false;
	//if hoverd on div that is not playing this flag is set
	var hovering = false;
	//index of sound being played
	var playindex = -1;
	//index of the div being hovered
	var hoverindex = -1;
	//if you want the entire text to be continuously played till the end
	var contunuousplaying = false;
	//the current sound being played
	var sound_data;
	//jq object of the next button
	var $nextbtnpoem;
	//jq object of the prev button
	var $prevbtnpoem;
	//jq object of the pause button
	var $pausebtnpoem;
	//jq object of the play button
	var $poempbtn;
	//jq object of the replay button
	var $replaybtnpoem;
	//flag to prevent multiple clicks of the buttons
	//the control buttons can only be clicked every 200ms
	var button_200_consume = false;

	//controls the triggering mechanism once the div is directly clicked by the user
	//once the div is clicked the play is triggered after 250ms
	var dispatch = false;
	// this flag is set to true is the audio is paused
	var paused_flag = false;
	// the color of the div when hovered
	var hover_colour = "#FFF9AA";
	// the color of the div when playing
	var active_div_colour = "#faf";
	var play_text_call_count=0;

	var typing_interval = 120;
	// if(typeof speech_speed !== 'undefined'){
		// typing_interval = speech_speed;
	// }
	if(speech_speed != null){
		typing_interval = speech_speed;
	}
	var additionalinterval_val = 750;
	// if(typeof break_interval !== 'undefined'){
		// additionalinterval_val = break_interval;
	// }
	if(break_interval != null){
		additionalinterval_val = break_interval;
	}
	/**
	 * passin jqobject of text that need playing
	 * passin array of audios in serial order of the texts
	 * lastpage set the flag to true if it is the last page else pass in false or null
	 *
	 * Note: easiest way is to give all the texts same class name and pass the object
	 * eg: all texts can be:  p class = "recite"
	 * and $texts = $(".recite");
	 * interval the value of typing animation: because different people speak in different speeds
	 * we have added this to negate the problem of having to manage a single interval for everyone
	 * countNext value of the slide
	 */


	this.init = function($texts, audios, countNxt, interval) {
		if($texts.length > 1){
			$textsforaudio = $texts;
		}else{
			$textsforaudio[0] = $texts;
		}

		if(audios.length > 1){
			audioarray = audios;
		}else{
			audioarray[0] = audios;
		}

		typing_interval = (interval != null)? interval: typing_interval;

		countNext = countNxt;
		// console.log("countNext", countNext);

		addbuttons();

		$.each($textsforaudio, function(index, val) {
			var $this = $(this);
			$this.click(function() {
				play_text_call_count=0;
				if(index != playindex){
					if (dispatch) {
						return false;
					}
					if (animationinprogress) {
						animationinprogress = false;
						soundplaycomplete = true;
						textanimatecomplete = true;
						sound_data.unbind('ended');
						sound_data.stop();
						// setTimeout(function() {
							$($textsforaudio[playindex]).html(poem_orignal_text);
							$($textsforaudio[playindex]).css({"background-color":"transparent","pointer-events":"auto"});
							resetthevocab($($textsforaudio[playindex]));
						// }, 200);
						// }else{
						// return true;
					}
					dispatch = true;
					setTimeout(function() {
						paused_flag = false;
						animationinprogress = true;
						playindex = index;
						playpoem(false);
						dispatch = false;
					}, 270);
				}else if(paused_flag){
					$poempbtn.trigger('click');
				}

			});

			$this.hover(function() {
				// if(!animationinprogress){
				hoverindex = index;
				if(playindex != index){
					hovering = true;
					$this.css("background-color", hover_colour);
				}
				// }
			}, function() {
				if (hovering) {
					$this.css("background-color", "transparent");
				}
				// if(animationinprogress){
				// 	$this.css("background-color", "rgb(255, 170, 255);");
				// }
				hovering = false;
			});
		});
		$prevbtnpoem.hide(0);
		$nextbtnpoem.hide(0);
		// playpoem();
	};

	this.reset = function(){
		if(sound_data != null){
			sound_data.unbind('ended');
			sound_data.stop();
			$($textsforaudio[playindex]).html(poem_orignal_text);
			$($textsforaudio[playindex]).css("background-color", "transparent");
			resetthevocab($($textsforaudio[playindex]));
			paused_flag = false;
		}
		if($pausebtnpoem != null){
			$nextbtnpoem = null;
			$prevbtnpoem = null;
			$pausebtnpoem = null;
			$poempbtn = null;
			$replaybtnpoem = null;

		}
	};

	//this function sets the control buttons
	function addbuttons() {
		var buttons = '<input class="nextbtnpoem" src="images/nepali_poem_controller/nextbtn.png" value="" type="image" style="display: inline-block;">' + '<input class="prevbtnpoem" src="images/nepali_poem_controller/nextbtn.png" value="" type="image" style="display: block;">' + '<input class="pausebtnpoem" src="images/nepali_poem_controller/pausebtn.png" value="" type="image" style="display: none;">' + '<input class="poempbtn" src="images/nepali_poem_controller/playbtn.png" value="" type="image" style="display: inline-block;">' + '<input class="replaybtnpoem" src="images/nepali_poem_controller/replaybtn.png" value="" type="image" style="">';

		$(".contentblock").append(buttons);

		$nextbtnpoem = $(".nextbtnpoem");
		$prevbtnpoem = $(".prevbtnpoem");
		$pausebtnpoem = $(".pausebtnpoem");
		$poempbtn = $(".poempbtn");
		$replaybtnpoem = $(".replaybtnpoem");

		$nextbtnpoem.click(function() {
			play_text_call_count=0;
			if (button_200_consume) {
				return true;
			}
			soundplaycomplete = true;
			textanimatecomplete = true;
			button_200_consume = true;
			sound_data.unbind('ended');
			sound_data.stop();
			$poempbtn.hide(0);
			$pausebtnpoem.show(0);
			$($textsforaudio[playindex]).html(poem_orignal_text);
			$($textsforaudio[playindex]).css({"background-color":"transparent","pointer-events":"auto"});
			resetthevocab($($textsforaudio[playindex]));
			paused_flag = false;
			setTimeout(function() {
				playindex++;
				playpoem();
				button_200_consume = false;
			}, 250);
		});

		$prevbtnpoem.click(function() {
			play_text_call_count=0;
			if (button_200_consume) {
				return true;
			}
			soundplaycomplete = true;
			textanimatecomplete = true;
			button_200_consume = true;
			sound_data.unbind('ended');
			sound_data.stop();
			$poempbtn.hide(0);
			$pausebtnpoem.show(0);
			$($textsforaudio[playindex]).html(poem_orignal_text);
			$($textsforaudio[playindex]).css({"background-color":"transparent","pointer-events":"auto"});
			resetthevocab($($textsforaudio[playindex]));
			paused_flag = false;
			setTimeout(function() {
				playindex--;
				playpoem();
				button_200_consume = false;
			}, 250);
		});

		$pausebtnpoem.click(function() {
			if (button_200_consume) {
				return true;
			}
			// animationinprogress = false;
			button_200_consume = true;
			// soundplaycomplete = true;
			textanimatecomplete = true;
			$(this).hide(0);
			$poempbtn.show(0);
			contunuousplaying = false;
			// sound_data.unbind('ended');
			// sound_data.stop();
			sound_data.pause();
			paused_flag = true;
			// $($textsforaudio[playindex]).html(orignal_text);
			// $($textsforaudio[playindex]).css("background-color", "transparent");
			setTimeout(function() {
				button_200_consume = false;
			}, 250);
		});

		$poempbtn.click(function() {
			if (button_200_consume) {
				return true;
			}
			if(playindex == -1){
				playindex = 0;
			}
			button_200_consume = true;
			$(this).hide(0);
			$pausebtnpoem.show(0);
			playpoem();
			setTimeout(function() {
				button_200_consume = false;
			}, 250);
		});

		$replaybtnpoem.click(function() {
			if (button_200_consume) {
				return true;
			}
			button_200_consume = true;
			$(this).hide(0);
			$pausebtnpoem.show(0);
			playindex = 0;
			playpoem();
			setTimeout(function() {
				button_200_consume = false;
			}, 250);
		});
	}

	function playpoem(contplay) {
		contunuousplaying = (contplay != null ) ? contplay : true;
		animationinprogress = true;
		if(!paused_flag){
			sound_data = audioarray[playindex];
		}

		/* reset current buttons */
		$poempbtn.hide(0);
		$replaybtnpoem.hide(0);

		/* enable necessary active buttons */
		$pausebtnpoem.show(0);

		// switch(playindex) {
		if($textsforaudio.length > 1){
			$prevbtnpoem.show(0);
			$nextbtnpoem.show(0);
			if(playindex == 0){
				$prevbtnpoem.hide(0);
				console.log($textsforaudio[playindex]);
				play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			}else if(playindex == ($textsforaudio.length - 1)){
				$nextbtnpoem.hide(0);
				play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			}else{
				play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			}
		}else{
				$prevbtnpoem.hide(0);
				$nextbtnpoem.hide(0);
				play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
		}
		// case 0:
			// $prevbtnpoem.hide(0);
			// play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			// break;
		// case 1:
		// case 2:
		// case 3:
		// case 4:
		// case 5:
		// case 6:
			// play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			// break;
		// case 7:
			// $nextbtnpoem.hide(0);
			// play_text($($textsforaudio[playindex]), $($textsforaudio[playindex]).html());
			// break;
		// default:
			// break;
		// }
	}

	/* For typing animation appends the text to an element specified by target class or id */
	function show_text($this, $span_speec_text, message, interval) {
		if (0 < message.length && !textanimatecomplete) {
			// if (!hovering) {
				// $this.css("background-color", active_div_colour);
			// }
			var nextText = message.substring(0, 1);
			additionalinterval = 0;
			if (nextText == "<") {
				additionalinterval = additionalinterval_val;
				$span_speec_text.append("<br>");
				message = message.substring(4, message.length);
			} else {
				$span_speec_text.append(nextText);
				message = message.substring(1, message.length);
			}
			$this.html($span_speec_text);
			$this.append(message);
			setTimeout(function() {
				show_text($this, $span_speec_text, message, interval);
			}, (interval+ additionalinterval));
		} else {
			textanimatecomplete = true;
		}
	}

	var soundplaycomplete = false;
	var textanimatecomplete = false;
	// uses the show text to add typing effect with sound and glowing animations

	var poem_orignal_text;
	function play_text($this, text) {
		//TODO: this is commented as vocab doesn't work after this, need to be researched
		// $this.css({"pointer-events":"none"});
		console.log(play_text_call_count);
		if(play_text_call_count==0){
			poem_orignal_text = text;
		}
		play_text_call_count++;
		var prev_text = '';

		while(prev_text!=text){
			prev_text = text;
			var regex = /<\/span>/;
			text = text.replace(regex,"");

			regex = /<span(.*?)>/;
			text = text.replace(regex, "");
		}


		if(hoverindex == playindex){
			hovering = false;
		}

		if(paused_flag){

			if(isFirefox){
				paused_flag = !paused_flag;
				var span = $this.children('span');
				var spantextin = "<span id='span_speec_text'>" + span.html() + "</span>";
				var text = text.substring(span.html().length, text.length);
				$this.html(spantextin + text);
				textanimatecomplete = false;
				var $span_speec_text = $("#span_speec_text");
				$this.css({"background-color":active_div_colour,"pointer-events":"none"});
				show_text($this, $span_speec_text, text, 65);
				sound_data.play();
			}else{
				paused_flag = !paused_flag;
				$this.css("background-color", active_div_colour);
				sound_data.play();
				textanimatecomplete = true;
			}

		}else{
				if(isFirefox){
					// var span = $this.children('span');
					// if (span.length == 1) {
						// var spantextin = "<span id='span_speec_text'>" + span.html() + "</span>";
						// text = text.substring(spantextin.length, text.length);
						// $this.html(spantextin + text);
					// } else {
						// $this.html("<span id='span_speec_text'></span>" + text);
					// }

					$this.html("<span id='span_speec_text'></span>" + text);
					var $span_speec_text = $("#span_speec_text");
					$this.css("background-color", active_div_colour);
					textanimatecomplete = false;
					show_text($this, $span_speec_text, text, typing_interval);
					// 65 ms is the interval found out by hit and trial
				}else{
					$this.css("background-color", active_div_colour);
					textanimatecomplete = true;
				}

				if (sound_data != null) {
					sound_data.play();
					soundplaycomplete = false;
					sound_data.bind('ended', function() {
						// $(play_class).removeClass('text_on');
						// $(play_class).addClass('text_off');
						soundplaycomplete = true;
						sound_data.unbind('ended');
						ternimatesound_play_animate($this, $span_speec_text);
					});
				} else {
					setTimeout(function() {
						soundplaycomplete = true;
						ternimatesound_play_animate($this, $span_speec_text);
					}, 4000);
				}
		}
	}

	var intervalid;

	function resetthevocab($p_consideration){
		if(vocab_controller_obj != null){
			var spanarray = $p_consideration.find(".voacbunderline");
			if(spanarray.length > 0){
				vocab_controller_obj.reinstantiatehover(spanarray);
			}
		}
	}

	function ternimatesound_play_animate($this, $span_speec_text) {
		intervalid = setInterval(function() {
			if (textanimatecomplete && soundplaycomplete) {
				play_text_call_count = 0;
				$this.html(poem_orignal_text);
				resetthevocab($this);
				$this.css("background-color", "transparent");
				clearInterval(intervalid);
				intervalid = null;
				animationinprogress = false;
				if (playindex >= ($textsforaudio.length - 1)) {
					playindex = -1;
					$replaybtnpoem.show(0);
					$prevbtnpoem.hide(0);
					$pausebtnpoem.hide(0);
					$nextbtnpoem.hide(0);
					console.log("countNext", countNext);
					console.log("total_page", total_page);
					if((total_page-1) == countNext){
			  	 // last_page ? ole.footerNotificationHandler.pageEndSetNotification() :
					 ole.footerNotificationHandler.pageEndSetNotification();
					}else{
						$nextBtn.show(0);
					}
				} else {
					if (contunuousplaying) {
						playindex++;
						playpoem();
					} else {
						$pausebtnpoem.hide(0);
						$poempbtn.show(0);
					}
				}
			} else if (!hovering) {
				$this.css("background-color", active_div_colour);
			}
		}, 100);
	}
}
