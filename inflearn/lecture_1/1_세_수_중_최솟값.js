// 1. 세 수 중 최솟값
function solution (a, b, c) {
  let answer = (a < b) ? a : b
  answer = (c < answer) ? c : answer
  return answer
}

console.log(solution(6, 5, 11))
