var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.getElementById("totalTwo");

var radioButtonBillInstance = radioButtonBill();

function radioButtonBill2() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    if (billItemType === "call") {
        radioButtonBillInstance.forEachCallAdd;
        radioButtonBillInstance.newCallsTotal;
    }
    else if (billItemType === "sms") {
        radioButtonBillInstance.forEachSmsAdd;
        radioButtonBillInstance.newSmsTotal;
    }
    callTotalTwoElement.innerHTML = radioButtonBillInstance.newCallsTotal;
    smsTotalTwoElement.innerHTML = radioButtonBillInstance.newSmsTotal;
    totalTwoElement.innerHTML = radioButtonBillInstance.finalTotal;
};

var updateClass = function(){
   
    var totalCostR =radioButtonBillInstance.finalTotal;

    if (totalCostR >= 30) {
        totalTwoElement.className = "critical";
    }
    else if (totalCostR >= 50) {
        totalTwoElement.className ="warning";
    }
    else if (totalCostR < 30) {
        totalTwoElement.className ="";
    }
};
radioBillAddBtnElement.addEventListener("click", radioButtonBill2);
radioBillAddBtnElement.addEventListener("click", updateClass);
