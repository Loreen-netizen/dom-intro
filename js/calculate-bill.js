//get a reference to the calculate button


const calculateBtnElement = document.querySelector(".calculateBtn");



//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal	");
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
        var billTotal = 0;
        //loop over all the bill items
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
            if (parseFloat(billTotal.toFixed(2)) >= 50) {
                // adding the danger class will make the text red
                billTotalElement.classList.add("danger");
            }
            else if (parseFloat(billTotal.toFixed(2)) >= 30) {
                billTotalElement.classList.add("warning");
            }
        }
        
        //round to two decimals
        var roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;
        
    }

calculateBtnElement.addEventListener('click', calculateBtnClicked);
    
