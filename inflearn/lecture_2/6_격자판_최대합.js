/*
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
▣ 출력설명
최대합을 출력합니다.

▣ 입력예제
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
▣ 출력예제
155
 */
function solution (arr) {
  let answer = 0
  let colSum = 0, // 행의 합
    rowSum = 0  // 열의 합

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      colSum += arr[i][j]   // 행
      rowSum += arr[j][i]   // 열
    }
    if (answer < Math.max(colSum, rowSum)) answer = Math.max(colSum, rowSum)
    colSum = rowSum = 0
  }

  // 대각선의 합
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i]
    sum2 += arr[i][arr.length - 1 - i]
  }
  if (answer < Math.max(sum1, sum2)) answer = Math.max(sum1, sum2)
  sum1 = sum2 = 0

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
]
console.log(solution(arr))  // 155
