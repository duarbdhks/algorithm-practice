// 5. 최솟값 구하기.txt
/*
[문제]
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

[입력설명]
첫 번째 줄에 7개의 수가 주어진다.
[출력설명]
첫 번째 줄에 가장 작은 값을 출력한다.

[입력예제]
5 3 7 11 2 15 17
[출력예제]
2
 */
function solution_worst (arr) {
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
  }
  return min
}

function solution (arr) {
  // return Math.min.apply(null, arr)
  return Math.min(...arr)
}

let arr = [5, 7, 1, 3, 2, 9, 11]
console.log(solution(arr))  // 1
