let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //informações para o teste do codigo
    var numCasas = 11;
    var messageMin = "pgpy esp mpde awlyytyr td yze dz zxytdntpye ld ez rpe te ctrse esp qtcde etxp. qcpo mczzvd";

    //quebrar a string letra por letra
    messageMin = messageMin.split("");

    //function decript(numCasas, messageMin){
    //para cada letra da mensagem criptografada
    for (i = 0; i < messageMin.length; i++) {
        //comparar com cada letra do alfabeto
        for (j = 0; j < 26; j++){
            var num = j - numCasas;
            var newNum = 25 - (numCasas - j);
            //caso seja igual
            if (messageMin[i] == alfabet[j]){
                //e caso j seja menor que numCasas 
                if (j < numCasas){
                    messageMin[i] = alfabet[newNum];
                }//caso j seja maior ou igual a numCasas
                else messageMin[i] = alfabet[num];
            } 
        }   
    } 
    console.log(messageMin); 
//}
//decript(11, "pgpy esp mpde awlyytyr td yze dz zxytdntpye ld ez rpe te ctrse esp qtcde etxp. qcpo mczzvd");