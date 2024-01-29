const obj = `{
  "model": "아이오닉",
  "price": 50000000,
  "isElectric": true,
  "option": ["사이드미러", "스마트 스크린"]
}`;

console.log(obj);
console.log(obj.model); // undefined
console.log(typeof obj);

// JSON.parse(실제 제이슨 데이터): json(string) -> object
const carInfo = JSON.parse(obj);
console.log('**********object************');
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

// JSON.strigify(객체): object > json(string)
console.log('*****json*****');
const carJson = JSON.stringify(carInfo);
console.log('json1', carJson);
const carJson2 = JSON.stringify(carInfo, null, 5);
console.log('json2', carJson2);
console.log(carJson2.model); // undefined
