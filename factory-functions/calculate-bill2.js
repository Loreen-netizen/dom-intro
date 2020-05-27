var calculateBtnClicked = function (){
    var allTotals = 0;
    var callsTotal = 0;
    var smsTotals = 0;
    var total = 0;
    var splitString = "";


    var cutString = function (string){
      splitString = string.split(",");
       return splitString;
    };

    var addCallOrSms = function(billItem){
        // var stringArray = splitString;
        for(let i=0; i< billItem.length;i++){
            // var billItemType = billItem[i].trim();
            if (billItem === "call"){
                callsTotal += 2.75
                return callsTotal;
            }
            else if (billItem === "sms"){
                smsTotals += 0.75;
                return smsTotals;
            }

        }
    };
    var sumCalls = function(){
        return callsTotal.toFixed(2)
    }

    var sumSms = function(){
        return smsTotals.toFixed(2)
    }

    var sumTotals = function(){
        allTotals = callsTotal + smsTotals
        return allTotals.toFixed(2)
    };

    var updateClasses = function(currentTotal){
        total = currentTotal;
        if ((total < 30 )&&(total >= 20 )){
        return "warning"
    }   else if (total >= 30){
        return "critical"
    }

};

    return {
        cutString,
        addCallOrSms,
        sumTotals,
        sumCalls,
        sumSms,
        updateClasses,
    }

};