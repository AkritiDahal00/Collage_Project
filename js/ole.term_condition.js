(function($) {
        var $_GET = {}; /*get object to parse and put url decoded value*/
        $_GET["lang"] = "en"; /*get key value for language*/
        var $lang = ""; /*initialize lang variable to store language*/

        // parse the url and decode it to get key value pairs for the parameters passed in url
  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
    function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
    }

    /*now call the decode function to find and store the key value
		pair in url params*/
    $_GET[decode(arguments[1])] = decode(arguments[2]);
  });
  
        console.log("lang = " + $_GET["lang"]);
        $lang = $_GET["lang"];
    
        $("body").attr("lang", $lang); //create attribute "lang" on body tag
    
        var jqxhrdatajson = $.getJSON("config/data.json", function(generaldata) {

            var $fst_text_term = generaldata.term_cond_text[$lang];
            $(".fsttext").html($fst_text_term);

            var $fst_text_term_2 = generaldata.term_cond_text_sectext[$lang];
            $(".sectext").html($fst_text_term_2);

            var $fst_text_term_3 = generaldata.term_cond_text_head[$lang];
            $(".term_head").html($fst_text_term_3);

            var $fst_text_term_4 = generaldata.term_cond_text_rule1[$lang];
            $(".note_1").html($fst_text_term_4);

            // var $fst_text_term_5 = generaldata.term_cond_text_rule2[$lang];
            // $(".note_2").html($fst_text_term_5);
            $('.back_arrow').click(function(){
              // event.preventDefault(); /*keep this intact*/
              // console.log("term_condition.html&lang="+$lang)
              $('.back_arrow').attr("href", "index.html&lang="+$lang);
            })
        })
        // $('.back_arrow a').click(function(event){
        //     event.preventDefault();
        //     console.log("aa")
        //     $(this).attr("href", "../index.html")
        // })  

        if($lang=="np"){
          $('.back_arrow>a').attr("href", "./index.html?lang=np");
        }
        else{
          $('.back_arrow>a').attr("href", "./index.html?lang=en");
        }
})(jQuery);
