var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.getElementById("totalTwo");

var radioButtonBillInstance = radioButtonBill();

var radioButtonBill2= function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    if (billItemType === "call") {
        callTotalTwoElement.innerHTML =  radioButtonBillInstance.forEachCallAdd();
    
    }
    else if (billItemType === "sms") {
        smsTotalTwoElement.innerHTML =  radioButtonBillInstance.forEachSmsAdd();
        
    }
    totalTwoElement.innerHTML = radioButtonBillInstance.finalTotal();
};

var updateClass = function(){
   
    var totalCostR =radioButtonBillInstance.finalTotal();

    if (totalCostR >= 30 && totalCostR < 50) {
        totalTwoElement.className = "warning";
    }
    else if (totalCostR >= 50) {
        totalTwoElement.className ="critical";
    }
    else if (totalCostR < 30) {
        totalTwoElement.className ="";
    }
};
radioBillAddBtnElement.addEventListener("click", radioButtonBill2);
radioBillAddBtnElement.addEventListener("click", updateClass);
