// For pulling rti flag starts
var $donar = '';
// function  callActivityJson(configFile){
// 	// console.log("sci="+configFile);

// 	$.getJSON("config/"+configFile, function(activitydata){
// 			var gradekey = activitydata["grade"+$currentgrade];

// 			$.each(gradekey,function (key) {
// 				console.log(key);
// 				if(gradekey[key].id === activity) {
// 					$selectedActivity = gradekey[key];
// 					$donar = $selectedActivity['donor'];
// 					console.log($donar);
// 				}
// 			});
// 	}).done(function(){
// 		console.log("from "+configFile+" get done, second success");
// 	}).fail(function(data, textstatus, errortype){
// 		alert("from "+configFile+" get failed, status: " + textstatus + ", error: "+errortype);
// 		location.reload();
// 	}).always(function(){
// 		console.log("from "+configFile+" get complete, appears on complete");

// 	});
// }

// 	// function which handels menu call when called
// 	function callmenu (myjson) {
// 		// if menu function is not yet interpreted
// 		if (typeof menu === "undefined") {
// 			location.reload();
// 			callmenu (myjson);
// 		} else {
// 			menu(myjson);
// 			return true;
// 		}
// 	}

// // pull configsubjects and do the following
// var global_subject = ";"
// $.getJSON("config/configsubjects.json", function(myjson){
// 	console.log("from configsubjects.json get done, success");
// 	console.log("m trying to call menu");

// 	callmenu(myjson);

// 	console.log("menu called");

// }).done(function(myjson){
// 	console.log("from configsubjects.json get done, second success");
// 	$.each(myjson,function (key) {
// 		if (myjson[key].id == subject ) {
// 			$subject = key;
// 			$subName = myjson[key][$lang];
// 		};
// 	});
// 	if($subject=="") {
// 		console.log("goto homepage");
// 	}
// 	else {
// 		configFile = "config"+$subject+".json";
// 		callActivityJson(configFile);
// 	}

// 	// give link for menu in the navigation toolbar
// 	$("#activity-page-menu-container").find("a").attr("href","subjects.html?sub="+$subject.toLowerCase()+"&lang="+$lang+"&grade="+$currentgrade);
// }).fail(function(data, textstatus, errortype){
// 	alert("from configsubjects.json get failed, status: " + textstatus + ", error: "+errortype);
// 	location.reload();
// }).always(function(){
// 	console.log(" here from configsubjects.json complete, appears on complete");

// });

// For pulling rti flag ends

Array.prototype.shufflearray = function () {
  var i = this.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
  return this;
};
var score = 0;
var TotalQues;

