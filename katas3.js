const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
    let pa = document.createElement("div");
    let text = document.createTextNode(x);
    pa.appendChild(text);
    document.body.appendChild(pa);
}

function kata1(x) {
    //   implemente o código do kata 1 aqui
    let text = document.createTextNode('---1 a 25---');
    document.body.appendChild(text);
    let array = [];
    for (let i=1;i<=x;i++){   
        array.push(i);  
    }
    return array;
}

showResults(kata1(25));

 function kata2(x) {
    // implemente o código do kata 2 aqui
    let text = document.createTextNode('--- 25 a 1 ---');
    document.body.appendChild(text);
    let array = [];
    for (let i=25;i>0;i--){   
        array.push(i);  
    }  
    return array;
 }

 showResults(kata2(25));

 function kata3(x) {
    //  implemente o código do kata 3 aqui
    let text = document.createTextNode('--- -1 a -25 ---');
    document.body.appendChild(text);
    let array = [];
    for (let i=-1;i>=-25;i--){   
        array.push(i);  
    }
    return array;
 }

 showResults(kata3(25));

 function kata4(x) {
    //  implemente o código do kata 4 aqui
    let text = document.createTextNode('--- -25 a -1 ---');
    document.body.appendChild(text);
    let array = [];
    for (let i=-25;i<=-1;i++){   
        array.push(i);  
    }  
    return array;
 }

 showResults(kata4(25));

 function kata5(x) {
    //  implemente o código do kata 5 aqui
    let text = document.createTextNode('--- 25 a -25 ---');
    document.body.appendChild(text);
    let array = [];
    for (let i=25;i>=-25;i--){
        array.push(i);     
    }
    return array;
 }

 showResults(kata5(50));

 function kata6(x) {
    //  implemente o código do kata 6 aqui  
    let text = document.createTextNode('--- divisíveis por 3 até o 100 ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=1;i<=x;i++){   
        if (i % 3 === 0){
            array.push(i);  
        } 
    }  
    return array;
 }

 showResults(kata6(100));

 function kata7(x) {
     // implemente o código do kata 7 aqui
    let text = document.createTextNode('--- divisíveis por 7 até o 100 ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=1;i<=x;i++){   
        if (i % 7 === 0){
            array.push(i);  
        } 
    }
    return array;
 }

 showResults(kata7(100));

 function kata8(x) {
    //  implemente o código do kata 8 aqui
    let text = document.createTextNode('--- divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100 ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=x;i>=1;i--){     
        if (i % 7 === 0 || i % 3 === 0){
            array.push(i);  
        } 
    } 
    return array;
 }

 showResults(kata8(100));

 function kata9(x) {
    //  implemente o código do kata 9 aqui
    let text = document.createTextNode('--- números ímpares divisíveis por 5 até o 100 ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=5;i<=x;i++){   
        if (i % 2 === 1 && i % 5 === 0){
            array.push(i);  
        }
    } 
    return array;
 }

 showResults(kata9(100));

 function kata10() {
     // implemente o código do kata 10 aqui
    let text = document.createTextNode('--- os 20 elementos de sampleArray ---');
    document.body.appendChild(text);
    return sampleArray;
 }

 showResults(kata10());

 function kata11(x) {
    // implemente o código do kata 10 aqui
    let text = document.createTextNode('--- os números pares contidos em sampleArray ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=0;i<x;i++){   
        if (sampleArray[i] % 2 === 0){
            array.push(sampleArray[i]);  
        }
    } 
    return array;
}
 
showResults(kata11(sampleArray.length));

function kata12(x) {
     // implemente o código do kata 12 aqui
    let text = document.createTextNode('---  todos os números ímpares contidos em sampleArray ---');
    document.body.appendChild(text);
    let array = []; 
     for (let i=0;i<x;i++){   
        if (sampleArray[i] % 2 === 1){
            array.push(sampleArray[i]);  
        }
    } 
    return array;
}

showResults(kata12(sampleArray.length));

function kata13(x) {
    //  implemente o código do kata 13 aqui
    let text = document.createTextNode('---   os números divisíveis por 8 em sampleArray: ---');
    document.body.appendChild(text);
    let array = []; 
    for (let i=0;i<x;i++){   
        if (sampleArray[i] % 8 === 0){
            array.push(sampleArray[i]);  
        }
    } 
    return array;
}

 showResults(kata13(sampleArray.length));

function kata14(x) {
     // implemente o código do kata 14 aqui
    let text = document.createTextNode('--- o quadrado de cada elemento de sampleArray ---');
    document.body.appendChild(text);
    let array = []; 
    let guardar = [];
    for (let i=0;i<x;i++){   
        guardar[i] = sampleArray[i]*sampleArray[i];
        array.push(guardar[i]);
    } 
    return array;
}

showResults(kata14(sampleArray.length));


function kata15(x) {
    // implemente o código do kata 15 aqui
    let text = document.createTextNode('--- a soma de todos os números de 1 a 20 ---');
    document.body.appendChild(text);
    let array = []; 
    let soma = 0;
    for (let i=1;i<=x;i++){   
    soma += i;
    array.push(soma);
    } 
    return array;
}

showResults(kata14(20));


function kata16(x) {
    //  implemente o código do kata 16 aqui
    let text = document.createTextNode('--- a soma de todos os elementos de sampleArray ---');
    document.body.appendChild(text);
    let array = []; 
    let soma = 0;
    for (let i=0;i<x;i++){   
        soma += sampleArray[i];
        array.push(soma);
    } 
    return array;
}

showResults(kata16(sampleArray.length));


function kata17(x) {
    let text = document.createTextNode('--- o menor elemento de sampleArray. ---');
    document.body.appendChild(text);
    let menor = 0;
    for (let i=0;i<x;i++){
        if (i===0){
           menor = sampleArray[i];
        }
        if (sampleArray[i]<menor){
           menor = sampleArray[i];
        }    
    }
    return menor;    
}

showResults(kata17(20));

function kata18(x) {
    //  implemente o código do kata 18 aqui  
    let text = document.createTextNode('--- o maior elemento de sampleArray. ---');
    document.body.appendChild(text);
    let maior = 0;
    for (let i=0;i<x;i++){
        if (i===0){
        maior = sampleArray[i];
        }
        if (sampleArray[i]>maior){
        maior = sampleArray[i];
        }
    }
    return maior;    
}

showResults(kata18(20));


 /**
  * Daqui em diante são os bônus, por sua conta e risco
  */

//  function kataBonus1() {
//       implemente o código do kata bonus 1 aqui
//  }

//  function kataBonus2() {
//       implemente o código do kata bonus 2 aqui
//  }

//  function kataBonus3() {
//       implemente o código do kata bonus 3 aqui
//  }

//  function kataBonus4() {
//       implemente o código do kata bonus 4 aqui
//  }

//  function kataBonus5() {
//       implemente o código do kata bonus 5 aqui
//  }
