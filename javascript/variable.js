/** undefined vs null
 * null은 존재하지않는 값, 비어있는 값, 알 수 없는 값을 나타낼 때 사용한다.
 * undefined는 값이 할당되지 않은 상태를 나타낸다.
*/
let nullCheck = null; //null 을 반환
let undefinedCheck; // undefined을 반환

console.log(nullCheck);
console.log(undefinedCheck);


console.log("--------------------------------------");


/**
 * typeof 연산자
 * 인수의 자료형을 반환한다.
 */
console.log(typeof undefined); // undefined
console.log(typeof 0) // number
console.log(typeof 10n) //bigInt
console.log(typeof true) // boolean
console.log(typeof "foo") // String
console.log(typeof Symbol("id")) // Symbol
console.log(typeof Math) // Object
console.log(typeof null) // Object


console.log("--------------------------------------");


/**
 * 형 변환
 * String => String(value)
 * Number => Number(str)
 * Bolean => Boolean(value)
 */
console.log(typeof 1);
console.log(typeof String(1));
console.log(typeof "10");
console.log(typeof Number("10")); // undefined -> NaN, null -> 0, true and false -> 1과 0, string -> 문자열의 처음과 끝 공백이 제거됩니다. 공백 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패한다면 NaN이 반환합니다.
console.log(typeof "true");
console.log(typeof Boolean("true")); // 0, null, undefined, NaN, "" -> false, 나머지 -> true