function EggTemplate() {
  //for rti chapters
  $donar = 'rti';

  var imageArray = [];
  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var eggs = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;
  while (i < totalImages) {
    imageArray[i] = i < 9 ? '0' + (i + 1) : i + 1 + '';
    i++;
  }
  imageArray.shufflearray();

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="scoreboard"></div>');
    $('.activity_container').prepend('<div class="exefin"></div>');
    $('.congratulation').hide(0);
    $('.exefin').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    eggsArray.shufflearray();
    for (var egg = 0; egg < noOfQues; egg++) {
      eggs.push({
        imgname: imageArray[egg],
        cracked: false,
        iscorrect: false,
      });

      $('.scoreboard').append(
        "<img id='egg" +
          egg +
          "' data-cracked='false' src='images/eggs/egg" +
          imageArray[egg] +
          ".png' class='eggs'/>"
      );
    }
    eggs.shufflearray();
    $('#egg' + index).addClass('eggmove');
  };

  this.update = function (correctAns) {
    if (!eggs[index].iscorrect) {
      if (!eggs[index].cracked) {
        eggs[index].cracked = true;
        if (correctAns) {
          $('#egg' + index)
            .attr('src', 'images/eggs/' + eggs[index].imgname + '.png')
            .removeClass('eggmove')
            .attr('select', 'yes');
          $('.exefin').append(
            "<img class='eggs' src = 'images/eggs/" +
              imageArray[index] +
              ".png'> </img>"
          );
          score++;
          eggs[index].iscorrect = true;
        } else {
          $('#egg' + index)
            .attr('src', 'images/eggs/egg_wrong.png')
            .removeClass('eggmove');
        }
      } else if (correctAns && eggs[index].iscorrect == false) {
        eggs[index].iscorrect == true;
      }
    }
  };

  this.gotoNext = function () {
    index++;
    console.log('tst here');
    if (index == TotalQues) {
      $('#activity-page-next-btn-enabled').hide(0);
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeTo(1000, 0).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar();
    } else {
      $('#egg' + index).addClass('eggmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.gotoNextInLength = function () {
    index++;
    console.log('tst here');
    if (index == TotalQues) {
      $('#activity-page-next-btn-enabled').hide(0);
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeTo(1000, 0).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar_for_length();
    } else {
      $('#egg' + index).addClass('eggmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

function LampTemplate() {
  //for rti chapters
  $donar = 'rti';

  var imageArray = [];
  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var eggs = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;
  while (i < totalImages) {
    imageArray[i] = i < 9 ? '0' + (i + 1) : i + 1 + '';
    i++;
  }
  imageArray.shufflearray();

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="scoreboard"></div>');
    $('.activity_container').prepend('<div class="exefin"></div>');
    $('.congratulation').hide(0);
    $('.exefin').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    eggsArray.shufflearray();
    for (var egg = 0; egg < noOfQues; egg++) {
      eggs.push({
        imgname: imageArray[egg],
        cracked: false,
        iscorrect: false,
      });

      $('.scoreboard').append(
        "<div class='lampcontainer'><img id='egg" +
          egg +
          "' data-cracked='false' src='images/lamps/lamp" +
          imageArray[egg] +
          ".png' class='lamps'/></div>"
      );
    }
    eggs.shufflearray();
    $('#egg' + index).addClass('lampmove');
  };

  this.update = function (correctAns) {
    if (!eggs[index].iscorrect) {
      if (!eggs[index].cracked) {
        eggs[index].cracked = true;
        if (correctAns) {
          //$("#egg"+index).attr("src", "images/eggs/" + eggs[index].imgname +".png").removeClass('lampmove').attr("select","yes");
          $('#egg' + index).removeClass('lampmove');
          $('#egg' + index)
            .parent()
            .attr('select', 'yes')
            .prepend(
              '<img class="lampoverlap" src="images/lamps/correct.png" />'
            );
          //$(".exefin").append("<img class='lamps' src = 'images/lamps/correct.png'> </img>");
          $('.exefin').append(
            $('#egg' + index)
              .parent()
              .clone()
              .attr('select', 'no')
              .css('width', '10%')
          );
          score++;
          eggs[index].iscorrect = true;
        } else {
          $('#egg' + index)
            .attr('src', 'images/lamps/incorrect.png')
            .removeClass('lampmove');
        }
      } else if (correctAns && eggs[index].iscorrect == false) {
        eggs[index].iscorrect == true;
      }
    }
  };
  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar();
    } else {
      $('#egg' + index).addClass('lampmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.gotoNextInRamailoMela = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar_for_ramailo_mela();
    } else {
      $('#egg' + index).addClass('lampmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}
function LampTemplateOnlyLamp() {
  //for rti chapters
  $donar = 'rti';

  var imageArray = [];
  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var eggs = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;
  while (i < totalImages) {
    imageArray[i] = i < 9 ? '0' + (i + 1) : i + 1 + '';
    i++;
  }
  imageArray.shufflearray();

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="scoreboard"></div>');
    $('.activity_container').prepend('<div class="exefin"></div>');
    $('.congratulation').hide(0);
    $('.exefin').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    eggsArray.shufflearray();
    for (var egg = 0; egg < noOfQues; egg++) {
      eggs.push({
        imgname: imageArray[egg],
        cracked: false,
        iscorrect: false,
      });

      $('.scoreboard').append(
        "<div class='lampcontainer'><img id='egg" +
          egg +
          "' data-cracked='false' src='images/lamps/lamp" +
          imageArray[egg] +
          ".png' class='lamps'/></div>"
      );
    }
    eggs.shufflearray();
    $('#egg' + index).addClass('lampmove');
  };

  this.update = function (correctAns) {
    if (!eggs[index].iscorrect) {
      if (!eggs[index].cracked) {
        eggs[index].cracked = true;
        if (correctAns) {
          //$("#egg"+index).attr("src", "images/eggs/" + eggs[index].imgname +".png").removeClass('lampmove').attr("select","yes");
          $('#egg' + index).removeClass('lampmove');
          $('#egg' + index)
            .parent()
            .attr('select', 'yes')
            .prepend(
              '<img class="lampoverlap" src="images/lamps/correct.png" />'
            );
          //$(".exefin").append("<img class='lamps' src = 'images/lamps/correct.png'> </img>");
          $('.exefin').append(
            $('#egg' + index)
              .parent()
              .clone()
              .attr('select', 'no')
              .css('width', '10%')
          );
          // score++;
          eggs[index].iscorrect = true;
        } else {
          $('#egg' + index)
            .attr('src', 'images/lamps/incorrect.png')
            .removeClass('lampmove');
        }
      } else if (correctAns && eggs[index].iscorrect == false) {
        eggs[index].iscorrect == true;
      }
    }
  };
  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar();
    } else {
      $('#egg' + index).addClass('lampmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.gotoNextInRamailoMela = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.exefin').show(0);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar_for_ramailo_mela();
    } else {
      $('#egg' + index).addClass('lampmove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

function TreasureTemplate() {
  //for rti chapters
  $donar = 'rti';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var treasures = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="treasureboard"></div>');
    $('.activity_container').prepend('<div class="treasure_exefin"></div>');
    $('.congratulation').hide(0);
    $('.treasure_exefin').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    for (var tres_id = 0; tres_id < noOfQues; tres_id++) {
      treasures.push({
        cracked: false,
        iscorrect: false,
      });

      $('.treasureboard').append(
        "<div class='treasurecontainer'><img id='tres_id" +
          tres_id +
          "' data-cracked='false' src='images/treasure/masic_box_close.png' class='treasures'/></div>"
      );
    }
    $('#tres_id' + index).addClass('treasuremove');
  };

  this.update = function (correctAns) {
    if (!treasures[index].iscorrect) {
      if (!treasures[index].cracked) {
        treasures[index].cracked = true;
        // if(correctAns){
        //  $("#tres_id"+index).removeClass('treasuremove');
        //  $("#tres_id"+index).parent().attr("select","yes").prepend('<img class="lampoverlap" src="images/treasure/masic_box_open.png" />')
        //  $(".exefin").append($("#tres_id"+index).parent().clone().attr('select','no').css('width','10%'));
        //  score++;
        //  treasures[index].iscorrect = true;
        // }

        if (correctAns) {
          $('#tres_id' + index)
            .attr('src', 'images/treasure/masic_box_open.png')
            .removeClass('treasuremove')
            .attr('select', 'yes');
          $('.treasure_exefin').append(
            "<img class='treasure_box' src = 'images/treasure/masic_box_open.png'> </img>"
          );
          score++;
          treasures[index].iscorrect = true;
        } else {
          $('#tres_id' + index)
            .attr('src', 'images/treasure/masic_box_empty01.png')
            .removeClass('treasuremove');
        }
      } else if (correctAns && treasures[index].iscorrect == false) {
        treasures[index].iscorrect == true;
      }
    }
  };

  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.treasure_exefin').show(0);
      $('.contentblock').hide(0);
      $('.treasureboard').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar_treasure();
    } else {
      $('#tres_id' + index).addClass('treasuremove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}
function TreasureTemplateOnly() {
  //for rti chapters
  $donar = 'rti';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var treasures = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="treasureboard"></div>');
    $('.activity_container').prepend('<div class="treasure_exefin"></div>');
    $('.congratulation').hide(0);
    $('.treasure_exefin').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    for (var tres_id = 0; tres_id < noOfQues; tres_id++) {
      treasures.push({
        cracked: false,
        iscorrect: false,
      });

      $('.treasureboard').append(
        "<div class='treasurecontainer'><img id='tres_id" +
          tres_id +
          "' data-cracked='false' src='images/treasure/masic_box_close.png' class='treasures'/></div>"
      );
    }
    $('#tres_id' + index).addClass('treasuremove');
  };

  this.update = function (correctAns) {
    if (!treasures[index].iscorrect) {
      if (!treasures[index].cracked) {
        treasures[index].cracked = true;
        // if(correctAns){
        //  $("#tres_id"+index).removeClass('treasuremove');
        //  $("#tres_id"+index).parent().attr("select","yes").prepend('<img class="lampoverlap" src="images/treasure/masic_box_open.png" />')
        //  $(".exefin").append($("#tres_id"+index).parent().clone().attr('select','no').css('width','10%'));
        //  score++;
        //  treasures[index].iscorrect = true;
        // }

        if (correctAns) {
          $('#tres_id' + index)
            .attr('src', 'images/treasure/masic_box_open.png')
            .removeClass('treasuremove')
            .attr('select', 'yes');
          $('.treasure_exefin').append(
            "<img class='treasure_box' src = 'images/treasure/masic_box_open.png'> </img>"
          );
          score++;
          treasures[index].iscorrect = true;
        } else {
          $('#tres_id' + index)
            .attr('src', 'images/treasure/masic_box_empty01.png')
            .removeClass('treasuremove');
        }
      } else if (correctAns && treasures[index].iscorrect == false) {
        treasures[index].iscorrect == true;
      }
    }
  };

  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.treasure_exefin').show(0);
      $('.contentblock').hide(0);
      $('.treasureboard').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      // create_exercise_menu_bar_treasure()
    } else {
      $('#tres_id' + index).addClass('treasuremove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}
function monkeyscoreTemplate() {
  //for rti chapters
  $donar = 'rti';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var mnkscr = [];
  var i = 0;
  var totalImages = 12;
  var eggsArray = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;

  this.init = function (noOfQues) {
    $('.activity_container').prepend('<div class="pagenoboard"></div>');
    $('.congratulation').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    for (var scr_id = 0; scr_id < noOfQues; scr_id++) {
      mnkscr.push({
        cracked: false,
        iscorrect: false,
      });
      //console.log(mnkscr);
      var pagenumber = $lang == 'en' ? scr_id + 1 : nepalicounter[scr_id];
      $('.pagenoboard').append(
        "<div class='pagenocontainer'><img id='scr_id" +
          scr_id +
          "' data-cracked='false' src=' ' class='imgtop'/><p class='pno'>" +
          pagenumber +
          '</p></div>'
      );
      //$(".treasureboard").append("<div class='treasurecontainer'><img id='tres_id"+tres_id+"' data-cracked='false' src='images/treasure/masic_box_close.png' class='treasures'/></div>");
    }
    $('#scr_id' + index)
      .parent()
      .addClass('pagenomove');
  };

  this.update = function (correctAns) {
    if (!mnkscr[index].iscorrect) {
      if (!mnkscr[index].cracked) {
        mnkscr[index].cracked = true;
        // if(correctAns){
        //  $("#tres_id"+index).removeClass('treasuremove');
        //  $("#tres_id"+index).parent().attr("select","yes").prepend('<img class="lampoverlap" src="images/treasure/masic_box_open.png" />')
        //  $(".exefin").append($("#tres_id"+index).parent().clone().attr('select','no').css('width','10%'));
        //  score++;
        //  treasures[index].iscorrect = true;
        // }

        if (correctAns) {
          $('#scr_id' + index)
            .attr('src', 'images/sundar/correct-1.png')
            .removeClass('pagenomove')
            .attr('select', 'yes')
            .show(0);
          $('#scr_id' + index)
            .parent()
            .removeClass('pagenomove');
          score++;
          mnkscr[index].iscorrect = true;
        } else {
          $('#scr_id' + index)
            .attr('src', 'images/sundar/wrong01.png')
            .removeClass('pagenomove')
            .show(0);
        }
      } else if (correctAns && mnkscr[index].iscorrect == false) {
        mnkscr[index].iscorrect == true;
      }
    }
  };

  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html(score);
      $('#total').html(TotalQues);
      $('[select=yes]').fadeOut(1000).hide(0);
      $('.contentblock').hide(0);
      $('.pagenoboard').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar_monkeyscore();
    } else {
      $('#scr_id' + index)
        .parent()
        .addClass('pagenomove');
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

function RhinoTemplate(questioncounter) {
  var checkpoint_positions = [];
  var screen_factor;
  var current_question = 0;
  var screen_position = 0;
  var full_width;
  //for rti chapters
  $donar = 'rti';
  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var boxes = [];

  var rhino_wearing_bandage = '';
  var rhino_percentage_correct = 0;

  var bg_images;
  var divs_to_disable;
  var slec_btn_sound;

  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  if (questioncounter == null) {
    var questioncounter = 0;
  }
  //some functions

  function get_checkpoints(number_of_questions) {
    full_width = 18 * (number_of_questions + 1);
    var dx = 88 / (number_of_questions + 1);
    var flag_position = dx * (number_of_questions + 1);
    $('#finish_flag_rhino').css({
      left: flag_position + '%',
    });
    $('.scoreboard_rhino').css({
      width: full_width + '%',
    });
    $('.scoreboardbg_rhino').css({
      width: full_width + '%',
    });
    for (var m = 0; m < number_of_questions; m++) {
      var box_left_position = dx * (1 + m);
      screen_factor = full_width / 100;
      var position_1_rhino =
        Math.round((box_left_position - 6.5 / screen_factor) * 100) / 100;
      var position_2_rhino =
        Math.round((position_1_rhino + 10 / screen_factor) * 100) / 100;

      var jump_positions = [position_1_rhino, position_2_rhino];
      checkpoint_positions.push(jump_positions);
      var obstacle_class = 'obstacle_box_' + m;
      obstacle_class = obstacle_class.toString();
      var div_string =
        '<img class=' +
        obstacle_class +
        ' src = images/scoring_rhino/hurdle01.png>';
      $('.scoreboard_rhino').append(div_string);
      $('.' + obstacle_class).addClass('obstacle_box_rhino');
      $('.' + obstacle_class).css({
        left: box_left_position + '%',
      });
    }
    var position_1_rhino =
      Math.round((dx * (1 + number_of_questions) - 6.5 / screen_factor) * 100) /
      100;
    var position_2_rhino =
      Math.round((position_1_rhino + 8 / screen_factor) * 100) / 100;
    checkpoint_positions.push([position_1_rhino, position_2_rhino]);
  }

  function add_bg(bg_arr) {
    var m = 0;
    var score_width = $('.scoreboardbg_rhino').width();
    var is_loaded = true;
    function load_bg(score_width, m) {
      var obstacle_class = 'back_img_' + m;
      var rand_scale = Math.round(Math.random() * 4);
      rand_scale = rand_scale % 2 ? 1 : -1;
      var arr_idx = Math.round(Math.random() * (bg_arr.length - 1));
      var div_string =
        '<img class=' +
        obstacle_class +
        ' src = ' +
        'images/scoring_rhino/bg/' +
        bg_arr[arr_idx] +
        '>';
      $('.scoreboardbg_rhino').append(div_string);
      $('.' + obstacle_class).addClass('back_img_rhino');
      $('.' + obstacle_class).on('load', function () {
        if (this.complete) {
          m++;
          if (
            $('.' + obstacle_class).position().left >
            score_width - $('.' + obstacle_class).width()
          ) {
            return true;
          }
          if (m > 50) {
            return true;
          }
          load_bg(score_width, m);
        } else {
          setTimeout(function () {
            load_bg(score_width, m);
          }, 17);
        }
      });
    }
    load_bg(score_width, m);
  }

  function clicked_correct(disable_divs) {
    $('#rhino_sprite').removeClass('jump_rhino');
    $('#rhino_sprite').attr(
      'src',
      'images/scoring_rhino/' + rhino_wearing_bandage + 'run.gif'
    );
    if (typeof disable_divs !== 'undefined') {
      for (var i = 0; i < disable_divs.length; i++) {
        $('.' + disable_divs[i]).css('pointer-events', 'none');
      }
    }
    // $('#activity-page-next-btn-enabled, #activity-page-prev-btn-enabled').css('pointer-events', 'none');
    $('#rhino_sprite').animate(
      { left: checkpoint_positions[current_question][0] + '%' },
      500,
      'linear',
      function () {
        //for sound
        // buzz.all().stop();
        slec_btn_sound = new buzz.sound('sounds/common/rhino_scoring/jump.ogg');
        slec_btn_sound.play();
        $('#rhino_sprite').addClass('jump_rhino');
        $('#rhino_sprite').animate(
          { left: checkpoint_positions[current_question][1] + '%' },
          500,
          'linear',
          $('#rhino_sprite').attr(
            'src',
            'images/scoring_rhino/' + rhino_wearing_bandage + 'rhino01.png'
          )
        );
        setTimeout(function () {
          current_question++;
          if (typeof disable_divs !== 'undefined') {
            for (var i = 0; i < disable_divs.length; i++) {
              $('.' + disable_divs[i]).css('pointer-events', 'all');
            }
          }
          // $('#activity-page-next-btn-enabled, #activity-page-prev-btn-enabled').css('pointer-events', 'all');
        }, 500);
        if (
          $('#rhino_sprite').offset().left / $('.board').width() > 0.5 &&
          100 - screen_position < full_width - 9
        ) {
          screen_position -= 18;
          setTimeout(function () {
            $('.scoreboard_rhino').animate(
              { left: screen_position + '%' },
              1000
            );
            $('.scoreboardbg_rhino').animate(
              { left: screen_position + '%' },
              1000
            );
          }, 500);
        }
      }
    );
  }
  function clicked_incorrect(disable_divs) {
    $('#rhino_sprite').removeClass('jump_rhino');
    $('#rhino_sprite').attr(
      'src',
      'images/scoring_rhino/' + rhino_wearing_bandage + 'run.gif'
    );
    if (typeof disable_divs !== 'undefined') {
      for (var i = 0; i < disable_divs.length; i++) {
        $('.' + disable_divs[i]).css('pointer-events', 'none');
      }
    }
    // $('#activity-page-next-btn-enabled, #arctivity-page-prev-btn-enabled').css('pointer-events', 'none');
    $('#rhino_sprite').animate(
      { left: checkpoint_positions[current_question][0] + '%' },
      500,
      'linear',
      function () {
        slec_btn_sound = new buzz.sound('sounds/common/rhino_scoring/fail.ogg');
        slec_btn_sound.play();
        rhino_wearing_bandage = 'bandage_';
        $('.obstacle_box_' + current_question).attr(
          'src',
          'images/scoring_rhino/hurdle02.png'
        );
        $('#rhino_sprite').animate(
          { left: checkpoint_positions[current_question][1] + '%' },
          500,
          'linear',
          $('#rhino_sprite').attr('src', 'images/scoring_rhino/laydown_2.png')
        );
        setTimeout(function () {
          // $('.obstacle_box_'+current_question).hide(0);
          current_question++;
          if (typeof disable_divs !== 'undefined') {
            for (var i = 0; i < disable_divs.length; i++) {
              $('.' + disable_divs[i]).css('pointer-events', 'all');
              // $('#activity-page-next-btn-enabled, #activity-page-prev-btn-enabled').css('pointer-events', 'all');
            }
          }
        }, 1300);
        if (
          $('#rhino_sprite').offset().left / $('.board').width() > 0.5 &&
          100 - screen_position < full_width - 9
        ) {
          screen_position -= 18;
          setTimeout(function () {
            $('.scoreboard_rhino').animate(
              { left: screen_position + '%' },
              1000
            );
            $('.scoreboardbg_rhino').animate(
              { left: screen_position + '%' },
              1000
            );
          }, 500);
        }
      }
    );
  }

  function go_and_dance() {
    rhino_percentage_correct = score / TotalQues;
    var dancing_gif_rhino = 'dance.gif';
    if (rhino_percentage_correct == 1) {
      dancing_gif_rhino = 'dance.gif';
    } else if (rhino_percentage_correct >= 0.7) {
      dancing_gif_rhino = 'dance_2.gif';
    } else if (rhino_percentage_correct >= 0.4) {
      dancing_gif_rhino = 'bandage_run.gif';
    } else if (rhino_percentage_correct >= 0.1) {
      dancing_gif_rhino = 'tired.gif';
    } else {
      dancing_gif_rhino = 'knocked_out.gif';
      // dancing_gif_rhino = 'knocked_out.gif';
    }

    $('.contentblock').hide(0);
    $('.scoreboard_rhino, .scoreboardbg_rhino').addClass('zoom_rhino');
    $('.markboard_rhino').fadeOut(1000);

    $('#rhino_sprite').attr(
      'src',
      'images/scoring_rhino/' + rhino_wearing_bandage + 'run.gif'
    );
    $('#rhino_sprite').animate(
      { left: checkpoint_positions[TotalQues][1] + '%' },
      500,
      'linear',
      function () {
        setTimeout(function () {
          $('#rhino_sprite').attr(
            'src',
            'images/scoring_rhino/' + dancing_gif_rhino
          );
        }, 1000);
      }
    );

    create_exercise_menu_bar_rhino();
    $('#activity-page-next-btn-enabled').hide(0);
  }

  //public functions

  this.init = function (noOfQues, bg_arr) {
    if (!$('.scoreboard_rhino').length) {
      $('.mainBox>div')
        .eq(0)
        .prepend(
          '<div class="scoreboard_rhino"><img id="rhino_sprite" src="images/scoring_rhino/rhino01.png"/><img id="finish_flag_rhino" src="images/scoring_rhino/flag.png"/></div><div class="scoreboardbg_rhino"></div><div class="markboard_rhino"><img id="box_icon_rhino" src="images/scoring_rhino/hurdle01.png"/><p id="player_score_rhino">0/0</p></div>'
        );
    }
    TotalQues = typeof noOfQues === 'number' ? noOfQues : 10;
    loadTimelineProgress(TotalQues, index + 1);
    bg_images = Array.isArray(bg_arr)
      ? bg_arr
      : ['bg01.png', 'bg02.png', 'bg03.png'];
    for (var box = 0; box < noOfQues; box++) {
      boxes.push({
        cracked: false,
        iscorrect: false,
      });
    }
    get_checkpoints(TotalQues);
    add_bg(bg_images);
    $('#player_score_rhino').html(
      ole.nepaliNumber(score, $lang) +
        ' / ' +
        ole.nepaliNumber(TotalQues, $lang)
    );
  };

  this.update = function (correctAns, divs_to_disable) {
    if (!boxes[index].iscorrect) {
      if (!boxes[index].cracked) {
        boxes[index].cracked = true;
        if (correctAns) {
          clicked_correct(divs_to_disable);
          score++;
          $('#player_score_rhino').html(
            ole.nepaliNumber(score, $lang) +
              ' / ' +
              ole.nepaliNumber(TotalQues, $lang)
          );
          boxes[index].iscorrect = true;
        } else {
          clicked_incorrect(divs_to_disable);
        }
      } else if (correctAns && boxes[index].iscorrect == false) {
        boxes[index].iscorrect == true;
      }
    }
  };

  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      go_and_dance();
    } else {
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

function NumberTemplate() {
  //for rti chapters
  $donar = '';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var iscorrect = [];
  var i = 0;
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;

  this.init = function (noOfQues) {
    $('.mainBox > div').prepend('<p class="ex-number-template-score"></p>');
    $('.congratulation').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    for (var egg = 0; egg < noOfQues; egg++) {
      iscorrect.push(true);
    }
    $('.ex-number-template-score').html(
      ole.nepaliNumber(score, $lang) +
        ' / ' +
        ole.nepaliNumber(TotalQues, $lang)
    );
  };

  this.update = function (correctAns) {
    if (iscorrect[index]) {
      if (correctAns) {
        score++;
        $('.ex-number-template-score').html(
          ole.nepaliNumber(score, $lang) +
            ' / ' +
            ole.nepaliNumber(TotalQues, $lang)
        );
      } else {
        iscorrect[index] == true;
      }
    } else if (correctAns && iscorrect[index] == false) {
      iscorrect[index] == true;
    }
  };

  this.updatescore = function (newscore) {
    score = newscore;
    $('.ex-number-template-score').html(newscore + ' / ' + TotalQues);
  };

  this.gotoNext = function () {
    index++;
    console.log('index:', index, 'TotalQues : ' + TotalQues);
    if (index == TotalQues) {
      $('#score').html(ole.nepaliNumber(score, $lang));
      console.log(ole.nepaliNumber(score, $lang));
      $('#total').html(TotalQues);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      create_exercise_menu_bar();
    } else {
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}
function NumberTemplateOnly() {
  //for rti chapters
  $donar = 'rti';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var iscorrect = [];
  var i = 0;
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;

  this.init = function (noOfQues) {
    $('.mainBox > div').prepend('<p class="ex-number-template-score"></p>');
    $('.congratulation').hide(0);
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    for (var egg = 0; egg < noOfQues; egg++) {
      iscorrect.push(true);
    }
    $('.ex-number-template-score').html(
      ole.nepaliNumber(score, $lang) +
        ' / ' +
        ole.nepaliNumber(TotalQues, $lang)
    );
  };

  this.update = function (correctAns) {
    if (iscorrect[index]) {
      if (correctAns) {
        // score++
        $('.ex-number-template-score').html(
          ole.nepaliNumber(score, $lang) +
            ' / ' +
            ole.nepaliNumber(TotalQues, $lang)
        );
      } else {
        iscorrect[index] == true;
      }
    } else if (correctAns && iscorrect[index] == false) {
      iscorrect[index] == true;
    }
  };

  this.updatescore = function (newscore) {
    score = newscore;
    $('.ex-number-template-score').html(newscore + ' / ' + TotalQues);
  };

  this.gotoNext = function () {
    index++;
    console.log('index:', index, 'TotalQues : ' + TotalQues);
    if (index == TotalQues) {
      console.log(index, TotalQues);
      $('#score').html(ole.nepaliNumber(score, $lang));
      console.log(ole.nepaliNumber(score, $lang));

      $('#total').html(TotalQues);
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      // $('.congratulation').show(0)
      create_exercise_menu_bar();
    } else {
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

// score board template
function scoreBoardTemplate() {
  //for rti chapters
  $donar = 'rti';

  var index = 0;
  var incorrectFlag = false;
  var correctFlag = false;
  var iscorrect = [];
  var i = 0;
  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ];
  var questioncounter = 0;
  var title = 'SCORE BOARD';
  var correct = 'Correct';
  var totalScore = 'Total Score';
  if ($lang == 'np') {
    title = 'प्राप्ताङ्क';
    correct = 'सही उत्तर';
    totalScore = 'पूर्णाङ्क';
  }

  this.init = function (noOfQues) {
    var totalQuesNo =
      $lang == 'en' ? noOfQues : ole.nepaliNumber(noOfQues, $lang);
    $('.mainBox >div').prepend(
      '<div class="scoreboardtemp">' +
        '<div class="scoreboardtitle"><p class="centertext">' +
        title +
        '</p></div>' +
        '<div class="scoreboardcorrect"><p class="centertext">' +
        correct +
        '</p></div>' +
        '<div class="scoreboardtotalScore"><p class="centertext">' +
        totalScore +
        '</p></div>' +
        '<div class="scoreboardScoreVal"><p class="centertext">' +
        ($lang == 'en' ? score : ole.nepaliNumber(score, $lang)) +
        '</p></div>' +
        '<div class="scoreboardtotalScoreVal"><p class="centertext">' +
        totalQuesNo +
        '</p></div>' +
        '<div class="greenFlag"><img class="relativecls greenfrog" src="images/scoreboard/green_flag.png"/></div>' +
        '<div class="redFlag"><img class="relativecls redfrog" src="images/scoreboard/red_flag.png"/></div>' +
        '<div>'
    );
    $('.congratulation').hide(0);
    for (var i = 0; i < noOfQues; i++) {
      iscorrect.push(true);
    }
    TotalQues = noOfQues;
    loadTimelineProgress(TotalQues, index + 1);
    $('.scoreboardScoreVal')
      .find('p')
      .html($lang == 'en' ? score : ole.nepaliNumber(score, $lang));
  };

  this.update = function (correctAns) {
    if (iscorrect[index]) {
      if (correctAns) {
        score++;
        $('.scoreboardScoreVal')
          .find('p')
          .html($lang == 'en' ? score : ole.nepaliNumber(score, $lang));
        $('.greenfrog').attr('src', 'images/scoreboard/green_flag.gif');
        $('.redfrog').attr('src', 'images/scoreboard/red_flag.png');
      } else {
        iscorrect[index] == true;
        $('.redfrog').attr('src', 'images/scoreboard/red_flag.gif');
        $('.greenfrog').attr('src', 'images/scoreboard/green_flag.png');
      }
    } else if (correctAns && iscorrect[index] == false) {
      iscorrect[index] == true;
    }
  };

  this.updatescore = function (newscore) {
    score = newscore;
    $('.scoreboardScoreVal')
      .find('p')
      .html($lang == 'en' ? score : ole.nepaliNumber(score, $lang));
  };

  this.gotoNext = function () {
    index++;
    if (index == TotalQues) {
      $('#score').html($lang == 'en' ? score : ole.nepaliNumber(score, $lang));
      $('#total').html(
        $lang == 'en' ? score : ole.nepaliNumber(TotalQues, $lang)
      );
      $('.contentblock').hide(0);
      $('.exenextbtn').show(0);
      $('.congratulation').show(0);
      $('.scoreboard').css('opacity', 0.3);
      create_exercise_menu_bar_scoreBoard();
    } else {
      loadTimelineProgress(TotalQues, index + 1);
    }
  };
  this.numberOfQuestions = function () {
    if ($lang == 'en') {
      $('#num_ques').html(questioncounter + 1 + '. ');
    }
    if ($lang == 'np') {
      $('#num_ques').html(nepalicounter[questioncounter] + '. ');
    }
    questioncounter++;
  };
}

// star template for score board
class StarTemplate {
  constructor(isExercise = true, levelScore = 50, scoreIncrement = 5) {
    this.isExe = isExercise;
    this.levelScore = levelScore;
    this.scoreIncrement = scoreIncrement;
    this.score = 0;
    this.index = 0;
    this.trackCorrectQn = 0;
    this.trackIncorrectQn = 0;
    this.wasPreviousIncorrect = false;
    this.trackStar = 0;
    this.totalLevels = 1;
    this.totalQuesPerLevel = 0;
  }

  // star svg property
  starsvg = `
      <svg viewBox="0 -130 650 800" width="3em" height="100%" title="star">
      <filter id="drop-shadow">
        <feOffset in="SourceAlpha" dx="0" dy="0" result="offset"/>
        <feFlood flood-color="#F9FA35" flood-opacity="0.15" result="color"/>
        <feComposite in="color" in2="offset" operator="in" result="shadow"/>
        <feGaussianBlur in="shadow" stdDeviation="10" result="blur"/>
        <feOffset in="blur" dx="0" dy="0" result="finalOffset"/>
        <feComponentTransfer in="finalOffset" result="spread">
          <feFuncA type="table" tableValues="0 1 1 1 1 1"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="spread"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <defs>
          <linearGradient id="starGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stop-color="#FFD952"></stop>
            <stop offset="100%" stop-color="#F19100"></stop>
          </linearGradient>
          <linearGradient id="starGradientInactive" gradientTransform="rotate(45)">
            <stop offset="0%" stop-color="#909090"></stop>
            <stop offset="100%" stop-color="#413B31"></stop>
          </linearGradient>
          <mask id="halfStarMask">
            <rect x="0" y="0" width="45%" height="100%" fill="white" stroke="none" />
          </mask>
        </defs>
        <path id="full-star" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        <path style="opacity: 0" fill="url(#starGradient)" id="half-star" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" mask="url(#halfStarMask)"></path>
      </svg>
    `;

  // level and grand properties
  level = 1;
  grandScore = 0;

  // general string properties
  levelString = $lang === 'en' ? 'Level' : 'स्तर';
  messageString = $lang === 'en' ? 'COMPLETED!' : 'COMPLETED!';
  rewardString = $lang === 'en' ? 'REWARDS' : 'REWARDS';
  playAgainString = $lang === 'en' ? 'PLAY AGAIN' : 'फेरि खेल्नुहोस्';
  nextLevelString = $lang === 'en' ? 'NEXT LEVEL' : 'अर्को स्तर';
  mainMenuString = $lang === 'en' ? 'MAIN MENU' : 'मुख्य मेनु';

  // general images src
  coinimgsrc = 'images/template/star/coin.png'; //coin image src
  buttonbgsrc = 'images/template/star/button.png'; // button background image src
  summarybgsrc = 'images/template/star/starTempBg.png'; // star summary background image src
  homeiconsrc = 'images/template/star/home_icon.png'; // home icon image src
  coinboxsrc = 'images/template/star/coin_box.png'; // coin box image src

  // star constraint for next level
  starConstraint = 2;

  // star level score
  getStarLevelScore(isGrandScore = false) {
    return `
     <div class="template-score">
      <img src="${this.coinimgsrc}" class="star-template__scoreimg" />
      <span class="star-template__score ${
        isGrandScore ? 'grand-score' : ''
      }">${ole
      .nepaliNumber(this.score, $lang)
      .toString()
      .padStart(3, ole.nepaliNumber(0, $lang))}</span>
    </div>`;
  }

  // star summary buttons generate
  getStarSummaryButtons(btnname) {
    return `
      <button class="star-summary__button star-summary__button--${btnname.toLowerCase()}"       
      >
        <img src="${this.buttonbgsrc}" class="star-summary__button--img" />
        ${this[`${btnname}String`]}
      </button>
    `;
  }

  // star template outline method
  generateTemplateOutline() {
    const starLayoutTemplate = `
      <div class="star-score__template">
        <div class="template-stars"></div>

        ${this.getStarLevelScore()}
      </div>

      <div class="star-template__summary">
        <div class="template-summary__content">
          <img src="${this.summarybgsrc}" class="template-scoreimg" />
          <p class="template-summary__content--level">${
            this.levelString
          } ${ole.nepaliNumber(this.level, $lang)} </p>

          <header class="template-summary__header">
            <button class="star-summary__button--mainmenu">
              <img class="template-star__home" src="${this.homeiconsrc}" >
            </button>
            <img class="template-star__scorebg" src="${this.coinboxsrc}">

            ${this.getStarLevelScore(true)}
          </header>

          <div class="template-summary__content--score">
            <div class="template-summary__title">${this.messageString}</div>
            <div class="template-summary__stars"></div>

            <div class="template-summary__reward">
              <p class="template-summary__reward--title">${
                this.rewardString
              }</p>
              ${this.getStarLevelScore()}
            </div>

          </div>
        </div>

        <div class='template-summary__btngrp'>
            ${this.getStarSummaryButtons('playAgain')}
            ${this.getStarSummaryButtons('nextLevel')}
            ${this.getStarSummaryButtons('mainMenu')}
        </div>
      </div>
    `;

    $('.board').prepend(starLayoutTemplate);
  }

  // initialize method
  init(noOfLevels, noOfStars = 3) {
    this.generateTemplateOutline();

    this.totalLevels = noOfLevels; //setting total levels
    this.totalQuesPerLevel = noOfStars * 2; //setting total questions per level

    const starsHTML = Array.from({ length: noOfStars }, (_, i) => {
      return $(this.starsvg)
        .attr({ 'data-starno': i + 1 })
        .prop('outerHTML');
    }).join('');

    $('.template-stars, .template-summary__stars').append(starsHTML);

    //setting the position of stars to show arc
    $.each($('.template-summary__stars svg'), (i, star) => {
      $(star).css({
        top: `${
          i < noOfStars / 2
            ? (-120 / noOfStars) * i
            : (-120 / noOfStars) * (noOfStars - i - 1)
        }%`,
      });
    });

    // click event for summary
    this.gotoMainMenu();

    // click event for next level
    this.playAgain();

    // click event for next level
    this.gotoNextLevel();

    // disabling the next button
    $('.star-summary__button--nextlevel').attr('disabled', true);
  }

  // goto next page
  gotoNext() {
    this.index++;
    if (this.index == this.totalLevels) {
      this.isExe && create_exercise_menu_bar();
    } else {
      loadTimelineProgress(this.totalLevels, this.index + 1);
    }
  }

  // reset level method
  resetLevel() {
    $('.star-template__score.grand-score').text(
      ole
        .nepaliNumber(this.grandScore, $lang)
        .toString()
        .padStart(3, ole.nepaliNumber(0, $lang))
    );
    // resetting the trackCorrectQn and score and trackStar
    this.trackCorrectQn = 0;
    this.trackIncorrectQn = 0;
    this.score = 0;
    this.trackStar = 0;
  }

  // update score method
  updateScore() {
    // update score
    $('.star-template__score').text(
      ole
        .nepaliNumber(this.score, $lang)
        .toString()
        .padStart(3, ole.nepaliNumber(0, $lang))
    );
  }

  // update score method
  update(iscorrect) { 
    if (iscorrect) {
      // update stars iff previous update was not incorrect
      if (!this.wasPreviousIncorrect) {
        this.score += this.levelScore + (this.level - 1) * this.scoreIncrement;

        this.trackStar += 1 / 2;

        // updating score
        this.updateScore();

        // disable the next btn iff at least two stars are not earned
        this.trackStar < this.starConstraint
          ? $('.star-summary__button--nextlevel').attr('disabled', true)
          : $('.star-summary__button--nextlevel').attr('disabled', false);

        $.each(
          $(':is(.template-summary__stars, .template-stars) svg'),
          (i, star) => {
            // for half star
            parseInt($(star).data('starno')) === this.trackStar + 1 / 2 &&
              $(star).attr('class', 'active');
            // for full star
            parseInt($(star).data('starno')) === this.trackStar &&
              $(star).attr('class', 'full');
          }
        );

        this.trackCorrectQn++;
      }
      //resetting the wasPreviousIncorrect
      this.wasPreviousIncorrect = false;
    } else {
      if (!this.wasPreviousIncorrect) {
        // if previous update was also incorrect
        this.trackIncorrectQn++;
        this.wasPreviousIncorrect = true;
      }
    }

    // console.log(this.trackCorrectQn, this.trackIncorrectQn);

    // goto next level if all questions are answered
    if (
      this.trackCorrectQn >= this.totalQuesPerLevel - this.trackIncorrectQn &&
      !this.wasPreviousIncorrect
    ) {
      // updating grand totalscore
      this.grandScore += this.score;

      // reseting the level
      this.resetLevel();

      // incrementing level
      this.level++;

      return $('.star-template__summary')
        .fadeIn(500)
        .css({ transform: 'scale(1)' });
    }
  }

  // goto main menu method
  gotoMainMenu() {
    $('.star-summary__button--mainmenu, .star-summary__button--mainmenu').click(
      () =>
        $(
          this.isExe
            ? '.linkClick.activeexeClass'
            : '.head-pages-list.activePageClass'
        ).click()
    );
  }
  // play again method
  playAgain() {
    $('.star-summary__button--playagain').click(() => {
      // resetting grand totalscore
      this.grandScore -= score;
      this.score = 0;
      this.updateScore();
      this.resetLevel();

      // decrementing level
      this.level--;

      // hiding summary
      $('.star-template__summary').fadeOut(500).css({ transform: 'scale(.2)' });

      // resetting stars
      $(':is(.template-summary__stars, .template-stars) svg').attr('class', '');
    });
  }

  // next level method
  gotoNextLevel() {
    $('.star-summary__button--nextlevel').click(() => {
      this.index++;

      // console.log(this.index, this.totalLevels);

      if (this.index === this.totalLevels) {
        // resseting the summary
        $('.star-template__summary')
          .fadeOut(500)
          .css({ transform: 'scale(.2)' });

        // hiding the board and congratulation
        if (this.isExe) {
          create_exercise_menu_bar();
          return $('.board, .congratulation').hide();
        }

        return ole.footerNotificationHandler.lessonEndSetNotification();
      }
      $('#activity-page-next-btn-enabled').click();
    });
  }
}

function create_exercise_menu_bar_scoreBoard() {
  var msg_string_1;
  var msg_string_2;
  var msg_string_3;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_1 = 'Repeat Exercise';
      msg_string_2 = 'Go to Exercise #' + (current_number + 2);
      msg_string_3 = 'Repeat Chapter';
    } else if ($lang == 'np') {
      msg_string_1 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
      msg_string_2 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
      msg_string_3 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_1 = 'Repeat Exercise';
      msg_string_2 = 'Main Page';
      msg_string_3 = 'Repeat Chapter';
    } else if ($lang == 'np') {
      msg_string_1 = 'फेरि पढौँ';
      msg_string_2 = 'मुख्य सूची';
      msg_string_3 = 'फेरि खेलौँ';
    }
  }

  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext = 'Congratulations, you got all the answers correct!!';
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
    } else if (score_percent == 0) {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ।';
    } else if (score_percent == 0) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक।';
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दिनुभयो!!!';
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्नुहन्छ।';
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ।';
    } else if (score_percent == 0) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="treasure_congratulation"> <p class="treasure_congratulationtext"> ' +
        congratstext +
        ' </p> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn1" onclick="playExAgain(' +
        lastpageflag +
        ')"><p>' +
        msg_string_1 +
        '</div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn2" onclick="go_to_menu_page(' +
        lastpageflag +
        ')"><p>' +
        msg_string_2 +
        '</div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn3" onclick="gotoLesson(' +
        lastpageflag +
        ')"><p>' +
        msg_string_3 +
        '</div>'
    );
  $('.tretemp-btn-btn1,.tretemp-btn-btn2,.tretemp-btn-btn3').css({
    top: '92%',
    background: '#754c24',
    'border-radius': '.7vmin',
    padding: '1%',
  });
  $('.mainBox > div')
    .eq(0)
    .append('<img class="bg_full" src="images/score_board.png">');
  $('.greenFlag').css('bottom', '15%');
  $('.redFlag').css('bottom', '45%');
  $('.scoreboardScoreVal').css('bottom', '-18%');
  $('.scoreboardtotalScoreVal').css('bottom', '-3%');
  $('.scoreboardtitle').css('top', '25%');
  $('.scoreboardcorrect').css('top', '26%');
  $('.scoreboardtotalScore').css('top', '20%');
  $('.treasure_congratulation').css('top', '10%');
  $('.youscored').css({ top: '-80%', color: 'white' });
  $('.greenfrog').attr('src', 'images/scoreboard/green_flag.png');
  $('.redfrog').attr('src', 'images/scoreboard/red_flag.png');
  if ($lang == 'en') {
    if (score_percent == 1) {
      $('.tretemp-btn-btn2 > p').css({ color: 'yellow' });
    } else if (score_percent >= 0.7) {
      $('.tretemp-btn-btn1 > p').css({ color: 'yellow' });
    } else if (score_percent >= 0.4) {
      $('.tretemp-btn-btn1 > p').css({ color: 'yellow' });
    } else if (score_percent >= 0.1) {
      $('.tretemp-btn-btn3 > p').css({ color: 'yellow' });
    } else if (score_percent == 0) {
      $('.tretemp-btn-btn3 > p').css({ color: 'yellow' });
    }
  }
}
function create_exercise_menu_bar_for_length() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;
  var repeat_exercise_btn_text, repeat_chapter_btn_text;
  $('.ex-number-template-score').css({
    'text-align': 'center',
    width: '20%',
    'font-size': '3vw',
    left: '50%',
    'border-radius': '1vmin',
    top: '20%',
    transform: 'translateX(-50%)',
  });
  repeat_chapter_btn_text = 'REPEAT CHAPTER';
  repeat_exercise_btn_text = 'REPEAT EXERCISE';
  if ($lang == 'np') {
    repeat_chapter_btn_text = 'फेरि पढौँ';
    repeat_exercise_btn_text = 'फेरि खेलौँ';
  }
  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div>'
      );
    $('.main_menu_btn > p').css({
      left: '55%',
      'font-size': '1.5vw',
    });
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'MAIN MENU';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूची';
    }
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="repeat_exercise_btn" onclick="playExAgain(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_exercise_btn_text +
          '</p></div> <div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div><div class="repeat_chapter_btn" onclick="gotoLesson(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_chapter_btn_text +
          '</p></div>'
      );
  }
  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext =
        'HURREY!! <br/> You have learnt how to find the length of the objects using ruler.';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext =
        'हुर्रे!!<br/> तिमीले रुलरको प्रयोग गरेर वस्तुहरूको लम्बाइ पत्ता लगाउन जान्यौ।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext =
        'हुर्रे!!<br/> तिमीले रुलरको प्रयोग गरेर वस्तुहरूको लम्बाइ पत्ता लगाउन जान्‍नुभयो।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="congratulation"> <p class="congratulationtext"> ' +
        congratstext +
        ' </p></p> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append('<img class="bg_full" src="images/transitionpages/bg.png">');
}

function create_exercise_menu_bar() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;
  var repeat_exercise_btn_text, repeat_chapter_btn_text;
  $('.ex-number-template-score').css({
    'text-align': 'center',
    width: '20%',
    'font-size': '3vw',
    left: '50%',
    'border-radius': '1vmin',
    top: '20%',
    transform: 'translateX(-50%)',
  });
  repeat_chapter_btn_text = 'REPEAT CHAPTER';
  repeat_exercise_btn_text = 'REPEAT EXERCISE';
  if ($lang == 'np') {
    repeat_chapter_btn_text = 'फेरि पढौँ';
    repeat_exercise_btn_text = 'फेरि खेलौँ';
  }
  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div>'
      );
    $('.main_menu_btn > p').css({
      left: '55%',
      'font-size': '1.5vw',
    });
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'MAIN MENU';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूची';
    }
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="repeat_exercise_btn" onclick="playExAgain(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_exercise_btn_text +
          '</p></div> <div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div><div class="repeat_chapter_btn" onclick="gotoLesson(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_chapter_btn_text +
          '</p></div>'
      );
  }

  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext = 'Congratulations, you got all the answers correct!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दिनुभयो!!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="congratulation"> <p class="congratulationtext"> ' +
        congratstext +
        ' </p> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append('<img class="bg_full" src="images/transitionpages/bg.png">');
}
function create_exercise_menu_bar_for_ramailo_mela() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var prase_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;
  var repeat_exercise_btn_text, repeat_chapter_btn_text;
  $('.ex-number-template-score').css({
    'text-align': 'center',
    width: '20%',
    'font-size': '3vw',
    left: '50%',
    'border-radius': '1vmin',
    top: '20%',
    transform: 'translateX(-50%)',
  });
  repeat_chapter_btn_text = 'फेरि पढौँ';
  repeat_exercise_btn_text = 'फेरि खेलौँ';
  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div>'
      );
    $('.main_menu_btn > p').css({
      left: '55%',
      'font-size': '1.5vw',
    });
  } else {
    lastpageflag = true;
    msg_string_final = 'मुख्य सूची';
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="repeat_exercise_btn" onclick="playExAgain(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_exercise_btn_text +
          '</p></div> <div class="main_menu_btn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div><div class="repeat_chapter_btn" onclick="gotoLesson(' +
          lastpageflag +
          ')"> <img src="images/transitionpages/basket.png"><p class="nxtbtntext">' +
          repeat_chapter_btn_text +
          '</p></div>'
      );
  }

  prase_text =
    'आज तिमिले अर्थ सामीप्य भएका शब्दहरू चिन्‍न, उच्चारण गर्न, अर्थ जान्‍न र प्रयोग गर्न सिक्यौ।';
  if ($donar == 'rti') {
    prase_text =
      'आज तिमिले अर्थ सामीप्य भएका शब्दहरू चिन्‍न, उच्चारण गर्न, अर्थ जान्‍न र प्रयोग गर्न सिक्यौ।';
  }

  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext = 'Congratulations, you got all the answers correct!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमिले सबै उत्तर सही दिनुभयो!!!';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
      selectBtnAnim_color('main_menu_btn>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमिले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
      selectBtnAnim_color('repeat_exercise_btn>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक।';
      selectBtnAnim_color('repeat_chapter_btn>p');
    }
    scorecount_text =
      "तिमिले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="congratulation congratulation_rm"> <p class="congratulationtext congratulationtext_rm"> ' +
        congratstext +
        ' </p> <p class="youscored">' +
        scorecount_text +
        '</p><p class="prase_text_rm">' +
        prase_text +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append('<img class="bg_full" src="images/transitionpages/bg.png">');
}
// wooden buttons and shadow jumps with sounds
function selectBtnAnim_color(buttonclass) {
  $('.' + buttonclass).css('color', 'yellow');
}
function create_exercise_menu_bar_monkeyscore() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'Main page';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूची';
    }
  }

  if ($lang == 'en') {
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>.';
    var playtext = 'Repeat Exercise';
    var learnagaintext = 'Learn again';
  } else if ($lang == 'np') {
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
    var playtext = 'फेरि खेल';
    var learnagaintext = 'फेरि पढ';
  }

  if ($lang == 'np' && $donar == 'rti') {
    scorecount_text =
      "तिमिले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
    var playtext = 'फेरि खेलौँ';
    var learnagaintext = 'फेरि पढौँ';
  }

  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext = 'Congratulations, you got all the answers correct!!';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-3.png" class="mnk_img" >');
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-3.png" class="mnk_img">');
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-3.png" class="mnk_img" >');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-3.png" class="mnk_img">');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमिले सबै उत्तर सही दिनुभयो!!!';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/correct-3.png" class="mnk_img" >');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमिले अझै राम्रो गर्न सक्‍नुहुन्छ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-1.png" class="mnk_img" >');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      $('.mainBox > div')
        .eq(0)
        .append('<img src="images/sundar/incorrect-3.png" class="mnk_img">');
    }
    scorecount_text =
      "तिमिले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div').eq(0).append('<div class="background"></div>');
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="text_congratulation"> <p class="youscored">' +
        congratstext +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="monkey_congratulation"> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="exenxtbtn mainpage" onclick="go_to_menu_page(' +
        lastpageflag +
        ')"><div class= mnpg><img src="images/orange_arrow.png" class="orgarw"><p class="nxtbtntext mainpg">' +
        msg_string_final +
        '</p></div></div>'
    );
  $('.mainbox > div')
    .eq(0)
    .append('<div class="exenxtbtn stand"><img src="images/stand.png"></div>');
  $('.mainbox > div')
    .eq(0)
    .append(
      '<div class="exenxtbtn playagain" onclick="gotoLesson()"><div class="lrnagn"><img src="images/blue_arrow.png" class="bluearw""><p class="nxtbtntext ">' +
        learnagaintext +
        '</p></div></div>'
    );
  $('.mainbox > div')
    .eq(0)
    .append(
      '<div class="exenxtbtn repeat" onclick="playExAgain()"><div class="rpt"><img src="images/green_arrow.png" class="grnarw"><p class="nxtbtntext ">' +
        playtext +
        '</p></div></div>'
    );

  if (score_percent == 1) {
    $('.mnpg > p').css('color', 'yellow');
  } else if (score_percent >= 0.7) {
    $('.mnpg > p').css('color', 'yellow');
  } else if (score_percent >= 0.4) {
    $('.rpt > p').css('color', 'yellow');
  } else if (score_percent >= 0.1) {
    $('.rpt > p').css('color', 'yellow');
  } else {
    $('.lrnagn > p').css('color', 'yellow');
  }
}

