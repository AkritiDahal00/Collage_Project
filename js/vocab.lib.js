function Vocabulary() {
  //the csv file is read as an array
  var csv_as_array = [];
  //json object of the csv file
  var jsonobject;
  var init_complete = false;
  var check_interval = null;
  /*
   *  vocab word in the json object for comparison purpose
   *	important: the word index are in lower case
   */
  var wordindex = [];
  var mouseFlag;
  var wordindex2 = [];

  this.init = function (path) {
    loadTimelineProgress(1, 1);

    if ($lang == 'en') {
      path = typeof path === 'undefined' ? '/libsvocab/data.csv' : path;
    } else {
      path = typeof path === 'undefined' ? '/libsvocab/data-np.csv' : path;
    }
    $.ajax({
      url: $ref + path,
      async: true,
      success: function (csvdata) {
        csv_as_array = $.csv.toObjects(csvdata);
      },
      dataType: 'text',
      complete: function () {
        console.table(csv_as_array);
        var myJson = JSON.stringify(csv_as_array);
        jsonobject = JSON.parse(myJson);
        var jsonobj;
        for (var i = 0; i < jsonobject.length; i++) {
          jsonobj = jsonobject[i];
          wordindex.push({
            word: jsonobj.selector.trim().toLowerCase(),
            hitflag: false,
            pg: 0,
            slideCount: -1,
          });

          //$lang is a global variable from ole.activity.js which currently holds two values "en" and "np" to indicate the language used
          if ($lang == 'en') {
            wordindex2.push(jsonobj.selector.trim().toLowerCase());
          } else {
            wordindex2.push(jsonobj.selector.trim().toLowerCase());
          }
        }
        init_complete = true;
      },
    });
  };

  function uponhover($val, $board) {
    $val.hover(
      function () {
        // console.log($(val));

        /*
						 This opacity check is done because sometimes the text is ment to fade-in with time.
						 The opacity(fade-in) might have been set to the element or the parent so to be
						 safe we check the opacity of the element, it's parent and the grandparent just to be safe.
						 */
        var opacity = parseFloat($(this).css('opacity'));
        var opacityparent1 = parseFloat($(this).parent().css('opacity'));
        var opacityparent2 = parseFloat(
          $(this).parent().parent().css('opacity')
        );

        if (opacity < 0.4 || opacityparent1 < 0.4 || opacityparent2 < 0.4) {
          return true;
        }

        var div;
        var wordeng;
        var wordnep;
        var meaningeng;
        var meaningnep;
        var image;

        if (document.getElementsByClassName('vocab_meaning_').length > 0) {
          div = document.getElementsByClassName('vocab_meaning_')[0];
          div.innerHTML = '';
          $(div).css('display', 'block');
        } else {
          div = document.createElement('div');
          div.className = 'vocab_meaning_';
        }

        var index = wordindex2.indexOf($(this).text().trim().toLowerCase());
        if ($lang == 'en') {
          wordeng = document.createElement('p');
          wordeng.className = 'vocab_engword_';
          wordeng.innerHTML =
            index != -1
              ? jsonobject[index].english_word
              : '!!! data missing !!!';
          div.appendChild(wordeng);
        } else {
          wordnep = document.createElement('p');
          wordnep.className = 'vocab_nepword_';
          wordnep.innerHTML =
            index != -1
              ? jsonobject[index].nepali_word
              : '!!! data missing !!!';
          div.appendChild(wordnep);
        }

        if (index != -1) {
          if (
            jsonobject[index].image ? jsonobject[index].image.trim() : false
          ) {
            image = document.createElement('img');
            image.className = 'vocab_img_';
            image.src = imgpath + jsonobject[index].image;
            div.appendChild(image);
          }

          if (jsonobject[index].english_word.trim() && $lang == 'np') {
            wordeng = document.createElement('p');
            wordeng.className = 'vocab_engword_';
            wordeng.innerHTML = jsonobject[index].english_word;
            div.appendChild(wordeng);
          }

          if (jsonobject[index].engmeaning.trim()) {
            meaningeng = document.createElement('p');
            meaningeng.className = 'vocab_engmeaning_';
            meaningeng.innerHTML = jsonobject[index].engmeaning;
            div.appendChild(meaningeng);
          }

          if (jsonobject[index].nepali_word.trim() && $lang == 'en') {
            wordnep = document.createElement('p');
            wordnep.className = 'vocab_nepword_';
            wordnep.innerHTML = jsonobject[index].nepali_word;
            div.appendChild(wordnep);
          }

          if (jsonobject[index].nepmeaning.trim()) {
            meaningnep = document.createElement('p');
            meaningnep.className = 'vocab_nepmeaning_';
            meaningnep.innerHTML = jsonobject[index].nepmeaning;
            div.appendChild(meaningnep);
          }
        }

        var offsetcontainer = $board.offset();
        var offset = $(this).offset();
        var height = $board.height();
        var width = $board.width();

        var position_left =
          offset.left -
          $(window).scrollLeft() -
          (offsetcontainer.left - $(window).scrollLeft());
        var position_top =
          offset.top -
          $(window).scrollTop() -
          (offsetcontainer.top - $(window).scrollTop());
        console.log(
          'position inside the parent left ' +
            (offsetcontainer.left - $(window).scrollLeft()),
          ' top  ' + (offsetcontainer.top - $(window).scrollTop())
        );
        console.log('width  ' + width, 'height  ' + height);

        var per_left = Math.round((position_left / width) * 100);
        var per_top = Math.round((position_top / height) * 100);

        var addition_pertop = Math.round(($(this).height() / height) * 100);

        if (per_top >= 50) {
          $(div).css('top', '');
          $(div).css('bottom', 100.1 - per_top + '%');
        } else {
          $(div).css('top', per_top + addition_pertop + 0.2 + '%');
          $(div).css('bottom', '');
        }

        if (per_left >= 70) {
          per_left = 70;
        }
        if (image) {
          $(image).css('max-height', $board.height() * 0.3 + 'px');
        }

        $(div).css('left', (per_left - 2 > 0 ? per_left - 2 : per_left) + '%');
        console.log('per_top : ', per_top);
        $(div).css({
          'max-height': (per_top >= 50 ? per_top - 3 : 90 - per_top) + '%',
          'overflow-y': 'auto',
          'min-width': '20%',
          'min-height': '10%',
        });
        $('.board').append(div);
        mouseFlag = false;
        $(div).mouseenter(function () {
          mouseFlag = true;
        });
        $(div).mouseleave(function () {
          mouseFlag = false;
          $(this).hide(0);
        });
      },
      function () {
        setTimeout(function () {
          if (!mouseFlag) $('.vocab_meaning_').hide(0);
        }, 40);
      }
    );
  }

  this.is_ready = function () {
    return init_complete;
  };

  this.getwords = function () {
    return wordindex2;
  };
  this.getjson = function () {
    return jsonobject;
  };

  this.findwords = function (countNext) {
    if (check_interval != null) {
      clearInterval(check_interval);
    }

    function containsword($array, i) {
      var p_span_content;
      /*
					p_span_content_temp contains the words in lowercase
				*/
      var p_span_content_temp;
      var word;
      var punctuations = ' .,:;!?%*\'/"_-=+<>&';
      var character_after;
      for (var j = 0; j < $array.length; j++) {
        p_span_content = $($array[j]).html();
        p_span_content_temp = p_span_content.toLowerCase();
        word = wordindex2[i];
        var index = p_span_content_temp.indexOf(word);
        if (index >= 0) {
          if (index != 0) {
            if (punctuations.indexOf(p_span_content.charAt(index - 1)) == -1) {
              index = -1;
              continue;
            }
          }

          if (index + word.length < p_span_content.length) {
            character_after = p_span_content.charAt(index + word.length);
            if (punctuations.indexOf(character_after) == -1) {
              index = -1;
              continue;
            }
          }
        }

        if (index != -1) {
          var pre = p_span_content.substring(0, index);
          var mid = p_span_content.substring(index, index + word.length);
          var post = p_span_content.substring(
            word.length + index,
            p_span_content.length
          );

          p_span_content =
            '<span>' +
            pre +
            '</span>' +
            "<span class='voacbunderline'>" +
            mid +
            '</span>' +
            '<span>' +
            post +
            '</span>';
          // p_span_content.replace(word, "<span class='vocabunderline'>"+ word + "</span>");
          wordindex[i].hitflag = true;
          wordindex[i].pg = $pg;
          wordindex[i].slideCount = countNext;
          $($array[j]).html(p_span_content);
          break;
        }
      }
    }

    check_interval = setInterval(function () {
      if (init_complete) {
        var $board = $('.board');
        var $allp = $('.board p');
        var $alllabel = $('.board label');
        var $allspan = $('.board span');
        var $allh2 = $('.board h2');
        var $allli = $('.board li');

        var count = 0;

        for (var i = 0; i < wordindex.length; i++) {
          if (
            wordindex[i].pg == $pg &&
            wordindex[i].slideCount == countNext &&
            wordindex[i].hitflag
          ) {
            wordindex[i].hitflag = false;
          }
          if (!wordindex[i].hitflag) {
            containsword($allp, i);
          }
          if (!wordindex[i].hitflag) {
            containsword($alllabel, i);
          }
          if (!wordindex[i].hitflag) {
            containsword($allspan, i);
          }

          if (!wordindex[i].hitflag) {
            containsword($allh2, i);
          }

          if (!wordindex[i].hitflag) {
            containsword($allli, i);
          }
        }

        // $(document).on('click','.voacbunderline',function(){
        var $voacbunderline = $('.voacbunderline');
        $.each($voacbunderline, function (index, val) {
          // $(val)sa.parent().on('mouseenter',".voacbunderline", function(){
          // // console.log($(this));
          // });
          uponhover($(val), $board);
        });
        clearInterval(check_interval);
        check_interval = null;
      }
    }, 50);
  };

  this.reinstantiatehover = function ($newvoacbunderline) {
    var $board = $('.board');
    $.each($newvoacbunderline, function (index, val) {
      uponhover($(val), $board);
    });
  };
}

