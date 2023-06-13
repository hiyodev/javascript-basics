/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  let array = new Array(nums.length + 1);
  let result = new Array(k).fill(0);

  for (let i = 0; i < array.length; ++i) {
    array[i] = [];
  }

  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  for (const [value, frequency] of map) {
    array[frequency].push(value);
  }

  let index = array.length - 1;
  console.log(array[3].length);

  return result;
};

topKFrequent([1, 1, 1, 2, 2, 2], 3);
