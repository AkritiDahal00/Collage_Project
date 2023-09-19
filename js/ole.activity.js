/*
_                _       _       _
__ _  ___| |_   _   _ _ __| |   __| | __ _| |_ __ _
/ _` |/ _ \ __| | | | | '__| |  / _` |/ _` | __/ _` |
| (_| |  __/ |_  | |_| | |  | | | (_| | (_| | || (_| |
\__, |\___|\__|  \__,_|_|  |_|  \__,_|\__,_|\__\__,_|
|___/

_get method finding --> this gives get function -->url parsing
*/

var $base_dir = ''
var $_GET = {}
var $subject = ''
var $donar = ''
var spentTimePage = 0

var mySubjectLang = '' /* for breadcrumb*/
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
  function decode(s) {
    return decodeURIComponent(s.split('+').join(' '))
  }

  $_GET[decode(arguments[1])] = decode(arguments[2])
})

var $currentgrade = $_GET['grade'] /*current grade got from current url*/
var mainId = $_GET['id'] //id from url
// parse the id we got from url inside the $_GET["id"]
var $array =
  mainId.split('') /*split the id first to total number of characters*/
// get the subject id in three characters
var subject = $array[0] + $array[1] + $array[2] //subjects id like of science-->sci/maths-->mat/english-->eng
// get the activity id in three characters
var activity = $array[3] + $array[4] + $array[5] //activity id like of simple machine-->sm0/heat-->ht0/light-->lgt etc
// get the level id in two characters
var level = $array[6] + $array[7] //level id like of level 1 --> 01
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

// added by dilak for page counter
var pNoCounter = '' /*to be used to display grade or कक्षा in breadcrumbs*/
$lang == 'en' ? (pNoCounter = 'Page') : (pNoCounter = 'पाना')
$('#ole-pg-no').html(pNoCounter)
// added by dilak for page counter END

$('body').attr('lang', $lang) //create attribute "lang" on body tag
$('.mainBox').attr('lang', $lang)

$('.mainBox').addClass('mainBox-font-' + $_GET['lang'])

var $pg = '0'
if (!$_GET['pg'] || $_GET['pg'] == '') {
  $pg = '0' //default pg = 1
} else {
  $pg = $_GET['pg']
  $pg = parseInt($pg) - 1
}

/**
 *For section
 *if section is not assigned, section 0 ie first section is loaded
 *
 */
var $scId = '0'
if (!$_GET['scId'] || $_GET['scId'] == '') {
  $scId = '0' //default pg = 1
} else {
  $scId = parseInt($_GET['scId'])
}

/**
 * exercise
 * check if its exercise or others
 *
 */
var exercise = null,
  exerciseNo = null
// console.log($_GET["exercise"]);
if (!$_GET['exercise'] || $_GET['exercise'] == '') {
  exercise = null //default pg = 1
} else {
  // alert('whaterver');
  exercise = 'yes'
  if ($_GET['exercise'] === 'yes') {
    //hide refresh button
    $('#activity-page-refresh-btn').hide(0)
    exerciseNo = 1
  } else {
    exerciseNo = parseInt($_GET['exercise'])
    //hide refresh button
    $('#activity-page-refresh-btn').hide(0)
  }
}

