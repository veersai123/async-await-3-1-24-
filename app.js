
// const p1=new Promise((resolve,reject)=>{
// resolve("resolved")
// })
// console.log(p1)
// p1.then((data)=>{
// console.log(data)
// })
// p1.then((dara)=>{
//   console.log("if block")
// }).catch(()=>{
//   console.log("Else block")
// })


// async function m()
// {
//   console.log("hello")
//   return "45"
// }
// m().then((x)=>{
// console.log(x)
// })

// const url='https://fakestoreapi.com/products'
// console.log(fetch(url))
// fetch(url)
// .then((res)=>{
//   return res.json()
// }).then((x)=>{
// console.log(x[0])
// })

// async function jsondata()
// {
//   console.log("3")
//   const x=fetch('https://fakestoreapi.com/products')
//   const data1=await x
//   console.log(data1)
//   console.log("4")
// }
// jsondata()

// function y()
// {
//   console.log("1")
//   const x=fetch('https://fakestoreapi.com/products')
//   x.then((res)=>{
//     console.log(res)
//   })
//   console.log("2")
// }
// y()



// ==========================================================
// async function jsondata()
// {
//   console.log("3")
//   const x=fetch('https://hub.dummyapis.com/delay?seconds=10')
//   const data1=await x
//   console.log(data1)
//   console.log("4")
// }
// jsondata()

// function y()
// {
//   console.log("1")
//   const x=fetch('https://hub.dummyapis.com/delay?seconds=5')
//   x.then((res)=>{
//     console.log(res)
//   })
//   console.log("2")
// }
// y()

// =====================main thread block concept=============================
// function s()
// {
//   return 4+5
// }

// async function jsondata()
// {
//   console.log("3")
//   const x=fetch('https://hub.dummyapis.com/delay?seconds=15')
//   const data1=await x
//   console.log(data1)
//   console.log("4")
// }
// jsondata()

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://hub.dummyapis.com/delay?seconds=10', false);
// xhr.send();



// ============================================================================

const p1=new Promise((reslove,reject)=>{
   setTimeout(()=>{
    reslove("1")
   },10000)
})
const p2=new Promise((reslove,reject)=>{
  setTimeout(()=>{
   reslove("2")
  },20000)
})
async function solve()
{
  console.log("inside 1")
  const data=await p1
  console.log("after p1 resolve")
  console.log(p1)

  const data2=await p2
  console.log("after p2 resolve")
  console.log(p2)
}















