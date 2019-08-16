//requisição
var axios = require("axios");
var fs = require('fs');

function getInfo(){
    return axios.get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3bb97111fc2b09ab6decac4244ed7c3b5ab550e7");
}

//função p escrever no json
async function simpleFileWriteSync(filePath) {
    var data = await getInfo();
    var options = {encoding:'utf-8', flag:'w'};
    fs.writeFileSync(filePath, JSON.stringify(data.data), options);  
} simpleFileWriteSync('answer.json');