/* --------------------------------------------------
 * This script requires vocablist.css to run properly
 * -------------------------------------------------- */

function VocabularyList() {
  var vocab_list;
  var json_list;
  var current_slider = 0;
  var max_slides = 0;
  var vocabcontroller;
  var scroll_offset = 0;

  this.init = function (vocab_controller) {
    $('.mainBox').html(
      '<div class="my_activity"><div class="board vocablist-mainbg-board"><div class="vocablist-image-banner"><p class="vocablist-text-header">Words for the day!</p></div><img class="vocablist-image-grass" src="images/vocab_list/pokhara.png"><img class="vocablist-image-balloon" src="images/vocab_list/balloon.png"><div class="vocablist-wordslist"></div><div class="vocablist-meaning"></div><div class="vocablist-col-slider vocablist-col-slider-left"><p>Previous Page</p></div><div class="vocablist-col-slider vocablist-col-slider-right"><p>Next Page</p></div></div></div>'
    );
    vocabcontroller = vocab_controller;
    vocabcontroller.init();
    var list_interval = setInterval(function () {
      if (vocabcontroller.is_ready()) {
        vocab_list = vocabcontroller.getwords();
        json_list = vocabcontroller.getjson();
        create_cols();
        init_list();
        create_list();
        if (max_slides > 2) {
          scroll_offset = $('.vocablist-word-col-1').outerWidth();
        }
        $('.vocablist-each-word').eq(0).trigger('click');
        clearInterval(list_interval);
      }
    }, 50);

    $('.vocablist-col-slider-right').click(function () {
      current_slider++;
      var jump = scroll_offset * current_slider;
      $('.vocablist-wordslist').animate(
        {
          scrollLeft: jump,
        },
        1500
      );
      $('.vocablist-col-slider').hide(0);
      $('.vocablist-wordslist')
        .promise()
        .done(function (arg1) {
          if (max_slides - 2 > current_slider) {
            $('.vocablist-col-slider-right').show(0);
          }
          if (current_slider > 0) {
            $('.vocablist-col-slider-left').show(0);
          }
        });
    });

    $('.vocablist-col-slider-left').click(function () {
      current_slider--;
      var jump = scroll_offset * current_slider;
      $('.vocablist-wordslist').animate(
        {
          scrollLeft: jump,
        },
        1500
      );
      $('.vocablist-col-slider').hide(0);
      $('.vocablist-wordslist')
        .promise()
        .done(function (arg1) {
          if (max_slides - 2 > current_slider) {
            $('.vocablist-col-slider-right').show(0);
          }
          if (current_slider > 0) {
            $('.vocablist-col-slider-left').show(0);
          }
        });
    });
  };

  function create_cols() {
    max_slides = Math.ceil(vocab_list.length / 6);
    if (max_slides > 2) {
      $('.vocablist-col-slider-right').show(0);
    }
    for (var index = 0; index < Math.ceil(vocab_list.length / 6); index++) {
      var current_idx = index + 1;
      var current_class = 'vocablist-word-col-' + current_idx;
      $('.vocablist-wordslist').append(
        '<div class="vocablist-word-col ' + current_class + '"></div>'
      );
    }
  }

  function init_list() {
    var col_counter = 1;
    $('.' + current_class).append('<div></div>');
    for (var index = 0; index < vocab_list.length; index++) {
      var current_class = 'vocablist-word-col-' + col_counter;
      // $('.'+current_class).append('<div><span class="vocablist-each-word">'+toTitleCase(vocab_list[index])+'</span></div>');
      var nep_word = json_list[index].nepali_word;
      var eng_word = json_list[index].english_word;
      if ($lang == 'np') {
        $('.vocablist-text-header').html('शब्दको अर्थ');
        $('.vocablist-col-slider-left>p').html('पछाडि');
        $('.vocablist-col-slider-right>p').html('अगाडि');
        if (nep_word != null && nep_word != '') {
          $('.' + current_class).append(
            '<div><span class="vocablist-each-word" data-selector="' +
              vocab_list[index] +
              '">' +
              nep_word +
              '</span></div>'
          );
        } else {
          $('.' + current_class).append(
            '<div><span class="vocablist-each-word" data-selector="' +
              vocab_list[index] +
              '">' +
              vocab_list[index] +
              '</span></div>'
          );
        }
      } else {
        if (eng_word != null && eng_word != '') {
          $('.' + current_class).append(
            '<div><span class="vocablist-each-word" data-selector="' +
              vocab_list[index] +
              '">' +
              eng_word +
              '</span></div>'
          );
        } else {
          $('.' + current_class).append(
            '<div><span class="vocablist-each-word" data-selector="' +
              vocab_list[index] +
              '">' +
              vocab_list[index] +
              '</span></div>'
          );
        }
      }
      if (index % 6 == 0 && index != 0) {
        col_counter++;
      }
      ole.footerNotificationHandler.lessonEndSetNotification();
    }
  }

  function create_list() {
    var $vocab_words = $('.vocablist-each-word');
    $.each($vocab_words, function (index, val) {
      $(val).click(function () {
        var eng_word = '';
        var eng_meaning = '';
        var nep_word = '';
        var nep_meaning = '';
        var image_tag = '';

        var index = vocab_list.indexOf(
          $(this).data('selector').trim().toLowerCase()
        );
        $('.vocablist-meaning').html('');
        $('.vocablist-each-word').removeClass('vocablist-each-word-clicked');
        $(this).addClass('vocablist-each-word-clicked');
        if (json_list[index].image ? json_list[index].image.trim() : false) {
          image_tag = imgpath + json_list[index].image;
          $('.vocablist-meaning').append(
            '<img class="vocablist-meaning-image" src="' + image_tag + '">'
          );
        }

        if (json_list[index].english_word.trim()) {
          eng_word = json_list[index].english_word;
          $('.vocablist-meaning').append(
            '<p class="vocablist-meaning-header">' + eng_word + '</p>'
          );
        }

        if (json_list[index].engmeaning.trim()) {
          eng_meaning = json_list[index].engmeaning;
          $('.vocablist-meaning').append(
            '<p class="vocablist-meaning-desc">' + eng_meaning + '</p>'
          );
        }

        if (json_list[index].nepali_word.trim()) {
          nep_word = json_list[index].nepali_word;
          $('.vocablist-meaning').append(
            '<p class="vocablist-meaning-translation">' + nep_word + '</p>'
          );
        }

        if (json_list[index].nepmeaning.trim()) {
          nep_meaning = json_list[index].nepmeaning;
          $('.vocablist-meaning').append(
            '<p class="vocablist-meaning-desc">' + nep_meaning + '</p>'
          );
        }
      });
    });
  }
}

