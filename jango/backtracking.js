/*
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
- 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

[입력]
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

[출력]
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다.
중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
수열은 사전 순으로 증가하는 순서로 출력해야 한다.

[입력 1]
3 1
[출력 1]
1
2
3

[입력 2]
4 2
[출력 2]
1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3


[입력 3]
4 4
[출력 2]
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1
 */

/*
1. 아이디어
- 백트래킹 재귀함수 안에서, for 문을 돌면서 숫자 선택(방문여부 확인)
- 재귀함수에서 M 개를 선택할경우 print

2. 시간복잡도
- N! > 가능

3. 자료구조
- 결과값 저장: number[]
- 방문여부: boolean[]
 */

function solution (n, m) {
  let answer = []
  const visited = Array.from({ length: n + 1 }, () => false)

  function recursive (num) {
    if (num === m) {
      console.log(answer)
      return
    }
    for (let i = 1; i < n + 1; i++) {
      if (!visited[i]) {
        visited[i] = true
        answer.push(i)
        recursive(num + 1)

        visited[i] = false
        answer.pop()
      }
    }
  }

  recursive(0)
}

const n1 = 3, m1 = 1
// solution(n1, m1)

const n2 = 4, m2 = 2
solution(n2, m2)

const n3 = 4, m3 = 4
// solution(n3, m3)
