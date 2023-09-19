/*this event handler was needed because -
 - on data parse error menu not called error was coming
 - thus to handle the uncalled for error caused due to data not loading
 - this was to be called*/
window.onerror = function (message, source, lineno, colno, error) {
  alert(
    'message (mostly script error comes here):' +
      message +
      '\n' +
      'source :' +
      source +
      '\n' +
      'lineno (may not be accurate):' +
      lineno +
      '\n' +
      'colno (may not be accurate):' +
      colno +
      '\n' +
      'error :' +
      error
  )
  location.reload()
}
subject

// start start js code from here
console.log(document.URL)
var $_GET = {}
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
  function decode(s) {
    return decodeURIComponent(s.split('+').join(' '))
  }

  $_GET[decode(arguments[1])] = decode(arguments[2])
})

console.log($_GET['id'])
var mainId = $_GET['id']
var $id = mainId
var $currentgrade = $_GET['grade']
var $donar = ''
// parse the id we got from url inside the $_GET["id"]
var $array =
  $_GET['id'].split('') /*split the id first to total number of characters*/
// get the subject id in three characters
var subject = $array[0] + $array[1] + $array[2] //subjects id like of science-->sci/maths-->mat/english-->eng
// get the activity id in three characters
var activity = $array[3] + $array[4] + $array[5] //activity id like of simple machine-->sm0/heat-->ht0/light-->lgt etc

// get the level id in two characters
var level = $array[6] + $array[7] //level id like of level 1 --> 01
var current_grade = $array[6] + $array[7] // id like of level 1-->01
// change level characters into integer
level = parseInt(level) - 1
var $lang
if (!$_GET['lang'] || $_GET['lang'] == '') {
  $lang = 'en' //default lang = np
} else {
  $lang = $_GET['lang']
}

var classtext = '' /*to be used to display grade or कक्षा in breadcrumbs*/
// language specific class text to be used in breadcrumbs
$lang == 'en'
  ? (classtext = 'Grade ' + $currentgrade)
  : (classtext =
      "कक्षा <span style = 'font-family:kalimati !important'>" +
      ole.nepaliNumber($currentgrade, 'np') +
      '</span>')

$('body').attr('lang', $lang) //create attribute "lang" on body tag
$('.mainBox').attr('lang', $lang)

$('.secondRow').addClass('mainBox-font-' + $_GET['lang'])

//hidelogosinstartpage of rti
$('.lefticon, .righticon').hide(0)

var data /*data = global variable for storing all the datas of the content */
var $selectedActivity = '' /*storing selected activity */
var $selectedSubject = '' /*to store selected subject*/

/*do this for the activityguide in every the start page -- JSON file linking :START*/
var currentActivityGuide = '' //variable to define current activity guide JSON link

//checking the grades for activity guide JSON link-START
// switch (subject) {
//   case 'sci':
//     currentActivityGuide = 'configactivityguide_science.json'
//     break
//   case 'mat':
//     currentActivityGuide = 'configactivityguide_math.json'
//     break
//   case 'eng':
//     currentActivityGuide = 'configactivityguide_english.json'
//     break
//   case 'nep':
//     currentActivityGuide = 'configactivityguide_nepali.json'
//     break
//   case 'dsy':
//     currentActivityGuide = 'configactivityguide_nepali.json'
//     break
//   case 'nsl':
//     currentActivityGuide = 'configactivityguide_nepali.json'
//     break
// }
//checking the grades for activity guide JSON link-END

