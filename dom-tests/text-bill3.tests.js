describe("textInputBill", function(){
it ("should charge R2.75 for each new call", function(){
  var textBillFunction = textInputBill();
  textBillFunction.forEachCallAdd();
    assert.equal(2.75, textBillFunction.newCallsTotal() )

});
it ("should update calls total to R8.25 for 3 calls made", function(){
    var textBillFunction2 = textInputBill();
    textBillFunction2.forEachCallAdd();
    textBillFunction2.forEachCallAdd();
    textBillFunction2.forEachCallAdd();
      assert.equal(8.25, textBillFunction2.newCallsTotal() )
  
  });


it ("should charge R0.75 for each new sms", function(){
    var textBillFunction3 = textInputBill();
    textBillFunction3.forEachSmsAdd();
      assert.equal(0.75, textBillFunction3.newSmsTotal() )

});
it ("should update calls total to R3.75 for 5 calls made", function(){
    var textBillFunction4 = textInputBill();
    textBillFunction4.forEachSmsAdd();
    textBillFunction4.forEachSmsAdd();
    textBillFunction4.forEachSmsAdd();
    textBillFunction4.forEachSmsAdd();
    textBillFunction4.forEachSmsAdd();
      assert.equal(3.75 , textBillFunction4.newSmsTotal() )

});
it ("should update overall total to R7 for 2 calls and 2 sms'", function(){
    
    var textBillFunction5 = textInputBill();
    textBillFunction5.forEachSmsAdd();
    textBillFunction5.forEachSmsAdd();
    textBillFunction5.forEachCallAdd();
    textBillFunction5.forEachCallAdd();

    assert.equal(7 , textBillFunction5.finalTotal() )
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

});