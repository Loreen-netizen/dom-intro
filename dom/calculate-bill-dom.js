const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotalElement = document.getElementById("billTotal");
const billStringField = document.querySelector(".billString");

let calculateBtnInstance = calculateBtnClicked();

function calculateBtnHasBeenClicked(){
    alert(billStringField.value)
    
    calculateBtnInstance.cutString(String(billStringField.value));
    calculateBtnInstance.sumCalls(String(billStringField.value));
    calculateBtnInstance.sumSms(String(billStringField.value));
    calculateBtnInstance.sumTotals();
    
    
    addClass();

    billTotalElement.innerHTML =  calculateBtnInstance.sumTotals();        
};

var addClass = function (){
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("critical");
    billTotalElement.classList.add(calculateBtnInstance.updateClasses());
    billTotalElement.classList.add(calculateBtnInstance.updateClasses());
};

calculateBtnElement.addEventListener('click', calculateBtnHasBeenClicked);

