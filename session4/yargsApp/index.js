const user = require("./controller/users.controller")
const yargs = require("yargs")
//add
yargs.command({
    command:"add",
    describe:"add new user",
    builder:{
        id:{
            default:Date.now()
        },
        name:{
            type:"string",
            demandOption:true, 
            describe:"user name"
        },
        age:{
            type:"number",
            describe:"user age"
        },
        email:{
            type:'string'
        },
        status:{
            type:"boolean",
            default:false
        }
    },
    handler: (argv)=> user.add(argv)
})
//showall
yargs.command({
    command:"showAll",
    handler: ()=>user.showAll()
})
//show single
yargs.command({
    command:"showSingle",
    builder:{
        id:{
            type:"string",
            demandOption:true
        }
    },
    handler: (argv)=>{
        user.showSingle(argv.id)
    }
})
//edit
yargs.command({
    command:"edit",
    builder:{},
    handler: (argv)=>{
        user.edit()
    }
})
//del
yargs.command({
    command:"del",
    builder:{
        id:{
            type:"string",
            demandOption:true
        }
    },
    handler: (argv)=>{
        user.del(argv.id)
    }
})
yargs.argv