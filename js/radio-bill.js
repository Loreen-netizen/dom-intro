// get a reference to the sms or call radio buttons
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
var callTotalTwoElement = document.querySelector(".callTotalTwo")
var smsTotalTwoElement = document.querySelector(".smsTotalTwo")

//create a variable that will keep track of the total bill
var totalTwoElement = document.getElementById("totalTwo")
//add an event listener for when the add button is pressed
var callsTotalR= 0;
    var smsTotalR = 0;
function radioButtonBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    // alert(checkedRadioBtn.value);
    
    // billItemType will be 'call' or 'sms'

    if (billItemType === "call") {
        callsTotalR += 2.75
    }
    else if (billItemType === "sms") {
        smsTotalR += 0.75;
    }
    callTotalTwoElement.innerHTML = callsTotalR.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalR.toFixed(2);
    var totalCostR = callsTotalR + smsTotalR;
    totalTwoElement.innerHTML = totalCostR.toFixed(2);


    if (totalCostR.toFixed(2) >= 50) {
        // adding the danger class will make the text red
        totalTwoElement.className = "danger";
    }
    else if (totalCostR.toFixed(2) >= 30) {
        totalTwoElement.className ="warning";
    }
    else if (totalCostR.toFixed(2) < 30) {
        totalTwoElement.className ="black";
    }
};

// billItemType will be 'call' or 'sms'

radioBillAddBtnElement.addEventListener("click", radioButtonBill);
//in the event listener get the value from the billItemTypeRadio radio buttons

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
