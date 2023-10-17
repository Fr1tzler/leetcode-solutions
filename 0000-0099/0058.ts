function lengthOfLastWord(s: string): number {
  return s.split(' ').filter(Boolean).slice(-1)[0].length
}

console.log(lengthOfLastWord('   fly me   to   the moon  '))
