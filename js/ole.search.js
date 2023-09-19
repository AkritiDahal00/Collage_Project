//search button code starts with ajax and jquery GET 


var $_GET = {}; /*get object to parse and put url decoded value*/
$_GET['lang'] = "en"; /*get key value for language*/
var $lang = ""; /*initialize lang variable to store language*/

// parse the url and decode it to get key value pairs for the parameters passed in url
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    /*now call the decode function to find and store the key value
    pair in url params*/
    $_GET[decode(arguments[1])] = decode(arguments[2]);
});
// set the language as given in the url
$lang = $_GET['lang'];

var jsonDataEnglish, jsonDataScience, jsonDataMath, jsonDataNepali; //JSON stores

var jsonDataLoadFlag; //flag for JSON data load

// extracting JSON file and then story to variables
$.when(
    $.getJSON('config/configenglish.json', function (data) {
        jsonDataEnglish = data;
    }),
    $.getJSON('config/configscience.json', function (data) {
        jsonDataScience = data;
    }),
    $.getJSON('config/configmath.json', function (data) {
        jsonDataMath = data;
    }),
    $.getJSON('config/confignepali.json', function (data) {
        jsonDataNepali = data;
    })
).then(function(){
    console.log("data loaded");
    jsonDataLoadFlag = true;
}
).fail(function (data, textstatus, errortype) {
    console.log("get " + name + " failed, status: " + textstatus + ", error: " + errortype);
});




$.ajaxSetup({ cache: false }); //setting cache to false

var placeholderString, titleString;
$lang == "en" ? placeholderString = "What do you want to learn?" : placeholderString = "तपाई के सिक्न चाहनुहुन्छ?"; //placeHolder Decision
$lang == "en" ? titleString = "Eg : Simple Interest" : titleString = "जस्तै : साधारण ब्याज"; //title decision
$('#search').attr('placeholder', placeholderString);
$('#search').attr('title', titleString);


// key press function
$('#search').keyup(function () {
    $('#result').html('').show(100);
    $('#state').val('');

    var searchField = $('#search').val();
    var expression_2 = null; // for bhiinna
    if (searchField == "भिन्‍न" || searchField == "भिन्न"){

    }

    var expression = new RegExp(searchField, "i"); //creating regular expression instance from the value user type
    if (searchField == "भिन्न"){
            expression_2 = new RegExp("भिन्न", "i");
    }
    if (searchField == "भिन्न"){
        expression_2 = new RegExp("भिन्‍न", "i");
    }
    var grade_array = [['1', '2', '3', '4', '5', '6', '7', '8'], ['१', '२', '३', '४', '५', '६', '७', '८']]; //grade english and nepali number array
    var userLang;

    // function to search
    const searchAndShow = function(data) {
        var gradenumber, subject, chapter, gradename, uniqueId; // gradenumber: 7 8, subject: english ..., chapter: SI ..., gradename: Grade or nepali grade, unique ID: ID in URL
        $.each(data, function (key, value) {
            var grade = key.slice(-1);
            $.each(value, function (key, value) {
                if (userLang == "English") {
                    subject = value.subId;
                    chapter = value.en;
                    gradename = "Grade";
                    gradenumber = grade_array[0][grade - 1];
                     // deciding the ID based on subject
                    switch (subject) {
                        case "english":
                            uniqueId = 'eng' + value.id;
                            break;
                        case 'science':
                            uniqueId = 'sci' + value.id;
                            break;
                        case 'math':
                            uniqueId = 'mat' + value.id;
                            break;
                        case 'nepali':
                            uniqueId = 'nep' + value.id;
                            break;
                        default:
                            break;
                    }
                }
               

                subject == "nepali" ? link = "start.html?id=" + uniqueId + "01&lang=np&grade=" + grade : link = "start.html?id=" + uniqueId + "01&lang=" + $lang + "&grade=" + grade;
                if (subject == "english") { link = "start.html?id=" + uniqueId + "01&lang=en&grade=" + grade }

                // if the user enters nepali font this executes
                if (userLang !== "English") {
                    subject = value.subId;
                    chapter = value.np;
                    gradenumber = grade_array[1][grade - 1];
                    gradename = "कक्षा";
                    switch (subject) {
                        case "english":
                            uniqueId = 'eng' + value.id;
                            break;
                        case 'science':
                            uniqueId = 'sci' + value.id;
                            subject = 'विज्ञान';
                            break;
                        case 'math':
                            uniqueId = 'mat' + value.id;
                            subject = 'गणित';
                            break;
                        case 'nepali':
                            uniqueId = 'nep' + value.id;
                            subject = 'नेपाली';
                            break;
                        default:
                            break;
                    }
                    link = "start.html?id=" + uniqueId + "01&lang=np&grade=" + grade;
                }

                // actual searching in case if subject is english, science or math
                if (
                    (value.en.search(expression) != -1) ||
                    (value.np.search(expression) != -1) ||
                    (value.np.search(expression_2) != -1)
                ) {
                    $('#result').append('<li class="list-group-item link-class" style="margin: 0 !important; padding: 0 !important;"><a style="display: block; padding: 2%" href=' + link + '>' + gradename + '  ' + gradenumber + ' | <span class="text-muted">' + subject + '</span> | ' + '<span class="text-muted">' + chapter + '</span></a></li>');
                }

                // actual searching in case if subject is nepali
                if (subject == 'nepali' || subject == 'नेपाली') {
                    if ((value.levels[0].folder.substr(value.levels[0].folder.lastIndexOf('/') + 1)).search(expression) != -1) //to find last slash behind string to search the topic only
                    {
                    $('#result').append('<li class="list-group-item link-class" style="margin: 0 !important; padding: 0 !important;"><a style="display: block; padding: 2%" href=' + link + '>' + gradename + '  ' + gradenumber + ' | <span class="text-muted">' + subject + '</span> | ' + '<span class="text-muted">' + chapter + '</span></a></li>');
                    // $('#result').append('<li class="list-group-item link-class"><a href=' + link + '>' + gradename + '  ' + gradenumber + ' | <span class="text-muted">' + subject + '</span> | ' + '<span class="text-muted">' + chapter + '</span></a></li>');
                    }
                }


            });
        });
    }

    // deciding if the user entered language is English or Nepali
    if (/^[A-Za-z\s]+$/.test($('#search').val())) {
        userLang = "English";
    }

    //if the search box has no value then return
    if ($('#search').val() == '') {
        return;
    }

    //call only if data is loaded
    if (jsonDataLoadFlag) {
        searchAndShow(jsonDataEnglish);
        searchAndShow(jsonDataScience);
        searchAndShow(jsonDataMath);
        searchAndShow(jsonDataNepali);
    }

});

$('#result').on('click', 'li', function () {
    var click_text = $(this).text().split('|');
    $('#search').val($.trim(click_text[0]));
    $("#result").html('');
});

$('body').click(function (e) {
    if (!$(e.target).is('#search')) {
        $('#search').val(null);
        $("#result").hide(100);
    }
});

//search button input ends with ajax and jquery GET 
