// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElement = document.querySelectorAll(".billItemTypeWithSettings");
var hello = function () {

    alert("i have been changed")
};

billItemTypeWithSettingsElement.forEach(function (button) {
    console.log(button);
    button.addEventListener("change", hello);
});


// get refences to all the settings fields
var callCostSettingElement = document.getElementById("callSetting");
console.log(callCostSettingElement.value);
var smsCostSettingElement = document.getElementById("smsSetting");
console.log(smsCostSettingElement.value);
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
var totalSettingsElement = document.getElementById("overallTotal");
//add an event listener for when the 'Update settings' button is pressed
var helloYeu = function(){ 
    alert("i have been clicked") };
updateSettingsElement.addEventListener("click", helloYeu);
//add an event listener for when the add button is pressed
// in the event listener get the value from the billItemTypeRadio radio buttons
var callChecked = document.getElementById("calls");
console.log(callChecked);

var smsChecked = document.getElementById("smses");
console.log(smsChecked);

    var callTotal=0;
    var smsTotal=0;
    var totalCost4 = 0;
    costPerCall = 0;
    costPerSms = 0;
var helloYeu = function(){
    

    if (smsChecked.checked == true) {
        alert(smsChecked.value);
        smsTotal += costPerSms;
        smsTotalSettingsElement.innerHTML = smsTotal;
        // totalSettingsElement.innerHTML += smsTotalSettingsElement.innerHTML;
        totalCost4 += costPerSms;
        totalSettingsElement.innerHTML = totalCost4;
    }
    else if (callChecked.checked == true){
        alert(callChecked.value);
        callTotal+= costPerCall;
        callTotalSettingsElement.innerHTML= callTotal;
        totalCost4 += costPerCall;
        totalSettingsElement.innerHTML = totalCost4;
    }
    else{callTotalSettingsElement.innerHTML = 0.00;
        smsTotalSettingsElement.innerHTML= 0.00;
        totalSettingsElement.innerHTML= 0.00;}
    
};

     billWithSettingsButtonElement.addEventListener("click", helloYeu);


     updateSettingsElement.onclick = function(){
        costPerCall = callCostSettingElement.value;
        costPerSms = smsCostSettingElement.value;
     }
;

// * add the appropriate value to the call / sms total***
// * add the appropriate value to the overall total***
// * add nothing for invalid values that is not 'call' or 'sms'.****
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color. 