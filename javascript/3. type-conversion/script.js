let val;

// Number to string
val = String(111); //
val = String(8 + 4);
// Bool to string
val = String(false);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); 안에 문자의 길이를 나타낸다

// toString()
val = (5).toString();
val = (true).toString();

// String to number   위에서 다른타입들을 string으로 바꿨다면 밑에서는 다른 변수를 넘버로 바꾸는것이다.
val = Number('1');
val = Number(true);
// true 는 넘버로 타입 변경시 1로 표기, false,null 등은 0으로 표기된다.
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);
// 위에 배열같은 경우는 넘버로 변경시 콘솔창에서 확인해보면  NaN이라고 표기되는데 NaN = Not a Number 즉 숫자가 아니다라는 뜻

val = parseInt('111.40');
//      ParseInt 사용시 소수점이 빠진 정수로 표시
val = parseFloat('111.40');
//      ParseFloat 사용시 소수점까지 모두 표기되어 나온다

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

//  23  타입은 string으로 나옴