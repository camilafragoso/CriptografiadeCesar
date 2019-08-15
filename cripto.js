
let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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

//pegar info do json

//funcao descript
function decript(answer){

    var numCasas = answer.numero_casas;

    //converter para minusculo
    var messageMin = answer.cifrado.toLowerCase();

    //comparar cada letra da messageMin com o alfabeto e subtrair com o alfabet[-numCasas]//
    //verificar se tratando o messageMin como string muda a comparação i < n  
    for (i = 0; i < n; i++) {
        for (j = 0; j < 26; j++){
            //so funciona para letras
            if (messageMin[i] == alfabet[j]){
                messageMin[i] = alfabet[(j - numCasas)];
                //ou messageMin[i] = alfabet.substr(j - numCasas, 1); ?
            }
        }
    }

    console.log(messageMin);

    //atualizando a mensagem decifrada no json
    answer.decifrado = messageMin;
    
    //fazendo e atualizando o resumo criptografico no json ??
        answer.resumo_criptografico = CryptoJS.SHA1(messageMin);
        console.log(answer);

    // Send a POST request
    