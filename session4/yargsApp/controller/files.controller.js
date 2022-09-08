const fs = require("fs")
const path = require("path")
const readFromFile = (fileName) => {
    let data
    const fileExt = path.extname(fileName)
    try{
        data = fs.readFileSync(fileName).toString()
        if(fileExt==".json") data= JSON.parse(data)  
    }
    catch(e){
        fileExt==".json"? data = [] : data = ""
    }
    return data
}
const writeToFile = (fileName, data, fileType="json") => {
    if(fileType=="json") data = JSON.stringify(data)
    fs.writeFileSync(`${fileName}.${fileType}`, data)
}
module.exports = { readFromFile, writeToFile }
