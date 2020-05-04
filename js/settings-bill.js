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

var callTotal = 0;
var smsTotal = 0;
var totalCost4 = 0;

costPerCall = 0;
costPerSms = 0;

var warning = 0;
var critical = 0;

var calculateCost = function () {

    if (smsChecked.checked == true && (totalSettingsElement.className == "warning" || totalSettingsElement.className == "")) {
        smsTotal += costPerSms;
        smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
        totalCost4 += costPerSms;
        totalSettingsElement.innerHTML = totalCost4.toFixed(2);
    }
    else if (callChecked.checked == true && (totalSettingsElement.className == "warning" || totalSettingsElement.className == "")) {
        callTotal += costPerCall;
        callTotalSettingsElement.innerHTML = callTotal.toFixed(2);
        totalCost4 += costPerCall;
        totalSettingsElement.innerHTML = totalCost4.toFixed(2);
    }
    else if (smsChecked.checked == false && callChecked.checked == false) {
        callTotalSettingsElement.innerHTML = 0;
        smsTotalSettingsElement.innerHTML = 0;
        totalSettingsElement.innerHTML = 0;
    }
};
var changeClass = function () {

    if (totalCost4 >= 0 && critical == 0 && warning == 0) {
        totalSettingsElement.className = "";
    }
    else if (totalCost4 >= 0 && totalCost4 < critical && totalCost4 < warning) {
        totalSettingsElement.className = "";
    }
    else if (totalCost4 >= warning && totalCost4 < critical) {
        totalSettingsElement.className = "warning";
    }
    else if (totalCost4 >= critical) {
        totalSettingsElement.className = "danger";
    }

};

updateSettingsElement.onclick = function () {

    billWithSettingsButtonElement.disabled = false

    costPerCall = parseFloat(callCostSettingElement.value);
    costPerSms = parseFloat(smsCostSettingElement.value);
    warning = parseFloat(warningLevelSettingElement.value)
    critical = parseFloat(criticalLevelSettingElement.value)

    if (totalCost4 >= warning && totalCost4 < critical) {
        totalSettingsElement.className = "warning";
    }
    else if (totalCost4 >= critical) {
        totalSettingsElement.className = "danger";
    }

    else if (totalCost4 >= 0 && totalCost4 < critical && totalCost4 < warning) {
        totalSettingsElement.className = "";
    }

};

billWithSettingsButtonElement.addEventListener("click", calculateCost);
billWithSettingsButtonElement.addEventListener("click", changeClass);
billWithSettingsButtonElement.addEventListener("click", function () {
    if (totalCost4 >= critical) {
        billWithSettingsButtonElement.disabled = true
    }

});


