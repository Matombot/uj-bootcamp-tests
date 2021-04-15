describe('this test should  check if a day passed is weekday' , function(){
    it('should return false, isWeekDay("sunday")' , function(){
    assert.equal(false,isWeekday("Sunday"))
    assert.equal(true,isWeekday("Monday"))
    assert.equal(false,isWeekday("Wednesday"))
   assert.equal(false,isWeekday("Sarturday"))
    });
});