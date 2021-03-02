let nums = [1,2,3,4,5]
let k = 3

//easiest way to solve the problem but not most efficient
//pops num off the end of the array and unshifts it to the front

var rotate = function(nums, k) {
    k = k % nums.length;

    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
};

//reverse method uses O(1) extra space

var rotate = function(nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);
};
 var reverse = function(nums, start, end) {
     while (start < end) {
         let temp = nums[start];
         nums[start] = nums[end];
         start++;
         end--;
     }
 }

