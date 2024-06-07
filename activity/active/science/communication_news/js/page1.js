var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/" + $lang + "/";
var timeout;

var content = [
	// coverpage
	{
		contentblockadditionalclass: 'blue-bg-radial',
		zooomClass: "image-div",
		extratextblock: [{
			textclass: "covertext",
			textdata: data.string.title1,
		}],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "coverpage",
					imgid: "coverpage",
					// imgsrc: imgpath + "communication_coverpage.png",
				},
			]
		}],
	},
	// slide 1
	{
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img1",
					imgid: 'bg_img1',
				},
				{
					imgclass: "shorty_girl",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "shorty_girl_img",
					imgid: 'shorty_png',
				},
			]
		}],
		speechbox: [
			{
				speechbox: "right-bubble",
				imgclass: 'inverted',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-2",
				textdata: data.string.slide1_sp1,
				hasSpeaker: true,
			},
		]
	},
	// Slide 2
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt1,
		}],
		zooomClass: "image-div-two",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img1",
					imgid: 'bg_img2',
				},
				{
					imgclass: "shorty_girl2",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "radio1",
					imgid: 'radio1',
				},
				{
					imgclass: "shorty_girl_img2",
					imgid: 'shorty_png',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				}

			]
		}],

	},
	// slide 3
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "text_hide",
			textdata: data.string.slide1_toptxt2,
		},
		{
			textclass: "text_show",
			textdata: data.string.slide1_toptxt3,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}
		],
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img1",
					imgid: 'bg_img2',
				},
				{
					imgclass: "shorty_girl_img2",
					imgid: 'shorty_png',
				},
				{
					imgclass: "radio1",
					imgid: 'radio1',
				},
				{
					imgclass: "hand opaque",
					imgid: 'hand',
				},
				// {
				// 	imgclass: "bg_img2 ",
				// 	imgid: 'bg_img2',
				// },
				// {
				// 	imgclass: "cricket_news",
				// 	imgid: 'cricket_news',
				// },
				// {
				// 	imgclass: "weather_news",
				// 	imgid: 'weather_news',
				// },
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "correct-sign1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign1",
					imgid: 'wrong',
				},
				{
					imgclass: "correct-sign2",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign2",
					imgid: 'wrong',
				}
			]
		}],
		questionblock: [
			{
				divclass: "img-right",
				imgclass: "music",
				imgid: 'music',
				imgsrc: imgpath + 'music.png'
			},
			{
				divclass: "img-left",
				imgclass: "weather_news",
				imgid: 'weather_news',
				imgsrc: imgpath + 'weather_news.png'
			},
			// {
			// 	question: data.string.slide1_toptxt6,
			// },
		]

	},
	// slide 4
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt4,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "background_img",
					imgid: 'background_img',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "shorty_girl2 grull",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "shorty_girl_img2 grull2",
					imgid: 'shorty_png',
				},
				// {
				// 	imgclass: "aamai",
				// 	imgid: 'aamai',
				// },

			]
		}],

	},
	// slide 5
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "text_hide",
			textdata: data.string.slide1_toptxt5,
			audioclass: 'spk_top',
			hasSpeaker: true,
		},
		{
			textclass: "text_show",
			textdata: data.string.slide1_toptxt6,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}
		],
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [

				{
					imgclass: "background_img",
					imgid: 'background_img',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "shorty_girl2 grull",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "shorty_girl_img2 grull2",
					imgid: 'shorty_png',
				},
				// {
				// 	imgclass: "aamai",
				// 	imgid: 'aamai',
				// },
				{
					imgclass: "hand2 opaque2",
					imgid: 'hand',
				},

				// {
				// 	imgclass: "aamai_weather",
				// 	imgid: "aamai_weather",

				// },
				// {
				// 	imgclass: "aamai_cricket",
				// 	imgid: "aamai_cricket",

				// },
				{
					imgclass: "correct-sign1",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign1",
					imgid: 'wrong',
				},
				{
					imgclass: "correct-sign2",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign2",
					imgid: 'wrong',
				}

			]
		}],

		questionblock: [
			{
				divclass: "img-right",
				imgclass: "cricket_news crik1",
				imgid: 'cricket_news',
				imgsrc: imgpath + 'cricket_news.png'
			},
			{
				divclass: "img-left",
				imgclass: "weather_news weth1",
				imgid: 'weather_news',
				imgsrc: imgpath + 'weather_news.png'
			},
			// {
			// 	question: data.string.slide1_toptxt6,
			// },
		]


	},
	// Slide 6
	{
		uppertextblockadditionalclass: "top-text",

		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt7,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green ',
		mobileclass: "mobiledialscreen",
		zooomClass: "image-div",
		mobilescreen: [{
			textclass: "",
			textdata: data.string.p2s8
		}],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "mobile_english",
					imgid: 'mobile_english',
				},
				// {
				// 	imgclass: "background",
				// 	imgid: 'bg',
				// },
				{
					imgclass: "background-bg",
					imgid: 'mobile-calling',
				},
				{
					imgclass: "call-button",
					imgid: 'call-button',
				},
				{
					imgclass: "num-0",
					imgid: 'num-0',
				},
				{
					imgclass: "num-1",
					imgid: 'num-1',
				},
				{
					imgclass: "num-2",
					imgid: 'num-2',
				},
				{
					imgclass: "num-3",
					imgid: 'num-3',
				},
				{
					imgclass: "num-4",
					imgid: 'num-4',
				},
				{
					imgclass: "num-5",
					imgid: 'num-5',
				},
				{
					imgclass: "num-6",
					imgid: 'num-6',
				},
				{
					imgclass: "num-7",
					imgid: 'num-7',
				},
				{
					imgclass: "num-8",
					imgid: 'num-8',
				},
				{
					imgclass: "num-9",
					imgid: 'num-9',
				},
			]
		}],

	},
	// Slide 7
	{
		uppertextblockadditionalclass: "top-text",

		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt8,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green',
		// mobileclass: "mobiledialscreen",
		zooomClass: "image-div",
		mobilescreen: [{
			textclass: "",
			textdata: data.string.p2s8
		}],
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "mobile_english",
					imgid: 'mobile_english',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "background-bg",
					imgid: 'mobile-calling',
				},
				{
					imgclass: "call-button",
					imgid: 'call-button',
				},
				{
					imgclass: "handtocall opaque",
					imgid: 'hand',
				},
			]

		}],
		extratextblock: [
			{
				textclass: "mob_key key_num0",
				dataValue: "0",
			},
			{
				textclass: "recipient",
			},
			{
				textclass: "mob_key key_num1",
				dataValue: "1",
			},
			{
				textclass: "mob_key key_num2",
				dataValue: "2",
			},
			{
				textclass: "mob_key key_num3",
				dataValue: "3",
			},
			{
				textclass: "mob_key key_num4",
				dataValue: "4",
			},
			{
				textclass: "mob_key key_num5",
				dataValue: "5",
			},
			{
				textclass: "mob_key key_num6",
				dataValue: "6",
			},
			{
				textclass: "mob_key key_num7",
				dataValue: "7",
			},
			{
				textclass: "mob_key key_num8",
				dataValue: "8",
			},
			{
				textclass: "mob_key key_num9",
				dataValue: "9",
			},
			{
				textclass: "mob_key key_back",
				dataValue: "back",
			},
		]

	},
	// Slide 8
	{
		contentblockadditionalclass: '',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "background_rb",
					imgid: 'bg-4',
				},
				{
					imgclass: "girl-talking",
					imgid: 'beti_guff',
				},
				{
					imgclass: "man-talking",
					imgid: 'buwa_guff',
				},
			]
		}],
		speechbox: [
			{
				speechbox: "spBox-4",
				imgclass: '',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "textInSp-2 smallText dadspch",
				textdata: data.string.slide1_call_next
			},
			{
				speechbox: "spBox-5",
				imgclass: 'inverted-2',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "textInSp-2 smallText daughterspch",
				textdata: data.string.slide1_call
			}
		]
	},
	// Slide 9
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt9,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "tv_bg",
					imgid: 'tv_bg',
				},
				{
					imgclass: "behena",
					imgid: 'behena',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				}
			]
		}],
	},
	// Slide 10
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_toptxt10,
			// audioclass: 'spk_top',
			// hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "tv_bg",
					imgid: 'tv_bg',
				},
				{
					imgclass: "behena",
					imgid: 'behena',
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "handtocall2",
					imgid: 'hand',
				},
			]
		}],
	},
	// Slide 11
	{
		uppertextblockadditionalclass: "top-text",
		uppertextblock: [{
			textclass: "",
			textdata: data.string.slide1_p16_ques,
			audioclass: 'spk_top',
			hasSpeaker: true,
		}],
		contentblockadditionalclass: 'bg-green',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img2 ",
					imgid: 'bg_img2',
				},
				{
					imgclass: "cricket_news2 correct",
					imgid: 'cricket_news',
				},
				{
					imgclass: "weather_news2",
					imgid: 'weather_news',
					imgsrc: imgpath + "weather_news.png"
				},
				{
					imgclass: "spk-top",
					imgid: "speaker",
					imgsrc: ''
				},
				{
					imgclass: "correct-sign",
					imgid: 'correct',
				},
				{
					imgclass: "wrong-sign",
					imgid: 'wrong',
				}

			]
		}],

	},
	//slide 12
	{
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img1",
					imgid: 'bg_img1',
				},
				{
					imgclass: "shorty_girl maintain",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "shorty_girl_img maintain1",
					imgid: 'shorty_png',
				},
				{
					imgclass: "phone",
					imgid: 'mobile',
				},
				{
					imgclass: "newspaper1",
					imgid: 'newspaper',
				},
				{
					imgclass: "radio_new",
					imgid: 'radio',
				},
				{
					imgclass: "telv",
					imgid: 'tv',
				},

			]
		}],
		sideblock: [{
			divclass: 'right_block',
		},
		{
			divclass: 'left_block',
		}],
		speechbox: [
			{
				speechbox: "phone_spbox",
				imgclass: 'inverted2',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "text_phone",
				textdata: data.string.slider_txt1,
				hasSpeaker: true,
			},
			{
				speechbox: "news_spbox",
				imgclass: 'inverted2',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "text_phone",
				textdata: data.string.slider_txt2,
				hasSpeaker: true,
			},
			{
				speechbox: "radio_spbox",
				imgclass: 'inverted3',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "text_radio",
				textdata: data.string.slider_txt4,
				hasSpeaker: true,
			},
			{
				speechbox: "tv_spbox",
				imgclass: 'inverted3',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "text_tv",
				textdata: data.string.slider_txt3,
				hasSpeaker: true,
			},
		]


	},
	//slide 13
	{
		contentblockadditionalclass: 'bg-green ',
		zooomClass: "image-div",
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "bg_img1",
					imgid: 'bg_img1',
				},
				{
					imgclass: "shorty_girl",
					imgid: 'shorty_gif',
				},
				{
					imgclass: "shorty_girl_img",
					imgid: 'shorty_png',
				},
				{
					imgclass: "phone",
					imgid: 'mobile',
				},
				{
					imgclass: "newspaper1",
					imgid: 'newspaper',
				},
				{
					imgclass: "radio_new",
					imgid: 'radio',
				},
				{
					imgclass: "telv",
					imgid: 'tv',
				},

			]
		}],
		sideblock: [{
			divclass: 'right_block',
		},
		{
			divclass: 'left_block',
		}],
		speechbox: [
			{
				speechbox: "right-bubble",
				imgclass: 'inverted',
				imgid: "textBox_1",
				imgsrc: '',
				datahighlightflag: true,
				datahighlightcustomclass: "grnTxt",
				textclass: "texts-2",
				textdata: data.string.slide1_spbox,
				hasSpeaker: true,
			},
		]



	},
];


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
	let recipientNumber = "";

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images

			// Page 1
			{ id: "coverpage", src: imgpath + "coverpage_comm.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "speaker", src: "images/speaker.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "laptop", src: imgpath + "laptop.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "letter", src: imgpath + "letter.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "newspaper", src: imgpath + "newspaper.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "radio", src: imgpath + "radio.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "telephone", src: imgpath + "telephone.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "mobile", src: imgpath + "mobile.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "tv", src: imgpath + "tv.png", type: createjs.AbstractLoader.IMAGE },

			// Page 2
			{ id: "bg_img1", src: imgpath + "girl_bgroom.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "shorty_gif", src: imgpath + "shorty_girl.gif", type: createjs.AbstractLoader.IMAGE },
			{ id: "shorty_png", src: imgpath + "shorty_girl.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "bg_img2", src: imgpath + "father_room.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "radio1", src: imgpath + "radioes_.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "hand", src: imgpath + "hand.gif", type: createjs.AbstractLoader.IMAGE },

			{ id: "music_nepali", src: imgpath + "music_nepali.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "cricket_nepali", src: imgpath + "cricket_nepali.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "weather_news", src: imgpath + "weather_news.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "cricket_news", src: imgpath + "cricket_news.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "background_img", src: imgpath + "mother_bg.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "aamai", src: imgpath + "aamai_reading.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "aamai_weather", src: imgpath + "weather_news_english.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "aamai_cricket", src: imgpath + "sports_news_english.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "aamai_cricket_np", src: imgpath + "sports_news_nepali.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "aamai_weather_np", src: imgpath + "weather_news_nepali.png", type: createjs.AbstractLoader.IMAGE },


			{ id: "mobile_english", src: imgpath + "mobile.jpg", type: createjs.AbstractLoader.IMAGE },
			{ id: "tvnews_np", src: imgpath + "tvnews_nepali.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "w_report_np", src: imgpath + "weather_reporting_nepali.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "num-0", src: imgpath + "0.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-1", src: imgpath + "1.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-2", src: imgpath + "2.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-3", src: imgpath + "3.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-4", src: imgpath + "4.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-5", src: imgpath + "5.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-6", src: imgpath + "6.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-7", src: imgpath + "7.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-8", src: imgpath + "8.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "num-9", src: imgpath + "9.png", type: createjs.AbstractLoader.IMAGE },

			{ id: "number-eraser", src: imgpath + "number-eraser.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "call-button", src: imgpath + "call-button.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "mobile-calling", src: imgpath + "calling.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "bg", src: imgpath + "listening-to-radio.jpg", type: createjs.AbstractLoader.IMAGE },

			{ id: "bg-4", src: imgpath + "bg_red_blue.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "buwa_guff", src: imgpath + "grandfather_talking.gif", type: createjs.AbstractLoader.IMAGE },
			{ id: "beti_guff", src: imgpath + "girl_talking.gif", type: createjs.AbstractLoader.IMAGE },
			{ id: "buwa_guff_stop", src: imgpath + "grandfather_blink.gif", type: createjs.AbstractLoader.IMAGE },
			{ id: "beti_guff_stop", src: imgpath + "girl_blink.gif", type: createjs.AbstractLoader.IMAGE },

			{ id: "tv_bg", src: imgpath + "sister_watching_cricket.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "tv_bg1", src: imgpath + "sister_watching_cricket1.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "behena", src: imgpath + "tv_gif.gif", type: createjs.AbstractLoader.IMAGE },

			{ id: "correct", src: imgpath + "correct.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "wrong", src: imgpath + "wrong.png", type: createjs.AbstractLoader.IMAGE },

			//textboxes
			{ id: "textBox_1", src: imgpath + "tex02.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "textBox_2", src: imgpath + "text_box.png", type: createjs.AbstractLoader.IMAGE },

			// sounds
			{ id: "weather_news", src: soundAsset + "radio_newsreader.ogg" },
			{ id: "music", src: soundAsset + "song.ogg" },

			{ id: "title1", src: soundAsset + "title1.ogg" },

			{ id: "slide1_sp1", src: soundAsset + "slide1_sp1.ogg" },
			{ id: "slide1_toptxt1", src: soundAsset + "slide1_toptxt1.ogg" },
			{ id: "slide1_toptxt2", src: soundAsset + "slide1_toptxt2.ogg" },
			{ id: "slide1_toptxt3", src: soundAsset + "slide1_toptxt3.ogg" },

			{ id: "slide1_p4_op1", src: soundAsset + "slide1_p4_op1.ogg" },

			{ id: "slide1_p4_op2", src: soundAsset + "slide1_p4_op2.ogg" },
			{ id: "slide1_toptxt4", src: soundAsset + "slide1_toptxt4.ogg" },
			{ id: "slide1_toptxt5", src: soundAsset + "slide1_toptxt5.ogg" },

			{ id: "slide1_toptxt6", src: soundAsset + "slide1_toptxt6.ogg" },
			{ id: "slide1_p8_op1", src: soundAsset + "slide1_p8_op1.ogg" },
			{ id: "slide1_p8_op2", src: soundAsset + "slide1_p8_op2.ogg" },

			{ id: "slide1_toptxt7", src: soundAsset + "slide1_toptxt7.ogg" },
			{ id: "slide1_toptxt8", src: soundAsset + "slide1_toptxt8.ogg" },
			{ id: "slide1_call", src: soundAsset + "slide1_call.ogg" },

			{ id: "slide1_call_next", src: soundAsset + "slide1_call_next.ogg" },
			{ id: "slide1_toptxt9", src: soundAsset + "slide1_toptxt9.ogg" },
			{ id: "slide1_toptxt10", src: soundAsset + "slide1_toptxt10.ogg" },
			{ id: "slide1_p16_ques", src: soundAsset + "slide1_p16_ques.ogg" },
			{ id: "slider_txt1", src: soundAsset + "slider_txt1.ogg" },
			{ id: "slider_txt2", src: soundAsset + "slider_txt2.ogg" },
			{ id: "slider_txt3", src: soundAsset + "slider_txt3.ogg" },
			{ id: "slider_txt4", src: soundAsset + "slider_txt4.ogg" },
			{ id: "slide1_spbox", src: soundAsset + "slide1_spbox.ogg" },

			{ id: "numberdial", src: soundAsset + "dial.ogg" },
			{ id: "s8_1", src: soundAsset + "p2s8_phone_dial_ringing_SE.ogg" },
			// { id: "telephone", src: soundAsset + "telephone.ogg" },


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
		typeof islastpageflag === "undefined" ?
			islastpageflag = false :
			typeof islastpageflag != 'boolean' ?
				alert("NavigationController : Hi Master, please provide a boolean parameter") :
				null;

		if (countNext == 0 && $total_page != 1) {
			$nextBtn.show(0);
			$prevBtn.css('display', 'none');
		}
		else if ($total_page == 1) {
			$prevBtn.css('display', 'none');
			$nextBtn.css('display', 'none');

			// if lastpageflag is true
			islastpageflag ?
				ole.footerNotificationHandler.lessonEndSetNotification() :
				ole.footerNotificationHandler.lessonEndSetNotification();
		}
		else if (countNext > 0 && countNext < $total_page - 1) {
			$nextBtn.show(0);
			$prevBtn.show(0);
		}
		else if (countNext == $total_page - 1) {
			$nextBtn.css('display', 'none');
			$prevBtn.show(0);

			// if lastpageflag is true
			islastpageflag ?
				ole.footerNotificationHandler.lessonEndSetNotification() :
				ole.footerNotificationHandler.pageEndSetNotification();
		}
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

		// Function to show the textbox in slide 2
		function showTextAndSay(object, sound_id, callback) {
			$(object).removeClass("hide");
			createjs.Sound.stop();
			current_sound = createjs.Sound.play(sound_id);
			current_sound.play();
			current_sound.on('complete', function () {
				callback();
			});
		};

		function sound_card(sound_data1, sound_data2) {
			$('.card-1').show(0);
			timeoutvar = setTimeout(function () {
				$('.label-1').show(0);
				current_sound = createjs.Sound.play(sound_data1);
				current_sound.play();
				current_sound.on("complete", function () {
					$('.card-2').show(0);
					timeoutvar = setTimeout(function () {
						$('.label-2').show(0);
						current_sound = createjs.Sound.play(sound_data2);
						current_sound.play();
						current_sound.on("complete", function () {
							$('.label-card').addClass('label-card-hover');
							$('.label-1').hover(function () {
								sound_player(sound_data1);
							}, function () { });
							$('.label-2').hover(function () {
								sound_player(sound_data2);
							}, function () { });
							$(".label-1, .label-2").click(function () {
								if ($(this).hasClass("correct")) {
									// $(this).removeClass('label-card-hover');
									$(this).addClass("corrects");
									$(".label-1, .label-2").removeClass('label-card-hover').off("click hover");
									nav_button_controls(0);
									play_correct_incorrect_sound(1);
								}
								else {
									$(this).removeClass('label-card-hover');
									$(this).addClass("wrongs");
									play_correct_incorrect_sound(0);

								}
							})
						});
					}, 500);
				});
			}, 500);
		}

		// Function to click objects in slide 3
		function clickObjects() {
			$(".ball_select, .truck_select, .teddy_select, .bag_select, .robot_select").click(function () {
				// Hiding the clicked object
				$(this).addClass("hide");
				// Getting the object's class and splitting them and getting the first element of the array
				var class_name = $(this).attr('class').split(/\s+/)[0];
				// adding '.' to the class
				var selector = "." + class_name.slice(0, -7);
				// Removing the hide class from the selected object
				$(selector).removeClass("hide");
				count++;
				if (count === 5) {
					$nextBtn.show(0);
					$prevBtn.show(0);
				}
			});
		};
		$(".audioicon").click(function () {
			var optClickClass = $(this).attr("class").split(" ")[1].split("-")[1];
			// console.log(optClickClass+"-sound");
			sound_player_nav(optClickClass + "-sound", false);
		});


		function randomSound() {
			$(document).ready(function () {
				// $('.hand').click(function () {
				console.log('aaaaaa');
				var mySounds = ['weather_news', 'music'];
				var randomSound = Math.floor(Math.random() * 1000) % mySounds.length;
				console.log(randomSound);
				var id = mySounds[randomSound];
				current_sound = createjs.Sound.play(id);
				current_sound.play();
				console.log('yyy');
				if (randomSound == 0) {
					console.log(mySounds);
					$(".weather_news").addClass('answer');
				}
				else {
					console.log(randomSound);
					$(".music").addClass('answer');
				}

			});

			// });

		}


		function changeImageToRandomImage() {
			let images = ['aamai_weather', 'aamai_cricket'];
			var correctImageIndex = null;
			if (images != null) {
				var random = images[Math.floor(Math.random() * images.length)];
				console.log(random)
				var imageHTML = `<img class="${random} right_img_add" src="">`; // Generate HTML for the random image
				// console.log(imageHTML)
				$(".image-div").append(imageHTML);
				if ($lang == 'np') {
					$('.right_img_add').addClass(random);
					if (random == "aamai_weather") {
						$('.right_img_add').attr("src", preload.getResult(random + "_np").src);
					}
					if (random == "aamai_cricket") {
						$('.right_img_add').attr("src", preload.getResult(random + "_np").src);
					}
				}
				else {
					$('.right_img_add').attr("src", preload.getResult(random).src);
					$('.right_img_add').addClass(random);
				}
				// correctImageIndex = random;
			}
		}


		function checkans() {
			$('.bg_img1').animate({ opacity: 0.5 }, 500);
			$('.text_hide,.shorty_girl_img2').hide();
			$('.img-right,.img-left,.text_show').show();
			$(".questionblock").animate(
				{ bottom: "0%" },
				2000
			);
			sound_player('slide1_toptxt3');
			current_sound.on('complete', function () {
				$(".weather_news,.music").click(function () {
					if ($(".music").hasClass("answer")) {
						if ($(this).hasClass('answer')) {
							$(".correct-sign1").show();
							$(".weather_news,.music").off("click");
							play_correct_incorrect_sound(1);
							// current_sound = createjs.Sound.play("telephone");

							$nextBtn.show(0);
							$prevBtn.show(0);

						}
						else {
							play_correct_incorrect_sound(0);
							$(".wrong-sign1").show();
							$(".img-right").off("click");
						}
					}
					else {
						$(".weather_news").hasClass("answer")
						if ($(this).hasClass('answer')) {
							$(".correct-sign2").show();
							$(".weather_news,.music").off("click");
							play_correct_incorrect_sound(1);

							nav_button_controls();

						}
						else {
							play_correct_incorrect_sound(0);
							$(".wrong-sign2").show();
							$(".img-right").off("click");
						}
					}
				});
			});
		}

		function checkans2() {
			$(".hand2").fadeIn(4000);
			$(".right_img_add,.hand2").click(function () {
				$('.background_img').animate({ opacity: 0.5 }, 500);
				$(".right_image").fadeOut(500);
				$(".hand2").hide();
				$('.text_hide').hide();
				$('.img-right,.img-left,.text_show').show();
				$(".questionblock").animate(
					{ bottom: "0%" },
					2000
				);
				sound_player('slide1_toptxt6');
				current_sound.on('complete', function () {
					console.log("kkkkkkkkkkkk")
					$(".cricket_news,.weather_news").click(function () {
						if ($(".right_img_add").hasClass("aamai_cricket")) {
							$('.cricket_news').addClass('corrects');
							if ($(this).hasClass('corrects')) {
								$(".correct-sign1").show();
								$(".cricket_news,.weather_news").off("click");
								play_correct_incorrect_sound(1);
								$prevBtn.show();
								$nextBtn.show();
							}
							else {
								play_correct_incorrect_sound(0);
								$(".wrong-sign1").show();
								$(".img-right").off("click");
							}
						}
						else {
							if ($(".right_img_add").hasClass("aamai_weather")) {
								$('.weather_news').addClass('corrects');
								if ($(this).hasClass('corrects')) {
									$(".correct-sign2").show();
									$(".cricket_news,.weather_news").off("click");
									play_correct_incorrect_sound(1);
									$prevBtn.show();
									$nextBtn.show();

								}
								else {
									play_correct_incorrect_sound(0);
									$(".wrong-sign2").show();
									$(".img-right").off("click");
								}
							}
						}
					});
				});
			});
		}


		switch (countNext) {
			case 0:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("title1");
				current_sound.play();
				current_sound.on('complete', function () {
					$nextBtn.show(0);
				});
				break;
			case 1:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player('slide1_sp1');
				$('.shorty_girl_img').hide();
				current_sound.on('complete', function () {
					$('.shorty_girl_img').show();
					nav_button_controls();
				});
				break;
			case 2:
				// $nextBtn.hide(0);
				// $prevBtn.hide(0);
				// createjs.Sound.stop();
				// sound_player('slide1_toptxt1');
				// $('.shorty_girl_img2').hide();
				// current_sound.on('complete', function () {
				// 	$('.shorty_girl_img2').show();
				// 	nav_button_controls();
				// });
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player_nav("slide1_toptxt1", false);
				$('.shorty_girl_img2').hide();
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt1", false);
				}); 
				current_sound.on('complete', function () {
					$('.shorty_girl_img2').show();
					nav_button_controls();
				});
				break;
			case 3:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				if ($lang == "np") {
					$(".weather_news").attr("src", preload.getResult("w_report_np").src);
					$(".music").attr("src", preload.getResult("music_nepali").src);
				}
				$('.correct-sign1,.correct-sign2,.wrong-sign1,.wrong-sign2').hide();

				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide1_toptxt2", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt2", false);
				});
				current_sound.play();
				$('.img-right,.img-left,.text_show').hide();
				current_sound.on('complete', function () {
					$(".hand").addClass("fadeInsSuperfast");

					$(".hand,.radio").click(function () {
						randomSound();
						$(this).css('pointer-events', 'none');
						current_sound.on('complete', function () {
							console.log('aaaaa');
							checkans();
							// $nextBtn.show(0);
							// $prevBtn.show(0);

						})


					});


				})

				break;
			case 4:

				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player('slide1_toptxt4', false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt4", false);
				});
				$('.grull2').hide();
				current_sound.on('complete', function () {
					$('.grull2').show();
					nav_button_controls();
				});
				break;
			case 5:
				$('.correct-sign1,.correct-sign2,.wrong-sign1,.wrong-sign2,.aamai_weather,.aamai_cricket').hide();
				if ($lang == "np") {
					$(".weather_news").attr("src", preload.getResult("w_report_np").src);
					$(".cricket_news").attr("src", preload.getResult("cricket_nepali").src);
				}
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("slide1_toptxt5");
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt5", false);
				});


				$('.img-right,.img-left,.text_show').hide();
				current_sound.on('complete', function () {
					changeImageToRandomImage();
					$(".hand2").addClass("fadeInsSuperfast");
					$(".hand2").click(function () {
						$(".hand2,.aamai,.grull2,.shorty_girl2").hide();
						$(".right_img_add").addClass("right_image");
						checkans2();
					});
				});

				break;
			case 6:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player_nav("slide1_toptxt7", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt7", false);
				}); current_sound.on('complete', function () {
					$nextBtn.show(0);
					$prevBtn.show(0);
				});



				break;
			case 7:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player_nav("slide1_toptxt8", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt8", false);
				});
				let textBox = $("<input type='text' class='inputbox-recipent' />");
				$(".recipient").append(textBox);
				$(".recipient").addClass("fade-in");
				$(".recipient").css("backgound", "#fff");

				current_sound.on("complete", function () {
					//enable btn clicks
					$(".mob_key").addClass("clickMe");
					//listen for btn clicks and add the number in the recipient box
					listenNumberPressed();
				});
				break;
			case 8:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				$(".spBox-4, .spBox-5").addClass("opaque");
				// Showing text bubble
				$(".spBox-4").addClass("fadeInsSuperfast");
				// Adding gif to man to make lipsync
				$(".man-talking").attr("src", preload.getResult("buwa_guff").src);
				// PLaying the audio of girl
				current_sound = createjs.Sound.play("slide1_call");
				current_sound.play();
				current_sound.on('complete', function () {
					console.log('aaaaa');
					// Adding png back
					$(".man-talking").attr("src", preload.getResult("buwa_guff_stop").src);
					// Showing text bubble
					$(".spBox-5").addClass("fadeInsSuperfast");
					// Adding gif to girl to make lipsync
					$(".girl-talking").attr("src", preload.getResult("beti_guff").src);
					createjs.Sound.stop();
					// PLaying the audio of girl
					current_sound = createjs.Sound.play("slide1_call_next");
					current_sound.play();
					current_sound.on('complete', function () {
						// Adding back image class to the girl
						$(".girl-talking").attr("src", preload.getResult("beti_guff_stop").src);
						nav_button_controls();
					});
				});
				break;
			case 9:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player_nav("slide1_toptxt9", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt9", false);
				}); current_sound.on('complete', function () {
					$nextBtn.show(0);
					$prevBtn.show(0);
				});
				break;

			case 10:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				$('.handtocall2').hide();
				sound_player_nav("slide1_toptxt10", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_toptxt10", false);
				}); current_sound.on('complete', function () {
					$('.handtocall2').show();
					$(".handtocall2").addClass("fadeInsSuperfast");
					$(".handtocall2").click(function () {
						$(".tv_bg").attr("src", preload.getResult("behena").src);
						$('.handtocall2').hide();
						console.log('qqqqqq');
						nav_button_controls();

					})
				});
				break;
			case 11:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				if ($lang == "np") {
					$(".weather_news2").attr("src", preload.getResult("w_report_np").src);
					$(".cricket_news2").attr("src", preload.getResult("cricket_nepali").src);
				}
				sound_player_nav("slide1_p16_ques", false);
				$(".spk-top").click(function () {
					sound_player_nav("slide1_p16_ques", false);
				});
				$('.correct-sign,.wrong-sign').hide();
				current_sound.on('complete', function () {
					$(".weather_news2, .cricket_news2").click(function () {
						if ($(this).hasClass("correct")) {
							$(".correct-sign").show();
							$(".weather_news2, .cricket_news2").off("click");
							play_correct_incorrect_sound(1);
							// current_sound.on('complete', function () {
							nav_button_controls();
							// });
						}
						else {
							play_correct_incorrect_sound(0);
							$(".wrong-sign").show();
							$(".weather_news2").off("click");
						}
					});
				});
				break;
			case 12:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				$('.radio_new,.newspaper1,.phone,.telv,.phone_spbox,.news_spbox,.radio_spbox,.tv_spbox').hide();
				$('.left_block').hide();
				$('.right_block').animate({
					"left": "0%",
				}, 1500);
				$('.phone,.phone_spbox').fadeIn(2000);
				$('.shorty_girl_img').hide();
				sound_player('slider_txt1');
				current_sound.on('complete', function () {
					sound_player('slider_txt2');
					$('.newspaper1,.news_spbox').fadeIn(2000);

					current_sound.on('complete', function () {
						$('.left_block').show();
						$('.left_block').animate({
							"right": "0%",
						}, 1500);
						sound_player('slider_txt4');
						$('.radio_new,.radio_spbox').fadeIn(2000);
						current_sound.on('complete', function () {
							$('.telv,.tv_spbox').fadeIn(2000);
							sound_player('slider_txt3');

							current_sound.on('complete', function () {
								$('.shorty_girl_img').show();
								nav_button_controls();
							})
						})
					})

				});
				break;
			case 13:
				$nextBtn.hide(0);
				$prevBtn.hide(0);
				sound_player('slide1_spbox');
				$('.shorty_girl_img').hide();
				current_sound.on('complete', function () {
					$('.shorty_girl_img').show();
					nav_button_controls();
				});

			default:
				break;

		}
	}



	function listenNumberPressed() {
		$(".mob_key").on("click", function () {
			console.log('yyyy');
			// $(".hand12").hide();
			let keyvalue = $(this).attr("data-value");
			console.log("aaaa");
			sound_player("numberdial" + keyvalue);
			$(".inputbox-recipent").css("color", 'black');
			// $(".inputbox-recipent").css("color", 'black');
			current_sound = createjs.Sound.play("numberdial");
			current_sound.play();

			if (keyvalue == "back") {
				console.log("xxxxx");
				recipientNumber = recipientNumber.slice(0, -1)
			}
			else {
				value = data.string["num" + keyvalue];
				if (recipientNumber.length < 4) {
					console.log("yyy")
					recipientNumber = recipientNumber + value;
					if (recipientNumber.length == 4) {
						//check
						if (recipientNumber == "1234") {
							//correct
							$(".handtocall").addClass("fadeInsSuperfast");
							$(".mobiledialscreen").css("color", '#B6D7A8');
							$(".handtocall").addClass("fadeInsSuperfast");

							$(".handtocall, .call-button").click(function () {
								// if (dialnumber == "01544444") {
								console.log('dddd');
								$(".handtocall").hide(0);
								$(".call-button").hide(0);
								$(".num-0, .num-1, .num-2, .num-3, .num-4, .num-5, .num-6, .num-7, .num-8, .num-9").hide(0);
								$(".number-eraser").hide(0);
								$(".recipient").css({
									"background": "#A4715A",
									"top": "43%",
									"left": "54%",
									"color": "#fff"
								});
								$(".background-bg").addClass("fadeInsSuperfast");
								createjs.Sound.stop();
								current_sound = createjs.Sound.play("s8_1");
								current_sound.play();
								current_sound.on('complete', function () {
									$nextBtn.show(0);
									$prevBtn.show(0);

									// On complete, go to next slide
									createjs.Sound.stop();
									clearTimeout(timeout);
									switch (countNext) {
										default:
											countNext++;
											templateCaller();
											break;
									}

								});
							});
						}
						else {
							//incorrect
							$(".inputbox-recipent").css("color", '#EA9999');

						}
					}
				}

			}
			console.log(recipientNumber)
			$(".inputbox-recipent").val(recipientNumber);

		});
	}

	/* 
		class of the image to change
		id of the sound to play
		show delay 	
		pngGifId --> fisrt element is png and the second the gif
	*/
	function TalkGifManager(girlClass, pngGifId, speechbox, soundId, delay) {
		setTimeout(function () {
			$(speechbox).removeClass("hide");
			girlClass.attr("src", preload.getResult(pngGifId[1]).src);
			createjs.Sound.stop();
			current_sound = createjs.Sound.play(soundId);
			current_sound.play();
			current_sound.on('complete', function () {
				girlClass.attr("src", preload.getResult(pngGifId[0]).src);
				nav_button_controls();
			});
		}, delay);
	}

	function TalkGifManager2(girlClass1, girlClass2, pngGifId1, pngGifId2, speechbox1, speechbox2, soundId1, soundId2, delay) {
		setTimeout(function () {
			$(speechbox1).removeClass("hide");
			girlClass1.attr("src", preload.getResult(pngGifId1[1]).src);
			createjs.Sound.stop();
			current_sound = createjs.Sound.play(soundId1);
			current_sound.play();
			current_sound.on('complete', function () {
				girlClass1.attr("src", preload.getResult(pngGifId1[0]).src);

				$(speechbox2).removeClass("hide");
				girlClass2.attr("src", preload.getResult(pngGifId2[1]).src);
				createjs.Sound.stop();
				current_sound = createjs.Sound.play(soundId2);
				current_sound.play();
				current_sound.on('complete', function () {
					girlClass2.attr("src", preload.getResult(pngGifId2[0]).src);
					nav_button_controls();
				});

			});
		}, delay);
	}

	function nav_button_controls(delay_ms) {
		timeoutvar = setTimeout(function () {
			if (countNext == 0) {
				$nextBtn.show(0);
			} else if (countNext > 0 && countNext == $total_page - 1) {
				$prevBtn.show(0);
				ole.footerNotificationHandler.pageEndSetNotification();
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
			next ? nav_button_controls() : '';
		});
	}

	function sound_player_with_callback(sound_id, callback) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function () {
			callback();
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
		if (content[count].hasOwnProperty('imagedivblock')) {
			var imageClass = content[count].imagedivblock;
			for (var i = 0; i < imageClass.length; i++) {
				var image_src = preload.getResult(imageClass[i].imgid).src;
				//get list of classes
				var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
				var selector = ('.' + classes_list[classes_list.length - 1]);
				$(selector).attr('src', image_src);
			}
		}
	}
	function sound_player_nav(sound_id, next) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function () {
			next ? nav_button_controls() : '';
		});
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
		recipientNumber = "";

		// clearInterval(resetST);
		// letter_counter = 0;
		// recipientNumber = "";

		navigationcontroller();

		generaltemplate();
		loadTimelineProgress($total_page, countNext + 1);

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
		clearTimeout(timeout);
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
