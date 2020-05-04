var addToBillBtnElement = document.getElementById("addToBillBtnn");
var billTypeTextElement = document.querySelector(".billTypeText");
var totalOneElement = document.getElementById("totalOne");
var callsTotalElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {
    
    var billTypeEntered = billTypeTextElement.value.trim();
    
        var billItem = billTypeEntered;
        
        if (billItem  === "call") {
            callsTotal += 2.75
        }
        else if (billItem  === "sms") {
            smsTotal += 0.75;
        }
    };
var addNewClass = function(){
        
        callsTotalElement.innerHTML = callsTotal.toFixed(2);
        smsTotalElement.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalOneElement.innerHTML = totalCost.toFixed(2);

        if (totalCost.toFixed(2) >= 50) {
            
            totalOneElement.className = "danger";
        }
        else if (totalCost.toFixed(2) >= 30) {
            totalOneElement.className ="warning";
        }

        else if (totalCost.toFixed(2)> 0 < 30 ) {
            totalOneElement.className = "";
        }
    };
addToBillBtnElement.addEventListener("click", textBillTotal)
addToBillBtnElement.addEventListener("click", addNewClass)



















// function flashingTotals(){

//     // ... other code here

//     //update the totals that is displayed on the screen.
//     callsTotalElem.innerHTML = callsTotal.toFixed(2);
//     smsTotalElem.innerHTML = smsTotal.toFixed(2);
//     var totalCost = callsTotal + smsTotal;
//     totalCostElem.innerHTML = totalCost.toFixed(2);

//     //color the total based on the criteria
//     if (totalCost >= 50){
//         // adding the danger class will make the text red
//         totalCostElem.classList.add("danger");
//     }
//     else if (totalCost >= 30){
//         totalCostElem.classList.add("warning");
//     }
// }
