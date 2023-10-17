function lcp(a: string, b: string): string {
  if (!a || !b) {
    return ''
  }
  let i = 0
  for ( ; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) {
      break
    }
  }
  return a.slice(0, i)
}

function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((acc, cur) => lcp(acc, cur), strs[0])
}

console.log(longestCommonPrefix(['flower','flow','flight']) === 'fl')
console.log(longestCommonPrefix(['dog','racecar','car']) === '')