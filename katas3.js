 const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

 function showResults(x){
    let pa = document.createElement("div");
    let text = document.createTextNode(x);
    pa.appendChild(text);
    document.body.appendChild(pa);
 }

showResults(1);

function kata1(x) {
    //   implemente o código do kata 1 aqui
    for (let i=1;i<=x;i++){   
        showResults(i);
    }  
}

kata1(25);

 function kata2(x) {
    // implemente o código do kata 2 aqui
    for (let i=25;i>0;i--){   
        showResults(i);
    }  
 }

 kata2(25);

 function kata3(x) {
    //  implemente o código do kata 3 aqui
    for (let i=-1;i>=-25;i--){   
        showResults(i);
    }  
 }

 kata3(25);

 function kata4(x) {
    //  implemente o código do kata 4 aqui
    for (let i=-25;i<=-1;i++){   
        showResults(i);
    }  
 }

 kata4(25);

 function kata5(x) {
    //  implemente o código do kata 5 aqui
    for (let i=25;i>=-25;i--){
        if (i%2===1 || i%2===-1){
         showResults(i);
        }
    }
 }

kata5(50);

 function kata6(x) {
    //  implemente o código do kata 6 aqui   
    for (let i=1;i<=x;i++){   
        
        if (i % 3 === 0){
            showResults(i);
        } 
    }  
 }

kata6(100);

 function kata7(x) {
     // implemente o código do kata 7 aqui
     for (let i=1;i<=x;i++){   
        
        if (i % 7 === 0){
            showResults(i);
        } 
    } 
 }

kata7(100);

 function kata8(x) {
    //  implemente o código do kata 8 aqui
    for (let i=x;i>=1;i--){   
        
        if (i % 7 === 0 || i % 3 === 0){
            showResults(i);
        } 
    } 
 }

 kata8(100);

 function kata9(x) {
    //  implemente o código do kata 9 aqui
    for (let i=5;i<=x;i++){   
        if (i % 2 === 1 && i % 5 === 0){
            showResults(i);
        }
    } 

 }

kata9(100);

 function kata10(x) {
     // implemente o código do kata 10 aqui
     for (let i=0;i<x;i++){   
        showResults(sampleArray[i]);
    } 
 }

 kata10(sampleArray.length);

 function kata11(x) {
        // implemente o código do kata 10 aqui
        for (let i=0;i<x;i++){   
            if (sampleArray[i] % 2 === 0){
                showResults(sampleArray[i]);
            }
        } 
}
 
kata11(sampleArray.length);

 function kata12(x) {
     // implemente o código do kata 12 aqui
     for (let i=0;i<x;i++){   
        if (sampleArray[i] % 2 === 1){
            showResults(sampleArray[i]);
        }
    } 
 }

 function kata13(x) {
    //  implemente o código do kata 13 aqui
    for (let i=0;i<x;i++){   
        if (sampleArray[i] % 8 === 0){
            showResults(sampleArray[i]);
        }
    } 
 }

 kata13(sampleArray.length);

 function kata14(x) {
     // implemente o código do kata 14 aqui
     let guardar = [];
     for (let i=0;i<x;i++){   
        guardar[i] = sampleArray[i]*sampleArray[i];
        showResults(guardar[i]);
    } 
 }

 kata14(sampleArray.length);

 function kata15(x) {
     // implemente o código do kata 15 aqui
     let soma = 0;
     
     for (let i=1;i<=x;i++){   
       soma += i;
       showResults(soma);
    } 
 }

 kata15(20);

 function kata16(x) {
    //  implemente o código do kata 16 aqui
    let soma = 0;
     
     for (let i=0;i<x;i++){   
       soma += sampleArray[i];
       showResults(soma);
     } 
    
 }

 kata16(sampleArray.length)

 function kata17(x) {
     // implemente o código do kata 17 aqui
     let maior = 0;
     for (let i=0;i<x;i++){
         if (i===0){
            maior = sampleArray[i];
         }

         if (sampleArray[i]>maior){
            maior = sampleArray[i];
         }
     }
     showResults(maior);
 }

 kata17(20);

 function kata18(x) {
    //  implemente o código do kata 18 aqui
    let menor = 0;
     for (let i=0;i<x;i++){
         if (i===0){
            menor = sampleArray[i];
         }

         if (sampleArray[i]<menor){
            menor = sampleArray[i];
         }    
     }
     showResults(menor);   
 }

 kata18(20);


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
