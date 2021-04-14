describe('this test should check if regno isFromBellville' , function(){
    it('should return true if it is CY else false' , function(){
    assert.equal(false,isFromBellville("Ci"))
    assert.equal(true,isFromBellville("CY"))

    });
});