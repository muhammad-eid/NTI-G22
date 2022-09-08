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
    handler: (argv)=>{
        user.add(argv)
    }
})
//showall
yargs.command({
    command:"showAll",
    builder:{},
    handler: (argv)=>{
        user.showAll()
    }
})
//show single
yargs.command({
    command:"showSingle",
    builder:{},
    handler: (argv)=>{
        user.showSingle()
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
    builder:{},
    handler: (argv)=>{
        user.del()
    }
})
yargs.argv