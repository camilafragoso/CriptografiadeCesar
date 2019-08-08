//funcao encript - nao precisa

function encript(message){
    var msgmDescifrado = message.descifrado; //nao tem pq é pra descifrar
    var numCasas = message.numero_casas;
    var newArray;

    //colocando as letras da string no newArray//
    for (i = 0; i < n; i++) {
        //converter para minuscula e verificar se nao é ponto ou numero
        newArray.push(message.substr(i, 1)); 
    }

    //comparar cada letra do newArray com o alfabeto e somar com o alfabet[+3]//
    for (i = 0; i < n; i++) {
        for (j = 0; j < 25; j++){
            if (newArray[i] == alfabet[j]){
                newArray[i] = alfabet[(j + numCasas)];
                //newArray[i] = alfabet.substr(j + numCasas, 1);
            }
        }
    }
    var encriptedMessage = newArray;
    console.log(encriptedMessage);
}