//checking the grades for activity guide JSON link-START
// switch ($currentgrade) {
//   case '1':
//     currentActivityGuide =
//       'config/activity_guide_config/grade1/' + currentActivityGuide
//     break
//   case '2':
//     currentActivityGuide =
//       'config/activity_guide_config/grade2/' + currentActivityGuide
//     break
//   case '3':
//     currentActivityGuide =
//       'config/activity_guide_config/grade3/' + currentActivityGuide
//     break
//   case '4':
//     currentActivityGuide =
//       'config/activity_guide_config/grade4/' + currentActivityGuide
//     break
//   case '5':
//     currentActivityGuide =
//       'config/activity_guide_config/grade5/' + currentActivityGuide
//     break
//   case '6':
//     currentActivityGuide =
//       'config/activity_guide_config/grade6/' + currentActivityGuide
//     break
//   case '7':
//     currentActivityGuide =
//       'config/activity_guide_config/grade7/' + currentActivityGuide
//     break
//   case '8':
//     currentActivityGuide =
//       'config/activity_guide_config/grade8/' + currentActivityGuide
//     break
// }
//checking the grades for activity guide JSON link-END

var objectPointerAll1 = {} //variable to store all the object pointers for list view
var objectPointerAll2 = {} //variable to store all the object pointers for list view
var objectPointerAll3 = {} //variable to store all the object pointers for list view
var objectPointerAll4 = {} //variable to store all the object pointers for list view
var objectPointerAll5 = {} //variable to store all the object pointers for assesment list view
var linklists = {} //variable to store all the prerequisites_content list links
var noactivityguide_flag = 1 //setting the flag to hault certain code below in the popup function to clear out dependencies
var loadAgData = true
var loadfinishInterval
$.getJSON(currentActivityGuide, function (activitydata) {
  console.log('from activityguide.json get done, success')

  if (activitydata.hasOwnProperty(activity)) {
    noactivityguide_flag++
    objectiveDatas.lesson_content = eval(
      'activitydata.' + activity + '.about_the_lesson_content[$lang]'
    )
    objectiveDatas.prerequisites_content = eval(
      'activitydata.' + activity + '.prerequisites_content.paragraph[$lang]'
    )
    objectiveDatas.lesson_guidelines_content_paragraph = eval(
      'activitydata.' +
        activity +
        '.lesson_guidelines_content.' +
        $lang +
        '.paragraph'
    )
    objectiveDatas.lesson_guidelines_content_list = eval(
      'activitydata.' +
        activity +
        '.lesson_guidelines_content.' +
        $lang +
        '.list'
    )
    objectiveDatas.related_activities_content_paragraph = eval(
      'activitydata.' +
        activity +
        '.related_activities_content.' +
        $lang +
        '.paragraph'
    )
    objectiveDatas.related_acitvities_content_list = eval(
      'activitydata.' +
        activity +
        '.related_activities_content.' +
        $lang +
        '.list'
    )
    objectiveDatas.evaluation_content_paragraph = eval(
      'activitydata.' + activity + '.evaluation_content.' + $lang + '.paragraph'
    )
    objectiveDatas.evaluation_content_content_list = eval(
      'activitydata.' + activity + '.evaluation_content.' + $lang + '.list'
    )
    objectiveDatas.breadcrumb = eval(
      'activitydata.' + activity + '.prerequisites_content.chapter_links'
    )
    objectiveDatas.curricular_requirement = eval(
      'activitydata.' + activity + '.curricular_requirement_content.' + $lang
    )
    objectiveDatas.lesson_guidelines_content_paragraph =
      objectiveDatas.lesson_guidelines_content_paragraph.replace(/\n/g, '<br>')
    objectiveDatas.related_activities_content_paragraph =
      objectiveDatas.related_activities_content_paragraph.replace(/\n/g, '<br>')

    //   for assesment strategies
    //   only show assesment strategies iff provided
    if (
      eval('activitydata.' + activity).hasOwnProperty('assesment_strategies')
    ) {
      objectiveDatas.assesment_strategies_paragraph = eval(
        'activitydata.' +
          activity +
          '.assesment_strategies.' +
          $lang +
          '.paragraph'
      )
      objectiveDatas.assesment_strategies_list = eval(
        'activitydata.' + activity + '.assesment_strategies.' + $lang + '.list'
      )

      //   list assesment_strategies_list
      var objectPointer5 = objectiveDatas.assesment_strategies_list
      var counter5 = 0

      $.each(objectPointer5, function () {
        objectPointerAll5[counter5] = objectPointer5[counter5]
        counter5++
      })
    }

    // second list related_acitvities_content_list
    var objectPointer2 = objectiveDatas.related_acitvities_content_list
    var counter2 = 0

    $.each(objectPointer2, function () {
      'objectPointer4.chapter_link_data' +
        (counter4 + 1) +
        '.breadcrumb_data.' +
        $lang
      objectPointerAll2[counter2] = objectPointer2[counter2].replace(
        /\n/g,
        '<br>'
      )
      counter2++
    })
    console.log(objectPointer2)

    // third list first second tab evaluation_content_content_list
    var objectPointer3 = objectiveDatas.evaluation_content_content_list
    var counter3 = 0

    $.each(objectPointer3, function () {
      objectPointerAll3[counter3] = objectPointer3[counter3]
      counter3++
    })
    console.log(objectPointer3)

    // fourth list first second tab for prerequisites_content breadcrumb and lists
    var objectPointer4 = objectiveDatas.breadcrumb
    var counter4 = 0

    $.each(objectPointer4, function () {
      objectPointerAll4[counter4] = eval(
        'objectPointer4.chapter_link_data' +
          (counter4 + 1) +
          '.breadcrumb_data.' +
          $lang
      )

      var thislinkid =
        subject +
        eval('objectPointer4.chapter_link_data' + (counter4 + 1) + '.id') +
        '01'
      var thislinkgrade = eval(
        'objectPointer4.chapter_link_data' + (counter4 + 1) + '.grade'
      )
      linklists[counter4] =
        'activity.html?id=' +
        thislinkid +
        '&lang=' +
        $lang +
        '&grade=' +
        thislinkgrade
      counter4++
    })
    console.log(objectPointer4)

    // first list for lesson_guidelines_content_list
    var objectPointer1 = objectiveDatas.lesson_guidelines_content_list
    var counter1 = 0
    $.each(objectPointer1, function () {
      objectPointerAll1[counter1] = objectPointer1[counter1].replace(
        /\n/g,
        '<br>'
      )
      counter1++
    })
    console.log(objectPointer1)
  } else {
    // alert("This chapter has no activitactivityguideiny guide data in activityguide.json");
    console.log('This chapter has no activity guide data in activityguide.json')
  }
})
  .done(function (myjson) {
    loadAgData = true
    console.log('from activityguide.json get done, second success')
  })
  .fail(function (data, textstatus, errortype) {
    // alert("This chapter has no activity guide data in activityguide.json");
    // alert("from data.json get failed, status: " + textstatus + ", error: "+errortype);
    // location.reload();
  })
  .always(function () {
    console.log('from data.json complete, appears on complete')
  })

