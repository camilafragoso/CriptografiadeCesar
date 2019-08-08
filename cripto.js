
let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//requisição http
var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, etc
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 ou outro
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

httpRequest.open('GET', 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3bb97111fc2b09ab6decac4244ed7c3b5ab550e7', true); //assíncrona

httpRequest.send();

//pega o texto e salva numa variável
var answer = httpRequest.responseText;

//salvar em um ARQUIVO answer.json ??
answer = JSON.parse(answer);

//acionando a função
httpRequest.onreadystatechange = decript;


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

    //atualizando a mensagem decifrada no json
    answer.decifrado = messageMin;
    
    //fazendo e atualizando o resumo criptografico no json ??
        answer.resumo_criptografico = CryptoJS.SHA1(messageMin);

    //enviando para o site
}