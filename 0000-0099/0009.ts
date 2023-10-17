function isPalindrome(x: number): boolean {
  if (x === 0) {
    return true
  }
  if (x % 10 === 0 || x < 0) {
    return false
  }
  const digits: number[] = []
  while (x) {
    digits.push(x % 10)
    x = Math.floor(x / 10)
  }
  
  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome(0))
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))