/*do this for the head title in every the start page :START*/
var objectiveDatas = {
  textLessonHeading: '',
  prerequisites_heading: '',
  lesson_guidelines_heading: '',
  related_activities_heading: '',
  evaluation_heading: '',
  prerequisites_content: '',
  lesson_guidelines_content_paragraph: '',
  related_acitvities_content_list: '',
  related_activities_content_paragraph: '',
  related_acitvities_content_list: '',
  evaluation_content_paragraph: '',
  evaluation_content_content_list: '',
  lesson_content: '',
  textActivityGuideData: '',
  curricular_requirement_heading: '',
  curricular_requirement: '',
}
//
$.getJSON('config/data.json', function (datajson) {
  console.log('from data.json get done, success')
  objectiveDatas.textActivityGuideData = datajson.activityGuide[$lang]
  objectiveDatas.textLessonHeading = datajson.about_the_lesson_heading[$lang]
  objectiveDatas.curricular_requirement_heading =
    datajson.curricular_requirement_heading[$lang]
  objectiveDatas.prerequisites_heading = datajson.prerequisites_heading[$lang]
  objectiveDatas.lesson_guidelines_heading =
    datajson.lesson_guidelines_heading[$lang]
  objectiveDatas.related_activities_heading =
    datajson.related_activities_heading[$lang]
  objectiveDatas.evaluation_heading = datajson.evaluation_heading[$lang]
  objectiveDatas.assesment_strategies_heading =
    datajson.assesment_strategies_heading[$lang] //assesment strategies heading
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

//remove refresh button from 7 and 8 grade
if ($currentgrade == 7 || $currentgrade == 8) {
  $('#activity-page-refresh-btn').hide(0)
}

//connecting with required JSON file for activity guide popup -- START
var currentActivityGuide = ''
switch (subject) {
  case 'sci':
    currentActivityGuide = 'configactivityguide_science.json'
    break
  case 'mat':
    currentActivityGuide = 'configactivityguide_math.json'
    break
  case 'eng':
    currentActivityGuide = 'configactivityguide_english.json'
    break
  case 'nep':
    currentActivityGuide = 'configactivityguide_nepali.json'
    break
  case 'dsy':
    currentActivityGuide = 'configactivityguide_nepali.json'
    break
}
switch ($currentgrade) {
  case '1':
    currentActivityGuide =
      'config/activity_guide_config/grade1/' + currentActivityGuide
    break
  case '2':
    currentActivityGuide =
      'config/activity_guide_config/grade2/' + currentActivityGuide
    break
  case '3':
    currentActivityGuide =
      'config/activity_guide_config/grade3/' + currentActivityGuide
    break
  case '4':
    currentActivityGuide =
      'config/activity_guide_config/grade4/' + currentActivityGuide
    break
  case '5':
    currentActivityGuide =
      'config/activity_guide_config/grade5/' + currentActivityGuide
    break
  case '6':
    currentActivityGuide =
      'config/activity_guide_config/grade6/' + currentActivityGuide
    break
  case '7':
    currentActivityGuide =
      'config/activity_guide_config/grade7/' + currentActivityGuide
    break
  case '8':
    currentActivityGuide =
      'config/activity_guide_config/grade8/' + currentActivityGuide
    break
}
var objectPointerAll1 = {}
var objectPointerAll2 = {}
var objectPointerAll3 = {}
var objectPointerAll4 = {}
var objectPointerAll5 = {}
var linklists = {}
var noactivityguide_flag = 1 //setting the flag to hault certain code below in the popup function to clear out dependencies

$.getJSON(currentActivityGuide, function (activitydata) {
  console.log('from activityguide json get done, success')
  if (activitydata.hasOwnProperty(activity)) {
    noactivityguide_flag++ // FLAG update so that it can be figured out that there is no activity guide json FILE
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
      objectiveDatas.lesson_guidelines_content_paragraph.replace(
        /\n/g,
        '<br><br>'
      )
    objectiveDatas.related_activities_content_paragraph =
      objectiveDatas.related_activities_content_paragraph.replace(
        /\n/g,
        '<br><br>'
      )

    //   for assesment strategies
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

    // first list
    var objectPointer1 = objectiveDatas.lesson_guidelines_content_list
    var counter1 = 0

    $.each(objectPointer1, function () {
      objectPointerAll1[counter1] = objectPointer1[counter1].replace(
        /\n/g,
        '&lt;br&gt;'
      )
      counter1++
    })

    // second list
    var objectPointer2 = objectiveDatas.related_acitvities_content_list
    var counter2 = 0

    $.each(objectPointer2, function () {
      objectPointerAll2[counter2] = objectPointer2[counter2]
      counter2++
    })

    // third list first second tab
    var objectPointer3 = objectiveDatas.evaluation_content_content_list
    var counter3 = 0

    $.each(objectPointer3, function () {
      objectPointerAll3[counter3] = objectPointer3[counter3]
      counter3++
    })

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
  } else {
    // alert("This chapter has no activitactivityguideiny guide data in activityguide.json");
    console.log('This chapter has no activity guide data in activityguide.json')
  }
})
  .done(function (myjson) {
    console.log('from activityguide.json get done, second success')
  })
  .fail(function (data, textstatus, errortype) {
    // alert("This chapter has no activity guide data in activityguide.json");
    // alert("from data.json get failed, status: " + textstatus + ", error: "+errortype);
    // location.reload();
  })
  .always(function () {
    console.log('from activity guide json complete, appears on complete')
  })
//connecting with required JSON file for activity guide popup -- END

//making set of link attribute
var linkInfo = {
  lessonUrl:
    'activity.html?id=' + mainId + '&lang=' + $lang + '&grade=' + $currentgrade, //lesson url
  id: mainId,
  lang: $lang,
  pg: $pg + 1, //if page exist
  section: $scId,
  exerciseUrl:
    'activity.html?id=' +
    mainId +
    '&lang=' +
    $lang +
    '&grade=' +
    $currentgrade +
    '&exercise=yes', //exerciseurl
  exercise: exerciseNo, //if exercise exist
  subjectUrl: function () {
    var urlSubjectPart
    switch (subject) {
      case 'sci':
        urlSubjectPart = 'science'
        break
      case 'mat':
        urlSubjectPart = 'math'
        break
      case 'eng':
        urlSubjectPart = 'english'
        break
      default:
        urlSubjectPart = 'science'
        break
    }

    return (
      'subjects.html?sub=' +
      urlSubjectPart +
      '&lang=' +
      $lang +
      '&grade=' +
      $currentgrade
    )
  },
}

// console.log(linkInfo);
// alert(linkInfo);
/**************************************
 * data = variable where all datas from data__.xml will be stored, in the form of object
 * nextPageLink = stores link address for next page
 * prevPageLink = stores link address for previous page , accordingly
 ***************************************/

var data,
  nextPageLink = '',
  prevPageLink = '',
  exerciseFileName = '',
  exerciseFullPath = ''
// var $data = {};

//url parsing ends here

function $jsLoader(srcfilename) {
  //loads <script tag with js src

  var js = document.createElement('script')

  js.type = 'text/javascript'
  jsFilePath = $base_dir + '/' + srcfilename
  js.src = jsFilePath

  document.body.appendChild(js)
}

function $cssLoader(srcfilename) {
  var css = document.createElement('link')

  css.type = 'text/css'
  css.rel = 'stylesheet'
  cssFilePath = $base_dir + '/' + srcfilename
  css.href = cssFilePath

  document.head.appendChild(css)
}

//script loaders ends

;(function ($) {
  //self invoking function starts

  /*
   *imgRef, it gets img--> src, find if it contains $ref...
   *if it contains $ref, it change $ref to required data
   *it ll b called after div is loaded
   */
  function imgRef(className, ref) {
    $('.' + className)
      .find('img')
      .each(function () {
        var $image = ''
        ary = $(this).attr('src').split('/')
        $ref = ref
        for (var i = 1; i < ary.length; i++) {
          $image += '/' + ary[i]
        }

        if (ary[0] == '$ref') {
          $src = $ref + $image
          $(this).attr('src', $src)
        }
      })

    /*roshan on*/
    /*why do we need the header to be shown let students scroll up. Therefore:*/
    // $("body").animate({ scrollTop: $(document).height() }, 100);
    /*
        code modified by Ashish Gurung: Now, in landscape screens the auto scroll scrolls
        control to the page number index directly; instead of the bottom of the page.
        */
    $(window).scrollTop($('#activity-page-list-page').offset().top)
    /*roshan off*/
  }

  /*
   * activityData changes datas from the url given ie data-np.xml or data.xml from the activity folder into
   * objects datas... like data.id = strings req
   *
   */

  function objectifyActivityData($url) {
    $data = {}
    $.ajax({
      type: 'GET',
      url: $url,
      dataType: 'xml',
      beforeSend: function () {
        console.log('getting xml data from : ' + $url)
      },
    })
      .done(function (xml) {
        $data.lesson = {}

        $lesson = $(xml).find('lesson') // data for lesson
        /*
         *the below function should be changed to recurion, for $%^#&*
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

        $data.string = {}
        $(xml)
          .find('string')
          .each(function (datas) {
            $this = $(this).text()
            $id = $(this).attr('id')
            $data.string[$id] = $this
          })
      })
      .fail(function (jqxhr, textstatus, errortype) {
        alert(
          'get xml data from: ' +
            $url +
            ' failed, status: ' +
            textstatus +
            ', error: ' +
            errortype
        )
        location.reload()
      })
    return $data /*return the data object to be used in activity development*/
  }

  /*
   * dataparse
   * it searches span tag with text {{}} if it finds it...
   * it replaces it with required data
   */
  function dataparse(className, lang) {
    $('.' + className)
      .find('span')
      .each(function () {
        var texts = $(this).text().split('')
        var $first = texts[0] + texts[1]
        var $length = texts.length
        var $last = texts[$length - 1] + texts[$length - 2]
        $id = ''
        if ($first === '{{' && $last === '}}') {
          for (var i = 2; i < $length - 2; i++) {
            $id += texts[i]
          }
          $(this).text('hello world')
        }
      })
  }

  // call activity json file and do the following
  function callActivityJson(configFile) {
    var $activityJs,
      $selectedActivity = ''

    var allSections
    $activityjsonjqxhr = $.getJSON(
      'config/' + configFile,
      function (activitydata) {
        console.log('from ' + configFile + ' get done, success')
      }
    )
      .done(function (activitydata) {
        console.log('from ' + configFile + ' get done, second success')

        // calling popup handlebar function
        create_popup_activity_guide_container()

        // pull data from config to parse for current grade
        var gradekey = activitydata['grade' + $currentgrade]

        // for each gradekey do the following
        $.each(gradekey, function (key) {
          if (gradekey[key].id === activity) {
            $selectedActivity = gradekey[key]
            $donar = $selectedActivity['donor']

            const rows = [
              ['Grade', 'ChapterName', 'TimeSpent'],
              [$currentgrade, $selectedActivity['en'], spentTimePage],
            ]
            console.log(rows)
          }
        })

        // // time tracking starts
        // TimeMe.initialize({
        //     currentPageName: "my-home-page", // current page
        //     idleTimeoutInSeconds: 5, // stop recording time due to inactivity
        //     //websocketOptions: { // optional
        //     //	websocketHost: "ws://your_host:your_port",
        //     //	appId: "insert-your-made-up-app-id"
        //     //}
        // });

        // // window.onload = function() {
        //         setInterval(function() {
        //             if (TimeMe.isUserCurrentlyOnPage && TimeMe.isUserCurrentlyIdle === false) {
        //                 timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        //                 spentTimePage = timeSpentOnPage.toFixed(2);

        //                 axios.post('//localhost:5000', {
        //                         grade: parseInt($currentgrade),
        //                         chapter_name: $selectedActivity['en'],
        //                         time_spent: spentTimePage,
        //                         language: $lang,
        //                         exercise_flag: exercise
        //                     })
        //                       .then(function (response) {
        //                         console.log(response);
        //                     })
        //                       .catch(function (error) {
        //                         console.log(error);
        //                   });
        //             }

        //         }, 2000);
        //     // }
        //     // time tracking ends

        // test selectd subject and provide message if not successful
        if ($selectedActivity === null || $selectedActivity === '') {
          alert(
            'from ' +
              configFile +
              ' could not get selected activity please give proper link'
          )
          location.reload()
        } else {
          if (level < $selectedActivity.levels.length) {
            pgLength = $selectedActivity.levels[level].pages.length

            //get sections
            allSections = $selectedActivity.levels[level].sections
            $base_dir = 'activity/' + $selectedActivity.levels[level].folder

            if (exercise === 'yes') {
              /*
               * load exercise
               */

              // console.log("no of couldn = "+$selectedActivity.levels[level].exercise.length);
              if (
                exerciseNo <= $selectedActivity.levels[level].exercise.length
              ) {
                // console.log("smth");
                var $exercise =
                  $selectedActivity.levels[level].exercise[exerciseNo - 1]
                exerciseFullPath = $base_dir + '/' + $exercise
                $ref = $base_dir
                var dataFile = 'data.xml'
                if ($lang === 'np') {
                  dataFile = 'data-np.xml'
                } else if ($lang === 'en') {
                  dataFile = 'data.xml'
                }
                dataLink = $ref + '/' + dataFile

                data = objectifyActivityData(dataLink)

                $('.mainBox').load(exerciseFullPath, function () {
                  imgRef('mainBox', $ref)
                  dataparse('mainBox', 'np')
                  headerExercise($selectedActivity, exerciseNo)
                })
              }
            } else {
              if ($pg < pgLength) {
                var $exercise = $selectedActivity.levels[level].exercise
                if (typeof $exercise != 'undefined') {
                  exerciseFileName = $exercise
                  exerciseFullPath = $base_dir + '/' + $exercise
                }

                $page = $selectedActivity.levels[level].pages[$pg] //page being loaded
                fullLink = $base_dir + '/' + $page
                fullLink = fullLink.toLowerCase()
                $ref = $base_dir
                var dataFile = 'data.xml'
                if ($lang === 'np') {
                  dataFile = 'data-np.xml'
                } else if ($lang === 'en') {
                  dataFile = 'data.xml'
                }
                dataLink = $ref + '/' + dataFile

                data = objectifyActivityData(dataLink) //data

                $('.mainBox').load(fullLink, function () {
                  //calling imgRef to change image src
                  imgRef('mainBox', $ref)
                  dataparse('mainBox', 'np')

                  /**
                   *since section paging is used the old pagination (next and prev) is removed
                   *pagingFooter(pgLength); //load pagelink on footer
                   **/

                  /**load section and pages*****/

                  pagingSection(allSections, pgLength, $exercise)

                  createBreadcrumbs($selectedActivity, $lang)
                })
              }
            }
          }
        }
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

  var myjson
  /*variable that will temporarily store data from json call below to be
     used later*/

  // call configsubjects json file and do the following
  $configsubjectsjson = $.getJSON(
    'config/subject.json',
    function (json) {
      console.log('from subject.json : get success')
      myjson = json
    }
  ).fail(function (data, textstatus, errortype) {
    alert(
      'from subject.json : get failed, status: ' +
        textstatus +
        ', error: ' +
        errortype
    )
    location.reload()
  })

  function callmenu(myjson) {
    if (typeof menu === 'undefined') {
      callmenu(myjson)
    } else if (typeof menu === 'function') {
      menu(myjson)
      return true
    }
  }

  // on completion of ajax pulling the configsubjects.json
  $configsubjectsjson.complete(function () {
    console.log('from subject.json : get complete')
    callmenu(myjson)
    $.each(myjson, function (key) {
      if (myjson[key].id == subject) {
        $subject = key
        console.log('keyyyyyyyyyyyyyyyy' + key)
      }
    })
    if ($subject == '') {
      // do smth redirect to homepage or 404 error msg
    } else {
      mySubjectLang = myjson[$subject][$lang]
      configFile = 'config' + $subject + '.json'
      callActivityJson(configFile)

      // give link for menu in navigation bar at the top
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
    }
  })

  /**

    pagingSection will generate section and their pages
    paging is done for pages of particular section

    **/

  function pagingSection($sections, $totalpages, $exercise) {
    var scLength = $sections.length
    var sctitle,
      scPagesList = {},
      activeSectionClass = '',
      toolBarTitles = {}
    var i = 0
    var $currentPage = parseInt($pg + 1)

    // for each sections do the following
    $.each($sections, function (index) {
      sctitle = $sections[index][$lang]
      var $thisLink =
        '?id=' +
        mainId +
        '&lang=' +
        $lang +
        '&pg=' +
        parseInt($sections[index]['startpage']) +
        '&scId=' +
        i +
        '&grade=' +
        $currentgrade

      if (i == $scId) activeSectionClass = 'activeSectionClass'
      else activeSectionClass = ''

      var data = {
        link3: $thisLink,
        sectionTitle: sctitle,
        clas: activeSectionClass,
        allmyclass: 'imsectionClass',
      }

      var source = $('#sectionFooter').html()
      var template = Handlebars.compile(source)
      var html = template(data)
      $('#activity-page-list-page-container').append(html)

      //if only one section hide section tag
      if (scLength <= 1) {
        $('.imsectionClass').hide(0)
      }

      var startNo = $sections[index]['startpage']
      var endNo = $sections[index]['endPage']
      var totalPage = endNo - startNo + 1

      scPagesList[i] = {
        startNo: startNo,
        endNo: endNo,
        totalPage: totalPage,
      }
      i++
    })

    // pull data json file and do the following
    var datajsonjqxhr = $.getJSON('config/data.json', function (toolList) {
      console.log('from pagingsection data.json : get success')
    })
      .done(function (toolList) {
        console.log('from pagingsection data.json : get second success')

        var myOthdata, source2, template2, html2

        var $scValues = scPagesList[$scId]
        var k = 0,
          stnum,
          endnum
        var $thisnewLink = ''

        var activePageClass = ''
        var pageNumberlst = ''
        var sectionCurrentPage = $currentPage - $scValues['startNo'] + 1

        var sectionTotalPages = $scValues['totalPage']
        var $sectionLink1, $sectionLink2

        $.each(toolList, function (index) {
          toolBarTitles[index] = toolList[index][$lang]
        })

        var pagenextScId, pageprevScId
        if (sectionCurrentPage < sectionTotalPages) {
          pagenextScId = $scId
        } else {
          pagenextScId = $scId + 1
        }

        var $nxtlink = $currentPage + 1
        var $nextscid = $scId

        if ($nxtlink < $scValues['startNo']) $nextscid = $scId + 1
        else $nextscid = $scId

        if (sectionCurrentPage == 1) {
          $sectionLink1 = ''

          if (sectionCurrentPage < sectionTotalPages)
            $sectionLink2 =
              '?id=' +
              mainId +
              '&lang=' +
              $lang +
              '&pg=' +
              ($currentPage + 1) +
              '&scId=' +
              $scId +
              '&grade=' +
              $currentgrade
        } else if (
          sectionCurrentPage < sectionTotalPages &&
          sectionCurrentPage > 1
        ) {
          $sectionLink1 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&pg=' +
            ($currentPage - 1) +
            '&scId=' +
            $scId +
            '&grade=' +
            $currentgrade
          $sectionLink2 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&pg=' +
            ($currentPage + 1) +
            '&scId=' +
            $scId +
            '&grade=' +
            $currentgrade
        } else {
          $sectionLink1 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&pg=' +
            ($currentPage - 1) +
            '&scId=' +
            $scId +
            '&grade=' +
            $currentgrade

          $sectionLink2 = ''
        }

        myOthdata = {
          link1: $sectionLink1,
          prevToolPage: toolBarTitles.prevPage,
        }

        /*

            var source_2   = $("#headmyfooterPrev").html();
            var template_2 = Handlebars.compile(source_2);
            var html_2    = template_2(myOthdata);
            $(".headfooter-prev").append(html_2);
            */

        var whatbx = {}

        for (
          k = 1, stnum = $scValues['startNo'];
          k <= $scValues['totalPage'];
          k++, stnum++
        ) {
          $thisnewLink =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&pg=' +
            stnum +
            '&scId=' +
            $scId +
            '&grade=' +
            $currentgrade

          if ($currentPage == stnum) {
            activePageClass = 'activePageClass'
          } else activePageClass = ''

          if ($lang == 'np') pageNumberlst = ole.nepaliNumber(k, 'np')
          else pageNumberlst = k

          var othdata = {
            link4: $thisnewLink,
            pageNumber: pageNumberlst,
            clas2: activePageClass,
          }

          whatbx[k] = othdata
        }

        var allmyval = {
          link1: $sectionLink1,
          prevToolPage: toolBarTitles.prevPage,
          link2: $sectionLink2,
          nextToolPage: toolBarTitles.nextPage,
          orthbx: whatbx,
        }

        var source3 = $('#headmyfooterPrev').html()
        var template3 = Handlebars.compile(source3)
        var html3 = template3(allmyval)

        //$(".pageHeadInside").append(html3);

        $(html3).insertAfter($('.activeSectionClass'))

        // add lessson
        var source_lesson1 = $('#lessonTab').html()
        var template_lesson1 = Handlebars.compile(source_lesson1)
        var content1 = {
          lesson:
            '?id=' + mainId + '&lang=' + $lang + '&grade=' + $currentgrade,
          lessonTitle:
            $currentgrade == 1 ? toolBarTitles.learn : toolBarTitles.lesson,
        }
        var html_lesson1 = template_lesson1(content1)
        $('#activity-page-lesson-tab').append(html_lesson1)
        $('#activity-page-lesson-tab> button').addClass('active')

        if (typeof $exercise != 'undefined') {
          var source_exercise = $('#exerciseTab').html()
          var template_exercise = Handlebars.compile(source_exercise)
          var content = {
            exercise:
              '?id=' +
              mainId +
              '&lang=' +
              $lang +
              '&grade=' +
              $currentgrade +
              '&exercise=yes',
            title:
              $currentgrade == 1
                ? toolBarTitles.playtime
                : toolBarTitles.exercise,
          }
          var html_exercise = template_exercise(content)
          $('#activity-page-exercise-tab').append(html_exercise)
        }
      })
      .fail(function (data, textstatus, errortype) {
        alert(
          'from paging section data.json : get failed, status: ' +
            textstatus +
            ', error: ' +
            errortype
        )
        location.reload()
      })
      .complete(function () {
        console.log('from paging section data.json : get complete')
        // call section hover effect function
        sectionHoverEffect()
      })
  } //sections

  /*
  hide it
  function footerExercise (total,selected) {
  // console.log('footer = '+selected);
  var jqxhr = $.getJSON("config/data.json", function(toolList){
  var toolBarTitles = {};
  $.each(toolList, function (index) {
  toolBarTitles[index]=toolList[index][$lang];

});

var listEx = []
for (var i = 0; i < total; i++) {
var j=i+1;
if(j === selected){
console.log("selected = "+j);
active = "yesActive";
} else {
active = "";
}

listEx.push({
no : toolBarTitles.exercise+" "+j,
link : "?id="+mainId+"&lang="+$lang+"&exercise="+j,
isActive : active
})
};

console.log(listEx)
var source = $('#exerciseTab2').html();
var template = Handlebars.compile(source);
var content = {
lesson : "?id="+mainId+"&lang="+$lang,
lessonTitle : toolBarTitles.lesson,
exercise : "#",
title : listEx,
}
var html = template(content);
// console.log(html);
$('#footerMyPage').html(html);
footerCenterizer();
})
}
*/

  /*the activityguide popup function definition :START*/
  function create_popup_activity_guide_container() {
    var data2 = {
      activityguidetext: objectiveDatas.textActivityGuideData,
      about_the_lesson_heading: objectiveDatas.textLessonHeading,
      prerequisites_heading: objectiveDatas.prerequisites_heading,
      lesson_guidelines_heading: objectiveDatas.lesson_guidelines_heading,
      related_activities_heading: objectiveDatas.related_activities_heading,
      evaluation_heading: objectiveDatas.evaluation_heading,
      about_the_lesson_content: objectiveDatas.lesson_content,
      prerequisites_content: objectiveDatas.prerequisites_content,
      curricular_requirement_heading:
        objectiveDatas.curricular_requirement_heading,
      curricular_requirement_content: objectiveDatas.curricular_requirement,
      lesson_guidelines_content_paragraph:
        objectiveDatas.lesson_guidelines_content_paragraph,
      lesson_guidelines_content_list: objectPointerAll1,
      related_activities_content_paragraph:
        objectiveDatas.related_activities_content_paragraph,
      related_activities_content_list: objectPointerAll2,
      evaluation_content_paragraph: objectiveDatas.evaluation_content_paragraph,
      evaluation_content_list: objectPointerAll3,
      prerequisites_content_links_list: objectPointerAll4,
      // assesment strategies
      assesment_strategies_heading: objectiveDatas.assesment_strategies_heading,
      assesment_strategies_paragraph:
        objectiveDatas.assesment_strategies_paragraph,
      assesment_strategies_list: objectPointerAll5,
      is_assesment_content:
        objectiveDatas.assesment_strategies_list ||
        objectiveDatas.assesment_strategies_paragraph
          ? true
          : false,
    }

    console.log(data2)

    var source1 = $('#activity_guide_popup').html()
    var template1 = Handlebars.compile(source1)
    var listOfTitles1 = template1(data2)
    $('.activityguide_popupdiv').html(listOfTitles1)

    $currentgrade < 7 ? $('.popup_click').show() : $('.popup_click').hide()

    //popup_click button click function
    $('.popup_click').click(function () {
      $(this).css('pointer-events', 'none')
      $('.activityguide_popupdiv').show(300)
    })

    //Cross button click function
    $('.cross_ag').click(function () {
      $('.popup_click').css('pointer-events', 'auto')
      $('.activityguide_popupdiv').hide(300)
    })

    //to assign href to the lists in prerequisites_content START
    // only goes if there is activity guide data
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
    }
    //to assign href to the lists in prerequisites_content END
  }
  /*the activityguide popup function definition :END*/

  // this for exercise tab
  function headerExercise($selectedActivity, selected) {
    // console.log('footer = '+selected);

    total = $selectedActivity.levels[level].exercise.length

    var datajsonforexercisejqxhr = $.getJSON(
      'config/data.json',
      function (toolList) {
        console.log('from headerExercise data.json : get success')
      }
    )
      .done(function (toolList) {
        console.log('from headerExercise data.json : get second success')

        var toolBarTitles = {}
        $.each(toolList, function (index) {
          toolBarTitles[index] = toolList[index][$lang]
        })

        var source_lesson1 = $('#lessonTab').html()
        var template_lesson1 = Handlebars.compile(source_lesson1)
        var content1 = {
          lesson:
            '?id=' + mainId + '&lang=' + $lang + '&grade=' + $currentgrade,
          lessonTitle:
            $currentgrade == 1 ? toolBarTitles.learn : toolBarTitles.lesson,
        }

        var html_lesson1 = template_lesson1(content1)
        $('#activity-page-lesson-tab').append(html_lesson1)

        var source_exercise = $('#exerciseTab').html()
        var template_exercise = Handlebars.compile(source_exercise)
        var content = {
          exercise:
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&grade=' +
            $currentgrade +
            '&exercise=yes',
          title:
            $currentgrade == 1
              ? toolBarTitles.playtime
              : toolBarTitles.exercise,
        }
        var html_exercise = template_exercise(content)
        $('#activity-page-exercise-tab').append(html_exercise)
        $('#activity-page-exercise-tab> button').addClass('active')
        $currentgrade < 7 ? $('.popup_click').show() : $('.popup_click').hide()

        var listEx = []
        for (var i = 0; i < total; i++) {
          var j = i + 1

          if (j === selected) {
            // console.log("selected = "+j);
            active = 'activeexeClass'
          } else {
            active = ''
          }

          var exenum

          if ($lang == 'np') exenum = ole.nepaliNumber(j, 'np')
          else exenum = j

          listEx.push({
            //no : toolBarTitles.exercise+" "+exenum,
            no: exenum,
            link:
              '?id=' +
              mainId +
              '&lang=' +
              $lang +
              '&grade=' +
              $currentgrade +
              '&exercise=' +
              j,
            isActive: active,
          })
        }

        var $sectionLink1, $sectionLink2

        if (selected == 1) {
          $sectionLink1 = ''

          if (selected < total)
            $sectionLink2 =
              '?id=' +
              mainId +
              '&lang=' +
              $lang +
              '&grade=' +
              $currentgrade +
              '&exercise=' +
              (selected + 1)
        } else if (selected < total && selected > 1) {
          $sectionLink1 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&grade=' +
            $currentgrade +
            '&exercise=' +
            (selected - 1)
          $sectionLink2 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&grade=' +
            $currentgrade +
            '&exercise=' +
            (selected + 1)
        } else {
          $sectionLink1 =
            '?id=' +
            mainId +
            '&lang=' +
            $lang +
            '&grade=' +
            $currentgrade +
            '&exercise=' +
            (selected - 1)

          $sectionLink2 = ''
        }

        // console.log(listEx)
        var source = $('#exerciseTab2').html()
        var template = Handlebars.compile(source)
        var content = {
          exercise: '#',
          title: listEx,
          link1: $sectionLink1,
          link2: $sectionLink2,
        }
        var html = template(content)

        // console.log(html);
        $('#activity-page-list-page-container').html(html)
      })
      .fail(function (data, textstatus, errortype) {
        alert(
          'from headerExercise data.json : get failed, status: ' +
            textstatus +
            ', error: ' +
            errortype
        )
        location.reload()
      })
      .complete(function () {
        console.log('from headerExercise data.json : get complete')
        // call footer centerizer and create bread crumbs function on complete
        footerCenterizer()
        createBreadcrumbs($selectedActivity, $lang)
      })
  }

  // function which centerizes footer
  function footerCenterizer() {
    var widthFF = $mainBox.width()
    $('#activity-page-footer-container').css('width', widthFF)
  }

  /**
   ** click funtions of the pages
   */
  /** page head list page numbers on click event*/
  $('#activity-page-list-page').on('click', '.linkClick', function () {
    var getHref = $(this).data('href')
    console.log(getHref)
    window.location.href = getHref
  })

  /** Lesson and exercise tabs on click event**/
  // $('.lessonExerciseTab').on('click','li',function () {
  $('#activity-page-lesson-ex-tab').on('click', 'button', function () {
    var getHref = $(this).find('.linkClick').data('href')
    console.log(getHref)
    window.location.href = getHref
  })

  $('.footer').on('click', '.linkClick', function () {
    var getHref = $(this).data('href')
    console.log(getHref)
    window.location.href = getHref
  })

  $('#activity-page-list-page-container').on('click', 'span', function () {
    var getHref = $(this).data('href')
    console.log(getHref)
    window.location.href = getHref
  })

  // for full screen button

  // var position1 = $('.contentblock').offset();
  // $(".maximizebutton").css({ left: position1.left + "px" });
  console.log($('body').width())
  if ($('body').height() < 415) {
    $('#activity-page-next-btn-enabled').attr('src', '/images/nextbutton.png')
    $('#activity-page-refresh-btn>img').attr('src', '/images/reload.png')
    $('#activity-page-prev-btn-enabled').attr('src', '/images/previous.png')
    $('#activity-page-next-btn-disabled').attr('src', '/images/nextsilent.png')
    $('#activity-page-prev-btn-disabled').attr('src', '/images/prevsilent.png')
    $('#activity-page-continue-btn').attr('src', '/images/continue.png')
    $('#activity-page-finish-btn').attr('src', '/images/finish.png')
    $('#activity-page-refresh-btn').attr('src', '/images/finish.png')
  }
  var flag = 0
  var flag2 = 0
  var flag3 = 0
  var pos1a, pos1b, pos2a, pos2b
  $('.maximizebutton').click(() => {
    var maximizebuttonpositive = $('.maximizebutton').position()
    // loadTimelineProgress();
    if (flag == 0) {
      $('#activity-page-header, #activity-page-footer').hide(0)
      $(' #activity-page-footer')
        .show(0)
        .css({ opacity: '1', background: 'none' })
      $(' #activity-page-footer-container')
        .show(0)
        .css({ opacity: '1', background: 'none' })
      $('.main').addClass('changecssofboard')
      $('#activity-page-list-page, #activity-page-slide-counter').hide(0)
      $('.maximizebutton').attr('src', 'images/minimize.png')
      dimensionChanging2()
      flag++
      ole.pagebuttonpositions.setposition()
      console.log('1')
    } else {
      $('#activity-page-next-btn').removeClass('mobilenext').show(0)
      $('#activity-page-prev-btn').removeClass('mobileprev').show(0)
      $(
        '#activity-page-list-page, #activity-page-refresh-btn, #activity-page-slide-counter'
      ).show(0)
      $(' #activity-page-footer')
        .show(0)
        .css({ opacity: '1', 'pointer-events': 'auto', background: '#36364b' })
      $(' #activity-page-footer-container')
        .show(0)
        .css({ opacity: '1', 'pointer-events': 'auto', background: '#36364b' })
      flag = 0
      $('#activity-page-header, #activity-page-footer').show(0)
      $('.maximizebutton').attr('src', 'images/maximize.png')
      dimensionChanging()
      ole.pagebuttonpositions.setposition()
      $('.main').removeClass('changecssofboard')
      console.log('0')
    }
  })
  // for full screen button ends

  /** start of dimension change
   */

  var dimensionBug = 0 //for a bug of showing mainBox upto bottom footer

  // changing height function of mainbox
  var changeHeight = function (className, ratio) {
    var wrap = $('.' + className)
    var newWidth = parseFloat(wrap.css('width'))
    var newHeight = ratio * newWidth
    wrap.css({ height: newHeight })
  }

  // changing width function of mainbox
  function changeWidth(className, ratio) {
    var wrap = $('.' + className)
    var height = parseFloat(wrap.css('height'))
    var newWidth = height / ratio
    wrap.css({ width: newWidth })
  }
  // changing width function of navButton
  function calcNavButtonSize(id, ratio) {
    //#activity-page-next-btn, #activity-page-prev-btn
    //ratio 1.07
    var wrap = $('#' + id)
    var height = parseFloat(wrap.css('height'))
    var newWidth = height / ratio
    wrap.css({ width: newWidth })
  }

  // changing dimension of mainbox
  function dimensionChanging() {
    console.log('dc')
    var heightOfHeader = 32,
      heightOfFooter = 32,
      windowHt,
      windowWt,
      $window,
      $main

    if (window !== window.parent) {
      console.log(window.parent)
      heightOfHeader = 90
      heightOfFooter = 80
    }

    var w = window.innerWidth
    var h = window.innerHeight
    // heightOfFooter = parseFloat($('.footer').height());
    $main = $('.main')

    dimensionBug = 1
    totalHeight = h - (heightOfHeader + heightOfFooter)
    // totalHeight = h-(heightOfHeader+25)  ;

    /*
  margin top is remove to aexercisedd page list by helina
  $main.css({
  "margin-top" : heightOfHeader,
  height: totalHeight
});*/

    $main.css({
      height: totalHeight,
    })

    $mainBox = $('.mainBox')
    var ratio = 580 / 960
    testHeight = ratio * w

    // if(parseFloat(w) > 750) {
    // console.log(w);

    if (testHeight < totalHeight) {
      $mainBox.css('width', '100%')
      changeHeight('mainBox', ratio)
    } else {
      $mainBox.css('height', '100%')
      changeWidth('mainBox', ratio)
    }
    // redo-work-comment
    $('.main').css({
      height: $mainBox.height(),
    })
    calcNavButtonSize('activity-page-next-btn', 1.07)
    calcNavButtonSize('activity-page-prev-btn', 1.07)
    calcNavButtonSize('activity-page-refresh-btn', 1.07)
    /*roshan on*/
    /*sequence timeline position maintainer*/
    var position = $mainBox.offset()
    $('.SequenceTimeLine').css({ left: position.left + 'px' })
    /*roshan off*/
    /*}
        else {
        $mainBox.css("width","750");
        changeHeight("mainBox",ratio);
        }*/

    footerCenterizer()
    // redo-work-comment
    // $('#activity-page-list-page').width($mainBox.width());
    $('.SequenceTimeLine').width($mainBox.width())
  }

  // changing dimension2 of mainbox
  function dimensionChanging2() {
    console.log('dc2')
    var heightOfHeader = 15,
      heightOfFooter = 15,
      windowHt,
      windowWt,
      $window,
      $main
    var w = window.innerWidth
    var h = window.innerHeight
    // heightOfFooter = parseFloat($('.footer').height());
    $main = $('.main')

    dimensionBug = 1
    totalHeight = h - (heightOfHeader + heightOfFooter)
    // totalHeight = h-(heightOfHeader+25)  ;

    /*
  margin top is remove to aexercisedd page list by helina
  $main.css({
  "margin-top" : heightOfHeader,
  height: totalHeight
});*/

    $main.css({
      height: totalHeight,
    })

    $mainBox = $('.mainBox')
    var ratio = 580 / 960
    testHeight = ratio * w

    // if(parseFloat(w) > 750) {
    // console.log(w);

    if (testHeight < totalHeight) {
      $mainBox.css('width', '100%')
      changeHeight('mainBox', ratio)
    } else {
      $mainBox.css('height', '100%')
      changeWidth('mainBox', ratio)
    }
    // redo-work-comment
    $('.main').css({
      height: $mainBox.height(),
    })
    calcNavButtonSize('activity-page-next-btn', 1.07)
    calcNavButtonSize('activity-page-prev-btn', 1.07)
    calcNavButtonSize('activity-page-refresh-btn', 1.07)
    /*roshan on*/
    /*sequence timeline position maintainer*/
    var position = $mainBox.offset()
    $('.SequenceTimeLine').css({ left: position.left + 'px' })
    /*roshan off*/
    /*}
        else {
        $mainBox.css("width","750");
        changeHeight("mainBox",ratio);
        }*/

    footerCenterizer()
    // redo-work-comment
    // $('#activity-page-list-page').width($mainBox.width());
    $('.SequenceTimeLine').width($mainBox.width())
  }

  // call dimensionChanging function
  dimensionChanging()

  // also call dimensionChanging function each time the window is resized
  $(window).on('resize', function (e) {
    dimensionChanging()
  })
  /** end of dimension Changing*/

  // call dimensionChanging function again to fix android load of css height
  dimensionChanging()

  /*****
   * sectionHoverEffect fuction fadeOut sections which is over footer
   * while hover to the footer sections is shown
   */

  function sectionHoverEffect() {
    var animateString =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      // $whatsection = $("#whatsection"),
      $whatsection = $('.nextPrev'),
      condition = 1

    $('.feet').hover(
      function () {
        /* Stuff to do when the mouse enters the element */
        // if (condition===0) {
        // 	condition = 1;
        // showSection();
        $whatsection.css({ bottom: '100%' })
        // };
      },
      function () {
        /* Stuff to do when the mouse leaves the element */
        // condition=0;
        $whatsection.css({ bottom: '0%' })
      }
    )
  }

  /*
    breadcrumbs

    */

  function createBreadcrumbs($selectedactivity, $lang) {
    /*var $thisnewLink="subjects.html?sub="+$subject+"&lang="+$lang+"&grade="+$currentgrade;*/
    var othdata = {
      breadgrade: classtext,
      /*breadlink :$thisnewLink,*/
      breadsub: mySubjectLang,
      breadname: $selectedactivity[$lang],
    }

    var source3 = $('#breadcrumbs').html()
    var template3 = Handlebars.compile(source3)
    var html3 = template3(othdata)

    $('#activity-page-title').html(html3)

    // Changes in Science to Our Surrounding starts
    // if ($donar == "rti") {
    // $('#activity-page-logo').css({ 'opacity': '0', 'pointer-events': 'none' });
    // }
    if ($_GET['id'].substring(0, 3) == 'sci') {
      if ($currentgrade < 4) {
        if ($lang == 'en') {
          $('#activity-page-title>span:eq(2)').html('Our Surrounding')
        } else if ($lang == 'np') {
          $('#activity-page-title>span:eq(2)').html('हाम्रो सेरोफेरो')
        }
      } else {
        if ($lang == 'en') {
          $('#activity-page-title>span:eq(2)').html('Science')
        } else if ($lang == 'np') {
          $('#activity-page-title>span:eq(2)').html('विज्ञान')
        }
      }
    }
    // Changes in Science to Our Surrounding ends

    // breadcrumb linking code starts
    var href =
      'subjects.html?sub=' +
      $subject.toLowerCase() +
      '&lang=' +
      $lang +
      '&grade=' +
      $currentgrade
    $('#activity-page-title>span:nth-child(1)').wrap(
      '<a class="breadcun_grade_link" href=' + href + '/>'
    )
    // $("#activity-page-title>span:nth-child(3)").wrap('<a href='+href+'/>');
    // breadcrumb linking code ends
  }
  /*
    end of breadcrumbs

    */
})(jQuery)

/**
import min buzz library to use this audio portion
*/
var sound_correct_main
var sound_incorrect_main
var current_playing_sound_main
var is_correct_incorrect_sound_init = false

function correct_incorrect_sound_init() {
  if ($currentgrade == '1') {
    sound_correct_main = new buzz.sound('sounds/common/grade1/correct.ogg')
    sound_incorrect_main = new buzz.sound('sounds/common/grade1/incorrect.ogg')
  } else {
    sound_correct_main = new buzz.sound('sounds/common/correct.ogg')
    sound_incorrect_main = new buzz.sound('sounds/common/incorrect.ogg')
    if ($lang == 'np') {
      sound_correct_main = new buzz.sound('sounds/common/new_milyo.ogg')
      sound_incorrect_main = new buzz.sound('sounds/common/new_incorrect.ogg')
    }
  }
  current_playing_sound_main = sound_correct_main
  is_correct_incorrect_sound_init = true
}

function correct_incorrect_sound_init_old() {
  if ($currentgrade == '1') {
    sound_correct_main = new buzz.sound('sounds/common/grade1/correct.ogg')
    sound_incorrect_main = new buzz.sound('sounds/common/grade1/incorrect.ogg')
  } else {
    sound_correct_main = new buzz.sound('sounds/common/correctold.ogg')
    sound_incorrect_main = new buzz.sound('sounds/common/incorrectold.ogg')
    if ($lang == 'np') {
      sound_correct_main = new buzz.sound('sounds/common/thik.ogg')
      sound_incorrect_main = new buzz.sound('sounds/common/milena.ogg')
    }
  }
  current_playing_sound_main = sound_correct_main
  is_correct_incorrect_sound_init = true
}

function correct_incorrect_sound_init_rand() {
  if ($currentgrade == '1') {
    sound_correct_main = new buzz.sound('sounds/common/grade1/correct.ogg')
    sound_incorrect_main = new buzz.sound('sounds/common/grade1/incorrect.ogg')
  } else {
    var corrAudiosEng = ['correct1', 'correct2', 'correct3']
    var incorrAudiosEng = ['incorrect1', 'incorrect2', 'incorrect3']
    var randAudSel = Math.floor(Math.random() * 3)
    console.log(randAudSel)
    sound_correct_main = new buzz.sound(
      'sounds/common/new/' + $lang + '/' + corrAudiosEng[randAudSel] + '.ogg'
    )
    sound_incorrect_main = new buzz.sound(
      'sounds/common//new/' + $lang + '/' + incorrAudiosEng[randAudSel] + '.ogg'
    )
  }
  current_playing_sound_main = sound_correct_main
  is_correct_incorrect_sound_init = true
}

function play_correct_incorrect_sound(is_correct) {
  buzz.all().stop()
  if (!is_correct_incorrect_sound_init) {
    correct_incorrect_sound_init()
  }
  current_playing_sound_main.stop()
  current_playing_sound_main = is_correct
    ? sound_correct_main
    : sound_incorrect_main
  current_playing_sound_main.play()
}

function play_correct_incorrect_sound_sybbas_prayas(is_correct) {
  buzz.all().stop()
  current_playing_sound_main = is_correct
    ? new buzz.sound('sounds/common/new/' + $lang + '/' + 'correct_syabbas.ogg')
    : new buzz.sound(
        'sounds/common/new/' + $lang + '/' + 'incorrect_prayas.ogg'
      )
  current_playing_sound_main.play()
}

//Play Yayy Sound
function play_yayy_sound() {
  yayysound = new buzz.sound('sounds/common/yayy.ogg')
  buzz.all().stop()
  current_playing_sound_main = yayysound
  current_playing_sound_main.play()
}

//DIY audio need to finalize the audio

function play_diy_audio() {
  var queue = new createjs.LoadQueue(false)
  createjs.Sound.alternateExtensions = ['mp3']
  queue.installPlugin(createjs.Sound)
  queue.on('complete', handleComplete)
  queue.loadFile({
    id: 'mySound',
    src: 'sounds/common/new/' + $lang + '/diy.ogg',
  })

  function handleComplete(event) {
    createjs.Sound.play('mySound')
    // createjs.Sound.play("mySound");
  }
}
//Play time audio need to finalize the audio

function playtime_audio() {
  var queue = new createjs.LoadQueue(false)
  createjs.Sound.alternateExtensions = ['mp3']
  queue.installPlugin(createjs.Sound)
  queue.on('complete', handleComplete)
  queue.loadFile({
    id: 'mySound1',
    src: 'sounds/common/new/' + $lang + '/playtime.ogg',
  })

  function handleComplete(event) {
    current_sound_khelau = createjs.Sound.play('mySound1')
    current_sound_khelau.play()
    current_sound_khelau.on('complete', function () {
      $('#activity-page-next-btn-enabled').show(0)
    })
    // createjs.Sound.play("mySound");
  }
}

function play_correct_incorrect_sound_old(is_correct) {
  buzz.all().stop()
  if (!is_correct_incorrect_sound_init) {
    correct_incorrect_sound_init_old()
  }
  current_playing_sound_main.stop()
  current_playing_sound_main = is_correct
    ? sound_correct_main
    : sound_incorrect_main
  current_playing_sound_main.play()
}

function play_correct_incorrect_sound_rand(is_correct) {
  buzz.all().stop()
  correct_incorrect_sound_init_rand()
  current_playing_sound_main.stop()
  current_playing_sound_main = is_correct
    ? sound_correct_main
    : sound_incorrect_main
  current_playing_sound_main.play()
}

// to hide next button during loading
$('#activity-page-next-btn-enabled').hide(0)
// to hide prev button during loading
$('#activity-page-prev-btn-enabled').hide(0)

// shortcuts for previous and next buttons starts
var map = {} // You could also use an array
onkeydown = onkeyup = function (e) {
  e = e || event // to deal with IE
  map[e.keyCode] = e.type == 'keydown'
  /*restrict nepali typing in input box in math activities only  as they support only english number*/
  if ($subject == 'math') {
    if ('#inputbox') {
      // for nepali number
    } else {
      $('.board')
        .find(':input')
        .not(':button')
        .bind('keyup blur', function () {
          if (
            $(this)
              .val()
              .match(/[^A-Za-z0-9$&+,:;=?@#|'<>.^*()%!-_`~]/g)
          ) {
            alert('Please type in english.')
            $(this).val(
              $(this)
                .val()
                .replace(/[^A-Za-z0-9]/g, '')
            )
          }
        })
    }
  }
  /* insert conditional here */
  if (map[16] && map[39]) {
    // next button only working when it is enabled - keep this while DEPLOYMENT starts

    // var total_slide=parseInt($('#activity-page-total-slide').text());
    // var current_slide=parseInt($('#activity-page-current-slide').text());
    //
    // if(current_slide<total_slide && $('#activity-page-next-btn-enabled').prop("style")["display"]=="block" || $('#activity-page-next-btn-enabled').prop("style")["display"]=="inline-block"){
    //   $('#activity-page-next-btn-enabled').trigger("click");
    // }
    //
    // var total_pages = parseInt($(".head-pages-list").last().text());
    // var this_page_number = parseInt($('.activePageClass').text());
    //
    // if(this_page_number<total_pages && current_slide==total_slide && $('#activity-page-continue-btn').prop("style")["display"]=="inline-block"){
    //       $('#activity-page-continue-btn').trigger("click");
    // }
    //
    // if(this_page_number==total_pages && current_slide==total_slide && $('#activity-page-finish-btn').prop("style")["display"]=="inline-block"){
    //     $('#activity-page-finish-btn').trigger("click");
    // }

    // next button only working when it is enabled - keep this while DEPLOYMENT ends

    // delete this while DEPLOYMENT starts

    //triggers continue and finish button starts
    var total_pages = parseInt($('.head-pages-list').last().text())
    var this_page_number = parseInt($('.activePageClass').text())
    if ($lang == 'np') {
      var total_pages = english_to_nepali_converter(
        $('.head-pages-list').last().text()
      )
      var this_page_number = english_to_nepali_converter(
        $('.activePageClass').text()
      )
    }

    if (
      (this_page_number < total_pages && current_slide == total_slide) ||
      $('#activity-page-continue-btn').prop('style')['display'] ==
        'inline-block'
    ) {
      $('#activity-page-continue-btn').trigger('click')
    }

    if (
      (this_page_number == total_pages && current_slide == total_slide) ||
      $('#activity-page-finish-btn').prop('style')['display'] == 'inline-block'
    ) {
      $('#activity-page-finish-btn').trigger('click')
    }
    //triggers continue and finish button starts

    //triggers button to exercise starts
    if ($('.mainBox > div').find('p.lesson_to_exercise').length !== 0) {
      $('.lesson_to_exercise').trigger('click')
    }
    //triggers button to exercise ends

    //triggers next button starts
    var total_slide = parseInt($('#activity-page-total-slide').text())
    var current_slide = parseInt($('#activity-page-current-slide').text())
    if ($lang == 'np') {
      var total_slide = english_to_nepali_converter(
        $('#activity-page-total-slide').text()
      )
      var current_slide = english_to_nepali_converter(
        $('#activity-page-current-slide').text()
      )
    }
    var ex_flag = 'no'
    if ($_GET['exercise'] == 'yes') {
      ex_flag = 'yes'
    }
    if (current_slide < total_slide && ex_flag == 'no') {
      $('#activity-page-next-btn-enabled').trigger('click')
    }
    if (ex_flag == 'yes') {
      $('#activity-page-next-btn-enabled').trigger('click')
    }

    //triggers next button ends

    // delete this while DEPLOYMENT ends
  } else if (map[16] && map[37]) {
    // prev button only working when it is enabled - keep this while DEPLOYMENT starts

    // var total_slide=parseInt($('#activity-page-total-slide').text());
    // var current_slide=parseInt($('#activity-page-current-slide').text());
    //
    // if(current_slide<total_slide && $('#activity-page-prev-btn-enabled').prop("style")["display"]=="block" || $('#activity-page-prev-btn-enabled').prop("style")["display"]=="inline-block"){
    //   $('#activity-page-prev-btn-enabled').trigger("click");
    // }
    // prev button only working when it is enabled - keep this while DEPLOYMENT ends

    var current_slide = parseInt($('#activity-page-current-slide').text())
    if ($lang == 'np') {
      var current_slide = english_to_nepali_converter(
        $('#activity-page-current-slide').text()
      )
    }
    // delete this while DEPLOYMENT starts
    if (current_slide > 1) {
      $('#activity-page-prev-btn-enabled').trigger('click')
    }
    // delete this while DEPLOYMENT ends
  }
  //
  // var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  // if(isMac){
  //
  // }
}
// function converting nepali numbers to english
function english_to_nepali_converter(nepali) {
  var nepali_number = [
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
    '२१',
    '२२',
    '२३',
    '२४',
    '२५',
    '२६',
    '२७',
    '२८',
    '२९',
    '३०',
  ]

  for (var i = 0; i < nepali_number.length; i++) {
    if (nepali.toString().trim() == nepali_number[i].toString().trim()) {
      nepali = i + 1
    }
  }
  return nepali
}

//function to push correct playtimes in all front page of grade 1 activities START
function firstPagePlayTime(countNext) {
  if (exerciseNo == 1 && countNext == 0 && !(exerciseNo >= 2)) {
    var firstpageplaytime_title_text
    firstpageplaytime_title_text = 'PLAY TIME'
    if ($lang == 'np') {
      firstpageplaytime_title_text = ' खेलौँ '
    }
    $('.board')
      .eq(0)
      .append(
        '<img class="firstpageplaytime-background" src="images/playtime_images/bg_play-time.png">'
      )
    $('.board')
      .eq(0)
      .append(
        '<img class="firstpageplaytime-rhino" src="images/playtime_images/rhino_dancing.gif">'
      )
    $('.board')
      .eq(0)
      .append(
        '<img class="firstpageplaytime-squirrel" src="images/playtime_images/squirrel-listening.gif">'
      )
    $('.board')
      .eq(0)
      .append(
        '<p class="firstpageplaytime-middle-title">' +
          firstpageplaytime_title_text +
          '</p>'
      )
    $('.board *')
      .not(
        '.firstpageplaytime-background,.firstpageplaytime-rhino,.firstpageplaytime-squirrel,.firstpageplaytime-middle-title'
      )
      .hide(0)

    //registers and plays sounds
    var queue = new createjs.LoadQueue(false)
    createjs.Sound.alternateExtensions = ['mp3']
    queue.installPlugin(createjs.Sound)
    queue.on('complete', handleComplete)
    queue.loadFile({
      id: 'playsound123',
      src: 'sounds/common/new/' + $lang + '/playtime.ogg',
    })

    function handleComplete(event) {
      current_sound_khelau1 = createjs.Sound.play('playsound123')
      current_sound_khelau1.play()
      current_sound_khelau1.on('complete', function () {
        $('#activity-page-next-btn-enabled').show(0)
      })
    }
  }
}

//function to push correct playtimes in all front page of grade 1 activities END

// document.addEventListener('onkeyup', onkeyup, false);
// Mention correct or incorrect classes in XML itself with slash and call this function.

/*if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
//Allow
} else {
alert("please use firefox for better view, thank you");
}*/
