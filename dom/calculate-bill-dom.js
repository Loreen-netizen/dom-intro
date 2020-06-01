const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotalElement = document.getElementById("billTotal");
const billStringField = document.querySelector(".billString");

let calculateBtnInstance = calculateBtnClicked();

function calculateBtnHasBeenClicked(){
   
   
    var overallTotal = calculateBtnInstance.addCallOrSms((billStringField.value));
    
    
    addClass();

    billTotalElement.innerHTML = overallTotal.toFixed(2);   
        
};

var addClass = function (){
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("critical");
   
        var total = calculateBtnInstance.addCallOrSms((billStringField.value));
        if (total < 30 && total >= 20 ){
            billTotalElement.classList.add("warning");
    }   else if (total >= 30){
        billTotalElement.classList.add("critical");
    }
};

calculateBtnElement.addEventListener('click', calculateBtnHasBeenClicked);