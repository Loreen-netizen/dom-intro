// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")

//create a variable that will keep track of the total bill
var totalTwoElement = document.querySelector(".totalTwo")
//add an event listener for when the add button is pressed
var callsTotal = 0;
    var smsTotal = 0;
function radioButtonBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    // alert(checkedRadioBtn.value);
    
    // billItemType will be 'call' or 'sms'

    if (billItemType === "call") {
        callsTotal += 2.75
    }
    else if (billItemType === "sms") {
        smsTotal += 0.75;
    }
    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwoElement.innerHTML = totalCost.toFixed(2);


    if (totalCost.toFixed(2) >= 50) {
        // adding the danger class will make the text red
        totalTwoElement.classList.add("danger");
    }
    else if (totalCost.toFixed(2) >= 30) {
        totalTwoElement.classList.add("warning");
    }
};

// billItemType will be 'call' or 'sms'

radioBillAddBtnElement.addEventListener("click", radioButtonBill);
//in the event listener get the value from the billItemTypeRadio radio buttons

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
