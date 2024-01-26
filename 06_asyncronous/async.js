let product, price;
execute();
function goMart() {
  console.log('마트에 들어가서 어떤 음료를 살지 고민..');
}

function pickDrink() {
  // 3초 동안 고민

  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      console.log('고민 끝~');
      product = '콜라';
      price = 2000;
      resolve('구매완료!!');
      // rejects('실패');
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function execute() {
  goMart();
  await pickDrink();
  pay();
}