/*do this for the activityguide in every the start page JSON file linking :END*/

/*do this for the head title in every the start page :START*/
var objectiveDatas = {
  textObjectiveData: '',
  titleObjectiveData: '',
  textActivityGuideData: '',
  textStartText: '',
}

var techNoteData /// teacher note data from data.xml
var techData //teaher note data fron datajason
$.getJSON('config/data.json', function (startPageObjectiveData) {
  console.log('from data.json get done, success')
  objectiveDatas.textObjectiveData = startPageObjectiveData.textObjective[$lang]
  objectiveDatas.textActivityGuideData =
    startPageObjectiveData.activityGuide[$lang]
  objectiveDatas.textStartText = startPageObjectiveData.startText[$lang]
  objectiveDatas.textLessonHeading =
    startPageObjectiveData.about_the_lesson_heading[$lang]
  objectiveDatas.prerequisites_heading =
    startPageObjectiveData.prerequisites_heading[$lang]
  objectiveDatas.lesson_guidelines_heading =
    startPageObjectiveData.lesson_guidelines_heading[$lang]
  objectiveDatas.related_activities_heading =
    startPageObjectiveData.related_activities_heading[$lang]
  objectiveDatas.evaluation_heading =
    startPageObjectiveData.evaluation_heading[$lang]
  objectiveDatas.curricular_requirement_heading =
    startPageObjectiveData.curricular_requirement_heading[$lang]
  objectiveDatas.assesment_strategies_heading =
    startPageObjectiveData.assesment_strategies_heading[$lang] //assesment heading

  techData = [
    startPageObjectiveData.subject[$lang],
    startPageObjectiveData.gradess[$lang],
    startPageObjectiveData.studyMaterial[$lang],
    startPageObjectiveData.actObj[$lang],
    startPageObjectiveData.actbefore[$lang],
    startPageObjectiveData.lesson[$lang],
    startPageObjectiveData.exercise[$lang],
  ]
})
  .done(function (myjson) {
    console.log('from data.json get done, second success')
  })
  .fail(function (data, textstatus, errortype) {
    alert(
      'from data.json get failed, status: ' +
        textstatus +
        ', error: ' +
        errortype
    )
    location.reload()
  })
  .always(function () {
    console.log('from data.json complete, appears on complete')
  })
