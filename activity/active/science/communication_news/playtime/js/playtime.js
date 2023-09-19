// var imgpath = $ref+"/playtime/images/";
var imgpath = $ref + "/images/Communication/";
var soundAsset = $ref + "/sounds/" + $lang + "/";
var content = [
  // slide1
  {
    contentblockadditionalclass: "bg",
    extratextblock: [{
      textclass: "playtime",
      textdata: data.string.pt
    }],
    // imageblock:[{
    //   imagestoshow: [
    //     {
    //         imgclass: "rhinodance",
    //         imgid: "rhinodance",
    //         imgsrc: "",
    //     },{
    //         imgclass: "squirreldance",
    //         imgid: "squirreldance",
    //         imgsrc: "",
    //     }]
    // }]
  },
  // slide 2
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      imgclass: "firstboy",
      imgsrc: imgpath + 'ex_mann.gif',
      textclass: "tpQn tpQn1 mediumText",
      textdata: data.string.instruction
    }],
    speechbox:
      [{
        speechbox: "",
        imgclass: '',
        imgid: "textBox1",
        imgclass: "textbox1",
        imgsrc: imgpath + 'textbox_ex.png',
        datahighlightflag: true,
        datahighlightcustomclass: "grnTxt",
        textclass: "textstyle",
        textdata: data.string.boy_sbtxt
      }]


  },
  //slide 3
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_1
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_2 radio",
        textclass: "ob-nm fs-4",
        // hasSpeaker: true,
        textdata: data.string.slide2_q2_opt1,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "radio",
            imgsrc: ''
          }
          ]
        }]
      }, {
        optdivclass: "option clkIm class_1 newsPaper",
        textclass: "ob-nm fs-4 ",
        textdata: data.string.slide2_q2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-2",
            imgid: "newsPaper",
            imgsrc: ''
          }
          ]
        }]
      }]
    }],
  },
  //slide 4
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_2
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_4 newsPaper",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_q2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "newsPaper",
            imgsrc: ''
          }
          ]
        }]
      }, {
        optdivclass: "option clkIm class_1 radio",
        textclass: "ob-nm fs-4 ",
        textdata: data.string.slide2_q2_opt1,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-4",
            imgid: "radio",
            imgsrc: ''
          }
          ]
        }]
      }]
    }],
  },
  //slide 5
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_3
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_1 television",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "television",
            imgsrc: ''
          }
          ]
        }]
      }, {
        optdivclass: "option clkIm class_4 radio",
        textclass: "ob-nm fs-4 ",
        textdata: data.string.slide2_q2_opt1,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-4",
            imgid: "radio",
            imgsrc: ''
          }
          ]
        }]
      }]
    }],
  },
  // slide 6
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_4
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_1 radio",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_q2_opt1,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "radio",
            imgsrc: ''
          }
          ]
        }]
      }, {
        optdivclass: "option clkIm class_2 newsPaper",
        textclass: "ob-nm fs-4 ",
        textdata: data.string.slide2_q2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-2",
            imgid: "newsPaper",
            imgsrc: ''
          }
          ]
        }]
      }]
    }],
  },
  // slide 7
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_5
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_4 newsPaper",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_q2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-2",
            imgid: "newsPaper",
            imgsrc: ''
          }
          ]
        }]
      },
      {
        optdivclass: "option clkIm class_1 television",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "television",
            imgsrc: ''
          }
          ]
        }]
      },

      ]
    }],
  },
  // slide 8
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_6
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_2 television",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "television",
            imgsrc: 'televison.png'
          }
          ]
        }]
      }, {
        optdivclass: "option clkIm class_1 mobile",
        textclass: "ob-nm fs-4 ",
        textdata: data.string.slide2_opt1,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-3",
            imgid: "mobile",
            imgsrc: ''
          }
          ]
        }]
      },]
    }],
  },
  //slide 9
  {
    contentblockadditionalclass: "blueBg",
    imgload: true,
    imgclass: "play_bg",
    imgsrc: imgpath + 'exercise_bg.png',
    extratextblock: [{
      textclass: "tpQn tpQn1 fs-5",
      textdata: data.string.instruction_7
    }],
    imageblock: [{
      imagestoshow: [{
        imgclass: "spk-top",
        imgid: "speaker",
        imgsrc: ''
      }]
    }],
    mcqblock: [{
      mcqContainerAdditionalClass: "sel-img-container",
      optdiv: [{
        optdivclass: "option clkIm class_2 television",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-1",
            imgid: "television",
            imgsrc: 'televison.png'
          }
          ]
        }]
      },
      {
        optdivclass: "option clkIm class_1 newsPaper",
        textclass: "ob-nm fs-4",
        textdata: data.string.slide2_q2_opt2,
        corincoraddnalclass: "corincor-img",
        hasimages: true,
        imageblock: [{
          imagestoshow: [{
            imgclass: "opt-img im-2",
            imgid: "newsPaper",
            imgsrc: ''
          }
          ]
        }]
      },

      ]
    }],
  },
  //slide 10
  // {
  //   contentblockadditionalclass: "blueBg",
  //   imgload: true,
  //   imgclass: "play_bg",
  //   imgsrc: imgpath + 'exercise_bg.png',
  //   extratextblock: [{
  //     textclass: "tpQn tpQn1 fs-5",
  //     textdata: data.string.instruction_10
  //   }],
  //   imageblock: [{
  //     imagestoshow: [{
  //       imgclass: "spk-top",
  //       imgid: "speaker",
  //       imgsrc: ''
  //     }]
  //   }],
  //   mcqblock: [{
  //     mcqContainerAdditionalClass: "sel-img-container",
  //     optdiv: [{
  //       optdivclass: "option clkIm class_1 radio",
  //       textclass: "ob-nm fs-4",
  //       // hasSpeaker: true,
  //       textdata: data.string.slide2_q2_opt1,
  //       corincoraddnalclass: "corincor-img",
  //       hasimages: true,
  //       imageblock: [{
  //         imagestoshow: [{
  //           imgclass: "opt-img im-1",
  //           imgid: "radio",
  //           imgsrc: ''
  //         }
  //         ]
  //       }]
  //     },
  //     {
  //       optdivclass: "option clkIm class_2 newsPaper",
  //       textclass: "ob-nm fs-4",
  //       textdata: data.string.slide2_q2_opt2,
  //       corincoraddnalclass: "corincor-img",
  //       hasimages: true,
  //       imageblock: [{
  //         imagestoshow: [{
  //           imgclass: "opt-img im-2",
  //           imgid: "newsPaper",
  //           imgsrc: ''
  //         }
  //         ]
  //       }]
  //     },

  //     ]
  //   }],
  // },
  // playtime end page
  {
    contentblockadditionalclass: "blueBg",
    imageblock: [{
      imgblkclass: "background",
      imagestoshow: [
        {
          imgclass: "rhino",
          imgid: "rhino_dancing",
          imgsrc: "",
        }]
    }]

  }
];

