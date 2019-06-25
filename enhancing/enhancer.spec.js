const {repair, succeed, fail} = require('./enhancer.js');

// test away!



describe('repair()', () => {
    it('restore durability to 100', () => {
        //arrange
        const repairItem = {name: 'crash', durability: 25, enhancement: 10}
        const expected = {name: 'crash', durability: 100, enhancement: 10}
        //act
        const repaired = repair(repairItem)
        //assert
        expect(repaired).toEqual(expected)

    })

})


describe('succeed', () => {
    it('enhance item by 1', () => {
        const enhanceItem = {name: 'crash', durability: 100, enhancement: 5}
        const expected = {name: 'crash', durability: 100, enhancement: 6}
        const enhanced = succeed(enhanceItem)
        expect(enhanced).toEqual(expected)  
    })
    it('does not enhance pass 20', () => {
        const enhanceItem = {name: 'crash', durability: 100, enhancement: 20}
        const expected = {name: 'crash', durability: 100, enhancement: 20}
        const enhanced = succeed(enhanceItem)
        expect(enhanced).toEqual(expected)  

    })
    
})

// describe('the fail function', () => {
//     it('modifiy item according to enhancement failure', () => {

    
// })