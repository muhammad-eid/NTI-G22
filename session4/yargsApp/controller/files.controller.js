const fs = require("fs")

const readFromFile = () => {

}
const writeToFile = (fileName, data, fileType="json") => {
    if(fileType=="json") data = JSON.stringify(data)
    fs.writeFileSync(`${fileName}.${fileType}`, data)
}


