const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotalElement = document.getElementById("billTotal");
const billStringField = document.querySelector(".billString");
function calculateBtnClicked(){
    
    var billString = billStringField.value;
    var billItems = billString.split(",");
    var billTotal1 = 0;

    for (var i=0;i<billItems.length;i++){
         var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal1 += 2.75;
        }
        else if (billItem === "sms"){
                billTotal1 += 0.75;
        }
    }
    
    addClass(billTotal1);

    var roundedBillTotal1 =  parseFloat(billTotal1.toFixed(2));
    billTotalElement.innerHTML = roundedBillTotal1;        
};

var addClass = function (billTotal1){
    if (parseFloat(billTotal1.toFixed(2)) >= 30) {
       
        billTotalElement.className = "danger";
    }
    else if (parseFloat(billTotal1.toFixed(2)) >= 20) {
        billTotalElement.className = "warning";
    }
    else if  (parseFloat(billTotal1.toFixed(2)) > 0 < 20 ) {
        billTotalElement.className = "";
    }
};

calculateBtnElement.addEventListener('click', calculateBtnClicked);

