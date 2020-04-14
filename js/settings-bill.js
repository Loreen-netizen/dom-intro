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
var callCostSettingElement = document.querySelector(".u-full-width.callCostSetting");
var smsCostSettingElement = document.querySelector(".u-full-width.smsCostSetting");
var warningLevelSettingElement = document.querySelector(".u-full-width.warningLevelSetting ");
var criticalLevelSettingElement = document.querySelector("u-full-width.criticalLevelSetting");


//get a reference to the add button
var billWithSettingsButtonElement = document.querySelector(".button-primary.billWithSettings");
console.log(billWithSettingsButtonElement);
//get a reference to the 'Update settings' button
var updateSettingsElement = document.querySelector(".button-primary.updateSettings");
console.log(updateSettingsElement);
// create a variables that will keep track of all the settings
// var totalSettingsElement = document.querySelector(".totalSettings");

// create a variables that will keep track of all three totals.
var totalSettingsElement = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed
var helloYeu = function(){ 
    alert("i have been clicked") };
updateSettingsElement.addEventListener("click", helloYeu);
//add an event listener for when the add button is pressed
var smsChecked = document.querySelector("smses");
console.log(smsChecked);
var callChecked = document.querySelector("#call");
var helloYeu = function(){
    var smsChecked = document.getElementById("sms");
console.log(smsChecked);
     alert(smsChecked) };
     billWithSettingsButtonElement.addEventListener("click", helloYeu);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