$(function () {
  var $board = $('.board');
  var $nextBtn = $("#activity-page-next-btn-enabled");
  var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn = $("#activity-page-refresh-btn");
  var countNext = 0;

  var $total_page = content.length;
  loadTimelineProgress($total_page, countNext + 1);

  var preload;
  var current_sound = "";
  var sound = "";
  var stmout1, stmout2;

  var endpageex = new EndPageofExercise();
  endpageex.init(7)
  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      // {id: "rhinodance", src: imgpath+"rhino_dancing.gif", type: createjs.AbstractLoader.IMAGE},
      // {id: "squirreldance", src: imgpath+"squirrel-listening.gif", type: createjs.AbstractLoader.IMAGE},
      // {id: "background", src: imgpath+"BG.png", type: createjs.AbstractLoader.IMAGE},
      // {id: "coverPage", src: imgpath+"bgPtEnd.png", type: createjs.AbstractLoader.IMAGE},
      { id: "play_bg", src: imgpath + "exercise_bg.png", type: createjs.AbstractLoader.IMAGE },
      { id: "newsPaper", src: imgpath + "newsmann.png", type: createjs.AbstractLoader.IMAGE },
      { id: "television", src: imgpath + "television_man.png", type: createjs.AbstractLoader.IMAGE },
      { id: "computer", src: imgpath + "computer1.png", type: createjs.AbstractLoader.IMAGE },
      { id: "radio", src: imgpath + "radio_man.png", type: createjs.AbstractLoader.IMAGE },
      { id: "mobile", src: imgpath + "phone.png", type: createjs.AbstractLoader.IMAGE },
      { id: "rhino_dancing", src: imgpath + "rhino_dancing.gif", type: createjs.AbstractLoader.IMAGE },
      { id: "speaker", src: "images/speaker.png", type: createjs.AbstractLoader.IMAGE },
      { id: "firstboy", src: imgpath + "ex_mann.gif", type: createjs.AbstractLoader.IMAGE },
      { id: "textbox1", src: imgpath + "textbox_ex.png", type: createjs.AbstractLoader.IMAGE },

      //sounds
      { id: "playtimesounddd", src: "" + $lang + "/playtime.ogg" },
      // { id: "instruction", src: soundAsset + "instruction.ogg" },
      // { id: "instruction_1", src: soundAsset + "instruction_1.ogg" },
      // { id: "instruction_2", src: soundAsset + "instruction_2.ogg" },
      // { id: "instruction_3", src: soundAsset + "instruction_3.ogg" },
      { id: "news-sound", src: soundAsset + "slide2_q2_opt2.ogg" },
      { id: "newsPaper-sound", src: soundAsset + "slide2_q2_opt2.ogg" },
      { id: "letter-sound", src: soundAsset + "letter.ogg" },
      { id: "radio-sound", src: soundAsset + "radio.ogg" },
      { id: "phone-sound", src: soundAsset + "telephone.ogg" },
      { id: "telephone-sound", src: soundAsset + "telephone.ogg" },
      { id: "television-sound", src: soundAsset + "slide2_opt2.ogg" },
      { id: "computer-sound", src: soundAsset + "computer.ogg" },
      { id: "mobile-sound", src: soundAsset + "slide2_opt1.ogg" },

      //new sounds
      { id: "instruction", src: soundAsset + "instruction.ogg" },
      { id: "boy_sbtxt", src: soundAsset + "boy_sbtxt.ogg" },
      { id: "slide2_q2_opt1", src: soundAsset + "slide2_q2_opt1.ogg" },
      { id: "slide2_opt2", src: soundAsset + "slide2_opt2.ogg" },
      { id: "slide2_q2_opt2", src: soundAsset + "boy_sbtxt.ogg" },

      { id: "instruction_1", src: soundAsset + "instruction_1.ogg" },
      { id: "instruction_2", src: soundAsset + "instruction_2.ogg" },
      { id: "instruction_3", src: soundAsset + "instruction_3.ogg" },
      { id: "instruction_4", src: soundAsset + "instruction_4.ogg" },
      { id: "instruction_5", src: soundAsset + "instruction_5.ogg" },
      { id: "instruction_6", src: soundAsset + "instruction_6.ogg" },
      { id: "instruction_7", src: soundAsset + "instruction_7.ogg" },
      { id: "instruction_8", src: soundAsset + "instruction_8.ogg" },
      { id: "instruction_9", src: soundAsset + "instruction_9.ogg" },
      { id: "instruction_10", src: soundAsset + "instruction_10.ogg" },
      { id: "playEndTxt", src: soundAsset + "playEndTxt.ogg" },

    ];
    preload = new createjs.LoadQueue(false);
    preload.installPlugin(createjs.Sound);//for registering sounds
    preload.on("progress", handleProgress);
    preload.on("complete", handleComplete);
    preload.on("fileload", handleFileLoad);
    preload.loadManifest(manifest, true);
  }

  function handleFileLoad(event) {
    // console.log(event.item);
  }

  function handleProgress(event) {
    $('#loading-text').html(parseInt(event.loaded * 100) + '%');
  }

  function handleComplete(event) {
    $('#loading-wrapper').hide(0);
    //initialize varibales
    templateCaller();
  }

  //initialize
  init();

  /*==================================================
  =            Handlers and helpers Block            =
  ==================================================*/
  /*==========  register the handlebar partials first  ==========*/
  Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
  Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());

  /*===============================================
  =            data highlight function            =
  ===============================================*/
  function texthighlight($highlightinside) {
    //check if $highlightinside is provided
    typeof $highlightinside !== "object" ? alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") : null;

    var $alltextpara = $highlightinside.find("*[data-highlight='true']");
    var stylerulename;
    var replaceinstring;
    var texthighlightstarttag;
    var texthighlightendtag = "</span>";
    if ($alltextpara.length > 0) {
      $.each($alltextpara, function (index, val) {
        /*if there is a data-highlightcustomclass attribute defined for the text element
         use that or else use default 'parsedstring'*/
        $(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
          (stylerulename = $(this).attr("data-highlightcustomclass")) : (stylerulename = "parsedstring");

        texthighlightstarttag = "<span class='" + stylerulename + "'>";
        replaceinstring = $(this).html();
        replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
        replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
        $(this).html(replaceinstring);
      });
    }
  }
  /*=====  End of data highlight function  ======*/




  /*======================================================
   =            Navigation Controller Function            =
   ======================================================*/

  /*=====  End of user navigation controller function  ======*/


  /*=================================================
   =            general template function            =
   =================================================*/
  var score = 0;
  var testin = new RhinoTemplate();
  testin.init(9);
  $(".markboard_rhino").hide();

  function generaltemplate() {
    var source = $("#general-template").html();
    var template = Handlebars.compile(source);
    var html = template(content[countNext]);
    $board.html(html);
    texthighlight($board);
    put_image(content, countNext);
    putExerciseImage(content, countNext);
    $prevBtn.hide(0);
    $nextBtn.hide(0);

    // randomize(".mcqContainer");
    $(".youscored").hide(0);


    switch (countNext) {
      case 0:
        firstPagePlayTime(countNext);
        //registers and plays sounds
        createjs.Sound.stop();
        current_soundx = createjs.Sound.play('playtimesounddd');
        current_soundx.play();
        current_soundx.on('complete', function () {
          $('#activity-page-next-btn-enabled').show(0);
        });
        break;
      case 1:
        createjs.Sound.stop();
        current_soundx = createjs.Sound.play('instruction');
        current_soundx.play();
        current_soundx.on('complete', function () {
          sound_player_nav('boy_sbtxt');
          $('#activity-page-next-btn-enabled').show(0);
        });
        break;

      case 2:
        sound_player_nav("instruction_1", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_1", false);
        });
        ManageHovers();
        break;
      case 3:
        sound_player_nav("instruction_2", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_2", false);
        });
        ManageHovers();
        break;
      case 4:
        sound_player_nav("instruction_3", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_3", false);
        });
        ManageHovers();
        break;
      case 5:
        sound_player_nav("instruction_4", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_4", false);
        });
        ManageHovers();
        break;
      case 6:
        sound_player_nav("instruction_5", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_5", false);
        });
        ManageHovers();
        break;
      case 7:
        sound_player_nav("instruction_6", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_6", false);
        });
        ManageHovers();
        break;
      case 8:
        sound_player_nav("instruction_7", false);
        $(".spk-top").click(function () {
          sound_player_nav("instruction_7", false);
        });
        ManageHovers();
        break;

      case 9:
        $(".scoreboardbg_rhino, .scoreboard_rhino").hide(0);
        // endpageex.endpage(data.string.playEndTxt);
        if ($lang === "np") {
          $(".learnAgainBtn").text("फेरि पढौँ")
          $(".playAgainBtn").text("फेरि खेलौँ")
        }
        break;
      default:
        // randomize(".mcqContainer");
        break;
    }

    function ManageHovers() {
      $(".clickable, .clkIm").mouseenter(function () {
        var hoverClass = $(this).attr("class").split(" ")[4];
        console.log(hoverClass);
        sound_player_nav(hoverClass + "-sound", false);
      }).mouseleave(function () {
        // $(this).children(".objName").hide();				
      });
    }

    /*for randomizing the options*/
    function randomize(parent) {
      // alert(parent);
      var parent = $(parent);
      var divs = parent.children();
      while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
      }
    }


    $(".audioicon").click(function () {
      var optClickClass = $(this).attr("class").split(" ")[1].split("-")[1];
      // console.log(optClickClass+"-sound");
      sound_player_nav(optClickClass + "-sound", false);
    });

    $(".ansClk").click(function () {
      createjs.Sound.stop();
      if ($(this).hasClass("class_1")) {
        $(".ansClk").css("pointer-events", "none");
        $(this).siblings(".corctopt").show(0);
        $(this).css({
          "pointer-events": "none",
          "background-color": "rgb(170 225 172)",
          "border": "2px solid rgb(10 66 21)"
        });
        HandleCorrectFunctionality();
      } else {
        $(this).css({
          "pointer-events": "none",
          "background-color": "#D0553E"
        });
        $(this).siblings(".wrngopt").show(0);
        HandleInCorrectFunctionality();
      }
    });

    $(".clkIm").click(function () {
      createjs.Sound.stop();
      if ($(this).hasClass("class_1")) {
        $(".clkIm").css("pointer-events", "none");
        $(this).children(".corctopt").show(0);
        $(this).css({
          "pointer-events": "none",
          "background-color": "#4CAF50",
          "border": "2px solid #196d27"
        });
        HandleCorrectFunctionality();
      } else {
        $(this).css({
          "pointer-events": "none",
          "background-color": "#D0553E"
        });
        $(this).children(".wrngopt").show(0);
        HandleInCorrectFunctionality();
      }
    });

    function HandleCorrectFunctionality() {
      play_correct_incorrect_sound(1);
      testin.update(true);
      nav_button_controls(0);
    }


    function HandleInCorrectFunctionality() {
      play_correct_incorrect_sound(0);
      testin.update(false);
    }
  }



  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        // $nextBtn.show(0);
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0);
        $nextBtn.show(0);
        //ole.footerNotificationHandler.lessonEndSetNotification();
      } else {
        // $prevBtn.show(0);
        $nextBtn.show(0);
      }
    }, delay_ms);
  }

  function sound_player_nav(sound_id, next) {
    createjs.Sound.stop();
    current_sound = createjs.Sound.play(sound_id);
    current_sound.play();
    current_sound.on('complete', function () {
      next ? nav_button_controls() : '';
    });
  }

  function putExerciseImage(content, count) {
    if (content[count].hasOwnProperty('mcqblock')) {
      if (content[count].mcqblock[0].hasOwnProperty('optdiv')) {
        var optBlock = content[count].mcqblock[0].optdiv;
        for (var x = 0; x < optBlock.length; x++) {
          if (optBlock[x].hasOwnProperty('imageblock')) {
            var imageblock = optBlock[x].imageblock[0];
            if (imageblock.hasOwnProperty('imagestoshow')) {
              var imageClass = imageblock.imagestoshow;
              for (var i = 0; i < imageClass.length; i++) {
                var image_src = preload.getResult(imageClass[i].imgid).src;
                //get list of classes
                var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
                var selector = ('.' + classes_list[classes_list.length - 1]);
                $(selector).attr('src', image_src);
              }
            }
          }
        }
      }
    }
  }

  function put_image(content, count) {
    if (content[count].hasOwnProperty('imageblock')) {
      var images = content[count].imageblock;
      for (var j = 0; j < images.length; j++) {
        var imageblock = content[count].imageblock[j];
        if (imageblock.hasOwnProperty('imagestoshow')) {
          var imageClass = imageblock.imagestoshow;
          for (var i = 0; i < imageClass.length; i++) {
            var image_src = preload.getResult(imageClass[i].imgid).src;
            //get list of classes
            var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
            var selector = ('.' + classes_list[classes_list.length - 1]);
            $(selector).attr('src', image_src);
          }
        }
      }
    }
  }

  function templateCaller() {
    $nextBtn.css('display', 'none');
    generaltemplate();
    loadTimelineProgress($total_page, countNext + 1);
  }

  $nextBtn.on('click', function () {
    createjs.Sound.stop();
    switch (countNext) {
      default:
        countNext++;
        testin.gotoNext();
        templateCaller();
        break;
    }

  });
  $refreshBtn.on('click', function () {
    createjs.Sound.stop();
    clearTimeout(stmout1);
    clearTimeout(stmout2);
    templateCaller();
  });
});
