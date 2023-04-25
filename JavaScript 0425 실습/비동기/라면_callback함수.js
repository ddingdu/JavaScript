// 물 -> 스프 -> 면 순서
// 비동기 작업에도 순서를 보장하고 싶다

console.log("라면을 끓여보자고~ (각 재료가 준비되는데 1~3초 시간이 걸린다)")

// 라면 = 물, 스프, 면
let aFinished = false; // 물
let bFinished = false; // 스프
let cFinished = false; // 면

setTimeout(() => {
  console.log('A: 물을 넣고')

  setTimeout(() => {
    console.log('B: 스프도 넣고')

    setTimeout(() => {
      console.log('C: 면 넣기')
      console.log('이제 라면 끓이자')
    }, Math.random() * 2000 + 1000)
  }, Math.random() * 2000 + 1000)
}, Math.random() * 2000 + 1000)