function create_exercise_menu_bar_treasure() {
  var msg_string_1;
  var msg_string_2;
  var msg_string_3;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var score_percent = score / TotalQues;

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_1 = 'Repeat Exercise';
      msg_string_2 = 'Go to Exercise #' + (current_number + 2);
      msg_string_3 = 'Repeat Chapter';
    } else if ($lang == 'np') {
      msg_string_1 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
      msg_string_2 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
      msg_string_3 = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_1 = 'Repeat Exercise';
      msg_string_2 = 'Main Page';
      msg_string_3 = 'Repeat Chapter';
    } else if ($lang == 'np') {
      msg_string_1 = 'फेरि खेलौँ';
      msg_string_2 = 'मुख्य सूचीमा गरौँ';
      msg_string_3 = 'फेरि पढौँ';
    }
  }

  if ($lang == 'en') {
    if (score_percent == 1) {
      congratstext = 'Congratulations, you got all the answers correct!!';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.7) {
      congratstext =
        'Good job! You had most of the answers correct. Try the exercise again to get all answers correct. ';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.4) {
      congratstext =
        'Good try! You can still do better. You can repeat the lesson for better results.';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else if (score_percent >= 0.1) {
      congratstext =
        'Keep trying. You can still do better. You can repeat the lesson and try again.';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else {
      congratstext =
        'Sorry, you did not have a correct answer. Please repeat the lesson and try again.';
      selectBtnAnim('tretemp-btn-btn3>p');
    }
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>';
  } else if ($lang == 'np') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim('tretemp-btn-btn3>p');
    }
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    if (score_percent == 1) {
      congratstext = 'बधाई छ। तिमिले सबै उत्तर सही दिनुभयो!!!';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.7) {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
      selectBtnAnim('tretemp-btn-btn2>p');
    } else if (score_percent >= 0.4) {
      congratstext = 'राम्रो प्रयास! तिमिले अझै राम्रो गर्न सक्छौ।';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else if (score_percent >= 0.1) {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
      selectBtnAnim('tretemp-btn-btn1>p');
    } else {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
      selectBtnAnim('tretemp-btn-btn3>p');
    }
    scorecount_text =
      "तिमिले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="treasure_congratulation"> <p class="treasure_congratulationtext"> ' +
        congratstext +
        ' </p> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn1 boat-anim" onclick="playExAgain(' +
        lastpageflag +
        ')"><p>' +
        msg_string_1 +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn2 boat-anim" onclick="go_to_menu_page(' +
        lastpageflag +
        ')"><p>' +
        msg_string_2 +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="tretemp-btn-btn3 boat-anim" onclick="gotoLesson(' +
        lastpageflag +
        ')"><p>' +
        msg_string_3 +
        '</p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append('<img class="wave-1" src="images/treasure/wave01.png">');
  $('.mainBox > div')
    .eq(0)
    .append('<img class="wave-2" src="images/treasure/wave02.png">');
  $('.mainBox > div')
    .eq(0)
    .append('<img class="wave-3" src="images/treasure/wave03.png">');
}

function go_to_menu_page(lastpage) {
  if (lastpage) {
    console.log('aa');
    $('.breadcun_grade_link').trigger('click');
    // $( '#activity-page-menu-img' ).trigger( 'click' )
    // $("#activity-page-title").find('a').trigger('click');
  } else {
    console.log('bb');
    $('.headfooter-next > span').trigger('click');
  }
}

function create_exercise_menu_bar_rhino() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;
  var rhino_percentage_correct = score / TotalQues;

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'Go to main page';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूचीमा जाऔँ';
    }
  }

  if ($lang == 'en') {
    scorecount_text =
      "You scored <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      "</span> out of <span id='total'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      '</span>.';
    var playtext = 'Repeat Exercise';
    var learnagaintext = 'Learn again';
  } else if ($lang == 'np') {
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
    var playtext = 'फेरि अभ्यास गर';
    var learnagaintext = 'फेरि पाठ पढ';
  }
  if ($lang == 'np' && $donar == 'rti') {
    scorecount_text =
      "तिमीले <span id='score'>" +
      ole.nepaliNumber(TotalQues, $lang) +
      "</span> मा <span id='score'>" +
      ole.nepaliNumber(score, $lang) +
      '</span> अङ्‌क प्राप्&#8205;त गर्‍यौ।';
    var playtext = 'फेरि अभ्यास गरौँ';
    var learnagaintext = 'फेरि पाठ पढौँ';
  }

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="rhino_exenextbtn mainmenu" onclick="go_to_menu_page(' +
        lastpageflag +
        ')"><p class="nxtbtntext">' +
        msg_string_final +
        '</p></div><img class="menushadow" src="images/shadow.png">'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="rhino_exenextbtn learn" onclick="gotoLesson()"><p class="nxtbtntext">' +
        learnagaintext +
        '</p></div><img class="learnshadow" src="images/shadow.png">'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="rhino_exenextbtn play" onclick="playExAgain()"><p class="nxtbtntext">' +
        playtext +
        '</p></div><img class="playshadow" src="images/shadow.png">'
    );

  // buttons hover sounds
  setTimeout(function () {
    $('.rhino_exenextbtn').hover(function () {
      slec_btn_sound.stop();
      slec_btn_sound = new buzz.sound('sounds/common/woodhoversound.wav');
      slec_btn_sound.play();
      $('.rhino_exenextbtn').mouseleave(function () {
        buzz.all().stop();
      });
    });
  }, 3000);

  // conditions for different messages to students and also for focusing buttons
  if (rhino_percentage_correct == 1) {
    congratstext = 'Congratulations, you got all the answers correct!!!';

    if ($lang == 'np') {
      congratstext = 'बधाई छ। तिमीले सबै उत्तर सही दियौ!!!';
    }
    if ($lang == 'np' && $donar == 'rti') {
      congratstext = 'बधाई छ। तिमिले सबै उत्तर सही दिनुभयो!!!';
    }
    jumpingbuttons('mainmenu', 'menushadow');
  } else if (rhino_percentage_correct >= 0.7) {
    congratstext =
      'Good job! Try the exercise again to get all answers correct.';
    if ($lang == 'np') {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर।';
    }
    if ($lang == 'np' && $donar == 'rti') {
      congratstext = 'स्याबास्। अझै राम्रो गर्न फेरि अभ्यास गर्नुहोस्।';
    }
    jumpingbuttons('mainmenu', 'menushadow');
  } else if (rhino_percentage_correct >= 0.4) {
    congratstext =
      'Good try! You can still do better. You can repeat the lesson for better results. ';
    if ($lang == 'np') {
      congratstext = 'राम्रो प्रयास! तिमीले अझै राम्रो गर्न सक्छौ।';
    }
    if ($lang == 'np' && $donar == 'rti') {
      congratstext = 'राम्रो प्रयास! तिमिले अझै राम्रो गर्न सक्‍नुहुन्छ।';
    }
    jumpingbuttons('play', 'playshadow');
  } else if (rhino_percentage_correct <= 0.3 && rhino_percentage_correct > 0) {
    congratstext = 'Keep trying. You can still do better! ';
    if ($lang == 'np') {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढ ।';
    }
    if ($lang == 'np' && $donar == 'rti') {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि पढौँ ।';
    }
    jumpingbuttons('learn', 'learnshadow');
  }

  if (rhino_percentage_correct == 0) {
    congratstext =
      'Sorry, you did not have a correct answer. Please repeat the lesson and try again. ';
    if ($lang == 'np') {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक।';
    }
    if ($lang == 'np' && $donar == 'rti') {
      congratstext = 'अझै राम्रो गर्न सक्छौ। फेरि सिक ।';
    }
    jumpingbuttons('learn', 'learnshadow');
  }

  // wooden buttons and shadow jumps with sounds
  function jumpingbuttons(buttonclass, shadowclass) {
    setTimeout(function () {
      slec_btn_sound = new buzz.sound('sounds/common/rhino_scoring/jump.ogg');
      slec_btn_sound.play();
      setTimeout(function () {
        slec_btn_sound.play();
      }, 1000);
      $('.' + buttonclass).addClass('animate_button');
      $('.' + shadowclass).addClass('shadowextend');
    }, 2000);
  }
  // last function ended here

  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="rhino_congratulation"> <p class="rhino_congratulationtext"> ' +
        congratstext +
        ' </p> <p class="youscored">' +
        scorecount_text +
        '</p></div>'
    );
}

