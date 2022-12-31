# nodejs_study
this is a repository for learning node.js


## Index
1. 자바스크립트
2. 노드의 정의
3. 노드의 특징
4. 실행콘텍스트, 이벤트루프, 프로토타입이 핵심
5. 파일이 실행될 때 호출 스택에 Anonymous가 쌓인다. -> 파일이 끝나면 Anonymous가 사라진다.
6. console.log


## 자바스크립트
### 자바스크립트란?
- 자바스크립트란, 웹 브라우저 또는 노드와 같이 자바스크립트 엔진이라 불리는 특별한 프로그램이 들어있는 디바이스에서 동작하는 언어이다.
  
### 자바스크립트가 브라우저에서 할 수 있는 일
- 페이지에 새로운 HTML을 추가하거나 기존 HTML, 스타일을 수정할 수 있다.
- 마우스 클릭이나 포인터의 움직임, 키모드 키 눌림 등과 같은 사용자 행동에 반응.
- 네트워크를 통해 원격 서버에 요청을 보내거나, 파일 다운로드, 업로드
- 




### 이벤트 루프
호출스택
백그라운드
태스크 큐
메모리

### 자바스크립트 실행 과정
```javascript
function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0);
    new Promise((resolve) => {
        resolve('hi');
    })
    .then(console.log);
    oneMore();
}

setTimeout(run, 5000);
```
   
1. 파일이 실행되면 메모리에 oneMore()함수와 run()함수를 선언한다.
2. 호출스택에 Anonymous가 쌓인다.
3. 호출스택에 setTimeout(run, 5000) 쌓인다.
4. 호출스택의 setTimeout(run, 5000) 실행되며, 사라지고 백그라운드에 타이머(5, run)이 쌓인다.
5. 호출스택에 Anonymous가 사라진다.
6. 백그라운드에서는 실제 5초가 지나면 타이머(5, run)을 없애고, 태스크 큐에 run()함수를 전달한다.
7. 이벤트 루프는 호출스택이 비어있는 것을 확인하고 태스크 큐에 있는 run()함수를 호출 스택에 쌓는다.
8. 호출스택에 run()을 실행시킨다.
9. 호출스택에 console.log('run run')을 쌓고 실행시키며 사라지고 콘솔에는 run run이 작성된다.
10. 호출스택에 setTimeout(() => {console.log('wow')},0)이 쌓이고 실행시키며 사라지고 이벤트 루프는 익명 함수를 백그라운드로 옮긴다.
11. 호출스택에 new Promise((resolve) => {resolve('hi');})을 쌓고 실행시키고 사라진다. 이후 then이 쌓이고 이벤트 루프는 then을 백그라운드로 옮긴다.
12. 호출스택에 oneMore()를 쌓고 console.log('one more')를 쌓고 다시 쌓여있는 순서대로 실행시켜 콘솔에는 one more가 작성된다.
13. oneMore()가 사라지고 차례대로 run()이 사라진다.
14. 백그라운드에 존재하던 익명함수와 promise함수는 태스크 큐로 옮겨가고 호출 스택이 빌 때 까지 대기한다.
15. 이때, Promise함수는 setTimeout함수보다 중요도가 높아 실제로 setTimeout이 먼저 큐에 쌓였더라도 Promise함수가 먼저 호출스택으로 이동한다.
16. 이후 호출스택에서 Promise를 실행시킨 이후 태스크 큐에서 setTimeout이 호출스택으로 이동 후에 실행되고 모든 동작이 종료된다.
17. 실제 콘솔에 찍힌 데이터는 아래와 같다.
```
run run
one more
hi
wow
```

### var vs const vs let
1. var는 function단위의 변수 const는 블럭단위의 변수
2. const는 상수를 선언할 때 사용 대신 오브젝트 내의 다른 변수를 변경하는 것은 가능 let은 변경 가능한 함수
3. const를 우선적으로 선언 이후 값을 변경해야하는 일이 생길 때 let으로 변경하는 것이 좋다.


### 템플릿 문자열, 객체 리터럴
```
// 과거
var won = 1000;
var result = '이 과자는 ' + wone + '원입니다.';

// 개선
const result = `이 과자는 ${won}원입니다.`;
```

### 화살표 함수
```
// 이전
function add(x, y) {
    return x + y;
}
// 이후
const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

//
```


### 구조분해 할당
```
// 이전
const example = {a: 123, b: { c: 135, d: 146 } }
const a = example.a;
const d = example.b.d;

// 이후
const {a, b: { d } } = example;
console.log(a); // 123
console.log(d); // 146

// 이전
arr = [1, 2, 3, 4, 5]
const x = arr[0];
const y = arr[1];
const z = arr[4];

// 이후
const [x, y, , , z] = arr;
```

### 프로토타입
