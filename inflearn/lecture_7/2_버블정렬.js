/*
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.

▣ 입력예제
6
13 5 11 7 23 15

▣ 출력예제
5 7 11 13 15 23
 */
function solution (arr) {
  let answer = [...arr]
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      const currentValue = answer[j]
      const nextValue = answer[j + 1]
      if (nextValue < currentValue) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]]
      }
    }
  }
  return answer
}

let arr = [13, 5, 11, 7, 23, 15]
console.log(solution(arr))  // 5 7 11 13 15 23

