describe('this test should show the total bill for the data provided call, sms, call, sms, sms', function(){
    it('returns the total price for data R7.45,totalPhoneBill("call, sms, call, sms, sms")', function(){
    assert.equal("R7.45",totalPhoneBill("call, sms, call, sms, sms"))
    assert.equal("R3.40",totalPhoneBill("call,sms"))
    assert.equal("R0.65",totalPhoneBill("sms"))

    });
});