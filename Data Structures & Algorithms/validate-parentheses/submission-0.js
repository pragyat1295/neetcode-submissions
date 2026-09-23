class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 1) return false;
        let st = [];
        let i = 1;
        st.push(s[0]);
        while (i < s.length) {
            let top = st.length - 1;
            if (
                (st[top] === "(" && s[i] === ")") ||
                (st[top] === "{" && s[i] === "}") ||
                (st[top] === "[" && s[i] === "]")
            ) {

                st.pop();
            }
            else {
                st.push(s[i]);
            }
            i++;
        }
        return !st.length;
    }
}
