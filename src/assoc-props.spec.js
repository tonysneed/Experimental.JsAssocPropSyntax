describe('Associative properties', function () {
    
    it('gets properties by name', function () {
        
        var person = {
            name: 'tony'
        };
        
        var name = person['name'];
        
        expect(name).toEqual('tony');
    });
});