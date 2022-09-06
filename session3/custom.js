// const myFun= ()=>{
//     return { name:"marwa", age:37 }
// }

// const myFun1 = () => {
//     return ()=>{
//         console.log("hello")
//     }
// }
//clousers
// const myClouser = (val) =>{
//     return {
//         val,
//         add() { return val+10},
//         edit() {return val-5 }
//     }
// }
// const c1 = myClouser(5)
// console.log(c1.add())

// //callback
// const myCallBack = (val, cb)=>{
//     if(val==5) cb("number is 5", false , "hello", "ay 7aga")
//     else cb("number isnn't 5", true , 5,"huge")
// }

// myCallBack(10, (x,y,z,w)=> console.log(x) )
// arr = [1,2,3,4]
// arr.forEach((element, i, ar) => {
    
// });
// x.addEventListener("submit", function(e){

// })


// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// }, 1000)
// setTimeout(()=>{
//     console.log(3)
// }, 500)
// setTimeout(()=>{
//     console.log(4)
// }, 2000)



//promises
// const myPromise = (val) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof val == "number"? resolve(val*2) : reject("not a number")
//         }, 2000)
//     })
// }
// console.log (myPromise(4))
// console.log("hello")
// then catch
// myPromise("a")
// .then(result=> {
//     console.log(result)
// })
// .catch(e=>{
//     console.log(e)
// })
// console.log("test")

//async await
const myPromise = (val) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof val == "number"? resolve(val*2) : reject("not a number")
        }, 2000)
    })
}

const myCall = async()=>{
    try{
        const data = await myPromise("a")
        const result = await myPromise(data)
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
}
myCall()












