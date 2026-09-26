class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        // console.log(nums)
        let result = [];

        for(let i=0; i<nums.length -2; i++) {
            if(nums[i] >0) break; // if >0 then get out of the loop

            if(i>0 && nums[i] === nums[i-1]) continue; // prevent the duplicate

            let left = i+1;
            let right = nums.length -1;

            while(left < right) {
                let sum = nums[i] + nums[left] + nums[right]

                if(sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    // remove duplicate left
                    while(left < right && nums[left] === nums[left+1] ) left++;
                    // remove duplicate right
                    while(left < right && nums[right] === nums[right -1]) right--;
                    left++;
                    right--;
                }
                else if(sum >0 ) {
                    right--;
                } 
                else {
                    left++;
                }
            }
        }
        return result;
    }
}
