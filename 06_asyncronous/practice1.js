const { rejects } = require('assert');
const { resolve } = require('path');
const { exitCode } = require('process');

function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

// call -> back -> hell 순서로 실행
// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는 ' + message);
//     });
//   });
// });
// 콜백 -> then ~ catch
function call(name) {
  return new Promise((resolve, rejects) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, rejects) => {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, rejects) => {
    setTimeout(function () {
      resolve('promise hell');
    }, 1000);
  });
}

// call('kim')
//   .then((name) => {
//     console.log(name + '반가워');
//     return back('back');
//   })
//   .then((txt) => {
//     console.log(txt + '을 실행했구나');
//     return hell('promise hell');
//   })
//   .then((message) => {
//     console.log('여기는 ' + message);
//   })
//   .catch((err) => {
//     console.log(err + '에러 발생');
//   });

async function execute() {
  await call('kim');
  console.log('kim 반가워');
  await back();
  console.log('back을 실행했구나');
  await hell();
  console.log('여긴 async hell');
}
execute();

// 콜백 -> async await로
