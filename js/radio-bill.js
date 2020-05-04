var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.getElementById("totalTwo");

var callsTotalR= 0;
var smsTotalR = 0;

function radioButtonBill() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }

    if (billItemType === "call") {
        callsTotalR += 2.75
    }
    else if (billItemType === "sms") {
        smsTotalR += 0.75;
    }
};

var updateClass = function(){
    callTotalTwoElement.innerHTML = callsTotalR.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalR.toFixed(2);
    var totalCostR = callsTotalR + smsTotalR;
    totalTwoElement.innerHTML = totalCostR.toFixed(2);
    if (totalCostR.toFixed(2) >= 50) {
       
        totalTwoElement.className = "danger";
    }
    else if (totalCostR.toFixed(2) >= 30) {
        totalTwoElement.className ="warning";
    }
    else if (totalCostR.toFixed(2) < 30) {
        totalTwoElement.className ="";
    }
};

radioBillAddBtnElement.addEventListener("click", radioButtonBill);
radioBillAddBtnElement.addEventListener("click", updateClass);
