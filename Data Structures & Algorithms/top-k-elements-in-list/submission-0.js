class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        for(const num of nums){
            frequencyMap.set(num, (frequencyMap.get(num) || 0) +1 );
        }
        let mostFrequentElements = Array.from({length: nums.length +1}, ()=>[]);

        // 1: [1]  , 2: [4] , 3: [3]
        for(let [num, count] of frequencyMap) {
            mostFrequentElements[count].push(num)
        }
        const result = [];

        for(let count = nums.length; count >=1; count--) {
            for(const num of mostFrequentElements[count]) {
                result.push(num)
                if(result.length === k) return result;
            }

        }

        return result

    }
}
