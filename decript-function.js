let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //informações para o teste do codigo
    var numCasas = 11;
    var messageMin = "pgpy esp mpde awlyytyr td yze dz zxytdntpye ld ez rpe te ctrse esp qtcde etxp. qcpo mczzvd";

    messageMin = messageMin.split("");

    for (i = 0; i < messageMin.length; i++) {
        for (j = 0; j < alfabet.length; j++){
            if (messageMin[i] == alfabet[j]){
                messageMin[i] = alfabet[(j - numCasas) % alfabet.length]; }
        } 
    } console.log(messageMin);