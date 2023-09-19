"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ole = {};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
/**
 * show string in wordwise or letter wise according to choice
 */


ole.stringShow = function (selector, string, seperator, time, breakPoint, callFunction) {
  var $seperator = seperator;

  if (typeof time === "undefined") {
    time = 400;
  }

  if (typeof seperator === "undefined") {
    $seperator = " ";
  }

  if (typeof breakPoint === "undefined") {
    breakPoint = false;
  }

  for (var i = 2; i < arguments.length; i++) {
    var val = _typeof(arguments[i]); // alert(val);


    if (val === "boolean") {
      /*console.log(arguments[i]);*/
      var breakPoint = arguments[i];

      if (i === 2) {
        $seperator = " ";
      } else if (i === 3) {
        time = 400;
      }
    } else if (val === "function") {
      callFunction = arguments[arguments.length - 1];

      if (arguments.length === 3) {
        $seperator = " ";
      } else if (arguments.length === 4) {
        time = 400;
      }
    }
  }
  /*console.log("seperator = ."+ $seperator +". smthin");*/


  var breaking = "";
  var a = string;
  var array = [];
  array = a.split($seperator); // console.log(array);

  var count = 0;
  var timeSet = time;
  var wordShow = setInterval(function () {
    if (breakPoint === true) {
      if (array[count] === "." || array[count] === "।") {
        breaking = "<br>";
      } else {
        breaking = "";
      }
    }

    $(selector).append(array[count] + $seperator + breaking);
    count++;

    if (count >= array.length) {
      clearInterval(wordShow);

      if (typeof callFunction === "undefined") {} else {
        callFunction();
      }
    }
  }, timeSet);
};
/**
 * ole.parseToolTip parse string, and put span tag on selected string,
 * if set to true, in hover in show dialog box < "oleToolTip" class is added to span >
 * if set to false or undefined, parsedString class is added which wont give hover
 *if replace text is set string is repalce by replace text
 */


