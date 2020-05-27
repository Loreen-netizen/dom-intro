describe("calculateBtnClicked" , function(){
it ( "should cut a string of calls and sms's and return an array", function(){
    let calculateBtn = calculateBtnClicked ();
    calculateBtn.cutString("call,sms,call");
    assert.deepEqual( ["call", "sms", "call"] , calculateBtn.cutString("call,sms,call" ))

});
it ("should add R2.75 for each new call ", function(){
    let calculateBtn2 = calculateBtnClicked();
    assert.equal( 2.75, calculateBtn2.addCallOrSms("call"))

});
it ("should add R0.75 for each new sms ", function(){
    let calculateBtn3 = calculateBtnClicked();
    assert.equal( 0.75, calculateBtn2.addCallOrSms("sms"))

});

// it ("should add R2.75 for each new call ", function(){
//     let calculateBtn2 = calculateBtnClicked();
//     calculateBtn2.cutString ("call,call,call");
//     // calculateBtn2.cutString();
//     // calculateBtn2.cutString();
//     assert.equal( 8.25, calculateBtn2.addCallOrSms())

// });
it ("should add R0.75 for each new sms ", function(){
    let calculateBtn3 = calculateBtnClicked();
    calculateBtn3.cutString ();
    calculateBtn3.cutString ();
    calculateBtn3.cutString ();
    calculateBtn3.cutString ();
    assert.equal( 3, calculateBtn3.addCallOrSms())

});

it ("should sum up calls and sms's and give total", function(){
    let calculateBtn4 = calculateBtnClicked();
    calculateBtn4.cutString();
    calculateBtn4.cutString();
    calculateBtn4.cutString();
    calculateBtn4.cutString();

    calculateBtn4.sumTotals(7);
    assert.equal( 7, calculateBtn4.sumTotals())

});


it ("should show total in Orange if greater than R20", function(){
    let calculateBtn5 = calculateBtnClicked();
    calculateBtn5.updateClasses();
    assert.equal( "warning", calculateBtn5.updateClasses(25))


});

it ("should show total in Red if greater than R30", function(){
    let calculateBtn6 = calculateBtnClicked();
    calculateBtn6.updateClasses();
    assert.equal( "critical", calculateBtn6.updateClasses(33))


});

});