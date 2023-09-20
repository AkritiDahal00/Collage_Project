/*this error event handler was needed because -
  - it will be easy with this for the developers
  - to find out where the problem was*/
$('.terms_of_use_info').hide(0);

window.onerror = function(message, source, lineno, colno, error) {
  alert(
    "message (mostly script error comes here):" +
      message +
      "\n" +
      "source :" +
      source +
      "\n" +
      "lineno (may not be accurate):" +
      lineno +
      "\n" +
      "colno (may not be accurate):" +
      colno +
      "\n" +
      "error :" +
      error
  );
  location.reload();
};

(function($) {
  var datajsonobject; /*this variable is made global it will store later on the object for data.json*/

  var $_GET = {};

  $_GET["lang"] = "";
  $_GET["sub"] = "";
  $_GET["grade"] = "";

  var $subject = "";
  var $titled = "";
  var $id = "";
  var $currentgrade = "";
  var $selectedSubjectTitle;

  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
    function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
    }
    $_GET[decode(arguments[1])] = decode(arguments[2]);
  });

  // console.log("lang = "+$_GET['lang']);

  // set the language as selected from index page
  $lang = $_GET["lang"];

  $("body").attr("lang", $lang); //create attribute "lang" on body tag
  $(".mainBox").attr("lang", $lang);

  //set the subject as selected from index page
  $sub = $_GET["sub"];

  //set the grade as selected from index page
  $currentgrade = $_GET["grade"];

  // this is the parameter when levels are loaded in subject page
  if ($_GET["title"]) {
    $titled = $_GET["title"];
  }

  // event handler for language switcher
  $(".langswitchcontainer").on("click", "a", function(e) {
    var switchLang = $(this).data("lang");

    // for english subject do not switch language to nepali else do
    $sub == "english"
      ? window.open("?sub=" + $sub + "&lang=en&grade=" + $currentgrade, "_self")
      : window.open(
          "?sub=" + $sub + "&lang=" + switchLang + "&grade=" + $currentgrade,
          "_self"
        );

    $sub == "nepali"
      ? window.open("?sub=" + $sub + "&lang=np&grade=" + $currentgrade, "_self")
      : window.open(
          "?sub=" + $sub + "&lang=" + switchLang + "&grade=" + $currentgrade,
          "_self"
        );
    if($sub == "english"){
      window.open("?sub=" + $sub + "&lang=en&grade=" + $currentgrade, "_self");
    }
    if($sub == "nsl" || $sub == "dyslexia"){
      window.open("?sub=" + $sub + "&lang=np&grade=" + $currentgrade, "_self");
    }

    e.preventDefault();
  });

  // link for index page in the home butto
  $("header")
    .find(".homeBtn")
    .attr("href", "index.html?lang=" + $lang);

  // extract data from data json and display the about text
  // jqxhrdatajson is a jqXHR object storage although it is vestigial for
  // now it can used later sometimes for development, similarly for the
  // done, fail and always methods
  var jqxhrdatajson = $.getJSON("config/data.json", function(generaldata) {
    console.log("data.json get success");

    // store the data.json object to global variable it will be used later
    datajsonobject = generaldata;

    // store gradetext in the variable
    var gradetext = generaldata.gradess[$lang];

    // variable that will store the display grade in dropdown button
    var tempcurrentgradestring;

    // if language is nepali convert numbers to nepali for current grade
    if ($lang == "np") {
      var nepalidigitsarray = [
        "०",
        "१",
        "२",
        "३",
        "४",
        "५",
        "६",
        "७",
        "८",
        "९"
      ];
      // split the currentgrade to array and store it in variable
      tempcurrentgradestring = $currentgrade.split("");
      var index = tempcurrentgradestring.length;
      // loop through the array and replace english numbers with nepali
      while (index--) {
        tempcurrentgradestring[index] =
          nepalidigitsarray[parseInt(tempcurrentgradestring[index])];
      }
      // join the array will null string separator to create whole nepali number
      tempcurrentgradestring = tempcurrentgradestring.join("");
    } else if ($lang == "en") {
      tempcurrentgradestring = $currentgrade;
    }

    // dropdown template data to be passed to handlebars
    var gradesData = {
      gradetextdata: gradetext + " " + tempcurrentgradestring,
      allgrades: []
    };

    // parse all grade levels and push into all grades array
    $.each(generaldata.allgrades[$lang], function(classindex, classval) {
      /* iterate through allgrades array for current language*/
      // find out grade specific link
      var tempgradelink;
      $('.dropdown,.sciencesubjecttab').hide();
      if ($sub == "english") {
        tempgradelink =
          "?sub=" +
          $sub +
          "&lang=en&grade=" +
          generaldata.allgrades["en"][classindex];
      } else if ($sub == "nepali") {
        $sub = $currentgrade > 4 ? "science" : $sub;
        tempgradelink =
          "?sub=" +
          $sub +
          "&lang=np&grade=" +
          generaldata.allgrades["en"][classindex];
      } else {
        tempgradelink =
          "?sub=" +
          $sub +
          "&lang=" +
          $lang +
          "&grade=" +
          generaldata.allgrades["en"][classindex];
      }
      console.log("This is grade link" + tempgradelink);
      // $sub == "english" ?
      // ( tempgradelink = "?sub="+$sub+"&lang=en&grade="+generaldata.allgrades["en"][classindex] ): /*the grade value should always be in english since it is backend data*/
      // ( tempgradelink = "?sub="+$sub+"&lang="+$lang+"&grade="+generaldata.allgrades["en"][classindex] ); /*the grade value should always be in english since it is backend data*/
      //
      // $sub == "nepali" ?
      // ( tempgradelink = "?sub="+$sub+"&lang=np&grade="+generaldata.allgrades["np"][classindex] ): /*the grade value should always be in english since it is backend data*/
      // ( tempgradelink = "?sub="+$sub+"&lang="+$lang+"&grade="+generaldata.allgrades["np"][classindex] ); /*the grade value should always be in english since it is backend data*/

      // update a temporary object to be passed to handlebars data object -> gradesData
      var temporarygradeobject = {
        specificgrade:
          generaldata.allgrades["en"][
            classindex
          ] /*this value should always be in english since it is backend data*/,
        gradelink: tempgradelink,
        specificgradetext: gradetext + " " + classval
      };
      console.log(temporarygradeobject);
      gradesData.allgrades.push(temporarygradeobject);
    });

    // put the grades data extracted above into the dropdown
    //handlebars template
    var source = $("#classdropdown-template").html();
    var template = Handlebars.compile(source);
    var html = template(gradesData);
    $(".dropdowncontainer").append(html);
    //remove this to not redirect to other folder starts
    // $('.dropdown-menu li:nth-child(7) a').attr('href',"EPaath7-8/subjects.html?sub="+$sub+"&lang="+$lang+"&grade=7","_self");
    // $('.dropdown-menu li:nth-child(8) a').attr('href',"EPaath7-8/subjects.html?sub="+$sub+"&lang="+$lang+"&grade=8","_self");

    // $('.dropdown-menu li:nth-child(7)').click(function(){
    //   window.open("EPaath7-8/subjects.html?sub="+$sub+"&lang="+$lang+"&grade=7","_self");
    // });
    // $('.dropdown-menu li:nth-child(8)').click(function(){
    //   window.open("EPaath7-8/subjects.html?sub="+$sub+"&lang="+$lang+"&grade=8","_self");
    // });
    //remove this to not redirect to other folder ends

    // find text to be displayed in footer and display
    var valOf = generaldata.footerText[$lang];
    $(".footerCC")
      .find(".design")
      .html(valOf);

    // find text to be displayed for terms and uses popup
    var termConditions = generaldata.termCondition[$lang];
    var terms_and_uses_text = generaldata.term_cond_text_rule1[$lang];
    var cross_image = '<img src="images/activityguideimages/iconcross1.png">';
    $('.terms_of_use_info>div>p').html('<span>'+termConditions+'</span>' + '<hr style="margin-top:8px; margin-bottom:8px;">'+ terms_and_uses_text + cross_image );


      var footerbtn = generaldata.termCondition[$lang];
    $(".footerCC")
      .find(".term_of_use")
      .html(footerbtn);
  })
    .done(function() {
      console.log("data.json get done, second success");
    })
    .fail(function(data, textstatus, errortype) {
      alert(
        "get data.json failed, status: " + textstatus + ", error: " + errortype
      );
      // reload the page on json fail
      location.reload();
    })
    .always(function() {
      console.log("data.json complete, appears on complete");

      /*call the following function to udpate menu page on completion of this json
		call because data json object variable updated here is used in the function below*/
      loadmenupagedatas();

    });

  var datas = {};
  // function to load levels commented out for now better not to remove if
  // required later on
  /*function loadLevels(key){
		// console.log("data ="+key);
		// console.log(datas[key].levels);
		var levelDatas= [];
		var name = datas[key][$lang];
		levels = datas[key].levels;
		$id += datas[key].id;
		for (var i = 0; i < levels.length; i++)
		{
			var j = i+1;
			if(j<10){
				j = "0"+j
			}
			var $jd = $id+j;
			var $link = "start.html?id="+$jd+"&lang="+$lang;
			// console.log("$id= "+$jd+" "+$link);


			var levelname=levels[i].name;

			var descLevel=levels[i].desc;

			levelDatas[i] = {
				link : $link,
				title : name+" - "+levelname[$lang],
				// defination : descLevel[$lang],
				defination : "",
				images : levels[i].thumbnail
			}
		}
		var source   = $("#listOfLevels").html();
		var template = Handlebars.compile(source);
		var listOfTitles = template(levelDatas);
    "क देखि ञ सम्म, चिन र पढ": {
      "en": "क देखि ञ सम्म, चिन र पढ",
      "np": "क देखि ञ सम्म, चिन र पढ",
      "id": "kdy",
      "subId": "nepali",
      "type": "writing",
      "image": "images/thumb/nepali/thumbnail-file-1-ka-to-nya.png",
      "imagebig": "images/thumb/nepali/thumbnail-file-2-ka-to-nya.png",
      "levels": [
          {
              "name": {
                  "en": "Level I",
                  "np": "तह १"
              },
              "thumbnail": "images/activity-under-construction.png",
              "id": "smthForEx",
              "desc": {
                  "en": "क देखि ञ सम्म, चिन र पढ",
                  "np": "क देखि ञ सम्म, चिन र पढ"
              },
              "folder": "grade1/nepali/kha_dekhi_yha",
              "exercise": [
                  "exercise/exercise.html"
              ],
              "pages": [
                  "page1.html",
                  "page2.html",
                  "page3.html",
                  "page4.html",
                  "page5.html",
                  "page6.html"
              ],
              "sections": [
                  {
                      "en": "क देखि ञ सम्म, चिन र पढ",
                      "np": "क देखि ञ सम्म, चिन र पढ",
                      "startpage": 1,
                      "endPage": 6
                  }
              ]
          }
      ]
  }
		$('.subjects').html(listOfTitles);

	}*/

  // function to load all activity in the menu
  function callSubList(subName) {
    var name = "config" + subName + ".json";
    var i = 0;

    var jqxhrcallsublist = $.getJSON("config/" + name, function(data) {
      console.log("get " + name + " complete, this message appears on success");

      var chaptercount = 0;
      var courseData = [];
      // first find which grade lessons to display -> selected grade
      var gradekey = data["grade" + $currentgrade];

      // for each lesson for selected grade
      $.each(gradekey, function(key) {
        datas = gradekey;
        var $startlinkid = $id;
        if ($titled == "") {
          $images = gradekey[key].image;
          $type = gradekey[key].type;
          $grade = gradekey[key].grade;
          $subject = gradekey[key][$lang];
          // this commented line below gives link to levels page
          // $link = "?sub="+$sub+"&title="+key+"&lang="+$lang;

          // we can add thumbnail images for nepali different
          if(gradekey[key].imagenp){
            $imagesnp = gradekey[key].imagenp;
          }else{
            $imagesnp = gradekey[key].image;
          }

          // these two lines below gives link to objective page
          $startlinkid += gradekey[key].id;
          
            if ($sub == "english") {
              $link =
                    "start.html?id=" +
                    $startlinkid +
                    "01&lang=en" +
                    "&grade=" +
                    $currentgrade;
            } else if ($sub == "nepali") {
              $link =
                    "start.html?id=" +
                    $startlinkid +
                    "01&lang=np" +
                    "&grade=" +
                    $currentgrade;
            } else {
              $link =
                    "start.html?id=" +
                    $startlinkid +
                    "01&lang=" +
                    $lang +
                    "&grade=" +
                    $currentgrade;
            }
            // console.log($link);
          if($lang=="np"){
            courseData[i] = {
              subTitle: $sub,
              link: $link,
              images: $imagesnp,
              subject: $subject,
              type: $type,
              chapternumber: ole.nepaliNumber(++chaptercount) + "."
            };
          } 
          if($lang=="en"){
            courseData[i] = {
              subTitle: $sub,
              link: $link,
              images: $images,
              subject: $subject,
              type: $type,
              chapternumber: ++chaptercount + "."
            };
          }
          
        } else {
          /*this else portion is to udpate the levels commented out since we do not need
					levels for now*/
          /*$subject = gradekey[key][$lang];
					var $class="";
					if(key == $titled) {
						$class = "hi5";
						loadLevels(key);
					}*/
          // this commented line below gives link to levels page
          // $link = "?sub="+$sub+"&title="+key+"&lang="+$lang;
          // these two lines below gives link to objective page
          /*$id += gradekey[key].id;
					$link = "start.html?id="+$id+"01&lang="+$lang+"&grade="+$currentgrade;
					courseData[i] = {
						clas : $class,
						link : $link,
						subject : $subject
					}*/
        }

        i++;
      });

      if ($titled == "") {
        try {
          var source = $("#listOfTitles").html();
          var template = Handlebars.compile(source);
          var listOfTitles = template(courseData);
          $(".subjects").html(listOfTitles);
        } catch (error) {
          alert(error + " . Click on okay button to reload");
          location.reload();
        }
      } else {
        // console.log("course="+courseData);
        var source2 = $("#titleList").html();
        var template2 = Handlebars.compile(source2);
        // console.log(template);
        var listOfTitles = template2(courseData);
        // console.log(listOfTitles);
        $key = $(".subListSide").find(".key");
        $key.append(listOfTitles);
        $key.removeClass("active");
        $key.find(".hi5").addClass("active");
      }
    })
      .fail(function(data, textstatus, errortype) {
        alert(
          "get " +
            name +
            " failed, status: " +
            textstatus +
            ", error: " +
            errortype
        );
        // reload the page on json fail
        location.reload();
      })
      .always(function() {
        console.log("get " + name + " complete, appears on complete");
        // $('.term_use').click(function(){
        //   // event.preventDefault(); /*keep this intact*/
        //   console.log("term_condition.html?lang="+$lang)
        //   $('.term_use').attr("href", "term_condition.html?lang="+$lang);
        // })

    // on success add event handler to term of use
    $('.term_use').click(function(){
      // event.preventDefault(); /*keep this intact*/
      $('.terms_of_use_info').show(0);
    })
    $('.terms_of_use_info>div>p>img').click(function(){
      $('.terms_of_use_info').hide(0);
    });
      });
  }

  // code block below loads subjects list in the category section
  // and calls function callSubList to load the subject activities
  var $type = "";
  function loadmenupagedatas() {
    $.getJSON("config/subject.json", function(data) {
      var i = 0;
      var sublistData = [];
      var exerciseData = [];

      var exerciseTitle;

      var exerciseTitleLst;

      $.each(data, function(key) {
        $clas = "";
        if (key === $sub) {
          $id = data[key].id;
          var types = "types" + $lang;
          $type = data[key][types];
          $typeen = data[key].typesen;
          $typeid = data[key].typesid;

          callSubList(key);

          $clas = "active key";

          // store all grades to be shown
          var grades = "grade" + $lang;
          $grade = data[key][grades];
          $gradeid = data[key].gradeid;
        }



        // for only subject key english let the link be for only english language
        // key == "english" ?
        // ( $link = "?sub="+key+"&lang=en&grade="+$currentgrade ):
        // ( $link = "?sub="+key+"&lang="+$lang+"&grade="+$currentgrade );
        if (key == "english") {
          $link = "?sub=" + key + "&lang=en&grade=" + $currentgrade;
        } else if (key == "nepali") {
          $link = "?sub=" + key + "&lang=np&grade=" + $currentgrade;
        } else if (key == "nsl"){
          $link = "?sub=" + key + "&lang=np&grade=1";
        }else if (key == "dyslexia"){
          $link = "?sub=" + key + "&lang=np&grade=1";
        }else {
          $link = "?sub=" + key + "&lang=" + $lang + "&grade=" + $currentgrade;
        }

        $title = data[key][$lang];
        console.log(">>>>>>>>>>>>" + $currentgrade);
        if (key === $sub) {
          $selectedSubjectTitle = $title;
        }

        sublistData[i] = {
          clas: $clas + " " + data[key]["en"].toLowerCase() + "subjecttab",
          link: $link,
          title: $title,
          showTab:
            $currentgrade > 4 && data[key]["en"].toLowerCase() == "nepali"
              ? false
              : true
        };

        if ($lang === "en") {
          exerciseTitle = data[key][$lang] + " exercise";
          // console.log("hello from lang " + exerciseTitle);
        } else if ($lang === "np") {
          exerciseTitle = data[key][$lang] + " अभ्यास";
          // console.log("hello from lang "+ exerciseTitle);
        }

        //exerciseTitle = data[key][$lang]+" "+exerciseTitleLst;
        exerciseData[i] = {
          clas: "",
          link: "#",
          exercise: exerciseTitle
        };

        i++; //counter
      });

      //load data in exercise list

      /*try
			{
				var source11   = $("#exerciseList").html();
				var template11 = Handlebars.compile(source11);
				var html11    = template11(exerciseData);
				// console.log("lang= "+$lang);
				// console.log(html11);
				// $(".subExeList").html(html11);




			}
			catch (error) {
				// alert(error);
				location.reload();
			}*/

      //load data in list of subjects

      // console.log(sublistData);
      var source1 = $("#subListSide").html();
      var template1 = Handlebars.compile(source1);
      var html1 = template1(sublistData);
      // console.log(html1);
      $(".subListSide").html(html1);

      if ($titled == "") {
        var i = 0;

        // cache subject branches from dom as jquery object
        var $subjectbranches = $(".typesd");

        // text for all subtype
        // var $all = datajsonobject.all[$lang];

        // now create html for subject branches
        // var typesOfSub =
        //   "<span><a id='hoveradd' href='' class='all' >" + $all + "</a></span>";

        // for (i = 0; i < $type.length; i++) {
        //   typesOfSub +=
        //     " | <span><a id='hoveradd' href='' class='" +
        //     $typeid[i] +
        //     "'>" +
        //     $type[i] +
        //     "</a></span>";
        // }

        // update subject branches
        // $subjectbranches.html(typesOfSub);

        var activesubjecttabbgcolor = $(".subListSide li.active.key a").css({
          "background-color":"#01934f",
          "padding":'0.3em 0.7em 1.1em 0.7em'
        });

        $subjectbranches.css("background-color", activesubjecttabbgcolor);

        // after all subjectsubtypes are put in dom highlight the one with all subtype
        $subjectbranches.find("a.all").attr("data-highlight", "true");

        // event handlers for all subjectbranches
        $subjectbranches.on("click", "a", function(event) {
          event.preventDefault(); /*do not skip this.  why? see jquery doc*/
          $subjectbranches.find("a").attr("data-highlight", "");

          var subjectbranch = $(this)
            .attr("class")
            .toLowerCase();
          $(this).attr("data-highlight", "true");

          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + subjectbranch);

          if (subjectbranch === "all") {
            $(".subjects")
              .children()
              .show(0);
          } else {
            $(".subjects")
              .children()
              .hide(0);
            $(".subjects")
              .find("." + subjectbranch)
              .show(0);
          }
        });
      }
    })
      .fail(function(data, textstatus, errortype) {
        alert(
          "get subject.json failed, status: " +
            textstatus +
            ", error: " +
            errortype
        );
        // reload the page on json fail
        location.reload();
      })
      .always(function() {
        console.log("subject.json complete, appears on complete");
      // console.log(ole.nepaliNumber());
        // .css('font-family','kalimati !important')  
        // Changes in Science to Our Surrounding and other changes starts
          if($currentgrade<4){
            if( $_GET["sub"]=='science'){
              $('.typesd>span').hide(0);
              $('.typesd>span:eq(0)').show(0);
              $('.typesd').html($('.typesd>span:eq(0)'));
            }
              if($lang=="en"){
                  $('.sciencesubjecttab > a').html('Our Surrounding');
              }
              else if($lang=="np"){
                $('.sciencesubjecttab > a').html('हाम्रो सेरोफेरो');
              }
          }
          else{
            if($lang=="en"){
              $('.sciencesubjecttab > a').html('Science');
            }
            else if($lang=="np"){
              $('.sciencesubjecttab > a').html('विज्ञान');
            }
          }
          if($currentgrade>4){
                $('.nepalisubjecttab').hide(0);
            }
            else{
              $('.nepalisubjecttab').show(0);
            }
          
        // Changes in Science to Our Surrounding ends
      });
  }

  // when the window has stopped loading
  $(window).load(function() {
    /*this css style is given here because subjectcontainer
		is loaded by handlebars*/
    $(".subjectcontainer").css("overflow-y", "auto");
    
  });

  // triggering scienceproject directly
  if (window.location.href.split("=").pop() == "scienceproject") {
    setTimeout(function() {
      $(".SciPro").trigger("click");
    }, 200);
  } else {
    console.log("not there");
  }

   
   

})(jQuery);