ole.parseToolTip = function (selector, string, definition, showToolTip, replacetxt) {
  /*generate a regular expression with the string to be replaced, also process
  the escape characters and replace as below*/
  var stringRegEx = new RegExp(string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi");
  /*console.log(selector+" "+showToolTip);*/

  if (typeof definition === "undefined") {
    definition = "definition is missing";
  }

  if (typeof showToolTip === "undefined") {
    showToolTip = false;
  }

  var str = $(selector).html();

  if (showToolTip === true) {
    var $div = "oleToolTip";
  } else {
    var $div = "parsedString";
  }

  if (typeof replacetxt === "undefined") {
    var changeText = "<span class='" + $div + "' data-defn='" + definition + "' title='" + definition + "'>" + string + "</span>";
  } else {
    var changeText = "<span class='" + $div + "' data-defn='" + definition + "'>" + replacetxt + "</span>";
  }
  /*console.log(changeText);*/


  var res = str.replace(stringRegEx, changeText);
  $(selector).html(res);

  if (showToolTip === true) {
    $(selector).on("mouseenter", ".oleToolTip", function (event) {
      var definition = $(this).data("defn");
      var x = event.clientX;
      var y = event.clientY; // alert(x+"**"+y);

      var w = window.innerWidth;
      var h = window.innerHeight;
      var wMain = parseFloat($(".mainBox").width());
      var hMain = parseFloat($(".mainBox").height());
      var wDeviation = (w - wMain) / 2;
      var hDeviation = (h - hMain) / 2;
      /*console.log(w+" w"+wMain+" "+wDeviation+" h ="+h+" "+hMain+" "+hDeviation);
      console.log(x + " "+ y)*/

      var hPercent = (hMain - y) / hMain * 100;

      if (hPercent < 15) {
        hDeviation = hDeviation + 100; // console.log("per = "+hPercent+" hDeviation ="+hDeviation);
      }

      $(".oleToolTipBox").text(definition).css({
        top: event.pageY - hDeviation,
        left: event.pageX - wDeviation
      }).show(0);
    }).on("mouseleave", ".oleToolTip", function () {
      $(".oleToolTipBox").hide(0);
    });
  }
};
/************************************
** Ole HighlightText tool - takes string as input and dopes it with span tags with some
  highlight specific class, and returns the changed HTML version to the caller.
  Use the css styling to highlight the string as required.
  USAGE - how to call the function:
    E.g: $someSelectorWhoseTextIsToBeHighlighted.html(
        ole.highlightTextTool.definitionhighlight(
        $someSelectorWhoseTextIsToBeHighlighted.text(),
        stringToBeHighlightedInInput));
****************************************************************************************************************************************/


ole.highlightTextTool = {
  definitionhighlight: function definitionhighlight(inputText, highlightText) {
    if (typeof inputText === "undefined") {
      alert("Caller: ole.highlightTextTool; Developer Alert! Inputdata missing");
      return;
    }

    if (typeof highlightText === "undefined") {
      alert("Caller: ole.highlightTextTool; Developer Alert! highlightText missing");
      return;
    }
    /*generate a regular expression with the string to be replaced, also process
    the escape characters and replace as below ; here the regEx flag 'g' is not given
    so */


    var stringRegEx = new RegExp(highlightText.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "i");
    var allotHighlightClass = "ole-highlight-definition-class";
    var changedText = "<span class='" + allotHighlightClass + "'>" + highlightText + "</span>";
    /*console.log(changeText);*/

    var changedInputTextHTML = inputText.replace(stringRegEx, changedText);
    return changedInputTextHTML;
  }
};
/**
 * end of ole.parser
 */

/**
 * center vertically
 */

ole.vCenter = function (selector, ratio) {
  if (typeof ratio === "undefined") {
    var r = 2;
  } else {
    var r = ratio;
  }

  var h = window.innerHeight;
  var H = $(selector).height();
  var dTop = (h - H) / r;
  $(selector).css({
    "margin-top": dTop + "px"
  });
  /*console.log(dTop+ " h= "+h + " H"+H);
  console.log(selector);
  console.log("hellow from top")*/
};
/**
 * nextBlinker is on the process of depreciation
 * nextBlinker() is when activity finishes, calling this function, highlights the next button
 */


ole.nextBlinker = function () {
  $(".footer").find(".footer-next> span").addClass("blink_next animated infinite shake");
};
/*
function to convert english number to nepali
**/


ole.nepaliNumber = function (number, lang) {
  var stringNum = ""; // if (typeof lang === "undefined" || lang == "np") {

  if (typeof lang === "undefined" || lang == "np") {
    var newArray = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    var strNum = "" + number;
    var arry = strNum.split("");
    var $i = 0;
    var whatVal;
    $.each(arry, function (index) {
      whatVal = arry[$i];
      stringNum += newArray[whatVal];
      $i++;
    });
  } else if (lang == "en") {
    stringNum = number;
  }

  return stringNum;
};
/*
function to convert nepali number to english
**/


ole.nepaliToEnglishNumber = function (nepaliNumber) {
  var englishDigits = {
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9'
  };
  /* Converting Devanagari number to English (js) */

  var englishnumber = nepaliNumber.replace(/[०१२३४५६७८९]/g, function (s) {
    return englishDigits[s];
  });

  if ($lang == 'np') {
    return englishnumber;
  } else {
    return nepaliNumber;
  }
};
/**
 * ole.getRandom(num) gives an array of random not repeated numbers till 'num' times
 */


ole.getRandom = function (num, maxRange, minRange) {
  if (typeof randomGen === "undefined") {
    var randomGen = [];
  }

  if (typeof minRange === "undefined") {
    minRange = 0;
  }

  (function randomGet() {
    if (randomGen.length < num) {
      var rnd = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
      var i = randomGen.length,
          checkIf = false;

      while (i--) {
        if (randomGen[i] == rnd) {
          randomGet();
          checkIf = true;
          break;
        }
      }

      if (checkIf != true) {
        randomGen.push(rnd);
        randomGet();
      }
    } else {// console.log('hola')
    }
  })();

  return randomGen;
};
/*
 * it checks and search the string, if it finds '#^o^#',
 * it replaces it with <sup>o</sup>
 */


ole.degree = function (string) {
  var changeText = "<sup>o</sup>";
  return string.replace(/\#\^o\^\#/g, changeText);
};
/*
 * it checks and search the string,
 * search for string provided as "search"
 * and replace it with string provided as "replace"
 */


ole.textSR = function (string, search, replace) {
  var re = new RegExp(search, "gi");
  return string.replace(re, replace);
};
/*Tooltip for image
//usage
   <img src="my.png" id="myimg1" data-tip="this is tooltip"/>

*/


ole.imageToolTip = function (selector) {
  $(selector).on("mouseenter mouseleave", function (event) {
    var w = window.innerWidth;
    var wMain = parseFloat($(".mainBox").width());
    var newWidth = (w - wMain) / 2;
    var definition = $(this).data("tip");
    $(".oleImgToolTipBox").text(definition).css({
      top: event.pageY - 40,
      left: event.pageX - newWidth
    });
    $(".oleImgToolTipBox").toggle(event.type === "mouseenter");
  });
};
/****

 Put exception facts etc link
// Usage

  ole.getExtraLink(id,class,'exception');
    This will create put links facts  and exception inside footerExpection class and display it
    <div id="footerExpection" style="display: block;">
    <a id="id" class='class'>exception</a>

    </div>

    on clicking link use expPopUp same as you use popup


  DONOT USE THIS FOR NOW

**********/


ole.getExtraLink = function (id, cls, exception) {
  var html = "<a id='" + id + "' class='" + cls + "'>" + exception + "</a>";
  $("#footerExpection").append(html);
  $("#footerExpection").show(0);
};
/*
 * getFactors returns the factor,...
 * if call like, smth = ole.getFactors, smth will be array of factors
 * if set residue = true, it retruns array of objects with factor n its residue
 */


ole.getFactors = function (num, residue) {
  if (typeof residue === "undefined") {
    residue = false;
  } else {
    residue = true;
  }

  var number = num;
  var arrayFactor = [];
  var arrayResidue = [];
  var factor = 0;
  var fullArray = [];
  arrayResidue.push(number);

  while (number >= factor) {
    if (number === 1) {
      alert(data.string.sqrtOf1);
      break;
    }

    for (var i = 2; i <= number; i++) {
      if (number % i === 0) {
        number = number / i;
        arrayFactor.push(i);
        arrayResidue.push(number);
        factor = i;
        break;
      } else {}
    }
  }

  arrayResidue.pop();

  if (residue) {
    for (var i = 0; i < arrayFactor.length; i++) {
      fullArray.push({
        residue: arrayResidue[i],
        factor: arrayFactor[i]
      });
    }
  } else {
    fullArray = arrayFactor;
  }
  /*console.log(fullArray)*/


  return fullArray;
};
/***
** remove a default broken image placeholder, to display no image(keep transparent image), if the source is not found, "onerror" event handler should call this function from
  img tag in html file:
  <img src="PathToImageWhichCouldNotBeFound" onerror="ole.onImgError(this)">
***/


ole.onImgError = function (source) {
  source.src = "images/404.png";
  /*or if u want to display a different no image found placeholder other than default one
   do this istead of the line above: source.src = "PathToImageWhichCanBeFound"*/
  // disable onerror to prevent endless loop

  source.onerror = "";
  return true;
};
/***
  page end notifications
***/


ole.activityComplete = {
  finishingcall: function finishingcall() {
    var contentLangSpecific;
    /*this contains params which is language specific*/

    var source = $("#activitycomplete-template").html();
    var template = Handlebars.compile(source);

    if ($lang == "en") {
      contentLangSpecific = {
        heading: "Congratulations!!!",
        notice1: "You have completed this chapter.",
        checkmenu: "Check the menu to select new Chapter",
        restartnotice: "You can also redo this chapter.",
        lessonAppend: " : Lesson",
        exerciseAppend: " : Exercise"
      };
    } else if ($lang == "np") {
      contentLangSpecific = {
        heading: "बधाई छ!!!",
        notice1: "तिमिले यो पाठ पढि सक्याै।",
        checkmenu: "नयाँ पाठको लागि मेनु हेर।",
        restartnotice: "भर्खरै पढेको पाठ फेरि हेर्न सक्छौ।",
        lessonAppend: " : पाठ",
        exerciseAppend: " : अभ्यास"
      };
    }

    var content = {
      activitycompletestylelink: "<link rel='stylesheet' type='text/css' href='css/commonpage/activitycomplete.css'>",
      activitycompleteheading: contentLangSpecific.heading,
      activitycompletenotice1: contentLangSpecific.notice1,
      activitycompletemenulink: linkInfo.subjectUrl,
      activitycompletecheckmenu: contentLangSpecific.checkmenu,
      activitycompleterestartnotice: contentLangSpecific.restartnotice,
      activitycompleterestartchapter: data.lesson.chapter + contentLangSpecific.lessonAppend,
      activitycompleterestartexercise: data.lesson.chapter + contentLangSpecific.exerciseAppend,
      activitycompletechapterlink: linkInfo.lessonUrl,
      activitycompleteexerciselink: linkInfo.exerciseUrl,
      showAG: $currentgrade < 7 ? true : false
    };
    var html = template(content);
    /*children of mainbox i.e. current page is what we want to replace
    with the activity complete page*/

    $mainBox.children("div").html(html);
    /*hide the timelineprogress here*/

    $(".SequenceTimeLine").css("display", "none");
  }
};
/***
  page end notifications caller functions
  DO NOT USE THESE ON PAGES TO CALL NOTIFICATION
  CALL NOTIFICATIONHANDLERS
***/

ole.footerNotificationCalls = {
  showNextPageContinueButton: function showNextPageContinueButton() {
    var $nextPage;
    var $currentSection = $(".activeSectionClass");
    $continueLessonButton = $("#activity-page-continue-btn");
    $restartPageButton = $(".footerNotification .restartPage"); // if($lang == "np"){
    // 	$continueLessonButton.addClass('continuePageNp');
    // }else{
    // 	$continueLessonButton.addClass('continuePageEn');
    // }

    $restartPageButton.css("visibility", "visible");
    /*on continue button click trigger the next page button click*/

    $continueLessonButton.click(function () {
      $nextPage = $(".headfooter-next > span");

      if ($nextPage.length == 0) {
        $nextPage = $currentSection.next().next("span.imsectionClass");
      }
      /*console.log($nextPage + $nextPage.length);*/


      $nextPage.trigger("click");
    });
    /*on restartPage button click reload the page*/

    $restartPageButton.on("click", function () {
      document.location.reload();
    });
  },
  showExerciseContinueButton: function showExerciseContinueButton() {
    var $nextPage;
    $continueExerciseButton = $("#activity-page-finish-btn");
    $restartPageButton = $(".footerNotification .restartPage"); // if($lang == "np"){
    // 	$continueExerciseButton.addClass('continuePageNp');
    // }
    // else{
    // 	$continueExerciseButton.addClass('continuePageEn');
    // }
    // $restartPageButton.css('visibility', 'visible');

    /*on continue button click trigger the next page button click*/

    $continueExerciseButton.click(function () {
      // $nextPage = $(".exerciseTab > button >span");
      // $nextPage.trigger('click');

      /*changed the UI of end page by Ashish Gurung start*/
      $("#activity-page-next-btn-enabled").hide(0);
      $("#activity-page-prev-btn-enabled").hide(0);
      $(".notificationMsg").hide(0);
      $(".SequenceTimeLine").hide(0);
      $("#activity-page-navigation-controller").hide(0);
      $(this).hide(0);
      var $board = $(".board");

      if ($board.length == 0) {
        $board = $($(".mainBox>div")[0]);
      } else {
        $board.css({
          height: "100%",
          width: "100%"
        });
      } // var $board = $(".mainBox");


      $board.html("");
      $("#headPageNum").hide(0);
      var cur_grade = $currentgrade;
      var goodtxt;
      var completetxt;
      var gotoexetxt;
      var restarttxt;
      var menutxt; // lesson end page for grade 1

      if (cur_grade == 1) {
        goodtxt_array_en = ["Good Job!!", "Yay!", "Nice!", "Great!", "Superb!", "Awesome!"];
        goodtxt_array_np = ["स्याबास् !!!", "हुर्रे!", "ठिक गर्नुभयो!", "एकदम राम्रो!", "बधाई छ!", "अति उत्तम!"];

        if ($lang == "en") {
          createjs.Sound.stop();
          goodtxt = goodtxt_array_en[Math.floor(Math.random() * goodtxt_array_en.length)];
          completetxt = "You completed the chapter: <span>" + "<br>" + $("#breadCrumbSpan:nth-child(5)").html() + "</span>";
          gotoexetxt = "Play Time";
          restarttxt = "Repeat Chapter";
          menutxt = "Main Menu";
        } else {
          createjs.Sound.stop();
          goodtxt = goodtxt_array_np[Math.floor(Math.random() * goodtxt_array_np.length)];
          completetxt = "<span class='subjecttransitiontext'>तपाईँले</span>  <span>" + "<br>" + $("#breadCrumbSpan:nth-child(5)").html() + "</span> शीर्षकको पाठ <span class='verbtransitiontext'>पढ्नुभयो</span>।"; //adding for NSL

          if ($_GET["id"].slice(0, 3) == 'nsl') {
            completetxt = "<span class='subjecttransitiontext'>तपाईँले</span>  <span>" + "<br>" + $("#breadCrumbSpan:nth-child(5)").html() + "</span> शीर्षकको पाठ <span class='verbtransitiontext'>पढ्नुभयो</span>।";
          } //adding for NSL ends


          gotoexetxt = "अभ्यास सुरु गरौँ";

          if (cur_grade == 1) {
            gotoexetxt = "खेलौँ";
          }

          restarttxt = "पाठ फेरि पढौँ";
          menutxt = "मुख्य सूची";
        }

        var $container_g1 = $("<div class= 'lesson_end_container_g1'>");
        var $goodjob_g1 = $("<p class= 'lesson_end_goodjob_g1'>");
        $goodjob_g1.html(goodtxt);
        $container_g1.append($goodjob_g1);
        var $completed_g1 = $("<p class ='completetxt_g1'></p>");
        $completed_g1.html(completetxt);
        $container_g1.append($completed_g1);
        var $playTime = $("<p class= 'btm_navs lesson_to_pt'>");
        $playTime.html(gotoexetxt);
        $container_g1.append($playTime);
        $playTime.click(function () {
          $("#activity-page-exercise-tab > button >span").trigger("click");
        });
        var $repeat = $("<p class = 'btm_navs repeat'>");
        $repeat.html(restarttxt);
        $container_g1.append($repeat);
        $repeat.click(function () {
          $("#activity-page-lesson-tab > button >span").trigger("click");
        });
        var $mainMenu_g1 = $("<p class ='btm_navs go_to_menu'>");
        $mainMenu_g1.html(menutxt);
        $container_g1.append($mainMenu_g1);
        $mainMenu_g1.click(function () {
          $("#activity-page-menu-img").trigger("click");
        });
        var $image_g1 = $("<img class= 'butterfly_g1_les_end_1' src='images/butterfly.png'>");
        $container_g1.append($image_g1);
        var $image_g1_1 = $("<img class= 'butterfly_g1_les_end_2' src='images/butterfly.png'>");
        $container_g1.append($image_g1_1);
        $board.append($container_g1);
      } else {
        if ($lang == "en") {
          goodtxt = "Good Job!!";
          completetxt = "You have completed the chapter: <span class = 'lesson_end_green'>" + $("#breadCrumbSpan:nth-child(5)").html() + "</span>";
          gotoexetxt = "Start the exercise";
          restarttxt = "Revisit the lesson";
          menutxt = "Menu";
        } else {
          goodtxt = "स्याबास् !";
          completetxt = "तपाईँले  <span class = 'lesson_end_green'>" + $("#breadCrumbSpan:nth-child(5)").html() + "</span> शीर्षकको पाठ पढ्नुभयो।";
          gotoexetxt = "अभ्यास सुरु गरौँ";
          restarttxt = "पाठ फेरि पढौँ";
          menutxt = "मुख्य सूची";
        }

        var $container = $("<div class= 'lesson_end_container'>");
        var $goodjob = $("<p class= 'lesson_end_goodjob'>");
        $goodjob.html(goodtxt); // $goodjob.addClass("lesson_end_goodjob");

        $container.append($goodjob);
        var $completed = $("<p class = 'lesson_completed'>");
        $completed.html(completetxt); // $completed.addClass("lesson_completed");

        $container.append($completed);
        var $exercise = $("<p class= 'lesson_to_exercise'>");
        $exercise.html(gotoexetxt); // $exercise.addClass("lesson_to_exercise");

        $container.append($exercise);
        $exercise.click(function () {
          $("#activity-page-exercise-tab > button >span").trigger("click");
        });
        var $restart = $("<p class = 'lesson_restart'>");
        $restart.html(restarttxt); // $restart.addClass("lesson_restart");

        $container.append($restart);
        $restart.click(function () {
          $("#activity-page-lesson-tab > button >span").trigger("click");
        });
        var $menu = $("<p class ='lesson_gotomenu'>");
        $menu.html(menutxt); // $menu.addClass("lesson_gotomenu");

        $container.append($menu);
        $menu.click(function () {
          $("#activity-page-menu-img").trigger("click");
        });
        var $image = $("<img class= 'lesson_end_image' src='images/duck_quack.gif'>");
        $container.append($image);
        $board.append($container);
        var colors = ["#A871B1", "#8F6097", "#00AABA", "#FCD172", "#8CBC51"];
        var randindex = Math.floor(Math.random() * colors.length);
        $board.css("background-color", colors[randindex]);
        /*changed the UI of end page by Ashish Gurung completed*/
      }
    });
    /*on restartPage button click reload the page*/
    // $restartPageButton.on('click',function() {
    // document.location.reload();
    // });
  },
  hideNextPageContinueButton: function hideNextPageContinueButton() {
    $continueLessonButton = $(".footerNotification .continuePage");

    if ($lang == "np") {
      $continueLessonButton.removeClass("continuePageNp");
    } else {
      $continueLessonButton.removeClass("continuePageEn");
    }
    /*on continue button click trigger the next page button click*/


    $continueLessonButton.off("click");
  },
  setNotificationMsg: function setNotificationMsg($notificationMsg) {
    $notficationMsgPara = $(".footerNotification .notificationMsg");
    $notficationMsgPara.html($notificationMsg);
    $notficationMsgPara.css("visibility", "visible");
  },
  hideNotificationMsg: function hideNotificationMsg() {
    $notficationMsgPara = $(".footerNotification .notificationMsg");
    $notficationMsgPara.css("visibility", "hidden");
  },
  hideRestartPageButton: function hideRestartPageButton() {
    $restartPageButton = $(".footerNotification .restartPage");
    $restartPageButton.css("visibility", "hidden");
    $restartPageButton.off("click");
  },
  showRestartPageButton: function showRestartPageButton() {
    $restartPageButton = $(".footerNotification .restartPage");
    $restartPageButton.css("visibility", "visible");
    $restartPageButton.on("click", function () {
      document.location.reload();
    });
  }
};
/***
  NOTIFICATIONHANDLERS - Called during development phase for
  page end notifications
***/

ole.footerNotificationHandler = {
  pageEndSetNotification: function pageEndSetNotification() {
    //alert("skldfj");
    $("#activity-page-continue-btn").show(0); // var $notification;
    // if($lang == "np"){
    // 	$notification = "अब अर्को पेजमा जाऔँ।";
    // }
    // else{
    // 	$notification = "Now let's move to another page";
    // }
    // 	$(window).scrollTop($('.main').offset().top);
    // ole.footerNotificationCalls.setNotificationMsg($notification);

    ole.footerNotificationCalls.showNextPageContinueButton();
  },
  pageEndSetCustomNotification: function pageEndSetCustomNotification($notification) {
    if (typeof $notification === "undefined") {
      $notification = "";
    }

    ole.footerNotificationCalls.setNotificationMsg($notification);
    ole.footerNotificationCalls.showNextPageContinueButton();
  },
  lessonEndSetNotification: function lessonEndSetNotification() {
    $("#activity-page-finish-btn").show(0); // var $notification;
    // if($lang == "np"){
    // 	$notification = "तिमीले यो पाठ पढी सक्यौ, अब अभ्यास गर।";
    // }
    // else{
    // 	$notification = "You completed this lesson. Now let's do its exercise";
    // }
    // 	$(window).scrollTop($('.mainBox').offset().top);
    // ole.footerNotificationCalls.setNotificationMsg($notification);

    ole.footerNotificationCalls.showExerciseContinueButton();
  },
  lessonEndSetCustomNotification: function lessonEndSetCustomNotification($notification) {
    ole.footerNotificationCalls.setNotificationMsg($notification);
    ole.footerNotificationCalls.showExerciseContinueButton();
  },
  exerciseEndSetCustomNotification: function exerciseEndSetCustomNotification($notification) {
    ole.footerNotificationCalls.setNotificationMsg($notification);
    ole.footerNotificationCalls.hideNextPageContinueButton();
    ole.footerNotificationCalls.showRestartPageButton();
  },
  setNotificationMsg: function setNotificationMsg($notification) {
    ole.footerNotificationCalls.setNotificationMsg($notification);
  },
  showNextPageButton: function showNextPageButton() {
    ole.footerNotificationCalls.showNextPageContinueButton();
  },
  hideNextPageButton: function hideNextPageButton() {
    ole.footerNotificationCalls.hideNextPageContinueButton();
  },
  hideRestartButton: function hideRestartButton() {
    ole.footerNotificationCalls.hideRestartPageButton();
  },
  setNotificationMsgHideNextPagebutton: function setNotificationMsgHideNextPagebutton($notification) {
    ole.footerNotificationCalls.setNotificationMsg($notification);
    ole.footerNotificationCalls.hideNextPageContinueButton();
  },
  setNotificationMsgShowNextPagebutton: function setNotificationMsgShowNextPagebutton($notification) {
    ole.footerNotificationCalls.setNotificationMsg($notification);
    ole.footerNotificationCalls.showNextPageContinueButton();
  },
  hideNotification: function hideNotification() {
    $("#activity-page-continue-btn").hide(0);
    $("#activity-page-finish-btn").hide(0);
  },
  showRestartButton: function showRestartButton() {
    ole.footerNotificationCalls.showRestartPageButton();
  }
};
/**
Center popup
*/

$.fn.extend({
  center: function center() {
    return this.each(function () {
      var top = ($(window).height() - $(this).outerHeight()) / 2;
      var left = ($(window).width() - $(this).outerWidth()) / 2;
      $(this).css({
        position: "absolute",
        margin: 0,
        top: (top > 0 ? top : 0) + "px",
        left: (left > 0 ? left : 0) + "px"
      });
    });
  }
});
/*
  Sequence Timeline Bar
*/

loadTimelineProgress = function loadTimelineProgress($subPageNumber, $currentSubpage) {
  /*var totalwidth= $('.SequenceTimeLine').width()/$subPageNumber;
  var  progressBarWidth=totalwidth*($currentSubpage);
  */
  $("#activity-page-current-slide").html(ole.nepaliNumber($currentSubpage, $lang));
  $("#activity-page-total-slide").html(ole.nepaliNumber($subPageNumber, $lang));
  var position = $mainBox.offset();
  $(".SequenceTimeLine").css({
    left: position.left + "px"
  });
  $(".SequenceTimeLine").html("");

  for (var $i = 1; $i <= $subPageNumber; $i++) {
    var classes = "";

    if ($currentSubpage >= $i) {
      classes = "activeTimeLine";
    } else classes = "";

    $(".SequenceTimeLine").append("<div class='totalsequence " + classes + "'></div>");
  }
};
/**

next and previous button for nepali and english

$lang =np or en
$whatbtn next or prev

$appendwhere is div where the image is appended
**/


var getSubpageMoveButton = function getSubpageMoveButton($lang, $whatbtn) {
  if (typeof $whatbtn == "undefined") {
    $whatbtn = "next";
  }

  if ($whatbtn == "next") {
    var name = "activityNextBtn";
    var hover = "activityNextHoverBtn";
    /*var $nsrc="images/arrows/next_"+$lang+".png";
    var $hsrc="images/arrows/next_hover_"+$lang+".png";*/

    var $nsrc = "images/arrows/arrow.png";
    var $hsrc = "images/arrows/arrow_hover.png";
  } else {
    var name = "activityPrevBtn";
    var hover = "activityPrevHoverBtn";
    /*var $nsrc="images/arrows/prev_"+$lang+".png";
    var $hsrc="images/arrows/prev_hover_"+$lang+".png";*/

    var $nsrc = "images/arrows/arrow_prev.png";
    var $hsrc = "images/arrows/arrow_hover_prev.png";
  }

  var imgsrc = "<img src='" + $nsrc + "' id='" + name + "'/>" + "<img src='" + $hsrc + "' id='" + hover + "'/>";
  return imgsrc;
};
/**
 *	For mobile devices we need to add these to initiate the drag and drop events
 */


ole.initiateMobileDevice = function () {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
};

function touchHandler(event) {
  var touches = event.changedTouches,
      first = touches[0],
      type = "";

  switch (event.type) {
    case "touchstart":
      type = "mousedown";
      break;

    case "touchmove":
      type = "mousemove";
      break;

    case "touchend":
      type = "mouseup";
      break;

    default:
      return;
  }

  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
  /*left*/
  , null);
  first.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
} // var isMobile = false; //initiate as false
// // device detection
// if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
// || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
// isMobile = true;
// ole.initiateMobileDevice();
// }


window.mobileAndTabletcheck = function () {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    ole.initiateMobileDevice();
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};
/**

Arrow btn
**/


getArrowBtn = function getArrowBtn($whatbtn) {
  if (typeof $whatbtn === "undefined") {
    var name = "arrowNextBtn";
    var hover = "arrowNextHoverBtn";
    var $nsrc = "images/arrows/arrow.png";
    var $hsrc = "images/arrows/arrow_hover.png";
  } else if ($whatbtn == "prev") {
    var name = "arrowPrevBtn";
    var hover = "arrowPrevHoverBtn";
    var $nsrc = "images/arrows/arrow_prev.png";
    var $hsrc = "images/arrows/arrow_hover_prev.png";
  } else if ($whatbtn == "next") {
    var name = "arrowNextBtn";
    var hover = "arrowNextHoverBtn";
    var $nsrc = "images/arrows/arrow.png";
    var $hsrc = "images/arrows/arrow_hover.png";
  }

  var imgsrc = "<img src='" + $nsrc + "' id='" + name + "'/>" + "<img src='" + $hsrc + "' id='" + hover + "'/>";
  return imgsrc;
};
/* Reload*/


getReloadBtn = function getReloadBtn() {
  var name = "reloadBtn";
  var hover = "reloadHoverBtn";
  var $nsrc = "images/arrows/reload.png";
  var $hsrc = "images/arrows/reload_hover.png";
  var imgsrc = "<img src='" + $nsrc + "' id='" + name + "'/>" + "<img src='" + $hsrc + "' id='" + hover + "'/>";
  return imgsrc;
};
/* Reload*/


getCloseBtn = function getCloseBtn() {
  var name = "closeBtn";
  var hover = "closeHoverBtn";
  var $nsrc = "images/arrows/stop.png";
  var $hsrc = "images/arrows/stop_hover.png";
  var imgsrc = "<img src='" + $nsrc + "' id='" + name + "'/>" + "<img src='" + $hsrc + "' id='" + hover + "'/>";
  return imgsrc;
};