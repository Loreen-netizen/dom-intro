// get a reference to the textbox where the bill type is to be entered

//add an event listener for when the add button is pressed

var addToBillBtnElement = document.querySelector(".addToBillBtn");

// alert (billTypeTextElement.value);
function textBillTotal() {
    var billTypeTextElement = document.querySelector(".billTypeText");
    //get a reference to the add button

    //create a variable that will keep track of the total bill
    var totalOneElement = document.querySelector(".totalOne");

    var callsTotalElement = document.querySelector(".callTotalOne");
    var smsTotalElement = document.querySelector(".smsTotalOne");
    var callsTotal = 0;
    var smsTotal = 0;
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.split(",");
    for (var i = 0; i < billTypeEntered.length; i++) {
        var billItem = billTypeEntered[i].trim();
        // update the correct total
        if (billItem === "call") {
            callsTotal += 2.75
        }
        else if (billItem === "sms") {
            smsTotal += 0.75;
        }

        //update the totals that is displayed on the screen.
        callsTotalElement.innerHTML = callsTotal.toFixed(2);
        smsTotalElement.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalOneElement.innerHTML = totalCost.toFixed(2);

        if (totalCost.toFixed(2) >= 50) {
            // adding the danger class will make the text red
            totalOneElement.classList.add("danger");
        }
        else if (totalCost.toFixed(2) >= 30) {
            totalOneElement.classList.add("warning");
        }
    }

};
addToBillBtnElement.addEventListener("click", textBillTotal)



















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
