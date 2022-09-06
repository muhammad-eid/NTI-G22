// const apiRes = async(apiURL, cb) =>{
//     try{
//         // let result = await fetch(apiURL)
//         // result = await result.json()
//         const result = await (await fetch(apiURL)).json()
//         cb(result, false)
//     }
//     catch(e){
//         cb(false,e)
//     }
// }    

// apiRes(
//     "https://jsonplaceholder.typicode.com/posts",
//     (res, rej)=>{
//         if(res) return console.log(res)
//         console.log(rej)
//     }
//     )

// drawPosts =(posts)=>{}
// drawImages =(Images)=>{}