describe('this test should show how much is a transport fee per shift.' , function(){
    it('returns the price for each shift "free" ,transportFee("night")' , function(){
    assert.equal("R20",transportFee("morning"))
    assert.equal("R10",transportFee("afternoon"))
   assert.equal("free",transportFee("night"))

    });
});