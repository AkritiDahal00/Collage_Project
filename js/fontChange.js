function checkNepaliNumber(str){
    nepaliNumbers = ["१","२", "३", "४", "५", "६", "७", "८", "९", "०"];
    flagNepali = true;
    for (var i =0; i<str.length;i++){
        if(nepaliNumbers.includes(str[i])){
            // flagNepali = true
        }else{
            flagNepali = false
        }
    }
    return flagNepali 
}

//targets the Nepali numbers only and provides span to change font of Nepali numbers only 

function changeFont(){
    console.log("Inside the change font function")
    allPara = $(".mainBox p")
    allSpan =  $("span")
    allParaSpan = $("p > span")
    allDivPara = $("div > p > span")
    allTargets = [allPara]

    allTargets.forEach(function(target){
        for (var i=0; i< target.length; i++){
                // console.log(target[i]);
                texts = $(target[i]).html().split(" ");
                for (var j = 0 ;j<texts.length;j++){
                    // console.log(texts[j])
                    if(checkNepaliNumber(texts[j])){
                        texts[j] = "<div style='font-family:kalimati !important;display:inline'>"+texts[j]+"</div>"
                    }
                }
                // console.log(texts.join(""))
                $(target[i]).html(texts.join(" "))
            }	
    });
}