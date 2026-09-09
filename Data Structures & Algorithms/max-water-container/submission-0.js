class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let start = 0;
        let end = heights.length -1;

        while(start <= end) {
            let currentArea = 0;
            let width = end - start;
            let height = 0;
            if(heights[start] < heights[end]) {
                height = heights[start];
                start++;
            } else {
                height = heights[end];
                end--;
            }
            currentArea = height * width;
            maxArea = Math.max(maxArea, currentArea)
        }

        return maxArea;

    }
}
