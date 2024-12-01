import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        const lists = this.parseInput(input);
        const answer = this.calcTotalDistance(lists.left, lists.right);
        return answer.toString();
    }

    solveForPartTwo(input: string): string {
        const lists = this.parseInput(input);
        return this.calcSimilarity(lists.left, lists.right).toString();
    }

    parseInput(input: string): { left: number[], right: number[]} {
        const lines = input.split('\n');
        var leftList: number[] = [];
        var rightList = [];
        for(var i = 0; i < lines.length; i++) {
            const rowSplit = lines[i].split('  ');
            leftList.push(Number.parseInt(rowSplit[0]));
            rightList.push(Number.parseInt(rowSplit[1]));
        }
        return {
            left: leftList, 
            right: rightList
        };
    }

    calcTotalDistance(leftList:number[], rightList:number[]):number {
        leftList.sort();
        rightList.sort();
        let totalDistance = 0;
        for(let i = 0; i <leftList.length; i++) {
            var indexDifference = Math.abs(leftList[i] - rightList[i]);
            totalDistance = totalDistance + indexDifference;
        }

        return totalDistance;
    }

    calcSimilarity(leftList:number[], rightList:number[]):number {
        const rightMap = new Map<number, number>();

        for(let i = 0; i < rightList.length; i++) {
            if (!rightMap.has(rightList[i])) {
                rightMap.set(rightList[i], 1);
            } else {
                var val = rightMap.get(rightList[i]);
                if (val != undefined) {
                    rightMap.set(rightList[i], val + 1);
                }
            }
        }

        var totalSimilarityScore = 0;
        for(let i = 0; i < rightList.length; i++) {
            var occurances = rightMap.get(leftList[i]);
            console.log(i, leftList[i], occurances);
            if (occurances) {
                totalSimilarityScore = totalSimilarityScore + (leftList[i] * occurances);
            }
        }

        return totalSimilarityScore;
    }
}

export default new Day1;