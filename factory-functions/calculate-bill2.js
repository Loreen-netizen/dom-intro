var calculateBtnClicked = function (){
    var allTotals = 0;
    var callsTotal = 0;
    var smsTotals = 0;
   
   
    var cutString = function (){
       var newString = "call,sms,call".split(",")
       return newString
    };

    var ifCallAdd = function(){
        callsTotal += 2.75
        
    };
    var sumCalls = function(){
        return callsTotal
    }

    var ifSmsAdd = function(){
        smsTotals += 0.75
        
    };
    var sumSms = function(){
        return smsTotals
    }

    var sumTotals = function(){
        allTotals = callsTotal + smsTotals
        return allTotals
    };

    var warningLevel = function(){
        return "warning"
    }

    var criticalLevel = function(){
        return "critical"
    }
   

    return {
        cutString,
        sumTotals,
        ifCallAdd,
        sumCalls,
        ifSmsAdd,
        sumSms,
        warningLevel,
        criticalLevel,
    }

};