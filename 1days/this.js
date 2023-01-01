console.log(this); // global?
console.log(this === module.exports)

function a() {
    console.log(this === global);
}
a();

// 전역스코프의 this는 global이 아니다.
// 함수 안의 this는 global이다.