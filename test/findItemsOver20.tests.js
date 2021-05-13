describe('this test find items over 20 and provide the items', function(){
    it('returns item[{name : "pears", qty : 37},{name : "bananas", qty : 27}]; ("20")', function(){
   assert.deepEqual([],findItemsOver20([]))
    });
         it('returns item[ {name : "pears", qty : 37},{name : "bananas", qty : 27},{"name":"apples","qty":40}],("20")', function () {
            assert.deepEqual([], findItemsOver([{ "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }]))
        });

});
