var calculateBtnClicked = function (){
    var allTotals = 0;
    var callsTotal = 0;
    var smsTotals = 0;
    var total = 0;


    var cutString = function(string){
      var billItems = string.split(",");
      return billItems; 
    }

    var splitString = function(theBillItems){
        var theSplitString = theBillItems;
      for(var i=0;i < theSplitString.length;i++)
      {
           var billItem = theSplitString[i].trim();
          if (billItem === "call"){
             allTotals += 2.75;
             callsTotal += 2.75;
          }
          else if (billItem === "sms"){
                  allTotals += 0.75;
                  smsTotals += 0.75;
          }          
      }
    //   splitString(billItems);
    return allTotals; 
    };
    
    // var addCallOrSms = function(billItem){
    //         if (billItem === "call"){
    //             callsTotal += 2.75
    //             return callsTotal;
    //         }
    //         else if (billItem === "sms"){
    //             smsTotals += 0.75;
    //             return smsTotals;
    //         }

    //     }
    
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
        splitString,
        // addCallOrSms,
        sumTotals,
        sumCalls,
        sumSms,
        updateClasses,
    }

};