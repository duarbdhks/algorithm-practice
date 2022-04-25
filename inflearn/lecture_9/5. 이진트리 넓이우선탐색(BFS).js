/*
아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.

      1
 2        3
4 5      6  7

넓이 우선 탐색 : 1 2 3 4 5 6 7
 */
function solution () {
  let answer = "";
  let queue = []

  queue.push(1)
  while (queue.length > 0) {
    let vertex = queue.shift()
    answer += vertex + ' '
    for (const nextVertex of [vertex * 2, vertex * 2 + 1]) {
      if (nextVertex > 7) continue
      queue.push(nextVertex)
    }
  }

  return answer;
}

console.log(solution()) // 1 2 3 4 5 6 7
