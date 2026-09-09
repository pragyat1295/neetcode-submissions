class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let start = 0;
        let end = cleaned.length-1;

        while(start <= end) {
            if(cleaned[start] !== cleaned[end]) return false;
            start++;
            end--;
        }
        return true;
    }
}
