function twoSum(nums: number[], target: number): number[] {
  const orderedNums = nums.map((item, index) => ({ item, index })).sort((a, b) => a.item - b.item)
  let [left, right] = [0, nums.length - 1]
  
  while (orderedNums[left].item + orderedNums[right].item !== target) {
    if (orderedNums[left].item + orderedNums[right].item < target) {
      left++
    } else {
      right--
    }
  }
  return [orderedNums[left].index, orderedNums[right].index]
}

console.log(twoSum([2,7,11,15], 9))
