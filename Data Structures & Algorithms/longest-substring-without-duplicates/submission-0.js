class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        // let right = 0;
        let maxSubMap = new Map();
        let maxSubLength = 0;

        for(let right =0; right < s.length; right++) {
            let char = s[right];
            if(maxSubMap.has(char)) {
                left = Math.max(left, maxSubMap.get(char) +1);
            }
            maxSubMap.set(char, right);
            maxSubLength = Math.max(maxSubLength, right-left +1);
        }

        return maxSubLength

    }
}
