describe("radioButtonBill", function(){

    it ("should charge R2.75 for each new call", function(){
        var radioButtonBillFunction = radioButtonBill();
        radioButtonBillFunction.forEachCallAdd();
          assert.equal(2.75, radioButtonBillFunction.newCallsTotal() )
      
      });

      it ("should update calls total to R11 for 4 calls made", function(){
        var radioButtonBillFunction2 = textInputBill();
        radioButtonBillFunction2.forEachCallAdd();
        radioButtonBillFunction2.forEachCallAdd();
        radioButtonBillFunction2.forEachCallAdd();
        radioButtonBillFunction2.forEachCallAdd();
          assert.equal(11, radioButtonBillFunction2.newCallsTotal() )
      
      });
      it ("should charge R0.75 for each new sms", function(){
        var radioButtonBillFunction3 = radioButtonBill();
        radioButtonBillFunction3.forEachSmsAdd();
          assert.equal(0.75, radioButtonBillFunction3.newSmsTotal() )
      
      });

      it ("should update sms total to R4.50 for 6 sms' sent", function(){
        var radioButtonBillFunction4 = textInputBill();
        radioButtonBillFunction4.forEachSmsAdd();
        radioButtonBillFunction4.forEachSmsAdd();
        radioButtonBillFunction4.forEachSmsAdd();
        radioButtonBillFunction4.forEachSmsAdd();
        radioButtonBillFunction4.forEachSmsAdd();
        radioButtonBillFunction4.forEachSmsAdd();
          assert.equal(4.50 , radioButtonBillFunction4.newSmsTotal() )
      
      });

      it ("should update overall total to R 9.75 for 3 calls and 2 sms'", function(){
    
        var radioButtonBillFunction5 = textInputBill();
        radioButtonBillFunction5.forEachSmsAdd();
        radioButtonBillFunction5.forEachSmsAdd();
        radioButtonBillFunction5.forEachCallAdd();
        radioButtonBillFunction5.forEachCallAdd();
        radioButtonBillFunction5.forEachCallAdd();
        assert.equal(9.75 , radioButtonBillFunction5.finalTotal() )
    });

    it ("should change class color to orange when warning level of R30 is reached", function(){
        var textBillFunction6 = textInputBill();
        textBillFunction6 .warningLevel("warning");
        assert.equal( "warning", textBillFunction6 .warningLevel())
    });
    it ("should change class color to red when critical level of R50 is reached", function(){
    
        var textBillFunction7 = textInputBill();
        textBillFunction7.warningLevel("warning");
        assert.equal( "warning", textBillFunction7.warningLevel())
    });
})