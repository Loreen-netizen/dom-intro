var calculateBtnClicked = function (){
    
        var addCallOrSms = function(string){
        var allTotals = 0;
   
        var billItems = string.split(",");
      for(var i=0;i < billItems.length;i++)
      {
           var billItem = billItems[i].trim();
          if (billItem === "call"){
             allTotals += 2.75;
          }
          else if (billItem === "sms"){
                  allTotals += 0.75;
          }          
      }
    return allTotals; 
    };
    
   

    return {
        addCallOrSms,
    }

};