$(function () {
	var $board = $('.board'),
		countNext = 0,
		$total_page = 1;

	//array of image
	var definitionImg = [
	"images/definitionpage/definition1.png",
	"images/definitionpage/definition2.png",
	"images/definitionpage/definition3.png",
	"images/definitionpage/definition4.png"
	];

	var randomImageNumeral = ole.getRandom(1,3,0);
	var datahighlightflag = "";
	loadTimelineProgress($total_page,countNext+1);

	randomImageNumeral = 0; //just defining the value to 0;
	if (typeof content === "undefined") {
		alert("content not defined");
	} else {
		content.definitionImageSource = definitionImg[randomImageNumeral];
	}

	// check for datahighlight flag
	if (typeof content.datahighlight === "undefined") {
		datahighlightflag = "false";
	} else {
		datahighlightflag = content.datahighlight;
	}

/*
* definitionLandingPage
*/
	var htmlStart = "<div class='definition'>"
	var figStart = "<figure>";
	var img = "<img src="+content.definitionImageSource+">";
	var caption = "<figcaption>"+content.definitionFirstWord+"</figcaption>";
	var figEnd = "</figure>";
	var p = "<div class='definationtxt'>";
	for (var i = 0; i < content.definitionData.length; i++) {
		/*if(i == 0){
			p += "<p>content.definitionData[i]+"</p>";
		}
		else if(i > 0){*/
			p += "<p data-highlight='"+datahighlightflag+"'>"+content.definitionData[i]+"</p>";
		// }
	};
	p += "</div>";
	var htmlEnd = "</div>";

	var html = htmlStart+figStart
				+img+caption
				+figEnd
				+p
				+htmlEnd;
	$board.html(html);

	var $definitiontext = $board.children('div.definition').children("div.definationtxt").children("p[data-highlight='true']");
	var texthighlightstarttag = "<span class='highlight'>";
	var texthighlightendtag = "</span>";
	// alert($definitiontext.length);
	if($definitiontext.length > 0){
			$.each($definitiontext, function(index, val) {
				var replaceinstring = $(this).html();				
				replaceinstring = replaceinstring.replace(/#/g,texthighlightstarttag);
				replaceinstring = replaceinstring.replace(/@/g,texthighlightendtag);
				$(this).html(replaceinstring);
			});
		}
	ole.footerNotificationHandler.pageEndSetNotification();
});