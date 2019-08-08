
let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//requisição http
var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, etc
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 ou outro
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open('GET', 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3bb97111fc2b09ab6decac4244ed7c3b5ab550e7', true); //assíncrona

httpRequest.send();

//salvar em um arquivo answer.json ??

//pega o texto e salva numa variável - nao é o que o desafio pede
var answer = httpRequest.responseText;


//acionando a função
httpRequest.onreadystatechange = decript;


//funcao descript
function decript(answer){

    var numCasas = answer.numero_casas;

    //criando um novo array para receber cada letra da string como elemento
    var newArray = [];

    for (i = 0; i < n; i++) {

        //converter para minusculo
        var messageMin = answer.cifrado.toLowerCase();

        //Colocando cada letra da string como elemento no array
        newArray.push(messageMin.substr(i, 1)); 
    }

    //comparar cada letra do newArray com o alfabeto e subtrair com o alfabet[-numCasas]//
    for (i = 0; i < n; i++) {
        for (j = 0; j < 26; j++){
            //so funciona para letras
            if (newArray[i] == alfabet[j]){
                newArray[i] = alfabet[(j - numCasas)];
                //ou newArray[i] = alfabet.substr(j - numCasas, 1); ?
            }
        }
    }

    //converter o newArray para string
    var messageDec;
    for(i = 0; i < newArray.length; i++){
        messageDec = messageDec + newArray[i];
    }

    //atualizando a mensagem decifrada no json
    answer.decifrado = messageDec;
    
    //fazendo e atualizando o resumo criptografico no json
       answer.resumo_criptografico = CryptoJS.SHA1(messageDec);
       //var result = CryptoJS.enc.Hex.stringify(hash);  ??


    //enviando para o site
}