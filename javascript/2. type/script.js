let foo = 42 // foo가 숫자
foo = 'bar' // foo가 이제 문자열
foo = true // foo가 이제 불리언

// 원시 타입 
// 문자열 String
const name = "Han"
// 숫자 Number 
const age = 30
// Boolean
const hasJob = true
// null 
const car = null;
// Undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입 - Objects 
// Array 배열
const hobbies = ['walking', 'books']
//  Object literal 객체 리터럴
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(hasJob);
console.log(typeof hobbies);
console.log(Array.isArray(address));
