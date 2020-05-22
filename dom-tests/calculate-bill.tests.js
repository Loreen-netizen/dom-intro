describe("calculateBtnClicked" , function(){
it ( "should cut a string of calls and sms's and return an array", function(){
    let calculateBtn = calculateBtnClicked ();
    calculateBtn.cutString("call sms call" );
    assert.deepEqual( ["call", "sms", "call"] , calculateBtn.cutString())

});

it ("should add R2.75 for each new call ", function(){
    let calculateBtn2 = calculateBtnClicked();
    calculateBtn2.ifCallAdd ();
    calculateBtn2.ifCallAdd();
    calculateBtn2.ifCallAdd();
    assert.equal( 8.25, calculateBtn2.sumCalls())

});
it ("should add R0.75 for each new sms ", function(){
    let calculateBtn3 = calculateBtnClicked();
    calculateBtn3.ifSmsAdd ();
    calculateBtn3.ifSmsAdd ();
    calculateBtn3.ifSmsAdd ();
    calculateBtn3.ifSmsAdd ();
    assert.equal( 3, calculateBtn3.sumSms())

});

it ("should sum up calls and sms's and give total", function(){
    let calculateBtn4 = calculateBtnClicked();
    calculateBtn4.ifCallAdd();
    calculateBtn4.ifSmsAdd();
    calculateBtn4.ifCallAdd();
    calculateBtn4.ifSmsAdd();

    calculateBtn4.sumTotals(7);
    assert.equal( 7, calculateBtn4.sumTotals())

});


it ("should show total in Orange if greater than R20", function(){
    let calculateBtn5 = calculateBtnClicked();
    calculateBtn5.warningLevel("warning");
    assert.equal( "warning", calculateBtn5.warningLevel())


});

it ("should show total in Red if greater than R30", function(){
    let calculateBtn6 = calculateBtnClicked();
    calculateBtn6.criticalLevel("critical");
    assert.equal( "critical", calculateBtn6.criticalLevel())


});

});