/*
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다.
부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

▣ 입력예제
bacaAacba
abc

▣ 출력예제
3

출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
 */

/**** 내가 한거 ****/
function isAnagram (str1, str2) {
  const strMap = new Map()
  for (const s1 of str1) {
    if (strMap.has(s1)) strMap.set(s1, strMap.get(s1) + 1)
    else strMap.set(s1, 1)
  }

  for (const s2 of str2) {
    if (!strMap.has(s2) || strMap.get(s2) === 0) return false
    strMap.set(s2, strMap.get(s2) - 1)
  }

  return true
}

function my_solution (str, baseStr) {
  let answer = 0
  const anagramList = []

  // anagramList 만들기
  let tempIdx = 0
  let tempStr = ''
  for (let idx = 0; idx < str.length - baseStr.length + 1; idx++) {
    tempIdx = idx
    tempStr = str[idx]
    while (tempIdx < (idx + baseStr.length - 1)) {
      tempIdx++
      tempStr += str[tempIdx]
    }
    anagramList.push(tempStr)
  }

  //anagram 여부 판별
  for (const anagram of anagramList) {
    if (isAnagram(anagram, baseStr)) answer++
  }

  return answer
}


/**** solution ****/

function solution (str, baseStr) {
  let answer = 0
  let strMap = new Map()
  let baseMap = new Map()

  for (const s of baseStr) {
    const mapValue = baseMap.has(s) ? baseMap.get(s) + 1 : 1
    baseMap.set(s, mapValue)
  }

  let baseLength = baseStr.length - 1
  for (let i = 0; i < baseLength; i++) {
    const mapValue = strMap.has(str[i]) ? strMap.get(str[i]) + 1 : 1
    strMap.set(str[i], mapValue)
  }

  // Two Pointers
  let leftIdx = 0
  for (let rightIdx = leftIdx; rightIdx < str.length; rightIdx++) {
    if(rightIdx < baseLength) continue

    const mapValue = strMap.has(str[rightIdx]) ? strMap.get(str[rightIdx]) + 1 : 1
    strMap.set(str[rightIdx], mapValue)

    if (isAnagramByMap(strMap, baseMap)) answer++

    strMap.set(str[leftIdx], strMap.get(str[leftIdx]) - 1)
    if (strMap.get(str[leftIdx]) === 0) strMap.delete(str[leftIdx])
    leftIdx++
  }

  return answer
}

function isAnagramByMap (map1, map2) {
  if (map1.size !== map2.size) return false
  for (const [key, cnt] of map1) {
    if (!map2.has(key) || map2.get(key) !== cnt) return false
  }
  return true
}

let a = "bacaAacba"
let b = "abc"
console.log(solution(a, b)) // 3
