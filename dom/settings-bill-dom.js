var billItemTypeWithSettingsElement = document.querySelectorAll(".billItemTypeWithSettings");
var callCostSettingElement = document.getElementById("callSetting");
var smsCostSettingElement = document.getElementById("smsSetting");
var warningLevelSettingElement = document.getElementById("warningSetting");
var criticalLevelSettingElement = document.getElementById("criticalSetting");
var billWithSettingsButtonElement = document.querySelector(".button-primary.billWithSettings");
var updateSettingsElement = document.getElementById("updateSettingsButton");
var callTotalSettingsElement = document.getElementById("callsTotal");
var smsTotalSettingsElement = document.getElementById("smsTotal");
var totalSettingsElement = document.getElementById("totalSettings");
var callChecked = document.getElementById("calls");
var smsChecked = document.getElementById("smses");
var billWithSettingsInstance = billWithSettingsFunction();

updateSettingsElement.onclick = function () {

    billWithSettingsInstance.setCallCost(Number(callCostSettingElement.value));
    billWithSettingsInstance.setSmsCost(Number(smsCostSettingElement.value));
    billWithSettingsInstance.setWarningLevel(Number(warningLevelSettingElement.value));
    billWithSettingsInstance.setCriticalLevel(Number(criticalLevelSettingElement.value));
    changeClass();

    billWithSettingsButtonElement.disabled = false;

};

var calculateCost = function () {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        if ((billItemType === "call") && (billWithSettingsInstance.updateTotalCost()) < (billWithSettingsInstance.upDateCritical())) {
            billWithSettingsInstance.forEachCallAdd();
        }
        else if ((billItemType === "sms") && (billWithSettingsInstance.updateTotalCost()) < (billWithSettingsInstance.upDateCritical())) {
            billWithSettingsInstance.forEachSmsAdd();
        }

    }
    changeClass();
    billWithSettingsButtonElementSwitch();
    callTotalSettingsElement.innerHTML = billWithSettingsInstance.newCallTotal();
    smsTotalSettingsElement.innerHTML = billWithSettingsInstance.newSmsTotal();
    totalSettingsElement.innerHTML = billWithSettingsInstance.updateTotalCost();


};
var changeClass = function () {
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.remove("critical");
    totalSettingsElement.classList.add(billWithSettingsInstance.theWarningLevel());
    totalSettingsElement.classList.add(billWithSettingsInstance.theCriticalLevel());

};


billWithSettingsButtonElement.addEventListener("click", calculateCost);
var billWithSettingsButtonElementSwitch = function () {
    if ((billWithSettingsInstance.updateTotalCost()) >= (billWithSettingsInstance.upDateCritical())) {
        billWithSettingsButtonElement.disabled = true;
    }

};


