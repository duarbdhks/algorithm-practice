/*
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
격자판의 1은 벽이고, 0은 통로이다. 격 자판의 움직임은 상하좌우로만 움직인다.
미로가 다음과 같다면

출발 0 0 0 0 0 0
0   1 1 1 1 1 0
0   0 0 1 0 0 0
1   1 0 1 0 1 1
1   1 0 0 0 0 1
1   1 0 1 1 0 0
1   0 0 0 0 0 도착

위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.

▣ 입력설명
7*7 격자판의 정보가 주어집니다.

▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.

▣ 입력예제
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0

▣ 출력예제
8
 */
function solution (board) {
  let answer = 0;
  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]
  const xLimit = board[0].length - 1
  const yLimit = board.length - 1
  const path = []

  function dfs (x, y) {
    if (x === xLimit && y === yLimit) {
      answer++
      console.log(path)
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        if (
          nx >= 0 && nx <= xLimit &&
          ny >= 0 && ny <= yLimit &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1
          path.push(`(${nx}, ${ny})`)
          dfs(nx, ny)
          board[nx][ny] = 0
          path.pop()
        }
      }
    }
  }

  board[0][0] = 1
  path.push(`(0, 0)`)
  dfs(0, 0)

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];

console.log(solution(arr));
