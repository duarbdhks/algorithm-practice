/*
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
      1
  2       3
 4  5    6  7

전위순회 출력 : 1 2 4 5 3 6 7
중위순회 출력 : 4 2 5 1 6 3 7
후위순회 출력 : 4 5 2 6 7 3 1
 */
function solution (n) {
  const answer = {
    pre_order: '',
    in_order: '',
    post_order: '',
  }

  function dfs (v) {
    if (v > 7) {
      return
    } else {
      answer.pre_order += v // 전위 순회
      dfs(v * 2)  // 왼쪽 노드
      // console.log(v)  // 중위 순회
      answer.in_order += v  // 중위 순회
      dfs(v * 2 + 1)  // 오른쪽 노드
      answer.post_order += v  // 후위 순회
    }
  }

  dfs(n)
  return answer
}

console.log(solution(1))
