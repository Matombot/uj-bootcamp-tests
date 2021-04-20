describe('this test takes a car registration number as a parameter and returns the town the car is from', function(){
    it('returns the town the car is from Someother place!,("CL")', function(){
    assert.equal("Bellville",fromWhere("CY"))
    assert.equal("Paarl",fromWhere("CJ"))
   assert.equal("Cape Town",fromWhere("CA"))
    });
});