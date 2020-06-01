var addToBillBtnElement = document.getElementById("addToBillBtnn");
var billTypeTextElement = document.querySelector(".billTypeText");
var totalOneElement = document.getElementById("totalOne");
var callsTotalElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");

var textInputBillInstance = textInputBill();

function textBillTotal() {
    if (billTypeTextElement.value === "call") {
        textInputBillInstance.forEachCallAdd();
    }
    else if (billTypeTextElement.value === "sms") {
        textInputBillInstance.forEachSmsAdd();
    }
};
var addNewClass = function () {

    callsTotalElement.innerHTML = textInputBillInstance.newCallsTotal();
    smsTotalElement.innerHTML = textInputBillInstance.newSmsTotal();
    var totalCost = textInputBillInstance.finalTotal();
    totalOneElement.innerHTML = textInputBillInstance.finalTotal();

    if (totalCost >= 50) {
        totalOneElement.className = "critical";
    }
    else if (totalCost >= 30) {
        totalOneElement.className = "warning";
    }
    else if (totalCost > 0 < 30) {
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
