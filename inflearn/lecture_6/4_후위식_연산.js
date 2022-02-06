/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제
352+*9-

▣ 출력예제
12

- 후위표기법: 연산자를 피연산자 뒤에 표기하는 방법 => 3*(5+2)-9
1. 괄호처준다 => ((3*(5+2))-9)
2. 괄호 안에 있는 연산자를 바로 옆 괄호로 빼준다. => ((3(52)+)*9)-
3. 모든 괄호 제거한다. => 352+*9-

- 스택: LIFO, Last In First Out
 */
function my_solution (postfixStr) {
  let stack = []
  let result = 0

  for (const v of postfixStr) {
    if (/[0-9]/.test(v)) {
      stack.push(+v)
    } else {
      let operator = v;
      let right = stack.pop()
      let left = (stack.length > 0) ? stack.pop() : result
      result = calculate(left, right, operator)
    }
  }

  return result;
}

function calculate (left, right, operator) {
  let result
  switch (operator) {
    case '+':
      result = left + right
      break
    case '-':
      result = left - right
      break
    case '*':
      result = left * right
      break
    case '/':
      if (right !== 0) result = left / right
      break
  }
  return result
}


// Good, 이게 더 낫다
function solution (postfixStr) {
  let answer
  let stack = []
  for (const s of postfixStr) {
    if (!isNaN(+s)) {
      stack.push(Number(s))
    } else {
      const right = stack.pop()
      const left = stack.pop()
      if (s === '+') stack.push(left + right)
      if (s === '-') stack.push(left - right)
      if (s === '*') stack.push(left * right)
      if (s === '/' && right !== 0) stack.push(left / right)
    }
  }

  answer = stack[0]
  return answer
}

let str = '352+*9-'
console.log(solution(str))  // 12
