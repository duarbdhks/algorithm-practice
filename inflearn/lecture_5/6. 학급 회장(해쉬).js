/*
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

▣ 출력설명
학급 회장으로 선택된 기호를 출력합니다.

▣ 입력예제
15
BACBACCACCBDEDE

▣ 출력예제
C
 */
function my_solution (votingStr) {
  let votingCounter = {}
  for (const vote of votingStr) {
    if (votingCounter[vote] === undefined) votingCounter[vote] = 0
    votingCounter[vote]++
  }

  const voteSortResult = Object.entries(votingCounter).sort((a, b) => b[1] - a[1])
  return voteSortResult[0][0]
}


function solution (votingStr) {
  let answer = null
  const voteCountMap = new Map()
  for (const vote of votingStr) {
    if (voteCountMap.has(vote)) {
      const currentVoteCnt = voteCountMap.get(vote)
      voteCountMap.set(vote, currentVoteCnt + 1)
    } else {
      voteCountMap.set(vote, 1)
    }
  }

  let tempMax = 0
  for (const [candidate, cnt] of voteCountMap) {
    if (cnt > tempMax) {
      tempMax = cnt
      answer = candidate
    }
  }
  return answer
}

let str = "BACBACCACCBDEDE"
console.log(solution(str))  // C
