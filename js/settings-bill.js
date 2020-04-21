// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElement = document.querySelectorAll(".billItemTypeWithSettings");
// var hello = function () {

//     alert("i have been changed")
// };

// billItemTypeWithSettingsElement.forEach(function (button) {
//     console.log(button);
//     button.addEventListener("change", hello);
// });


// get refences to all the settings fields
var callCostSettingElement = document.getElementById("callSetting");
// console.log(callCostSettingElement.value);
var smsCostSettingElement = document.getElementById("smsSetting");
// console.log(smsCostSettingElement.value);
var warningLevelSettingElement = document.getElementById("warningSetting");

var criticalLevelSettingElement = document.getElementById("criticalSetting");
//get a reference to the add button
var billWithSettingsButtonElement = document.querySelector(".button-primary.billWithSettings");
// console.log(billWithSettingsButtonElement);
//get a reference to the 'Update settings' button
var updateSettingsElement = document.getElementById("updateSettingsButton");
// updateSettingsElement.addEventListener("click",hello);
// console.log(updateSettingsElement);
// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
var callTotalSettingsElement = document.getElementById("callsTotal");
var smsTotalSettingsElement = document.getElementById("smsTotal");
var totalSettingsElement = document.getElementById("totalSettings");
//add an event listener for when the 'Update settings' button is pressed
// var helloYeu = function () {
//     alert("i have been clicked")
// };
// updateSettingsElement.addEventListener("click", helloYeu);
//add an event listener for when the add button is pressed
// in the event listener get the value from the billItemTypeRadio radio buttons
var callChecked = document.getElementById("calls");
// console.log(callChecked);

var smsChecked = document.getElementById("smses");
// console.log(smsChecked);

var callTotal = 0;
var smsTotal = 0;
var totalCost4 = 0;
costPerCall = 0;
costPerSms = 0;
var warning = 0;
var critical = 0;
var helloYeu = function () {
    
    if (smsChecked.checked == true) {
        // alert(smsChecked.value);
        smsTotal += costPerSms;
        smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
        // totalSettingsElement.innerHTML += smsTotalSettingsElement.innerHTML;
        totalCost4 += costPerSms;
        totalSettingsElement.innerHTML = totalCost4.toFixed(2);
    }
    else if (callChecked.checked == true) {
        // alert(callChecked.value);
        callTotal += costPerCall;
        callTotalSettingsElement.innerHTML = callTotal.toFixed(2);
        totalCost4 += costPerCall;
        totalSettingsElement.innerHTML = totalCost4.toFixed(2);
    }
    else if(smsChecked.checked == false && callChecked.checked == false ) 
    {callTotalSettingsElement.innerHTML = 0;
        smsTotalSettingsElement.innerHTML = 0;
        totalSettingsElement.innerHTML = 0;
    }

    if (totalCost4 >= warning && totalCost4 < critical) {
        totalSettingsElement.className = "warning";
    }
    else if (totalCost4 >= critical) {
        totalSettingsElement.className ="danger";
    } 
    else if (totalCost4 > 0 && critical == 0 && warning == 0) {
        totalSettingsElement.className = "black";
    }
    else if (totalCost4 > 0 && totalCost4 < critical  && totalCost4 < warning ) {
        totalSettingsElement.className = "black";
    }
   
  console.log(totalCost4)

};

updateSettingsElement.onclick = function () {
    costPerCall = parseFloat(callCostSettingElement.value);
    costPerSms = parseFloat(smsCostSettingElement.value);
    warning = parseFloat(warningLevelSettingElement.value)
    critical = parseFloat(criticalLevelSettingElement.value)
    if (totalCost4 >= warning && totalCost4 < critical) {
        totalSettingsElement.className = "warning";
    }
    else if (totalCost4 >= critical) {
        totalSettingsElement.className ="danger";
    }
    else if (totalCost4 > 0 && totalCost4 < critical  && totalCost4 < warning ) {
        totalSettingsElement.className = "black";
    }
};

billWithSettingsButtonElement.addEventListener("click", helloYeu);




;

// * add the appropriate value to the call / sms total***
// * add the appropriate value to the overall total***
// * add nothing for invalid values that is not 'call' or 'sms'.****
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color. 