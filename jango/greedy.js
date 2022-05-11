/*
[문제]
준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다.
(1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)
[출력]
첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.

[입력1]
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
[출력1]
6

[입력2]
10 4790
1
5
10
50
100
500
1000
5000
10000
50000
[출력2]
12
 */

/*
1. 아이디어
- 동전을 저장한 뒤, 반대로 뒤집음
- 동전 for 문
  - 동전 사용갯수 추가
  - 동전 사용한만큼 K값 추가
2. 시간복잡도
- for 문: O(N)
3. 자료구조
- 동전 금액: number[]
- 동전 사용 갯수: number
- 남은 금액: number

4. Tip
- 실전 문제에서, 그리디로 푸는 문제임을 생각하기 어려움
- 그리디 사용이유 설명 중요함. 반례찾기 연습 필요함.
 */

function solution (K, coinList) {
  let coinUseCnt = 0
  let amount = K
  coinList.reverse()

  for (const coin of coinList) {
    coinUseCnt += Math.floor(amount / coin)
    amount = amount % coin
  }

  console.log(coinUseCnt)
}

const coinList1 = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]
const K1 = 4200
solution(K1, coinList1)

const coinList2 = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]
const K2 = 4790
solution(K2, coinList2)