/* --------------------------------------------------
 * This script requires wordbreakdown.css to run properly
 * -------------------------------------------------- */
function WordsMeaning() {
  var csv_as_array = [];
  var wordindex = [];
  var wordindex2 = [];
  var jsonobject;
  var init_complete = false;
  var preload = '';
  var isModal = false;

  this.init = function (preloader, type = true, path) {
    if ($lang == 'en') {
      path = typeof path === 'undefined' ? '/words/words.csv' : path;
    } else {
      path = typeof path === 'undefined' ? '/words/words-np.csv' : path;
    }
    preload = preloader;
    isModal = type;

    $.ajax({
      url: $ref + path,
      async: true,
      success: function (csvdata) {
        csv_as_array = $.csv.toObjects(csvdata);
      },
      dataType: 'text',
      complete: function () {
        var myJson = JSON.stringify(csv_as_array);
        jsonobject = JSON.parse(myJson);
        var jsonobj;
        for (var i = 0; i < jsonobject.length; i++) {
          jsonobj = jsonobject[i];
          wordindex.push({
            word: jsonobj.selector.trim().toLowerCase(),
            hitflag: false,
            pg: 0,
          });

          //$lang is a global variable from ole.activity.js which currently holds two values "en" and "np" to indicate the language used
          if ($lang == 'en') {
            wordindex2.push(jsonobj.selector.trim().toLowerCase());
          } else {
            wordindex2.push(jsonobj.selector.trim().toLowerCase());
          }
        }
        init_complete = true;
      },
    });
  };

  this.is_ready = function () {
    return init_complete;
  };

  this.getwords = function () {
    if (init_complete) {
      return wordindex2;
    }
  };
  this.getjson = function () {
    return jsonobject;
  };

  this.findwords = function (droppedText) {
    function containsword(text) {
      var p_span_content;
      /*
          p_span_content_temp contains the words in lowercase
        */
      var p_span_content_temp;
      p_span_content = text;
      p_span_content_temp = p_span_content.toLowerCase();


      var div;

      if (document.getElementsByClassName('word_meaning').length > 0) {
        div = document.getElementsByClassName('word_meaning')[0];
        div.innerHTML = `
            <div class="first_word_example_container">
              <p class="first_word_text"></p>
              <img class="word_meaning_img first_word_img" src="">
              <p class="first_word_example"></p>
            </div>
            <div class="second_word_example_container">
              <p class="second_word_text"></p>
              <img class="word_meaning_img second_word_img" src="">
              <p class="second_word_example"></p>
            </div>
            ${
              isModal
                ? '<div class="cross_button"><img class="" src=' +
                  preload.getResult('cross').src +
                  '></div>'
                : ''
            }
          </div>`;

        $(div).css('display', 'flex');
      } else {
        $('.coverboardfull').append(
          `<div class="word_meaning">
            <div class="first_word_example_container">
              <p class="first_word_text"></p>
              <img class="word_meaning_img first_word_img" src="">
              <p class="first_word_example"></p>
            </div>
            <div class="second_word_example_container">
              <p class="second_word_text"></p>
              <img class="word_meaning_img second_word_img" src="">
              <p class="second_word_example"></p>
            </div>
            ${
              isModal
                ? '<div class="cross_button"><img class="" src=' +
                  preload.getResult('cross').src +
                  '></div>'
                : ''
            }
          </div>`
        );
      }

      var index = wordindex2.indexOf(p_span_content.trim().toLowerCase());

      if (index != -1) {
        if (jsonobject[index].first_word.trim()) {
          $('.first_word_text').text(jsonobject[index].first_word);
        }
        if (
          jsonobject[index].first_word_img
            ? jsonobject[index].first_word_img.trim()
            : false
        ) {
          $('.first_word_img').attr(
            'src',
            preload.getResult(jsonobject[index].first_word_img).src
          );
        }

        if (jsonobject[index].first_word_example.trim()) {
          $('.first_word_example').text(jsonobject[index].first_word_example);
        }

        if (jsonobject[index].second_word.trim()) {
          $('.second_word_text').text(jsonobject[index].second_word);
        }
        if (
          jsonobject[index].second_word_img
            ? jsonobject[index].second_word_img.trim()
            : false
        ) {
          $('.second_word_img').attr(
            'src',
            preload.getResult(jsonobject[index].second_word_img).src
          );
        }

        if (jsonobject[index].second_word_example.trim()) {
          $('.second_word_example').text(jsonobject[index].second_word_example);
        }
      }

      $('.coverboardfull').append(div);

      $(document).on('click', '.cross_button', function () {
        $('.word_meaning').hide(0);
      });

      mouseFlag = false;

      return jsonobject[index];
    }

    if (init_complete) {
      return containsword(droppedText);
    }
  };
}

