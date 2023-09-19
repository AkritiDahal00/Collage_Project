var globalInterval;
$.fn.vibrateMe = function ($speed,$spread) {
   
    var speed;
    var spread;

    if($speed)
    {
        speed=parseInt($speed);
    } 
    else speed=30;


    if($spread)
    {
        spread=parseInt($spread);
    } 
    else spread=3;
   


    return this.each(function () {
        var selector = $(this);

        continuousViber();

        function vibrateThis (){
            var topPos    = Math.floor(Math.random() * spread) - ((spread - 1) / 2);
            var leftPos    = Math.floor(Math.random() * spread) - ((spread - 1) / 2);
          

            selector.css({
                position:            'relative', 
                left:                leftPos + 'px', 
                top:                topPos + 'px'
            });
        };

        function continuousViber() {
            globalInterval=setInterval(vibrateThis,speed);
            
        };

        
        
    });
};

   

/*

To vibrate single object at a time
above function may change position of element if elements are positioned absolute
This function required  top and left poition
**/
var globalIntervals=new Array();
var checkme=0;
$.fn.vibrateSingle = function ($top,$left,$speed,$spread) {
    
    var speed;
    if($speed)
    {
        speed=parseInt($speed);
    } 
    else speed=30;


    if($spread)
    {
        spread=parseInt($spread);
    } 
    else spread=3;

    return this.each(function () {
        var selector = $(this);

        conVibrate();


        function singleViber (){
            
            var topPos    = Math.floor((Math.random() * spread) + 1)+$top;
            var leftPos    =Math.floor((Math.random() * spread) + 1)+$left;
         

            selector.css({
               left:  leftPos + '%', 
                top:  topPos + '%'
            });
           
        };

        function conVibrate() {
          
           globalIntervals[checkme]= setInterval(singleViber,speed);
     
           checkme++;
        };
    });
};

function stopVibrateMe()
{
    for(var i=checkme;i>=0;i--)
    {
        clearInterval(globalIntervals[i]);
    }
     checkme=0;
}