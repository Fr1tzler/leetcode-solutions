function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1]
  } 
  const prevRow = getRow(rowIndex - 1)
  const result = [1]
  for (let i = 1; i < prevRow.length; i++) {
    result.push(prevRow[i] + prevRow[i - 1])
  }
  result.push(1)
  return result
}

console.log(getRow(3))
