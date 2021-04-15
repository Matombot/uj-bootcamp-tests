describe('this test should count the reg no and display the number' , function(){
    it('returns the number of registration numbers("3")' , function(){
    assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"))
    //assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328,CJ 890328"))
    assert.equal(5,countRegNumber("CA 182736,CY 523519,CJ 812328,CJ 812328,CJ 34768"))

    });
});