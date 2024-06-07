var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/" + $lang + "/";

var timeout;
// var content = [{
// 	///slide1
// }]
// function shuffleArray(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		var j = Math.floor(Math.random() * (i + 1));
// 		const temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}
// 	return array;
// }
// function randomizePlaytime() {

var content = [ 
	// slide 0
	{
		contentblockadditionalclass: 'blue-bg',
		zooomClass: "zoomDiv",
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide2_toptxt1,
		}],
		optionform: [{
			divclass: 'opt_1',
			imgclass: "img-left-s3 slide2_opt1",
			imgsrc: imgpath + "television_man.png",
			textclass: 'telv-txt',
			textdata: data.string.slide2_opt2,

		},
		{
			divclass: 'opt_2 answer',
			imgclass: "mobile img-left answer",
			imgsrc: imgpath + 'phone.png',
			textclass: 'phonemann ans-right',
			textdata: data.string.slide2_opt1,
		}
		],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_qu",
					imgid: 'bg_qu',
				},
				{
					imgclass: "correct-sign hide-1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign hide",
					imgid: 'wrong',
				}
			]
		}],
		speechbox: [
			{
				speechbox: "wrong_fb_box sp-txt-box",
				imgclass: 'wrong_fb',
				imgid: "textBox_2",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-fb",
				textdata: data.string.wrong_feedback1,
			}
		]
	},
	// Slide 1
	{
		contentblockadditionalclass: 'blue-bg',
		zooomClass: "zoomDiv",
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide2_toptxt2,
		}],
		optionform: [{
			divclass: 'opt_1 answer',
			imgclass: "img-right-s2",
			imgsrc: imgpath + "newsmann.png",
			textclass: 'newsmann',
			textdata: data.string.slide2_q2_opt2,

		},
		{
			divclass: 'opt_2',
			imgclass: "img-left-s2 answer",
			imgsrc: imgpath + 'radio_man.png',
			textclass: 'radiomann',
			textdata: data.string.slide2_q2_opt1,
		}
		],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_qu",
					imgid: 'bg_qu',
				},
				{
					imgclass: "correct-sign-s2 hide-1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign-s2 hide",
					imgid: 'wrong',
				}
			]
		}],
		speechbox: [
			{
				speechbox: "wrong_fb_box2 sp-txt-box",
				imgclass: 'wrong_fb',
				imgid: "textBox_2",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-fb",
				textdata: data.string.wrong_feedback2,
			}
		]
	},
	// Slide 2
	{
		contentblockadditionalclass: 'blue-bg',
		zooomClass: "zoomDiv",
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide2_toptxt3,
		}],
		optionform: [{
			divclass: 'opt_1',
			imgclass: "img-right",
			imgsrc: imgpath + 'radio_man.png',
			textclass: 'radiomann ans-wrong',
			textdata: data.string.slide2_q2_opt1,

		},
		{
			divclass: 'opt_2 answer',
			imgclass: "img-left-s3 slide2_opt1",
			imgsrc: imgpath + "television_man.png",
			textclass: 'telv-txt',
			textdata: data.string.slide2_opt2,
		}
		],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_qu",
					imgid: 'bg_qu',
				},
				{
					imgclass: "correct-sign hide-1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign hide",
					imgid: 'wrong',
				}
			]
		}],
		speechbox: [
			{
				speechbox: "wrong_fb_box sp-txt-box",
				imgclass: 'wrong_fb',
				imgid: "textBox_2",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-fb",
				textdata: data.string.wrong_feedback2,
			}
		]
	},
	//slide 3
	{
		contentblockadditionalclass: 'blue-bg',
		zooomClass: "zoomDiv",
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide2_toptxt4,
		}],
		optionform: [{
			divclass: 'opt_1',
			imgclass: "img-right-s2",
			imgsrc: imgpath + "newsmann.png",
			textclass: 'newsmann',
			textdata: data.string.slide2_q2_opt2,

		},
		{
			divclass: 'opt_2  answer',
			imgclass: "img-left-s2 answer",
			imgsrc: imgpath + 'radio_man.png',
			textclass: 'radiomann',
			textdata: data.string.slide2_q2_opt1,
		}
		],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_qu",
					imgid: 'bg_qu',
				},
				{
					imgclass: "correct-sign hide-1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign hide",
					imgid: 'wrong',
				}
			]
		}],
		speechbox: [
			{
				speechbox: "wrong_fb_box sp-txt-box",
				imgclass: 'wrong_fb',
				imgid: "textBox_2",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-fb",
				textdata: data.string.wrong_feedback3,
			}
		]
	},
];
// 	var shuffeledarray = shuffleArray(contentarr);
// 	console.log("shuffeledarray", shuffeledarray);
// 	for (let i = 4 - 1; i > -1; i--) {
// 		const temp = shuffeledarray[i];
// 		content.push(temp);
// 	}
// 	// content.push(last_page[0]);