function create_exercise_menu_bar_nep_matching() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var lastpageflag;

  congratstext = 'Congratulations!!!<br>You have completed the activity.';
  if ($lang == 'np') {
    congratstext = 'बधाई छ!!!<br>तिमीले  अभ्यास पूरा गरेका छौ।';
  }

  if ($lang == 'np' && $donar == 'rti') {
    congratstext = 'बधाई छ!!!<br>तिमिले अभ्यास पूरा गर्नुभएको छ।';
  }

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'Go to main page';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूची';
    }
  }

  if ($lang == 'en') {
    scorecount_text = 'You have completed the activity.';
  } else if ($lang == 'np') {
    scorecount_text = 'तिमीले  अभ्यास पूरा गरेका छौ।';
  }
  if ($lang == 'np' && $donar == 'rti') {
    scorecount_text = 'तिमिले अभ्यास पूरा गर्नुभएको छ।';
  }

  var dt = new Date();
  $('.contentblock').animate({ opacity: '0.5' }, 500);
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="fairy_congratulations fairy_fade_in"> <p class="fairy_congratulations_text"> ' +
        congratstext +
        ' </p></div>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<img class="stars_1" src="images/star.gif?' +
        dt.getTime() +
        '")><img class="stars_2" src="images/star.gif?' +
        dt.getTime() +
        '")><img class="stars_3" src="images/star.gif?' +
        dt.getTime() +
        '")><img class="stars_4" src="images/star.gif?' +
        dt.getTime() +
        '")>'
    );
  $('.mainBox > div')
    .eq(0)
    .append(
      '<div class="fairy_exenextbtn fairy_fade_in" onclick="go_to_menu_page(' +
        lastpageflag +
        ')"><p>' +
        msg_string_final +
        '</p></div>'
    );
}

