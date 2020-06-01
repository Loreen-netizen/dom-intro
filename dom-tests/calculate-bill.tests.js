describe("calculateBtnClicked" , function(){

    it ("should charge R0.75 one sms ", function(){
        let calculateBtn2 = calculateBtnClicked();
        assert.equal( 0.75, calculateBtn2.addCallOrSms("sms"))
        
    });
    it ("should charge R2.75 one call ", function(){
        let calculateBtn = calculateBtnClicked();
        assert.equal( 2.75, calculateBtn.addCallOrSms("call"))
        
    });
    
 it ("should charge R7 for 2 calls and 2 sms' ", function(){
    let calculateBtn3 = calculateBtnClicked();
    assert.equal( 7, calculateBtn3.addCallOrSms("call,call,sms,sms"))
    
});
it ("should charge R14 for 4 calls and 2 sms' ", function(){
    let calculateBtn4 = calculateBtnClicked();
    assert.equal( 14, calculateBtn4.addCallOrSms("call,call,sms,sms,call,call,sms,sms"))
    
});


});