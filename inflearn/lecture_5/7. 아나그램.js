/*
Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세 요. 아나그램 판별시 대소문자가 구분됩니다.

▣ 입력설명
첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

▣ 출력설명
두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

▣ 입력예제 1
AbaAeCe
baeeACA
▣ 출력예제 1
YES

▣ 입력예제 2
abaCC
Caaab
▣ 출력예제 2
NO
 */
function my_solution (str1, str2) {
  if (str1.length !== str2.length) return 'NO'

  const anagramA = str1.split('').sort().join('')
  const anagramB = str2.split('').sort().join('')
  return anagramA === anagramB ? 'YES' : 'NO'
}

function solution (str1, str2) {
  let anagramMap = new Map()
  for (const s of str1) {
    if (anagramMap.has(s)) anagramMap.set(s, anagramMap.get(s) + 1)
    else anagramMap.set(s, 1)
  }

  for (const s of str2) {
    if (!anagramMap.has(s) || anagramMap.get(s) === 0) return 'NO'
    anagramMap.set(s, anagramMap.get(s) - 1)
  }

  return 'YES'
}

let a = "AbaAeCe"
let b = "baeeACA"
console.log(solution(a, b)) // YES

let c = "abaCC"
let d = "Caaab"
console.log(solution(c, d)) // NO
