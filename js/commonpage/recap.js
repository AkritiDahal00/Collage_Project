
$(function () {
	var $board = $('.board'),
		countNext = 0,
		$total_page = 1;

	//array of image
	var recapImg = [
	"images/recap/recap1.png",
	"images/recap/recap2.png",
	"images/recap/recap3.png",
	"images/recap/recap4.png"
	];

	var randomImageNumeral = ole.getRandom(1,3,0);

	loadTimelineProgress($total_page,countNext+1);

	randomImageNumeral = 0; //just defining the value to 0;
	if (typeof content === "undefined") {
		alert("content not defined");
	} else {
		content.recapImageSource = recapImg[randomImageNumeral];
	}

	// variable to store the list element class as it is 
	//defined in content
	var listelemclass;

	// check out if any class for listelement class is defined
	if (typeof content.listelementclass === "undefined") {
		// if not defined set
		listelemclass = "largehorizontalgridspacing";
	} else {
		// if defined set 
		listelemclass = content.listelementclass;
	}

	// space character
	var SPACE = " ";
/*
* definitionLandingPage
*/
	var htmlStart = "<div class='recap'>"
	var figStart = "<figure>";
	var img = "<img src="+content.recapImageSource+">";
	var caption = "<figcaption>"+content.recapTextData+"</figcaption>";
	var figEnd = "</figure>";
	var p = "<ul class='recaptxt"+SPACE+listelemclass+"'>";
	for (var i = 0; i < content.recapData.length; i++) {
		p += "<li>"+content.recapData[i]+"</li>";
	};
	p += "</ul>";
	var htmlEnd = "</div>";

	var html = htmlStart+figStart
				+img+caption
				+figEnd
				+p
				+htmlEnd;
	$board.html(html);
	ole.footerNotificationHandler.lessonEndSetNotification();
});