function create_exercise_menu_bar_match_picture() {
  var msg_string_final;
  var number_of_pages = $('.exerciseTab2>.linkClick').length;
  var current_number = $('.exerciseTab2>.linkClick').index(
    $('.activeexeClass')
  );
  var congratstext = '';
  var scorecount_text = '';
  var lastpageflag;

  congratstext = 'Congratulations!!!<br>You have completed the activity.';
  if ($lang == 'np') {
    congratstext = 'बधाई छ!!!<br>तिमीले  अभ्यास पूरा गरेका छौ।';
  }
  if ($lang == 'np' && $donar == 'rti') {
    congratstext = 'बधाई छ!!!<br>तिमिले अभ्यास पूरा गर्नुभएको छ।';
  }

  if (current_number < number_of_pages - 1) {
    lastpageflag = false;
    if ($lang == 'en') {
      msg_string_final = 'Go to Exercise #' + (current_number + 2);
    } else if ($lang == 'np') {
      msg_string_final = 'अभ्यास #' + (current_number + 2) + ' सुरु गरौँ';
    }
  } else {
    lastpageflag = true;
    if ($lang == 'en') {
      msg_string_final = 'Go to main page';
    } else if ($lang == 'np') {
      msg_string_final = 'मुख्य सूची';
    }
  }

  if ($lang == 'en') {
    scorecount_text = 'You have completed the activity.';
  } else if ($lang == 'np') {
    scorecount_text = 'तिमीले  अभ्यास पूरा गरेका छौ।';
  }
  if ($lang == 'np' && $donar == 'rti') {
    scorecount_text = 'तिमिले अभ्यास पूरा गर्नुभएको छ।';
  }

  $('.contentblock').fadeOut(1000, function () {
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="congratulation"> <p class="congratulationtext"> ' +
          congratstext +
          ' </p> <p class="youscored">' +
          scorecount_text +
          '</p></div>'
      );
    $('.mainBox > div')
      .eq(0)
      .append(
        '<div class="exenextbtn" onclick="go_to_menu_page(' +
          lastpageflag +
          ')"> <img src="images/exercisetextbox.png"><p class="nxtbtntext">' +
          msg_string_final +
          '</p></div>'
      );
  });
}

