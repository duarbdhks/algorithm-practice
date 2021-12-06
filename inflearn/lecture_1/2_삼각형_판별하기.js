// 2. 삼각형 판별하기
// a + b > c(가장 긴 변 c)
function solution (a, b, c) {
  let longLinear = (a > b) ? a : b
  longLinear = (longLinear > c) ? longLinear : c
  let otherLinear = a + b + c - longLinear

  return (otherLinear <= longLinear) ? 'NO' : 'YES'
}

console.log(solution(13, 33, 17)) // NO
console.log(solution(6, 7, 11)) // YES
