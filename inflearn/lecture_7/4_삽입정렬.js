/*
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다.
각 자연수는 정수형 범위 안에 있습니다.

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.

▣ 입력예제
6
11 7 5 6 10 9

▣ 출력예제
5 6 7 9 10 11
 */
function solution1 (arr) {
  let answer = arr
  for (let key = 0; key < answer.length - 1; key++) {
    for (let j = key + 1; j > 0; j--) {
      if (answer[j - 1] > answer[j]) [answer[j - 1], answer[j]] = [answer[j], answer[j - 1]]
      else break
    }
  }
  return answer
}

let arr1 = [11, 7, 5, 6, 10, 9]
console.log(solution1(arr1))  // 5 6 7 9 10 11

// -----------------

function solution2 (arr) {
  let answer = []
  answer.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i])
        break
      }
    }
  }
  return answer
}

let arr2 = [11, 7, 5, 6, 10, 9]
// console.log(solution2(arr2))  // 5 6 7 9 10 11
