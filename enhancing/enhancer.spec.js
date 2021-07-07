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


describe('succeed()', () => {
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

describe('fail()', () => {
    it('If enhancement is less than 15, the durability should be decreased by 5', () => {
        //arrange
        const failedItem = {name: 'crash', durability: 60, enhancement: 11}
        const expected = {name: 'crash', durability: 55, enhancement: 11}
        const below15Fail = fail(failedItem)
        //assert
        expect(below15Fail).toEqual(expected) 
        });
        it("if enhancement is 15 or more decrease durability by 10 ", () => {
            const failedItem2 = {name: 'crash', durability: 60, enhancement: 15}
            const expected = {name: 'crash', durability: 50, enhancement: 15}
            const fifteenPlus = fail(failedItem2)
            //assert
            expect(fifteenPlus).toEqual(expected) 
        })
        it("if enhancement is greater than 16, decrease enhancement by 1", () => {
            const failedItem3 = {name: 'crash', durability: 60, enhancement: 18}
            const expected = {name: 'crash', durability: 50, enhancement: 17}
            const sixteenPlus = fail(failedItem3)
            //assert
            expect(sixteenPlus).toEqual(expected)
        })

})