/*do this for the head title in every the start page :END*/
;(function ($) {
  /************************
   * try one
   * fix for error on start page... not loading data
   * loadStartPage == load data function after data has been loaded
   *************************/

  function loadStartPage() {
    console.log('data received')
    //console.log(data["teachersnote"]);

    var $data = {
      subject: $subName,
      activity: data.lesson.chapter,
      // level not required to show for now so no need to pass this data
      // to handlebars
      /*level : data.lesson.levelname*/
    }

    /*store the subject in $selcontent_linksectedSubject variable it will
	be used to create breadcrumb later*/
    $selectedSubject = $subName
    //alert(data.teachersnote.area);

    var source = $('#topRow').html()
    var template = Handlebars.compile(source)
    var listOfTitles = template($data)
    $('.topRow2').append(listOfTitles)

    $link =
      'activity.html?id=' +
      mainId +
      '&lang=' +
      $lang +
      '&grade=' +
      $currentgrade

    var startContinueImgLangSelect

    if ($lang == 'np') {
      startContinueImgLangSelect = 'startContinueBtnNp'
    } else {
      startContinueImgLangSelect = 'startContinueBtnEn'
    }

    var objectPointer = data.lesson.objective.description
    console.log(objectPointer)
    var objectPointerAll = {}
    var o = 0

    if (typeof objectPointer == 'string') {
      objectPointerAll[0] = data.lesson.objective.description
    } else {
      $.each(objectPointer, function () {
        objectPointerAll[o] = objectPointer[o]
        o++
      })
    }

    var whatLangVal = ''
    var whatLangVa2 = ''
    if ($lang == 'np') {
      whatLangVal = './images/start_nepali.png'
      whatLangVal2 = './images/start_hover_nepali.png'
    } else {
      whatLangVal = './images/start.png'
      whatLangVal2 = './imagevaluation_contentes/start_hover.png'
    }

    // console.log(data.lesson.references);
    var data2 = {
      showAG: $currentgrade < 9 ? true : false,
      imagebig: $selectedActivity.imagebig,
      titleObjectiveText: objectiveDatas.textObjectiveData,
      activityguidetext: objectiveDatas.textActivityGuideData,
      titleText: objectiveDatas.titleObjectiveData,
      startText: objectiveDatas.textStartText,

      //data for handlebars of activity guide tab -- START//
      about_the_lesson_heading: objectiveDatas.textLessonHeading,
      prerequisites_heading: objectiveDatas.prerequisites_heading,
      lesson_guidelines_heading: objectiveDatas.lesson_guidelines_heading,
      related_activities_heading: objectiveDatas.related_activities_heading,
      evaluation_heading: objectiveDatas.evaluation_heading,
      about_the_lesson_content: objectiveDatas.lesson_content,
      prerequisites_content: objectiveDatas.prerequisites_content,
      lesson_guidelines_content_paragraph:
        objectiveDatas.lesson_guidelines_content_paragraph,
      lesson_guidelines_content_list: objectPointerAll1,
      related_activities_content_paragraph:
        objectiveDatas.related_activities_content_paragraph,
      related_activities_content_list: objectPointerAll2,
      evaluation_content_paragraph: objectiveDatas.evaluation_content_paragraph,
      evaluation_content_list: objectPointerAll3,
      prerequisites_content_links_list: objectPointerAll4,
      curricular_requirement_heading:
        objectiveDatas.curricular_requirement_heading,
      curricular_requirement_content: objectiveDatas.curricular_requirement,

      // assesment strategies added
      assesment_strategies_heading: objectiveDatas.assesment_strategies_heading,
      assesment_strategies_paragraph:
        objectiveDatas.assesment_strategies_paragraph,
      assesment_strategies_list: objectiveDatas.assesment_strategies_list,
      is_assesment_content:
        objectiveDatas.assesment_strategies_list ||
        objectiveDatas.assesment_strategies_paragraph
          ? true
          : false,
      //data for handlebars of activity guide tab -- END//

      points: objectPointerAll,
      credits: data.lesson.credits,
      // references: data.lesson.references,
      description: data.lesson.definition,
      link: $link,
      startContinueBtnLang: startContinueImgLangSelect,
      whatLangVal: whatLangVal,
      whatLangVal2: whatLangVal2,
    }

    console.log(data2)

    var source1 = $('#mid').html()
    var template1 = Handlebars.compile(source1)
    console.log('appending ag data')
    var listOfTitles1 = template1(data2)
    $('.secondRow').append(listOfTitles1)
    $('.bigImageforStartPage>.bigimageClass').attr(
      'src',
      $selectedActivity.imagebig
    )

    //titlemenu click actioncontent_links
    $('.titleMenu')
      .find('a')
      .attr(
        'href',
        'subjects.html?sub=' +
          $subject.toLowerCase() +
          '&lang=' +
          $lang +
          '&grade=' +
          $currentgrade
      )
    // front end code for tab view starts    $('.link_prequesite_class li:nth-child()')

    // to this for front end code of TAB view in start.html-- START
    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab')

      $('ul.tabs li').removeClass('current')
      $('.tab-content-start').removeClass('current')
      $(this).addClass('current')
      $('#' + tab_id).addClass('current')
      if ($('.check').hasClass('current')) {
        $('.insideimage').attr(
          'src',
          'images/activityguideimages/read_icon_blue.png'
        )
        $('.insideimage1').attr(
          'src',
          'images/activityguideimages/bookicon.png'
        )
      } else {
        $('.insideimage').attr(
          'src',
          'images/activityguideimages/read_icon_white.png'
        )
        $('.insideimage1').attr(
          'src',
          'images/activityguideimages/book_icon_blue.png'
        )
      }
    })
    // to this for front end code of TAB view in start.html-- END

    //to assign href to the lists in prerequisites_content START
    // only goes if there is activity guide data - noactivityguide_flag
    if (noactivityguide_flag > 1) {
      var list_pointer = objectiveDatas.breadcrumb
      var list_counter = 0

      $.each(list_pointer, function () {
        $(
          '.link_prequesite_class li:nth-child(' + (list_counter + 1) + ') a'
        ).attr('href', linklists[list_counter])
        $(
          '.link_prequesite_class li:nth-child(' + (list_counter + 1) + ') a'
        ).attr('target', '_blank')
        list_counter++
      })
    } else {
      $('.tab-link:nth-child(2)').hide(0)
      $('ul.tabs li').css(
        'box-shadow',
        'rgb(153 153 153 / 30%) -12px -10px 18px -13px'
      )

      $('.list_div').css({
        display: 'block',
        'background-color': '#30499100',
      })
      // if($lang=="en"){
      // 	$('#tab-2').html(" ")
      // }
      // else{
      // 	$('#tab-2').html(" ")
      // }
    }
    //to assign href to the lists in prerequisites_content END

    // on clicking teachers note
    $('.navbar_notebook').click(function () {
      // try and populate the teachers note
      try {
        var whattechextpoints = data.lesson.teachersnote.teachexercise
        var teachcount = 0
        var whatExeTeach = []
        if (typeof whattechextpoints == 'string') {
          whatExeTeach[0] = {
            exeobj: techData[6] + ' ' + ole.nepaliNumber(teachcount + 1, $lang),
            exeobjval: whattechextpoints,
          }
        } else {
          $.each(whattechextpoints, function () {
            whatExeTeach[teachcount] = {
              exeobj:
                techData[6] + ' ' + ole.nepaliNumber(teachcount + 1, $lang),
              exeobjval: whattechextpoints[teachcount],
            }
            teachcount++
          })
        }

        var $dataNote = {
          subjects: techData[0],
          subjectval: data.lesson.subject,
          grades: techData[1],
          gradesval: data.lesson.teachersnote.gradeMe,
          nameofchapter: data.lesson.chapter,
          teachObj: [
            {
              teachleft: techData[2][0],
              teachright: data.lesson.teachersnote.area,
            },
            {
              teachleft: techData[2][1],
              teachright: data.lesson.teachersnote.achievement,
            },
            {
              teachleft: techData[2][2],
              teachright: data.lesson.teachersnote.elaboration,
            },
          ],
          teacharea: techData[3][0],
          teachareaval: data.lesson.teachersnote.objectives,
          teachareaobj: techData[3][1],
          lessonobj: techData[5],
          lessonobjval: data.lesson.teachersnote.teachlesson,

          selfobj: techData[3][2],
          selfobjval: data.lesson.teachersnote.teachassesement,
          teach_act_list: [
            {
              teachact: techData[4][0],
              teachactval: data.lesson.teachersnote.preactivity,
            },
            {
              teachact: techData[4][1],
              teachactval: data.lesson.teachersnote.postactivity,
            },
            {
              teachact: techData[4][2],
              teachactval: data.lesson.teachersnote.epactivity,
            },
            {
              teachact: techData[4][3],
              teachactval: data.lesson.teachersnote.groupactivity,
            },
          ],
          teach_last_list: [
            {
              teachact: techData[4][4],
              teachactval: data.lesson.teachersnote.homework,
            },
            {
              teachact: techData[4][5],
              teachactval: data.lesson.teachersnote.relatedact,
            },
            {
              teachact: techData[4][6],
              teachactval: data.lesson.teachersnote.teachtips,
            },
          ],
          weblstval: data.lesson.teachersnote.elink,
          weblst: techData[4][7],
          exeteach: whatExeTeach,
        }

        var sourceMe = $('#teachnotes').html()
        var templateMe = Handlebars.compile(sourceMe)
        var listOfTitlesMe = templateMe($dataNote)

        $('#teacherNotePop')
          .fadeOut(10, function () {
            $(this).html(listOfTitlesMe)
          })
          .delay(10)
          .fadeIn(10)
      } catch (error) {
        // catch any error on populating teachers note
        alert(
          'from teachers note: teachers note not proper in data file \n' +
            'find the respective data file and check \n' +
            'errortype :' +
            error +
            '\n' +
            'click okay to reload'
        )
        location.reload()
      }
    })

    $('#teacherNotePop').on('click', '#teachClose', function () {
      $('#teacherNotePop').fadeOut(10, function () {
        $(this).html('')
      })
    })

    /*call it here since it is the last thing to be call, hope so
	if breadcrumbs does not appear call createBreadcrumbs from
	a place where everything comes to an end in this js file*/
    createBreadcrumbs()

    // Changes in Science to Our Surrounding starts
    if ($donar == 'rti') {
      // $('#activity-page-logo').css({ 'opacity': '0', 'pointer-events': 'none' });
    }
    if ($_GET['id'].substring(0, 3) == 'sci') {
      if ($currentgrade < 4) {
        if ($lang == 'en') {
          $('.bread_crumb>span:nth-child(3)').text('Our Surrounding')
        } else if ($lang == 'np') {
          $('.bread_crumb>span:nth-child(3)').html('हाम्रो सेरोफेरो')
        }
      } else {
        if ($lang == 'en') {
          $('.bread_crumb>span:nth-child(3)').html('Science')
        } else if ($lang == 'np') {
          $('.bread_crumb>span:nth-child(3)').html('विज्ञान')
        }
      }
    }

    // breadcrumb linking code starts
    var href =
      'subjects.html?sub=' +
      $subject.toLowerCase() +
      '&lang=' +
      $lang +
      '&grade=' +
      $currentgrade
    $('.bread_crumb>span:nth-child(1)').wrap('<a href=' + href + '/>')
    // $(".bread_crumb>span:nth-child(3)").wrap('<a href='+href+'/>');
    // breadcrumb linking code ends

    // Changes in Science to Our Surrounding ends

    // adding home menu hover for image changes
    var $menu_hover_img = './images/activity/menu_home_org.png'
    var $menu_hover_img1 = './images/activity/menu_home_blue.png'
    $('.menu_bar_start_page')
      .mouseenter(function () {
        $(this).attr('src', $menu_hover_img)
      })
      .mouseleave(function () {
        $(this).attr('src', $menu_hover_img1)
      })
    // ended adding home menu hover for image changes

    //changetext of support if nepali
    if ($lang == 'np') {
      $('.lefticon > p').html('को सहयोगमा तयार पारिएको')
      $('.righticon > p').html('बाट स्विकृती प्राप्त')
    }

    //commented to provide the content to RTI
    // if($donar=="rti"){
    // $('.lefticon, .righticon').show(0)
    // $(".bigImageforStartPage img").css('width','60%');
    // }
    // else{
    // 	$(".bigImageforStartPage img").css('width','100%');
    // }
  }

  /**************************************************************************
   * objectifyactivityData changes datas from the url given ie data-np.xml or data.xml
   * from the activity folder into objects datas. thus we can call in activity
   * data.string.stringid
   ****************************************************************************/

  function objectifyactivityData($url, getFunc) {
    clearInterval(loadfinishInterval)
    console.log('clearLoadIntrval')
    console.log('activitydataurl = ' + $url)
    $data = {}

    // call ajax method to get specific data file
    $.ajax({
      type: 'GET',
      url: $url,
      dataType: 'xml',
      beforeSend: function () {
        console.log('getting data from : ' + $url)
      },
    })
      .done(function (xml) {
        $data.lesson = {}
        console.log('i ve reached to $data now')
        $lesson = $(xml).find('lesson') // data for lesson
        /*
         *the function below should be changed to recurion, for $%^#&*
         */
        $lesson.children().each(function (lessonData) {
          if ($(this).children().length > 1) {
            $data.lesson[this.nodeName] = {}
            $a = $data.lesson[this.nodeName]
            $(this)
              .children()
              .each(function (data) {
                if ($(this).children().length > 1) {
                  $a[this.nodeName] = {}
                  var $b = $a[this.nodeName]

                  $(this)
                    .children()
                    .each(function (count) {
                      $b[count] = $(this).text()
                    })
                } else {
                  $a[this.nodeName] = $(this).text()
                }
              })
          } else {
            $data.lesson[this.nodeName] = $(this).text()
          }
        })

        console.log('datas sent')
        getFunc()
      })
      .fail(function (jqxhr, textstatus, errortype) {
        alert(
          'get ' +
            $url +
            ' failed, status: ' +
            textstatus +
            ', error: ' +
            errortype
        )
        location.reload()
      })
    return $data
  }

  function callActivityJson(configFile) {
    // console.log("sci="+configFile);

    $.getJSON('config/' + configFile, function (activitydata) {
      var gradekey = activitydata['grade' + $currentgrade]

      $.each(gradekey, function (key) {
        console.log(key)
        if (gradekey[key].id === activity) {
          $selectedActivity = gradekey[key]
          $donar = $selectedActivity['donor']
        }
      })

      if ($selectedActivity === null || $selectedActivity === '') {
      } else {
        console.log($selectedActivity.levels.length)

        if (level < $selectedActivity.levels.length) {
          var selLevel = $selectedActivity.levels[level]
          $base_dir = 'activity/' + selLevel.folder //base directory
          selLevel.title
          var dataFile = 'data.xml'
          if ($lang === 'np') {
            dataFile = 'data-np.xml'
          } else if ($lang === 'en') {
            dataFile = 'data.xml'
          }
          dataLink = $base_dir + '/' + dataFile
          //console.log("link = "+ dataLink);

          /*
							added setinterval as the code to render data was running before ag's data was loaded
							loadAgData flag is set on done callback of ag's jsondata load and
							and after that is done the data is rendered
						*/
          loadfinishInterval = setInterval(function () {
            console.log('set interval afterDataload : ' + loadAgData)
            if (loadAgData) {
              clearInterval(loadfinishInterval)
              data = objectifyactivityData(dataLink, loadStartPage) //data
            }
          }, 10)
        }
      }
    })
      .done(function () {
        console.log('from ' + configFile + ' get done, second success')
      })
      .fail(function (data, textstatus, errortype) {
        alert(
          'from ' +
            configFile +
            ' get failed, status: ' +
            textstatus +
            ', error: ' +
            errortype
        )
        location.reload()
      })
      .always(function () {
        console.log('from ' + configFile + ' get complete, appears on complete')
      })
  }

  // function which handels menu call when called
  function callmenu(myjson) {
    // if menu function is not yet interpreted
    if (typeof menu === 'undefined') {
      location.reload()
      callmenu(myjson)
    } else {
      menu(myjson)
      return true
    }
  }

  // pull configsubjects and do the following
  var global_subject = ';'
  $.getJSON('config/subject.json', function (myjson) {
    console.log('from subject.json get done, success')
    console.log('m trying to call menu')

    callmenu(myjson)

    console.log('menu called')
  })
    .done(function (myjson) {
      console.log('from subject.json get done, second success')
      $.each(myjson, function (key) {
        if (myjson[key].id == subject) {
          $subject = key
          $subName = myjson[key][$lang]
        }
      })
      if ($subject == '') {
        console.log('goto homepage')
      } else {
        configFile = 'config' + $subject + '.json'
        callActivityJson(configFile)
      }

      // give link for menu in the navigation toolbar
      $('#activity-page-menu-container')
        .find('a')
        .attr(
          'href',
          'subjects.html?sub=' +
            $subject.toLowerCase() +
            '&lang=' +
            $lang +
            '&grade=' +
            $currentgrade
        )
    })
    .fail(function (data, textstatus, errortype) {
      alert(
        'from subject.json get failed, status: ' +
          textstatus +
          ', error: ' +
          errortype
      )
      location.reload()
    })
    .always(function () {
      console.log(
        ' here from subject.json complete, appears on complete'
      )
    })

  /*
breadcrumbs
*/

  function createBreadcrumbs() {
    // alert($selectedSubject)
    /*var $thisnewLink="subjects.html?sub="+$subject+"&lang="+$lang+"&grade="+$currentgrade;*/
    var othdata = {
      breadgrade: classtext,
      /*breadlink :$thisnewLink,*/
      breadsub: $selectedSubject,
      breadname: $selectedActivity[$lang],
    }

    var source3 = $('#breadcrumbs').html()
    var template3 = Handlebars.compile(source3)
    var html3 = template3(othdata)

    $('#breadcrumblink').html(html3)

    // breadcrumb linking code starts
    // var href= "subjects.html?sub="+$subject.toLowerCase()+"&lang="+$lang+"&grade="+$currentgrade;
    // $(".bread_crumb>span:nth-child(1)").wrap('<a href='+href+'/>');
    // $(".bread_crumb>span:nth-child(3)").wrap('<a href='+href+'/>');
    // breadcrumb linking code ends
  }

  /*
end of breadcrumbs

*/
})(jQuery)
