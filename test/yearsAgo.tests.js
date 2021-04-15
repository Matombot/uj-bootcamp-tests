describe('this test should takes in a year and calculate how many years ago that year is from the current year.' , function(){
    it('returns the number of years ago 3, yearsAgo("2018")' , function(){
    assert.equal(20,yearsAgo("2001"))
    assert.equal(3,yearsAgo("2018"))
    assert.equal(5,yearsAgo("2016"))
    assert.equal(0,yearsAgo("2021"))

    });
});