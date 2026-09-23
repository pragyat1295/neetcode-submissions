class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length %2 !== 0) return false;
        let st = [];
        const pairs = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        }

        for(let i=0; i<s.length; i++) {
            const char = s[i];
            if(pairs[char] !== undefined) {
                const topElement = st.pop();
                if(topElement !== pairs[char]) return false;
            }
            else {
                st.push(char);
            }
        }
        return !st.length;
    }
}