/*
						if ($(".vocab_meaning_").length) {
							$(".vocab_meaning_").show(0);
							div = (document.getElementsByClassName("vocab_meaning_"  ))[0];
							wordeng = (document.getElementsByClassName("vocab_engword_"  ))[0];
							wordnep = (document.getElementsByClassName("vocab_nepword_"  ))[0];
							meaningeng = (document.getElementsByClassName("vocab_engmeaning_"  ))[0];
							meaningnep = (document.getElementsByClassName("vocab_nepmeaning_"  ))[0];
							image = (document.getElementsByClassName("vocab_img_"  ))[0];
						} else {
							div = document.createElement("div");
							div.className = "vocab_meaning_";

							wordeng = document.createElement("p");
							wordeng.className = "vocab_engword_";

							wordnep = document.createElement("p");
							wordnep.className = "vocab_nepword_";

							meaningeng = document.createElement("p");
							meaningeng.className = "vocab_engmeaning_";

							meaningnep = document.createElement("p");
							meaningnep.className = "vocab_nepmeaning_";

							image = document.createElement("img");
							image.className = "vocab_img_";

							div.appendChild(image);
							div.appendChild(wordeng);
							div.appendChild(meaningeng);
							div.appendChild(wordnep);
							div.appendChild(meaningnep);

						}
						console.log($(this).text());
						console.log(wordindex2);

						var index = wordindex2.indexOf($(this).text().trim().toLowerCase());
						if (index != -1) {
							if (jsonobject[index].english_word.trim()) {
								wordeng.innerHTML = jsonobject[index].english_word;
							} else {
								wordeng.innerHTML = "";
							}

							if (jsonobject[index].nepali_word.trim()) {
								wordnep.innerHTML = jsonobject[index].nepali_word;
							} else {
								wordnep.innerHTML = "";
							}

							if (jsonobject[index].engmeaning.trim()) {
								meaningeng.innerHTML = jsonobject[index].engmeaning;
							} else {
								meaningeng.innerHTML = "";
							}

							if (jsonobject[index].nepmeaning.trim()) {
								meaningnep.innerHTML = jsonobject[index].nepmeaning;
							} else {
								meaningnep.innerHTML = "";
							}

							if (jsonobject[index].image.trim()) {
								image.src = imgpath + jsonobject[index].image;
							} else {
								image.src = "";
							}
						} else {
							wordeng.innerHTML = "!!! data missing !!!";
							wordnep.innerHTML = "";
							meaningeng.innerHTML = "";
							meaningnep.innerHTML = "";
							image.src = "";
						}

						var offsetcontainer = $board.offset();
						var offset = $(this).offset();
						var height = $board.height();
						var width = $board.width();

						var position_left = (offset.left - $(window).scrollLeft()) - (offsetcontainer.left - $(window).scrollLeft());
						var position_top = (offset.top - $(window).scrollTop()) - (offsetcontainer.top - $(window).scrollTop());
						console.log("position inside the parent left " + (offsetcontainer.left - $(window).scrollLeft()), " top  " + (offsetcontainer.top - $(window).scrollTop()));
						console.log("width  " + width, "height  " + height);

						var per_left = Math.round((position_left / width) * 100);
						var per_top = Math.round((position_top / height) * 100);

						if (per_top >= 50) {
							$(div).css("top", "");
							$(div).css("bottom", (100 - per_top) + "%");
						} else {
							$(div).css("top", (per_top + 6) + "%");
							$(div).css("bottom", "");
						}

						if (per_left >= 70) {
							per_left = 70;
						}

						$(image).css("max-height", ($board.height() * 0.3) + "px");
						$(div).css("left", (((per_left - 2) > 0) ? per_left - 2 : per_left ) + "%");
						console.log("per_top : ", per_top);
						$(div).css({"max-height": ((per_top >= 50)? per_top - 3 : 90 - per_top ) + "%", "overflow-y": "auto"});
						// if (per_left >= 60) {
						// $(div).css("left", "initial");
						// $(div).css("right", (100 - per_left) + "%");
						// } else {
						// $(div).css("left", (((per_left -3)>0)? per_left-3 : per_left )+ "%");
						// $(div).css("right", "initial");
						// }

						$(".contentblock").append(div);
						mouseFlag = false;
						$(div).mouseenter(function(){
							mouseFlag = true;
						});
						$(div).mouseleave(function() {
							mouseFlag = false;
							$(this).hide(0);
						});
*/
