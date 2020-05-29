describe("calculateBtnClicked" , function(){
it ( "should cut a string of calls and sms's and return an array", function(){
    let calculateBtn = calculateBtnClicked ();
    assert.deepEqual( ["call", "sms", "call"] , calculateBtn.cutString("call,sms,call" ));
    this.timeout(5000);
});

it ("should add R2.75 for each new call ", function(){
    let calculateBtn2 = calculateBtnClicked();
    let array = calculateBtn2.cutString("call , sms");
    assert.equal( 3.5, calculateBtn2.splitString(array));
    this.timeout(5000);
});
it ("should charge R2.25 for 3 sms' ", function(){
    let calculateBtn3 = calculateBtnClicked();
    let array1 = calculateBtn3.cutString("sms ,sms,sms");
    assert.equal( 2.25, calculateBtn3.splitString(array1))
    this.timeout(5000);
});

it ("should charge R7 for 2 calls and 2 sms' ", function(){
    let calculateBtn4 = calculateBtnClicked();
    let array2 = calculateBtn4.cutString("call,call,sms,sms");
    assert.equal( 7, calculateBtn4.splitString(array2))
    this.timeout(5000);
});

it ("should show total in Orange if greater than R20", function(){
    let calculateBtn5 = calculateBtnClicked();
    calculateBtn5.updateClasses();
    assert.equal( "warning", calculateBtn5.updateClasses(25))
    this.timeout(5000);

});

it ("should show total in Red if greater than R30", function(){
    let calculateBtn6 = calculateBtnClicked();
    calculateBtn6.updateClasses();
    assert.equal( "critical", calculateBtn6.updateClasses(33))
    this.timeout(5000);

});

});