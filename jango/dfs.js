/*
각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오

[입력]
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

[출력]
각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.
7
8
9
 */

/*
1. 아이디어
- 2중 for 문 => 값 1 && 방문X => DFS
- DFS 찾은 값들을 저장후 정력해서 출력

2. 시간복잡도
- DFS: O(V+E)
- V: 25 * 25  - E: 4 * 25 * 25
- V+E: 5 * 25 * 25 => 2억보다 작음 => 가능!

3. 자료구조
- 그래프 저장: number[][]
- 방문여부: boolean[][]
- 결과 값: number[]
 */

function solution (list) {
  let answer = []
  const listY = list.length, listX = list[0].length
  const directionX = [0, 1, 0, -1], directionY = [1, 0, -1, 0]
  let eachCnt = 0
  const visited = Array.from({ length: listY }, () => {
    return Array.from({ length: listX }, () => false)
  })

  function DFS (y, x) {
    eachCnt++
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + directionY[i], x + directionX[i]]
      if (0 <= ny && listY > ny && 0 <= nx && listX > nx) {
        if (list[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = true
          DFS(ny, nx)
        }
      }
    }
  }

  for (let y = 0; y < listY; y++) {
    for (let x = 0; x < listX; x++) {
      if (!visited[y][x] && list[y][x] === 1) {
        // 방문 체크
        visited[y][x] = true
        // DFS 로 크기 구하기
        eachCnt = 0
        DFS(y, x)
        // 크기 결과를 answer 에 추가
        answer.push(eachCnt)
      }
    }
  }

  answer.sort()
  return answer
}

const list = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
]
console.log(solution(list))
