describe('this test should count how many from that town and display the number.' , function(){
    it('returns the number of registration numbers from the town,2 countAllFromTown("CJ 123 456,CL 876 895,CJ 456 765","CJ")', function(){
    assert.equal(2,countAllFromTown("CY 123 456,CL 876 895,CK 456 765,CA 345 673,CJ 123,CL 876","CL"))
   assert.equal(3,countAllFromTown("CL 876 895,CK 456 765,CL 345 673,CL 123,CJ 876","CL"))
   assert.equal(0,countAllFromTown("CY 123 456,CK 456 765,CA 345 673,CK 123","CL"))

    });
});