// }
// randomizePlaytime();

$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
	var $refreshBtn = $("#activity-page-refresh-btn");
	var countNext = 0;

	var $total_page = content.length;
	loadTimelineProgress($total_page, countNext + 1);
	// readCSV();
	var vocabcontroller = new Vocabulary();
	vocabcontroller.init();

	//for preload
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			{ id: "newsPaper", src: imgpath + "newsmann.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "radio", src: imgpath + "radio_man.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "bg_qu", src: imgpath + "exercise_bg.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "television", src: imgpath + "television_man.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "mobile", src: imgpath + "phone.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "correct", src: imgpath + "correct.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "wrong", src: imgpath + "wrong.png", type: createjs.AbstractLoader.IMAGE },
			//textboxes
			{ id: "textBox_2", src: imgpath + "text_box.png", type: createjs.AbstractLoader.IMAGE },

			// sounds
			{ id: "slide2_toptxt1", src: soundAsset + "slide2_toptxt1.ogg" },
			{ id: "slide2_opt1", src: soundAsset + "slide2_opt1.ogg" },

			{ id: "slide2_opt2", src: soundAsset + "slide2_opt2.ogg" },
			{ id: "wrong_feedback1", src: soundAsset + "wrong_feedback1.ogg" },
			{ id: "slide2_toptxt2", src: soundAsset + "slide2_toptxt2.ogg" },
			{ id: "slide2_q2_opt1", src: soundAsset + "slide2_q2_opt1.ogg" },

			{ id: "slide2_q2_opt2", src: soundAsset + "slide2_q2_opt2.ogg" },
			{ id: "wrong_feedback2", src: soundAsset + "wrong_feedback2.ogg" },
			{ id: "wrong_feedback3", src: soundAsset + "wrong_feedback3.ogg" },

			{ id: "slide2_toptxt3", src: soundAsset + "slide2_toptxt3.ogg" },
			{ id: "slide2_toptxt4", src: soundAsset + "slide2_toptxt4.ogg" },


		];
		preload = new createjs.LoadQueue(false);
		preload.installPlugin(createjs.Sound);//for registering sounds
		preload.on("progress", handleProgress);
		preload.on("complete", handleComplete);
		preload.on("fileload", handleFileLoad);
		preload.loadManifest(manifest, true);
	}
	function handleFileLoad(event) {
		// console.log(event.item);
	}
	function handleProgress(event) {
		$('#loading-text').html(parseInt(event.loaded * 100) + '%');
	}
	function handleComplete(event) {
		$('#loading-wrapper').hide(0);
		// call main function
		templateCaller();
	}
	//initialize
	init();

	/*==================================================
	=            Handlers and helpers Block            =
	==================================================*/
	/*==========  register the handlebar partials first  ==========*/
	Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
	Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());
	Handlebars.registerPartial("imagecontent2", $("#imagecontent-partial2").html());
	/*===============================================
	=            data highlight function            =
	===============================================*/
	function texthighlight($highlightinside) {
		//check if $highlightinside is provided
		typeof $highlightinside !== "object" ? alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") : null;

		var $alltextpara = $highlightinside.find("*[data-highlight='true']");
		var stylerulename;
		var replaceinstring;
		var texthighlightstarttag;
		var texthighlightendtag = "</span>";
		if ($alltextpara.length > 0) {
			$.each($alltextpara, function (index, val) {
				/*if there is a data-highlightcustomclass attribute defined for the text element
				 use that or else use default 'parsedstring'*/
				$(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
					(stylerulename = $(this).attr("data-highlightcustomclass")) : (stylerulename = "parsedstring");

				texthighlightstarttag = "<span class='" + stylerulename + "'>";
				replaceinstring = $(this).html();
				replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
				replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
				$(this).html(replaceinstring);
			});
		}
	}
	/*=====  End of data highlight function  ======*/

	/*===============================================
	 =            user notification function        =
	 ===============================================*/
	function notifyuser($notifyinside) {
		//check if $notifyinside is provided
		typeof $notifyinside !== "object" ? alert("Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.") : null;

		/*variable that will store the element(s) to remove notification from*/
		var $allnotifications = $notifyinside.find("*[data-usernotification='notifyuser']");
		// if there are any notifications removal required add the event handler
		if ($allnotifications.length > 0) {
			$allnotifications.one('click', function () {
				/* Act on the event */
				$(this).attr('data-isclicked', 'clicked');
				$(this).removeAttr('data-usernotification');
			});
		}
	}

	/*=====  End of user notification function  ======*/

	/*======================================================
	 =            Navigation Controller Function            =
	 ======================================================*/

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
	}

	/*=====  End of user navigation controller function  ======*/

	/*==================================================
	 =            InstructionBlockController            =
	 ==================================================*/

	function instructionblockcontroller() {
		var $instructionblock = $board.find("div.instructionblock");
		if ($instructionblock.length > 0) {
			var $contentblock = $board.find("div.contentblock");
			var $toggleinstructionblockbutton = $instructionblock.find("div.toggleinstructionblock");
			var instructionblockisvisibleflag;

			$contentblock.css('pointer-events', 'none');

			$toggleinstructionblockbutton.on('click', function () {
				instructionblockisvisibleflag = $instructionblock.attr("data-instructionblockshow");
				if (instructionblockisvisibleflag == 'true') {
					instructionblockisvisibleflag = 'false';
					$contentblock.css('pointer-events', 'auto');
				} else if (instructionblockisvisibleflag == 'false') {
					instructionblockisvisibleflag = 'true';
					$contentblock.css('pointer-events', 'none');
				}

				$instructionblock.attr("data-instructionblockshow", instructionblockisvisibleflag);
			});
		}
	}

	/*=====  End of InstructionBlockController  ======*/

	/*=================================================
	 =            general template function            =
	 =================================================*/
	function generaltemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);


		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		vocabcontroller.findwords(countNext);
		put_image(content, countNext);
		put_image2(content, countNext);
		put_speechbox_image(content, countNext);



		switch (countNext) {
			case 0:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide2_toptxt1");
				current_sound.play();
				$(".sp-txt-box").hide();
				current_sound.on('complete', function () {
					sound_player('slide2_opt1');
					$('.opt_2').addClass('scalediv');
					current_sound.on('complete', function () {
						$('.opt_2').removeClass('scalediv');
						$('.opt_1').addClass('scalediv');
						sound_player('slide2_opt2');
						// });
						current_sound.on('complete', function () {
							$('.opt_1').removeClass('scalediv');
							$(".opt_1, .opt_2").click(function () {
								if ($(this).hasClass("answer")) {
									$(this).css({
										"pointer-events": "none",
										"background-color": "#49a149",
										"border": "2px solid rgb(10 66 21)"
									});
									$('.phonemann').css('color', '#fff');
									$('.opt_1,.opt_2').css('pointer-events', 'none');
									$(".correct-sign").removeClass("hide-1");
									$(".img-left, .img-right").off("click");
									play_correct_incorrect_sound(1);
									current_sound = createjs.Sound.play("slide2_opt1");
									current_sound.play();
									current_sound.on('complete', function () {
										nav_button_controls();
									});
								}
								else {
									play_correct_incorrect_sound(0);
									$(".wrong-sign").removeClass("hide");
									sound_player('wrong_feedback1');
									$(".wrong_fb_box").fadeIn(500);
									$(this).css({
										"pointer-events": "none",
										"background-color": "#eb3939",
										"border": "2px solid #620000",
									});
									$('.radiomann').css('color', '#fff');
									$(".img-right").off("click");
								}
							});
						});
					});
				});
				break;
			case 1:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide2_toptxt2");
				current_sound.play();
				$(".sp-txt-box").hide();
				current_sound.on('complete', function () {
					sound_player('slide2_q2_opt1');
					$('.opt_2').addClass('scalediv');
					current_sound.on('complete', function () {
						$('.opt_2').removeClass('scalediv');
						$('.opt_1').addClass('scalediv');
						sound_player('slide2_q2_opt2');
						// });
						current_sound.on('complete', function () {
							$('.opt_1').removeClass('scalediv');
							$(".opt_1, .opt_2").click(function () {
								if ($(this).hasClass("answer")) {
									$(this).css({
										"pointer-events": "none",
										"background-color": "#49a149",
										"border": "2px solid rgb(10 66 21)"
									});
									$('.newsmann').css('color', '#fff');
									$('.opt_1,.opt_2').css('pointer-events', 'none');
									$(".correct-sign-s2").removeClass("hide-1");
									$(".img-left, .img-right").off("click");
									play_correct_incorrect_sound(1);
									current_sound = createjs.Sound.play("slide2_q2_opt2");
									current_sound.play();
									current_sound.on('complete', function () {
										nav_button_controls();
									});
								}
								else {
									play_correct_incorrect_sound(0);
									$(".sp-txt-box").removeClass("hide");
									sound_player('wrong_feedback2');
									$(".wrong_fb_box2").fadeIn(500);
									$(this).css({
										"pointer-events": "none",
										"background-color": "#eb3939",
										"border": "2px solid #620000",
									});
									$('.radiomann').css('color', '#fff');
									$(".img-right").off("click");
								}
							});
						});
					});
				});
				break;
			case 2:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide2_toptxt3");
				current_sound.play();
				$(".sp-txt-box").hide();
				current_sound.on('complete', function () {
					sound_player('slide2_opt2');
					$('.opt_2').addClass('scalediv');
					current_sound.on('complete', function () {
						$('.opt_2').removeClass('scalediv');
						$('.opt_1').addClass('scalediv');
						sound_player('slide2_q2_opt1');
						// });
						current_sound.on('complete', function () {
							$('.opt_1').removeClass('scalediv');
							$(".opt_1, .opt_2").click(function () {
								if ($(this).hasClass("answer")) {
									$(this).css({
										"pointer-events": "none",
										"background-color": "#49a149",
										"border": "2px solid rgb(10 66 21)"
									});
									$('.telv-txt').css('color', '#fff');
									$('.opt_1,.opt_2').css('pointer-events', 'none');
									$(".correct-sign").removeClass("hide-1");
									$(".img-left, .img-right").off("click");
									play_correct_incorrect_sound(1);
									current_sound = createjs.Sound.play("slide2_opt2");
									current_sound.play();
									current_sound.on('complete', function () {
										nav_button_controls();
									});
								}
								else {
									play_correct_incorrect_sound(0);
									$(".wrong-sign").removeClass("hide");
									sound_player('wrong_feedback2');
									$(".wrong_fb_box").fadeIn(500);
									$(this).css({
										"pointer-events": "none",
										"background-color": "#eb3939",
										"border": "2px solid #620000",
									});
									$('.phonemann').css('color', '#fff');
									$(".img-right").off("click");
								}
							});
						});
					});
				});
				break;
			case 3:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide2_toptxt4");
				current_sound.play();
				$(".sp-txt-box").hide();
				current_sound.on('complete', function () {
					sound_player('slide2_q2_opt1');
					$('.opt_2').addClass('scalediv');
					current_sound.on('complete', function () {
						$('.opt_2').removeClass('scalediv');
						$('.opt_1').addClass('scalediv');
						sound_player('slide2_q2_opt2');
						// });
						current_sound.on('complete', function () {
							$('.opt_1').removeClass('scalediv');
							$(".opt_1, .opt_2").click(function () {
								if ($(this).hasClass("answer")) {
									$(this).css({
										"pointer-events": "none",
										"background-color": "#49a149",
										"border": "2px solid rgb(10 66 21)"
									});
									$('.radiomann').css('color', '#fff');
									$('.opt_1,.opt_2').css('pointer-events', 'none');
									$(".correct-sign").removeClass("hide-1");
									$(".img-left, .img-right").off("click");
									play_correct_incorrect_sound(1);
									current_sound = createjs.Sound.play("slide2_q2_opt1");
									current_sound.play();
									current_sound.on('complete', function () {
										nav_button_controls();
									});
								}
								else {
									play_correct_incorrect_sound(0);
									$(".wrong-sign").removeClass("hide");
									sound_player('wrong_feedback3');
									$(".sp-txt-box").fadeIn(500);
									$(this).css({
										"pointer-events": "none",
										"background-color": "#eb3939",
										"border": "2px solid #620000",
									});
									sound_player('wrong_feedback3');
									$('.newsmann').css('color', '#fff');
									$(".img-right").off("click");
								}
							});
						});
					});
				});
				break;
			default:
				break;
		}
	}

	// function TalkGifManager(girlClass, pngGifId, soundId, soundId2, delay) {
	// 	setTimeout(function () {
	// 		$(".speechbox").addClass("fadeInsSuperfast");
	// 		girlClass.attr("src", preload.getResult(pngGifId[1]).src);
	// 		createjs.Sound.stop();
	// 		current_sound = createjs.Sound.play(soundId);
	// 		current_sound.play();
	// 		current_sound.on('complete', function () {
	// 			girlClass.attr("src", preload.getResult(pngGifId[0]).src);
	// 			$(".hand-2").addClass("fadeInsfast");
	// 			$(".hand-2").click(function () {
	// 				// Going to next page
	// 				createjs.Sound.stop();
	// 				clearTimeout(timeout);
	// 				switch (countNext) {
	// 					default:
	// 						countNext++;
	// 						templateCaller();
	// 						break;
	// 				}
	// 			});
	// 			nav_button_controls();
	// 		});
	// 	}, delay);
	// }
	// function TalkGifManager2(girlClass, pngGifId, soundId, delay) {
	// 	setTimeout(function () {
	// 		$(".speechbox").addClass("fadeInsSuperfast");
	// 		girlClass.attr("src", preload.getResult(pngGifId[1]).src);
	// 		createjs.Sound.stop();
	// 		current_sound = createjs.Sound.play(soundId);
	// 		current_sound.play();
	// 		current_sound.on('complete', function () {
	// 			girlClass.attr("src", preload.getResult(pngGifId[0]).src);
	// 			// sound_player(soundId);
	// 			nav_button_controls();
	// 		});
	// 	}, delay);
	// }

	// function HandleClose() {
	// 	$(".closeDiv").click(function () {
	// 		$(".descriptionDiv, .closeDiv").removeClass("fadeIn").addClass("hidden");
	// 		$(".hand").show();
	// 	});
	// }
	// function HandlehandClick(means) {
	// 	var counter = 0;
	// 	$(".clickable").click(function () {
	// 		counter++;
	// 		var action = $(this).attr("class").split(" ")[1].split("-")[1];
	// 		$(".hand").hide();
	// 		$(".decription-img").attr("src", preload.getResult(means + "-" + action).src);
	// 		writeText(action, counter);
	// 		$(".descriptionDiv ").removeClass("hidden").addClass("fadeIn");
	// 		// nav_button_controls();
	// 	});
	// }

	// function writeText(action, counter) {
	// 	// console.log(action);
	// 	switch (action) {
	// 		case "news":
	// 			console.log(counter);
	// 			$(".description-txt").html(data.string.p2s3t11);
	// 			sound_player2("radio-news-sound", true, true, counter);
	// 			break;
	// 		case "song":
	// 			console.log(counter);
	// 			$(".description-txt").html(data.string.p2s3t22);
	// 			sound_player2("radio-song-sound", true, true, counter);
	// 			break;
	// 		case "program":
	// 			console.log(counter);
	// 			$(".description-txt").html(data.string.p2s3t33);
	// 			sound_player2("radio-program-sound", true, true, counter);
	// 			break;
	// 	}

	// }

	function nav_button_controls(delay_ms) {
		timeoutvar = setTimeout(function () {
			if (countNext == 0) {
				$nextBtn.show(0);
			} else if (countNext > 0 && countNext == $total_page - 1) {
				$prevBtn.show(0);
				ole.footerNotificationHandler.lessonEndSetNotification();
			} else {
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		}, delay_ms);
	}

	function sound_player(sound_id, next) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function () {
			// nav_button_controls();
		});
	}

	function sound_player2(sound_id, next, showClose, counter) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function () {
			if (counter >= 3) {
				next ? nav_button_controls() : '';
			}
			showClose ? $(".closeDiv").removeClass("hidden").addClass("fadeIn") : '';
		});
	}


	function put_image(content, count) {
		if (content[count].hasOwnProperty('imageblock')) {
			var imageblock = content[count].imageblock[0];
			if (imageblock.hasOwnProperty('imagestoshow')) {
				var imageClass = imageblock.imagestoshow;
				for (var i = 0; i < imageClass.length; i++) {
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = ('.' + classes_list[classes_list.length - 1]);
					$(selector).attr('src', image_src);
				}
			}
		}
	}

	function put_image2(content, count) {
		if (content[count].hasOwnProperty('imageblock2')) {
			var imageblock2 = content[count].imageblock2[0];
			if (imageblock2.hasOwnProperty('imagestoshow')) {
				var imageClass = imageblock2.imagestoshow;
				for (var i = 0; i < imageClass.length; i++) {
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = ('.' + classes_list[classes_list.length - 1]);
					$(selector).attr('src', image_src);
				}
			}
		}
	}

	function put_speechbox_image(content, count) {
		if (content[count].hasOwnProperty('speechbox')) {
			var speechbox = content[count].speechbox;
			for (var i = 0; i < speechbox.length; i++) {
				var image_src = preload.getResult(speechbox[i].imgid).src;
				//get list of classes
				var classes_list = speechbox[i].speechbox.match(/\S+/g) || [];
				var selector = ('.' + classes_list[classes_list.length - 1] + '>.speechbg');
				$(selector).attr('src', image_src);
			}
		}
	}

	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		navigationcontroller();

		generaltemplate();
		loadTimelineProgress($total_page, countNext + 1);
		/*
		for (var i = 0; i < content.length; i++) {
			slides(i);
			$($('.totalsequence')[i]).html(i);
			$($('.totalsequence')[i]).css({'color':'red',"height": "4.3vmin",
				"width": "4.3vmin" , "cursor" : "pointer","text-align":"center"
			});
		}
		function slides(i){
				$($('.totalsequence')[i]).click(function(){
					countNext = i;
					createjs.Sound.stop();
					templateCaller();
				});
			}
	*/
	}

	$nextBtn.on('click', function () {
		createjs.Sound.stop();
		clearTimeout(timeout);
		switch (countNext) {
			default:
				countNext++;
				templateCaller();
				break;
		}
	});

	$refreshBtn.click(function () {
		templateCaller();
		// clearTimeout(timeout);
	});

	$prevBtn.on('click', function () {
		createjs.Sound.stop();
		clearTimeout(timeout);
		countNext--;
		templateCaller();
		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});

});
