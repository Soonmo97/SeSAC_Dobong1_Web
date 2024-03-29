/* 1. for문 */
/*
  for(변수 선언과 초기값 할당; 조건식(어디까지 증가?감소?); 증감식) {
    반복할 코드;
  }
*/

for (let i = 0; i < 10; i++) {
  console.log('안녕', i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕하세요${i}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 감소
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 덧셈
let n = 11;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`1 ~ ${n}(n) 까지의 덧셈 = ${sum}`);

/* 배열과 함께 사용하는 for문 */
let fruits = ['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log('I like', fruits[i]);
}
// fruits.forEach((str) => console.log(str));

// 배열 요소의 합 구하기
let numsArr = [99, 99, 98, 85, 77];
let sum2 = 0;
for (let i = 0; i < numsArr.length; i++) {
  sum2 += numsArr[i];
}
console.log(sum2);

/* 2. while 문 */

/*
초기화식;
while(조건식) {
  조건이 참일 때 실행할 문장;
  증감식;
}
*/

let n2 = 1; // while 초기화 식
while (n2 <= 5) {
  // 조건식
  console.log(n2); // 실행문
  n2++; // 증감식
}

n2 = 10;
while (n2 > 4) {
  console.log(n2);
  n2--;
}

// 1 ~ 10 짝수만 출력 > while문 이용
n2 = 1;
while (n2 <= 10) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2++;
}

// 10부터 1까지 감소하는데 홀수만 출력
n2 = 10;
while (n2 > 0) {
  if (n2 % 2 === 1) {
    console.log(n2);
  }
  n2--;
}
console.log('-----');
let b = 0;
while (true) {
  console.log(b);
  b++;
  if (b > 10) break;
}

console.log('=====');
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  // 1%2 === 0 일 때 반복하지 않고 다음 반복으로 넘김
  sum3 += i;
}
console.log(sum3);

// let n3 = 0;
// while (confirm('계속 진행할까요?')) {
//   n3++;
//   alert(`${n3}번째 alert 창`);
// }

let num = Number(prompt('10000까지의 숫자 중 하나 입력'));

if (num >= 0 && num <= 10000) {
  for (let i = 1; i <= num; i++) {
    if (i % 13 === 0 && i % 2 === 0) {
      console.log(`입력받은 ${num}까지 13의 배수이면서 홀수인 숫자 ${i}`);
    }
  }
} else console.log('0 ~ 10000사이의 숫자를 입력해주세요.');

console.log('-------');

for (let i = 2; i < 10; i++) {
  console.log(`---${i}단 ---`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log('-----');

let num2 = 0;
let sum4 = 0;
while (num2 <= 100) {
  if (num2 % 2 === 0 || num2 % 5 === 0) {
    sum4 += num2;
  }
  num2++;
}
console.log(`2 또는 5의 배수 총합 ${sum4}`);
