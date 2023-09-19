/****************************************************************
 NOTE : $currentgrade, $lang and subject variable are global
 declared in ole.start.js script file and thus can be
 used here directly
 *******************************************************************/
var data2 = "";
/**
 * get datas from science or maths or english or etc...
 */
var oleDatas = {};

var TitleData = {};

// update the link for the home button
$('header').find('.homeBtn').attr('href', "index.html?lang=" + $lang);

/********************************
 * all menu functions starts     *
 *********************************/
function menu(myjson) {
	var menuData = [];
	var exerciselstData = [];
	var exerciseTitle;
	var subjectTitle;

	var toolBarTitles = {};

	/** change menu and teachers note into eng or nepali **/
	$.getJSON("config/data.json", function(toolList) {
		$.each(toolList, function(index) {
			toolBarTitles[index] = toolList[index][$lang];
		});
		var toolBar = {
			menuTitleBar : toolBarTitles.menu
		};
		$("#activity-page-menu-text").html(toolBarTitles.menu);
		if ($lang === "en") {
			$(".navbar_notebook").html("Teacher's Note");
		} else if ($lang === "np") {
			$(".navbar_notebook").html("पाठ विवरण");
		}
		/* for helptext  **/
		helptitle = toolBarTitles.helptext;
	}).done(function() {
		console.log("data.json get done, second success");
	}).fail(function(data, textstatus, errortype) {
		alert("get data.json failed, status: " + textstatus + ", error: " + errortype);
		location.reload();
	}).always(function() {
		console.log("data.json get complete, appears on complete");
	});
}//menu function ends here

/********************************
 * all menu functions ends
 ********************************/

$("#activity-page-lang-switch,#langSwitchNew").on('click', 'a', function(e) {
	// first get the language data to switch into from the language switcher
	var checkLang = $(this).data("lang");
	var langSwitch = "";
	if (checkLang === 'np' || checkLang === 'en') {
		/*check if the subject is english id comes as eng in start page
		; if so keep language switch to only "en" for other subjects
		langSwitch should be the selected one*/
		//subject == "eng" ? langSwitch = "en" : langSwitch = checkLang;
		if (subject == "eng")
			langSwitch = "en"
		else if (subject == "nep" || subject=="dsy" || subject=="nsl")
			langSwitch = "np"
		else
			langSwitch = checkLang;
	}

	if ($lang != langSwitch) {
		console.log("lang=" + $lang);

		var query = window.location.search.slice(1);

		if (query.indexOf("lang=" + $lang) > -1) {
			var regex = new RegExp("&lang=" + $lang, "gi");
			// console.log();
			var link = "?" + query.replace(regex, "&lang=" + langSwitch);
		} else {
			var link = "?" + query + "&lang=" + langSwitch;
		}

		console.log("link = " + link);
		window.open(link, "_self")
	};
	e.preventDefault();
});


/* for help Text on clicking the value call for data file find the help data in
 data file and show**/
$('#activity-page-help-text').click(function() {
	if ($lang === "np") {
		var helpdataFile = "data-np.xml"
	} else if ($lang === "en") {
		var helpdataFile = "data.xml"
	}

	var navUrlMe = $base_dir + "/" + helpdataFile;

	// call data file for help data
	$.ajax({
		type : "GET",
		url : navUrlMe,
		dataType : "xml",
		beforeSend : function() {
			console.log(navUrlMe + " is being called.");
		}
	}).done(function(xml) {/*the xml is parsed as object by ajax method and made xml object*/
		var $datahlp = {};
		var $exehlp = {};
		var $selfhlp = {};

		var $chapterNav = $(xml).find("chapter");
		var $lessondir = $(xml).find("lessonDirection");
		$lessondir.children().each(function(lessonData) {
			if ($(this).children().length > 1) {
				/*do nothing*/
			} else {
				$datahlp[lessonData] = $(this).text();
			}
		});

		var $exerdir = $(xml).find("exercisehelp");
		$exerdir.children().each(function(lessonData) {
			if ($lang == "np") {
				whatDatame = helptitle[5] + " " + ole.nepaliNumber(lessonData + 1);
			} else
				whatDatame = helptitle[5] + " " + (lessonData + 1);

			$exehlp[lessonData] = {
				exetitle : whatDatame,
				exetext : $(this).text()
			};

		});

		var $selfdir = $(xml).find("selfAssessment");
		$selfdir.children().each(function(lessonData) {
			whatDatame = helptitle[6];
			$selfhlp[lessonData] = {
				selftitle : whatDatame,
				selftext : $(this).text()
			};
		});

		var sourceHelp = $('#helpTextForNav').html();
		var helpDATAS = {
			title : $chapterNav.text(),
			helpNav : [{
				helptitle : helptitle[2],
				helptext : $datahlp[1]
			}, {
				helptitle : helptitle[1],
				helptext : $datahlp[0]
			}],
			how : helptitle[3],
			lessonNav : [{
				lessontitle : helptitle[4],
				lessontext : $datahlp[2]
			}],
			exeNav : $exehlp,
			selfNav : $selfhlp
		};

		var templatehelp = Handlebars.compile(sourceHelp);
		var htmlhelp = templatehelp(helpDATAS);

		$(".popUp").fadeOut(10, function() {
			$(this).html(htmlhelp);
		}).delay(100).fadeIn(10);

	}).fail(function(jqxhr, textstatus, errortype) {
		alert("get " + $url + " failed, status: " + textstatus + ", error: " + errortype);
		location.reload();
	});
});

//console.log(data);
// on clicking close help button
$(".popUp").on('click', '#closeHelpNav', function() {
	$(".popUp").hide(10, function() {
		$(this).html('');
	});
});

//reference and credits
function credits() {
	swal({
		title : "Credits",
		text : data.lesson.credits,
		customClass : 'sweetalert-lg'
	});
};

function references() {
	swal({
		title : "References",
		text : data.lesson.references,
		customClass : 'sweetalert-lg'
	});
};
