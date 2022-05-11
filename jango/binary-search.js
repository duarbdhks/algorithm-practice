/*
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
[입력]
첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다.
다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다.
다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다.
다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다.
모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.
[출력]
M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.

[입력1]
5
4 1 5 2 3
5
1 3 7 9 5
[출력1]
1
1
0
0
1
 */

/*
1. 아이디어
- M 개를 확인한다. 연속하다는 특징? => 불가
- 정렬해서 이진탐색가능?
  - N 개의 수 먼저정렬
  - M 개를 for 문 돌면서, 이진탐색
  - 이진탐색 안에서 마지막 데이터 찾으면 1출력, 아니면 0 출력
2. 시간복잡도
- N 개의 수 정렬: O(N*logN)
- M 개를 N개 중에서 이진탐색: O(M*logN)
- O((N+M)logN) = 2e5 * 20 = 4e6 => 가능
3. 자료구조
- N, 탐색 대상의 범위: number[]
- M, 탐색 하려는 수: number[]
 */
function binarySearch (startIdx, endIdx, target) {
  let list = []
  if (startIdx === endIdx) {
    //  로직
    return
  }

  let middleIdx = (startIdx + endIdx) / 2
  if (list[middleIdx] < target) {
    binarySearch(middleIdx + 1, endIdx, target)
  } else {
    binarySearch(startIdx, middleIdx, target)
  }
}

function solution (nList, mList) {
  nList.sort()

  function search (startIdx, endIdx, target) {
    if (startIdx === endIdx) {
      if (nList[startIdx] === target) {
        console.log(1)
      } else {
        console.log(0)
      }
      return
    }

    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    if (nList[middleIdx] < target) {
      search(middleIdx + 1, endIdx, target)
    } else {
      search(startIdx, middleIdx, target)
    }
  }

  for (const mData of mList) {
    search(0, nList.length, mData)
  }
}

const nList1 = [4, 1, 5, 2, 3]
const mList1 = [1, 3, 7, 9, 5]
solution(nList1, mList1)

