class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const seqSet = new Set(nums);
        // {2,20,4,10,3,5}

        for(const num of seqSet) {
            if(!seqSet.has(num-1)){
                let current = num;
                let length = 1;

                while(seqSet.has(current+1)) {
                    length++;
                    current++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