var $correctans = 0;
function EndPageofExercise() {
  var $container = $('.mainBox > div');
  this.init = function (totalques) {
    $totalques = totalques;
  };
  this.updateCorrectAns = function (correctAns) {
    if (correctAns) {
      $correctans++;
    }
  };
  this.endpage = function (message, cloudFlagTemplate, numberOfTexts, dataIds) {
    $info = message;
    $container.append(
      "<div class='messagediv'><span>" + $info + '</span></div>'
    );
    // Refractoring needed
    var playtext = 'Play again';
    var mainmenutext = 'Main menu';
    var learntext = 'Learn again';
    if ($lang == 'np') {
      var playtext = 'फेरि खेलौँ';
      var mainmenutext = 'मुख्य सूची';
      var learntext = 'फेरि पढौँ';
    }
    $container.append(
      "<div class='btnNavigationSong'>" +
        "<div class='playAgainDiv'><button name='playbtn' class='commonNavBtn playAgainBtn' onclick='playExAgain()'>" +
        playtext +
        '</button></div>' +
        "<div class='mainMenuDiv'><button name='menubtn'  class='commonNavBtn mainMenuBtn' onclick='go_to_menu_page(true)'>" +
        mainmenutext +
        '</button></div>' +
        "<div class='learnAgainDiv'><button name='learnbtn'  class='commonNavBtn learnAgainBtn' onclick='gotoLesson()'>" +
        learntext +
        '</button></div></div>'
    );

    // added by regan to check if there is cloud rolling template
    if (cloudFlagTemplate) {
      $container.append("<div class='cloudFlexContainer'></div>");
      for (let index = 0; index < numberOfTexts; index++) {
        $('.cloudFlexContainer').append(
          '<div><img class="cloud" src="images/backgrounds/cloud02.png""></img><p class="cloudtext ' +
            ('cloudtext' + (index + 1)) +
            '"></p></div>'
        );
      }
      var height = shuffle([
        '80%',
        '85%',
        '90%',
        '95%',
        '100%',
        '100%',
        '85%',
        '90%',
        '95%',
        '80%',
      ]);
      var colors = shuffle([
        '#D66982',
        '#D66982',
        '#089392',
        '#D14A13',
        '#C75DAA',
        '#7246D7',
        '#E96F02',
        '#FFD314',
        '#AEC03E',
        '#55973A',
      ]);
      for (let index = 0; index < 20; index++) {
        $('.cloudtext' + (index + 1)).text(data.string[dataIds + (index + 1)]);
        console.log($('.cloudFlexContainer .cloud:eq(' + index + ')'));
        $('.cloudFlexContainer .cloud:eq(' + index + ')').css(
          'height',
          height[String(index).slice(-1)]
        );
        $('.cloudFlexContainer .cloudtext:eq(' + index + ')').css(
          'color',
          colors[String(index).slice(-1)]
        );
      }
      $('.messagediv').css({
        'padding-top': '25%',
        background: 'url("images/backgrounds/blue_gradient_2.jpg") 100% 100%',
        'z-index': '2000',
      });
      $('.playAgainBtn').css({
        background: 'url("images/newplaytimebutton/play_time.png") 100% 100%',
      });
      $('.mainMenuBtn').css({
        background: 'url("images/newplaytimebutton/main_menu.png") 100% 100%',
      });
      $('.learnAgainBtn').css({
        background: 'url("images/newplaytimebutton/read_again.png") 100% 100%',
      });
      bg_audio('bgmusic', false);
      function bg_audio(sound_id, musicFlag) {
        if (musicFlag == false) {
          current_sound = createjs.Sound.play(sound_id);
          current_sound.play();
          current_sound.on('complete', handleComplete);
          function handleComplete(event) {
            bg_audio('bgmusic', false);
          }
        }
      }
      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
    }
    // Refractoring needed

    // need to implement later
    // if($correctans==$totalques){
    //     //gotomain menu
    // }
    // else if($correctans>($totalques/2)){
    //      // goto play again
    // }
    // else{
    //     // learn again
    //
    // }
  };
}

// wooden buttons and shadow jumps with sounds
function selectBtnAnim(buttonclass) {
  setTimeout(function () {
    slec_btn_sound = new buzz.sound('sounds/common/rhino_scoring/jump.ogg');
    slec_btn_sound.play();
    $('.' + buttonclass).addClass('animate_button');
  }, 2000);
}

function go_to_menu_page(lastpage) {
  console.log(lastpage);
  if (lastpage) {
    console.log('aaaa');
    // $("#activity-page-menu-img").trigger("click");        /*  this is comment by bishal because in redesign the  #activity-page-menu-img was not there which every exercise page main menu doesnot works*/
    // $("#activity-page-title").find('button').trigger('click');
    console.log($('#activity-page-title').find('a').attr('href'));
    $('#activity-page-title').find('a')[0].click();
    // $('#activity-page-exercise-tab').find('button').trigger('click');
  } else $('.headfooter-next > span').trigger('click');
}

function playExAgain() {
  $('#activity-page-exercise-tab').find('button').trigger('click');
}

function gotoLesson() {
  $('#activity-page-lesson-tab').find('button').trigger('click');
}
