/*
https://www.acmicpc.net/problem/1926

[입력]
첫째 줄에 도화지의 세로 크기 n(1 ≤ n ≤ 500)과 가로 크기 m(1 ≤ m ≤ 500)이 차례로 주어진다.
두 번째 줄부터 n+1 줄 까지 그림의 정보가 주어진다.
(단 그림의 정보는 0과 1이 공백을 두고 주어지며, 0은 색칠이 안된 부분, 1은 색칠이 된 부분을 의미한다)

6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1

[출력]
첫째 줄에는 그림의 개수, 둘째 줄에는 그 중 가장 넓은 그림의 넓이를 출력하여라. 단, 그림이 하나도 없는 경우에는 가장 넓은 그림의 넓이는 0이다.

4
9
 */

/*
1. 아이디어
- 2중 for 문 => 값 1 && 방문x => bfs
- bfs 돌면서 개수 +1, 최댓값을 갱신

2. 시간복잡도
- BFS: O (V+E)
- V: 500 * 500
- E: 4 * 500 * 500
- V+E = 5 * 500 * 500 => 2억보다 작음 => 가능!

3. 자료구조
- 그래프 전체 지도: number[][]
- 방문: boolean[][]
- Queue(BFS)
*/

function solution (list) {
  let pictureCnt = 0
  let maxPictureValue = 0
  // listY - 높이, listX - 너비
  let listY = list.length, listX = list[0].length
  let checkList = Array.from({ length: listY }, () => {
    return Array.from({ length: listX }, () => false)
  })

  function BFS (y, x) {
    let result = 1
    const directionX = [0, 1, 0, -1]
    const directionY = [1, 0, -1, 0]
    const queue = [{ x, y }]
    while (queue.length) {
      const { x: ex, y: ey } = queue.pop()
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [ex + directionX[i], ey + directionY[i]]
        if (
          0 <= nx && nx < listX &&
          0 <= ny && ny < listY
        ) { // list 의 좌표 범위 체크
          if (!checkList[ny][nx] && list[ny][nx] === 1) {// 방문하지 않았고, 값이 1 이라면
            result++
            checkList[ny][nx] = true
            queue.push({ x: nx, y: ny })
          }
        }
      }
    }

    return result
  }

  for (let y = 0; y < listY; y++) {
    for (let x = 0; x < listX; x++) {
      if (list[y][x] === 1 && !checkList[y][x]) {
        // 방문함 표기
        checkList[y][x] = true
        // 그림 갯수 +1
        pictureCnt++
        // bfs -> 그림 크기 구해
        const pictureValueToBFS = BFS(y, x)
        // 가장 큰 그림값을 구해
        maxPictureValue = Math.max(maxPictureValue, pictureValueToBFS)
      }
    }
  }

  return `그림의 개수: ${pictureCnt} // 가장 넓은 그림의 넓이: ${maxPictureValue}`
}

const list = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
]
console.log(solution(list))
