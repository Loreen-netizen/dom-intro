//get a reference to the calculate button


const calculateBtnElement = document.querySelector(".calculateBtn");



//get a reference to the billTotal element
const billTotalElement = document.getElementById("billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(){
    // alert(billStringField.value);
    // alert("billstring");
        // get the string entered in the textArea
        var billString = billStringField.value;
        
        //split the string
        var billItems = billString.split(",");
        // a variable for the total phone bill.
        var billTotal1 = 0;
        //loop over all the bill items
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal1 += 2.75;
            }
            else if (billItem === "sms"){
                billTotal1 += 0.75;
            }
            if (parseFloat(billTotal1.toFixed(2)) >= 50) {
                // adding the danger class will make the text red
                billTotalElement.className = "danger";
            }
            else if (parseFloat(billTotal1.toFixed(2)) >= 30) {
                billTotalElement.className = "warning";
            }
            else if  (parseFloat(billTotal1.toFixed(2)) > 0 < 30 ) {
                billTotalElement.className = "black";
            }
        }
        
        //round to two decimals
        var roundedBillTotal1 =  parseFloat(billTotal1.toFixed(2));
        billTotalElement.innerHTML = roundedBillTotal1;
        
    }

calculateBtnElement.addEventListener('click', calculateBtnClicked);
    
