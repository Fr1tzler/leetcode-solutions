function isValid(s: string): boolean {
  const stack: string[] = []
  for (const char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char)
      continue
    }
    if (char === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false
      }
      stack.pop()
    }
    if (char === ']') {
      if (stack[stack.length - 1] !== '[') {
        return false
      }
      stack.pop()
    }
    if (char === '}') {
      if (stack[stack.length - 1] !== '{') {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('([{}])')) // true
console.log(isValid('([{])}')) // false
console.log(isValid('(')) // false
console.log(isValid('}')) // false