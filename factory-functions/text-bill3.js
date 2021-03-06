var textInputBill = function(){

    var callsTotal = 0;
    var smsTotal = 0;
    var overallTotal = 0;

    var forEachCallAdd = function(){
     
        callsTotal += 2.75;
     overallTotal += 2.75;
    }

    var newCallsTotal = function(){
        return callsTotal.toFixed(2)
    }

    var forEachSmsAdd = function(){
        smsTotal += 0.75;
        overallTotal += 0.75;
       }
   
       var newSmsTotal = function(){
           return smsTotal.toFixed(2)
       }

       var finalTotal = function(){
       return overallTotal.toFixed(2)
      }

      var warningLevel = function(){
        return "warning"
    }

    var criticalLevel = function(){
        return "critical"
    }



    return{
        forEachCallAdd,
        newCallsTotal,
        forEachSmsAdd,
        newSmsTotal,
        finalTotal,
        warningLevel,
        criticalLevel,
    }
}