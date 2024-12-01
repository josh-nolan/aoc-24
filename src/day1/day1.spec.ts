import day1 from './index';

describe('On Day 1', () =>{
    it(`calculateListDifference works`, ()=>{
        expect(day1.calcTotalDistance([1,2,3], [1,2,3])).toEqual(0);
        expect(day1.calcTotalDistance([3,4,2,1,3,3], [4,3,5,3,9,3])).toEqual(11);
    }),

    it(`calcSimilarity works`, ()=>{
        expect(day1.calcSimilarity([1,2,3], [1,2,3])).toEqual(6);
        expect(day1.calcSimilarity([3,4,2,1,3,3], [4,3,5,3,9,3])).toEqual(31);
    })

});