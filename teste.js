let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var numCasas = 11;
    var messageMin = "pgpy esp mpde awlyytyr td yze dz zxytdntpye ld ez rpe te ctrse esp qtcde etxp. qcpo mczzvd";
    messageMin = messageMin.split("");
   // console.log(messageMin.length);
   // var num = 15 - numCasas;
   // console.log(alfabet[num]);

    function decript(numCasas, messageMin){
    for (i = 0; i < messageMin.length; i++) {
        for (j = 0; j < 26; j++){
            //so funciona para letras
            if (messageMin[i] == alfabet[j]){
                var num = j - numCasas;
                if (j < numCasas){
                    var subtNum = numCasas - j;
                    var newNum = 25 - subtNum;
                    messageMin[i] = alfabet[newNum];
                } else messageMin[i] = alfabet[num];
                //messageMin[i] = alfabet.substr(j - numCasas, 1); 
            } 
        }   
    }
    messageMin = messageMin.toString();
    return messageMin; 
}
decript(11, "pgpy esp mpde awlyytyr td yze dz zxytdntpye ld ez rpe te ctrse esp qtcde etxp. qcpo mczzvd");