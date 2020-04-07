// get a reference to the sms or call radio buttons
var billItemTypeRadioElemnt = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioBillAddBtnElemnt = document.querySelector(".radioBillAddBtn")
var callTotalTwoElemnt = document.querySelector(".callTotalTwo")
var smsTotalTwoElemnt = document.querySelector(".smsTotalTwo")

//create a variable that will keep track of the total bill
var totalTwoElemnt = document.querySelector(".totalTwo")
//add an event listener for when the add button is pressed
function billTypeAndTotals(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;

    totalTwoElemnt.innerHTML = billItemType;
    alert("hello");}
    // billItemType will be 'call' or 'sms'
    
}
//in the event listener get the value from the billItemTypeRadio radio buttons

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
