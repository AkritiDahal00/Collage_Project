(function($) {
  var $_GET = {}; /*get object to parse and put url decoded value*/
  var $subject = ""; /*subject store variable initialized*/
  var $currentgrade = 1; /*currentgradestore variable initialized default grade 1*/
  $_GET["lang"] = "en"; /*get key value for language*/
  var $lang = ""; /*initialize lang variable to store language*/
  var s;
  // parse the url and decode it to get key value pairs for the parameters passed in url
  // document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
  //   function decode(s) {
  //     return decodeURIComponent(s.split("+").join(" "));
  //   }

  //   /*now call the decode function to find and store the key value
	// 	pair in url params*/
  //   $_GET[decode(arguments[1])] = decode(arguments[2]);
  // });

  // set the language as decoded from the url
  console.log("lang = " + $_GET["lang"]);
  // set the language as given in the url
  $lang = $_GET["lang"];

  $("body").attr("lang", $lang); //create attribute "lang" on body tag
  $(".mainBox").attr("lang", $lang);

  // extract data from configsubjects.json and display subjects tab
  // jqxhrdatajson is a jqXHR object storage although it is vestigial for
  // now it can be used later sometimes for development, similarly for the
  // done, fail and always methods
  var jqxhrconfigsubjectsjson = $.getJSON(
          "config/subject.json",
          function(subjectsdata) {
            console.log("subject.json get success");

            var subjectsData = []; /*stores data to be passed for subjects */
            var i = 0; /*counter*/

            // search and update the subjects data in a variable to be later
            // passed to handlebars here subjectsData
            $.each(subjectsdata, function(key) {
              console.log(subjectsdata[key][$lang]);
              // key == "english" ?
              // ( $link = "subjects.html?sub="+key+"&lang=en&grade="+$currentgrade ) :
              // ( $link = "subjects.html?sub="+key+"&lang="+$lang+"&grade="+$currentgrade );

              if (key == "english") {
                $link =
                  "subjects.html?sub=" + key + "&lang=en&grade=" + $currentgrade;
              } else if (key == "nepali") {
                $link =
                  "subjects.html?sub=" + key + "&lang=np&grade=" + $currentgrade;
              } else {
                $link =
                  "subjects.html?sub=" +
                  key +
                  "&lang=" +
                  $lang +
                  "&grade=" +
                  $currentgrade;
              }

              subjectsData[i] = {
                name: subjectsdata[key][$lang],
                image: subjectsdata[key].img,
                classname: "imghov" + i,
                link: $link
              };
              i++;
            });



            // load the subjects data into the handlebars template
            var source = $("#subjects-template").html();
            var template = Handlebars.compile(source);
            var html = template(subjectsData);
            $(".indexsubjectrow").append(html);
          }
        )
    .done(function() {
      console.log("subject.json get done");

      // $(".imghov0").hover(
      //   function() {
      //     $(".imghov0 img").attr("src", "images/scienceHover.png");
      //   },
      //   function() {
      //     $(".imghov0 img").attr("src", "images/science.png");
      //   }
      // );

      // $(".imghov1").hover(
      //   function() {
      //     $(".imghov1 img").attr("src", "images/mathHover.png");
      //   },
      //   function() {
      //     $(".imghov1 img").attr("src", "images/math.png");
      //   }
      // );

      // $(".imghov2").hover(
      //   function() {
      //     $(".imghov2 img").attr("src", "images/englishHover.png");
      //   },
      //   function() {
      //     $(".imghov2 img").attr("src", "images/english.png");
      //   }
      // );

      $(".imghov3 img").attr("src", "images/nepali_homepage_light.png");
      // $(".imghov3").hover(
      //   function() {
      //     $(".imghov3 img").attr("src", "images/nepali_thumnail_hover.png");
      //   },
      //   function() {
      //     $(".imghov3 img").attr("src", "images/nepali_thumnail.png");
      //   }
      // );
    })
    .fail(function(data, textstatus, errortype) {
      alert(
        "get subject.json failed, status: " +
          textstatus +
          ", error: " +
          errortype
      );
      location.reload();
    })
    .always(function() {
      console.log("subject.json complete, appears on complete");
    });

  // extract data from data json and display the about text
  // jqxhrdatajson is a jqXHR object storage although it is vestigial for
  // now it can used later sometimes for development, similarly for the
  // done, fail and always methods
  var jqxhrdatajson = $.getJSON("config/data.json", function(generaldata) {
    console.log("data.json get success");

    // store the generaldata gradeselect text to buttongradedata
    var buttongradedata = generaldata.gradeselect[$lang];

    // store the generaldata gradess text to gradestext
    var gradetext = generaldata.gradess[$lang];

    // dropdown template data to be passed to handlebars
    var gradesData = {
      gradetextdata: buttongradedata,
      allgrades: []
    };

    // parse all grade levels and push into all grades array
    $.each(generaldata.allgrades[$lang], function(classindex, classval) {
      /* iterate through allgrades array for current language*/
      var temporarygradeobject = {
        specificgrade:
          generaldata.allgrades["en"][
            classindex
          ] /*this value should always be in english since it is backend data*/,
        specificgradetext: gradetext + " " + classval
      };
      gradesData.allgrades.push(temporarygradeobject);
    });

    // put the grades data extracted above into the dropdown
    //handlebars template
    var source = $("#classdropdown-template").html();
    var template = Handlebars.compile(source);
    var html = template(gradesData);
    $(".dropdowncontainer").append(html);

    // find text to be displayed in first para about and display
    var $indexExpText = generaldata.indexText[$lang];
    $(".indexExpText").html($indexExpText);
    // find text to be displayed in first para about and display
    var $indexExpTexta = generaldata.indexTexta[$lang];
    $(".sec").text($indexExpTexta);
   
    setTimeout(()=>{
      var $badgeText = generaldata.badgeText[$lang];
      $(".free_text").text($
        );
    },100)
    
    // find text to be displayed in first para about and display
    var $indexExpTextb = generaldata.indexTextb[$lang];
    $(".indexExpText_b").html($indexExpTextb);

    // find text to be displayed in second para about and display
    var $indexExpText2 = generaldata.indexTextSecond[$lang];
    $(".indexExpText2").html($indexExpText2);

    // find text to be displayed in below para about and display
    var $indexTextBelow = generaldata.indexTextBelow[$lang];
    $(".indexTextBelow").html($indexTextBelow);

    // find text to be displayed in below footerApprovalText about and display
    var $footerApprovalText = generaldata.footerApprovalText[$lang];
    $(".footerApprovalText").html($footerApprovalText);

    // find text to be displayed in footer and display
    var valOf = generaldata.footerText[$lang];
    $(".footerCC")
      .find(".design")
      .html(" "+valOf);
    // fint text to be displayed for footer button
    var footerbtn = generaldata.termCondition[$lang];
    $(".footerCC")
      .find(".term_of_use")
      .html(footerbtn);
    // find text to be displayed for terms and uses popup
    var terms_and_uses_text = generaldata.term_cond_text_rule1[$lang];
    var cross_image = '<img src="images/activityguideimages/iconcross1.png">';
    $('.terms_of_use_info>div>p').html('<span>'+footerbtn+'</span>' + '<hr style="margin-top:8px; margin-bottom:8px;">'+ terms_and_uses_text + cross_image );
    // find text to be displayed for support by
    var SupportMe = generaldata.SupportText[$lang];
    $(".footerCC")
      .find(".gni-class")
      .html(SupportMe);

    // find text to be displayed by choose grade and choose subject
    var gradeSelect = generaldata.chooseGrade[$lang];
    $(".chooseGrade p").html(gradeSelect);
    var subjectSelect = generaldata.chooseSubject[$lang];
    $(".chooseSubject p").html(subjectSelect);

    // find text to be displayed by FRONT GRADE
    $(".rowDivClass div:nth-of-type(1) p").html(
      generaldata.allgrades[$lang][0]
    );
    $(".rowDivClass div:nth-of-type(2) p").html(
      generaldata.allgrades[$lang][1]
    );
    $(".rowDivClass div:nth-of-type(3) p").html(
      generaldata.allgrades[$lang][2]
    );
    $(".rowDivClass div:nth-of-type(4) p").html(
      generaldata.allgrades[$lang][3]
    );
    $(".rowDivClass div:nth-of-type(5) p").html(
      generaldata.allgrades[$lang][4]
    );
    $(".rowDivClass div:nth-of-type(6) p").html(
      generaldata.allgrades[$lang][5]
    );
    $(".rowDivClass div:nth-of-type(7) p").html(
      generaldata.allgrades[$lang][6]
    );
    $(".rowDivClass div:nth-of-type(8) p").html(
      generaldata.allgrades[$lang][7]
    );

    // find index page alert text and display
    var indexalerttext = generaldata.indexTextAlert[$lang];
    $("span.alerttext").html(indexalerttext);

    $(".indexExpText2 span").click(function() {
      // $(this).attr('http://pustakalaya.org/epaath/', '_blank');
      window.open("");
    });
  })
    .done(function() {
      console.log("data.json get done, second success");

      // cache alertbox jquery dom object
      var $alertbox = $("div.alertbox");

      // cache jquery dom object for subjets container
      var $indexsubjectrow = $("div.indexsubjectrow");

      // cache jquery dom object for subjets anchor tag
      var $subjectsanchortag = $indexsubjectrow.find("div a");

      // event handler for subjects anchor tag
      $subjectsanchortag.on("click", function(event) {
        event.preventDefault(); /*so that the subjects are
									not clickable until grade selection is done*/

        /* Act on the event */
        $alertbox.show(0);
      });

      // // on success add event handler to the class lists on the dropdown menu
      // $("div.dropdowncontainer").on('click', 'ul > li > a', function(event) {
      // 	event.preventDefault(); /*keep this intact*/
      // 	/* Act on the event */
      //
      // 	// make subject anchor tags act its default - follow the link assigned
      // 	$subjectsanchortag.off("click");
      //
      // 	/*put default grade into a temp var before udpating the selected
      // 	current grade*/
      // 	var defaultgrade = $currentgrade;
      //
      // 	// jquery object for button grade display data
      // 	$buttongradedata = $("span.buttongradedata");
      //
      // 	$buttongradedata.text($(this).text());
      //
      // 	// update the selected current grade
      // 	$currentgrade = $(this).attr("data-grade");
      //
      // 	// regex that finds grade param in subjects tab href attribute
      // 	var regex = new RegExp("&grade="+defaultgrade,"gi");
      //
      // 	// update the anchor tag href attribute of each subject types
      // 	$.each($subjectsanchortag, function(index, val) {
      // 		/* iterate through array or object */
      // 		$(this).attr("href", $(this).attr("href").replace(regex,"&grade="+$currentgrade));
      // 	});
      // });

      // on success add event handler to the grade row
      var isFirstChoice = true;
      // $('.st_line').addClass("animateline");
      $(".insideGradeDivs").click(function(event) {
        event.preventDefault(); /*keep this intact*/
        /* Act on the event */
        // Changes in Science to Our Surrounding starts
          if($(this).data("grades")<4){
              $(".imghov0 img").attr("src", "images/science_homepage_light.png");
              // $(".imghov0").hover(
              //   function() {
              //     $(".imghov0 img").attr("src", "images/oursurroundinghover.png");
              //   },
              //   function() {
              //     $(".imghov0 img").attr("src", "images/oursurrounding.png");
              //   }
              // );

            if($lang=="en"){
              $('.col-xs-3:eq(0) > a > div > h3').html('Our Surrounding');
            }
            else if($lang=="np"){
              $('.col-xs-3:eq(0) > a > div > h3').html('हाम्रो सेरोफेरो');
            }
          }

          else{
            $(".imghov0 img").attr("src", "images/science_homepage_light.png");
            // $(".imghov0").hover(
            //   function() {
            //     $(".imghov0 img").attr("src", "images/scienceHover.png");
            //   },
            //   function() {
            //     $(".imghov0 img").attr("src", "images/science.png");
            //   }
            // );

            if($lang=="en"){
              $('.col-xs-3:eq(0) > a > div > h3').html('Science').css({'font-size':'3vmin','top': '70%'});
            }
            else if($lang=="np"){
              $('.col-xs-3:eq(0) > a > div > h3').html('विज्ञान').css({'font-size':'3vmin','top': '70%'});
            }
          }

          if($(this).data("grades")>4){
              $('.col-xs-3:eq(3)').css({'filter':'grayscale(100%)','pointer-events':'none','opacity':'.6','display':'none'});
              // $('.col-xs-3').css({'width':'33.33%'})
          }
          else{
              $('.col-xs-3:eq(3)').css({'filter':'grayscale(0%)','pointer-events':'auto','opacity':'1','display':'block'});
              // $('.col-xs-3').css({'width':'25%'})
          }
      // Changes in Science to Our Surrounding ends

        //change the clicked class
        // $(".insideGradeDivs").removeClass("insideGradeDivs_active");
        $('.insideGradeDivs').removeClass("grayColor");
        $('.indexsubjectrow').css("pointer-events","auto");
        $(this).addClass("grayColor");
        // $('.gradeSelectionDiv_above').addClass("disableColorClass");
        $('.st_line').addClass("animateline");
          $('.index-intro-subject-box h3').css({
            "color":"#FFF",
          });
          // $(this).removeClass("grayColor");
          $('.chooseSubjectText').css({"background":"#fd8048","color":"#FFF"})
          $(".imghov0 img").attr("src", "images/science_homepage_color.png");
          $(".imghov1 img").attr("src", "images/math_homepage_color.png");
          $(".imghov2 img").attr("src", "images/english_homepage_color.png");
          $(".imghov3 img").attr("src", "images/nepali_homepage_color.png");
          $('.index-intro-subject-box').addClass("subjectClassHover")
          
          var movepos = $(this).attr("data-grades");
          //  console.log(movepos);
           var giveBlueBallPos = function(){
             var pos = (movepos<=1)?
                        3+((movepos-1)*13)+"%":
                        (movepos>1&&movepos<=3)?
                        3+((movepos-1)*12.5)+"%":
                      (movepos>3&&movepos<=8)?
                        2.5+((movepos-1)*12.6)+"%":
                        2+"%";
             return(pos)
           }
           if(isFirstChoice){
             isFirstChoice = !isFirstChoice;
             $(this).addClass("insideGradeDivs_active");
             $('.rowDivClass').append("<p class='blueball'></p>");
             $(".blueball").css("left", giveBlueBallPos());
                setTimeout(()=>{
                  $(".blueball").css("opacity","1")
                  $(this).removeClass("insideGradeDivs_active");
                },500)
           }else{
             var animToPos = giveBlueBallPos();
             console.log(animToPos)
              $(".blueball").animate({
                "left":animToPos
              }, 600)
           }
           

        // make subject anchor tags act its default - follow the link assigned
        $subjectsanchortag.off("click");

        /*put default grade into a temp var before udpating the selected
			current grade*/
        var defaultgrade = $currentgrade;

        // update the selected current grade
        $currentgrade = $(this).data("grades");

        // regex that finds grade param in subjects tab href attribute
        var regex = new RegExp("&grade=" + defaultgrade, "gi");

        // update the anchor tag href attribute of each subject types
        $.each($subjectsanchortag, function(index, val) {
          /* iterate through array or object */
          $(this).attr(
            "href",
            $(this)
              .attr("href")
              .replace(regex, "&grade=" + $currentgrade)
          );

          // change the link to direct to another folder for grade 7 and grade 8 starts
          // if($(this).attr("href").includes("EPaath7-8/subjects.html?")){
          // 	$(this).attr("href", $(this).attr("href").replace("EPaath7-8/subjects.html?","subjects.html?"));
          // }
          //
          // if($currentgrade==7||$currentgrade==8){
          // 	$(this).attr("href", $(this).attr("href").replace("subjects.html?","EPaath7-8/subjects.html?"));
          // }
          // console.log($(this).attr("href"));
          // change the link to direct to another folder for grade 7 and grade 8 emds
        });
      });
      // on success add event handler to term of use
      $('.terms_of_use_info').hide(0);
      $('.term_use').click(function(){
        // event.preventDefault(); /*keep this intact*/
        $('.terms_of_use_info').show(0);
      })
      $('.terms_of_use_info>div>p>img').click(function(){
        $('.terms_of_use_info').hide(0);
      });

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
    });
})(jQuery);

/*if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
 //Allow
 } else {
 	alert("please use firefox for better view, thank you");
 }*/
