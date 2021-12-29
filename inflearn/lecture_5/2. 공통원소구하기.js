/*
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로 그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다. 각 집합의 원소는 1,000,000,000 이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제
5
13952
5
32578

▣ 출력예제
235
 */
// 내가 쓴 답
// function solution2 (arr1, arr2) {
//   const answer = []
//   const list = (arr1.length >= arr2.length) ? arr1 : arr2
//   const tempArr = (arr1.length >= arr2.length) ? new Set([...arr2]) : new Set([...arr1])
//
//   for (const item of list) {
//     if (tempArr.has(item)) answer.push(item)
//   }
//   answer.sort()
//
//   return answer
// }

function solution (arr1, arr2) {
  const answer = []
  arr1.sort()
  arr2.sort()

  let p1 = 0, p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1])
      p1++
    } else {
      if (arr1[p1] < arr2[p2]) p1++
      else p2++
    }
  }

  return answer
}

let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))
