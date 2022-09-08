//node -v to get nodejs version

// Modules => build-in modules, my own module, npm modules
//fs, path,....
// const myFileSys = require("fs")
// myFileSys.writeFileSync("m.txt", "hello")
// console.log(myFileSys.readFileSync("m.txt").toString())
// myFileSys.appendFileSync("m.txt"," all")
//path
// console.log(__dirname)
// console.log(__filename)
// const path = require("path")
// console.log(path.extname("m.txt"))
// const d1 = __dirname //C:\Users\Marwa Radwan\Desktop\G22\session4
// const d2 = "../session1/tasksapp" 
//C:\Users\Marwa Radwan\Desktop\G22\session4../session1/tasksapp
// console.log( path.join(d1, d2))



// const myMod = require("./modules/data")
// myMod.test()
// myMod.test1()



// const validator = require("validator")
// console.log(validator.isMobilePhone("01334567896", "ar-EG"))

// const chalk = require('chalk')
// console.log(chalk.blue("hello"))

// console.log(process.argv)
// if(process.argv[2]=='+') console.log('add')
// else console.log("not add");

//yargs
const yargs=require("yargs")

yargs.command({
    command:"+",
    handler: ()=>{
        console.log("hello from yargs +")
    }
})
yargs.command({
    command:"-",
    builder:{
        x:{
            type:"number",
            demandOption:true
        },
        y:{
            type: "number",
            demandOption:true
        }
    },
    handler: (argv)=>{
        console.log(argv.x+argv.y)
    }
})

yargs.argv









// dealWithFiles








