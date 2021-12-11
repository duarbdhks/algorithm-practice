/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제
teachermode e
▣ 출력예제
1 0 1 2 1 0 1 2 2 1 0
 */
function solution (s, t) {
  // let answer = [];
  // let minList = []
  // const strList = s.split('')
  // for (let i = 0; i < strList.length; i++) {
  //   for (let j = 0; j < strList.length; j++) {
  //     if (strList[j] === t) minList.push(i > j ? i - j : j - i)
  //   }
  //   answer.push(Math.min(...minList))
  //   minList = []
  // }
  // return answer

  const answer = []
  let pivot = s.length
  for (const str of s) {
    if (str === t) {
      pivot = 0
      answer.push(0)
    } else {
      pivot++
      answer.push(pivot)
    }
  }

  pivot = s.length
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      pivot = 0
    } else {
      pivot++
      answer[i] = Math.min(answer[i], pivot)
    }
  }

  return answer
}

let str = "teachermode"
console.log(solution(str, 'e'))  // 1 0 1 2 1 0 1 2 2 1 0
