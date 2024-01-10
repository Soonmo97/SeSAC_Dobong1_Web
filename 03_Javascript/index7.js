// 문자열에서 사용 가능한 속성/메소드
/*
  - length
  - toUpperCase, trim, indexOf
    slice, replace, replaceAll, repeat, split
*/

let str1 = 'Strawbery Moon';
let str2 = '    Strawbery Moon  ';

// 문자열 인덱싱
console.log(str1[5]);
console.log(str1[5] + str1[0] + str1[8]);

console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = 'Happy Birthday~';
let userId = '    user123   ';

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim().length);
console.log(userId.trim());

let mango = 'applemango';
console.log(mango.indexOf('apple')); // 0
console.log(mango.indexOf('mango')); // 5
console.log(mango.indexOf('e')); // 4

// 문자열에 포함되지 않은 문자열이 매개변수로 들어가면
// -1 반환
console.log(mango.indexOf('x')); // -1

// slice
console.log(mango.slice(5)); // magno
console.log(mango.slice(3, 6)); // lem
console.log(mango.slice(-1)); // o
console.log(mango.slice(-4)); // ango
// console.log(mango)
// slice 해도 실제 문자열은 변하지 않음

let msg2 = 'Wow~ It is so amazing!!!';
console.log(msg2.replace('Wow', 'Hey'));
console.log(msg2.replaceAll('o', 'O'));

let date = '2024.1.10';
// 2024-1-10
date = date.replaceAll('.', '-');
console.log(date);

console.log('abc'.repeat(10));

console.log(date.split('-'));
console.log(date.split(''));

console.log('----------배열----------');
// 배열 관련 메소드
/* 

  - length (속성)
  - push, pop, unshift, shift, indexOf, join, reverse
  - includes, map, forEach, find, filter
  - for ~ of (함수 아님)
*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster'];

arr1[5] = 6;
arr1[7] = 7;
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6); // 배열 뒤에서 부터 추가
arr1.push(7);
arr1.push(10);
arr1.pop(); // 배열 뒤에서 부터 제거 밑 값 리턴
arr1.pop();
console.log(arr1);

// 배열 앞에서부터 추가
arr2.unshift('cat');
console.log(arr2);

// 배열 앞에서부터 제거
arr2.shift();
console.log(arr2);

/* includes(매개변수 한개 - 배열의 요소가 들어감)
  - 매개변수로 들어간 요소가 배열에 있으면 true, 없으면 false
*/
console.log(arr2.includes('cat'));
console.log(arr2.includes('quakka'));

/* indexOf - answkdufdml indexOf와 동일
  (입력한 값의 index 출력, 없으면 -1 반환)
*/
console.log(arr2.indexOf('quakka'));

/* reverse - 배열의 순서를 뒤집어줌
    실제 배열이 변경
*/
arr1.reverse();
console.log(arr1);

/* join - 문자열의 split 메소드와 반대
    배열을 문자열로 변경(병합)
*/

// let str1 = 'strawbery moon';
str1 = str1.split('');
console.log(str1);
str1 = str1.join('+');
console.log(str1);

/* 반복문 - for of & forEach */
let arr3 = [5, 6, 7, 8, 9];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log('--- for of---');
for (let number of arr3) {
  console.log(number);
}
for (let alphabet of alphabets) {
  console.log(alphabet);
}

console.log('--- forEach ---');
// for each
/*
  배열.forEach(function(element[, index, array]){

  })
*/
arr3.forEach(function (element, index, arr) {
  console.log(element, index, arr);
});

// filter
// return 이후 조건을 만족하는 요소들을 모아서 배열로 반환(return 반드시 생성)
// let arr2 = ['quakka', 'puppy', 'rabbit', 'hamster'];
// 1. 함수 표현식
let six = arr2.filter(function (word) {
  return word.length === 6;
});
// 2. 화살표 함수 & return ver.
let six2 = arr2.filter((word) => {
  return word.length === 6;
});
// 3. 화살표 함수 & return 없는 ver.(중괄호 없어야 성립)
let six3 = arr2.filter((word) => word.length === 6);
console.log(arr2);
console.log(six);
console.log(six2);
console.log(six3);

// map
// 배열 내의 모든 요소에 대한 함수 호출한 결과를 모아서 새로운 배열로 반환
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function (element) {
  return element * 3;
});
console.log(multiArr);

// find
// 배열에서 특정 조건을 만족하는 첫 번째 '요소' 반환
let findResult = multiArr.find(function (element) {
  return element > 10;
});
console.log(findResult);

let arrEx = [];
for (let i = 1; i <= 100; i++) {
  arrEx.push(i);
}
// console.log(arrEx);
// for
let exSum = 0;
for (let i = 0; i < arrEx.length; i++) {
  exSum += arrEx[i];
}
console.log(exSum);

exSum = 0;
// for of
for (let el of arrEx) {
  exSum += el;
}
console.log(exSum);
exSum = 0;

// forEach
arrEx.forEach(function (el) {
  exSum += el;
});

console.log(exSum);

let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];

let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

let same = fruits1.filter(function (fruit) {
  return fruits2.includes(fruit);
});

let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
console.log(same);
console.log(diff);

// 주말 평일
let today = new Date();
// console.log(today);

switch (today.getDay()) {
  case 0:
  case 6:
    console.log('주말입니다.');
    break;
  default:
    console.log('평일입니다.');
    break;
}

// 랜덤 숫자 뽑기
let ranNum = Math.floor(Math.random() * 11);
console.log(ranNum);
