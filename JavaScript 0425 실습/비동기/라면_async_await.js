const water =  function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("A: 물을 넣는다!!")
      return resolve(["물"])
      //return reject('물을 너무 많이 넣었다') // 작업 실패 시 catch로 간다
    }, Math.random() * 2000 + 1000)
  })
}

const soup = function(ramen) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("현재 재료: ", ramen)
    console.log("B: 스프를 넣는다!!")
    ramen.push('스프')
    return resolve(ramen)
  }, Math.random() * 2000 + 1000)
})
}

const noodle = function(ramen) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("현재 재료: ", ramen)
    console.log("C: 면을 넣는다!!")
    ramen.push('면')
    return resolve(ramen)
  }, Math.random() * 2000 + 1000)
})
}


// 비동기 방식 새로운 방법 : async(), await
// await는 해당 비동기 작업이 끝나면 사용할 수 있도록 해주는 키워드 (결과 가져오기 전까지 기다림)
// await 키워드는 async 함수 안에서만 사용 가능

const makeRamen = async function() {
  const ramen = await water()
  .then((ramen) => {
    return soup(ramen)
  })
  .then((ramen) => {
    return noodle(ramen)
  })
  .then((ramen) => {
    // 위의 모든 작업이 끝나고 나서 하고 싶은 일
    console.log('라면 끓이기 시작: ', ramen)
    return ramen
  })
  
  .catch((err) => {
    console.log('라면 만드는 중 문제 발생: ', err)
  })
  console.log('라면: ', ramen)
}

makeRamen()