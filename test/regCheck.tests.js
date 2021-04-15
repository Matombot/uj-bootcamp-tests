describe('this test should  check if a registration number is for GP, L, EC, MP registration plates' , function(){
    it('should return false, isBellville("CY 189-012","CY")' , function(){
    assert.equal(false,regCheck("CY 189-012", "CY"))
    assert.equal(true,regCheck("DV 23 NB GP","GP"))
    assert.equal(false,regCheck("CY 189-012", "ND"))
    assert.equal(false,regCheck("DV 23 LP GP","MP"))
    });
});