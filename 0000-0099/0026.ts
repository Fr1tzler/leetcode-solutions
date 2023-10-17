function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) {
    return 1
  }
  let left = 0
  for (let right = 1; right < nums.length; right++) {    
    if (nums[left] === nums[right]) {
      continue
    }
    left++
    nums[left] = nums[right]
  }
  return left + 1
}

const nums = [1, 1, 2]
const res = removeDuplicates(nums)
console.log(res, nums)
