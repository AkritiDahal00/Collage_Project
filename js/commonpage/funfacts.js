
$(function () {
	var $board = $('.board'),
		countNext = 0,
		$total_page = 1;

	//array of image
	var recapImg = [
	"images/funfact/funfact1.png",
	"images/funfact/funfact2.png",
	"images/funfact/funfact3.png",
	"images/funfact/funfact4.png"
	];

	var randomImageNumeral = ole.getRandom(1,3,0);

	loadTimelineProgress($total_page,countNext+1);

	randomImageNumeral = 0; //just defining the value to 0;
	if (typeof content === "undefined") {
		alert("content not defined");
	} else {
		content.funfactImageSource = recapImg[randomImageNumeral];
	}

/*
* definitionLandingPage
*/
	var htmlStart = "<div class='funfact'>"
	var figStart = "<figure>";
	var img = "<img src="+content.funfactImageSource+">";
	var caption = "<figcaption>"+content.funfactTextData+"</figcaption>";
	var figEnd = "</figure>";
	var p = "<ul class='funfacttxt'>";
	for (var i = 0; i < content.funfactData.length; i++) {
		p += "<li>"+content.funfactData[i]+"</li>";
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
