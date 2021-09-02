const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const showResults = show => {
    const div = document.createElement('div');
    const text = document.createTextNode(show);
    div.appendChild(text);
    document.body.appendChild(div);
}

const kata1 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números de 1 a 25:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=1;i<=25;i++) {
        str += ` ${i}`;
    }
    return str;
}

showResults(kata1());

const kata2 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números de 25 a 1:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=25;i>=1;i--) {
        str += ` ${i}`;
    }
    return str;
}

showResults(kata2());

const kata3 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números de -1 a -25:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=-1;i>=-25;i--) {
        str += `  ${i}`;
    }
    return str;
}

showResults(kata3());

const kata4 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números de -25 a -1:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=-25;i<=-1;i++) {
        str += `  ${i}`;
    }
    return str;
}

showResults(kata4());

const kata5 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números ímpares de 25 a -25:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=25;i>=-25;i--) {
        if (i%2===1 || i%2===-1) {
            str += `  ${i}`;
        }
    }
    return str;
}

showResults(kata5());

const kata6 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números divisíveis por 3 até o 100:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=1;i<=100;i++) {
        if (i%3===0) {
            str += `  ${i}`;
        }
    }
    return str;
}

showResults(kata6());

const kata7 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números divisíveis por 7 até o 100:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=1;i<=100;i++) {
        if (i%7===0) {
            str += `  ${i}`;
        }
    }
    return str;
}

showResults(kata7());

const kata8 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=100;i>=1;i--) {
        if (i%3===0 || i%7===0) {
            str += `  ${i}`;
        }
    }
    return str;
}

showResults(kata8());

const kata9 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números ímpares divisíveis por 5 até o 100:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=5;i<=100;i++) {
        if (i%2===1 && i%5===0) {
            str += `  ${i}`;
        }
    }
    return str;
}

showResults(kata9());

const kata10 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os 20 elementos de sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=0;i<sampleArray.length;i++) {
        str += `  ${sampleArray[i]}`;
    }
    return str;
}

showResults(kata10());

const kata11 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir todos os números pares contidos em sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=0;i<sampleArray.length;i++) {
        if (sampleArray[i]%2===0) {
            str += `  ${sampleArray[i]}`;
        }
    }
    return str;
}

showResults(kata11());

const kata12 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir todos os números ímpares contidos em sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=0;i<sampleArray.length;i++) {
        if (sampleArray[i]%2===1) {
            str += `  ${sampleArray[i]}`;
        }
    }
    return str;
}

showResults(kata12());

const kata13 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir os números divisíveis por 8 em sampleArray:');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=0;i<sampleArray.length;i++) {
        if (sampleArray[i]%8===0) {
            str += `  ${sampleArray[i]}`;
        }
    }
    return str;
}

showResults(kata13());

const kata14 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir o quadrado de cada elemento de sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    for (let i=0;i<sampleArray.length;i++) {
        let quad = sampleArray[i]*sampleArray[i];
        str += `  ${quad}`;
    }
    return str;
}

showResults(kata14());

const kata15 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir a soma de todos os números de 1 a 20.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    let count = 0;
    for (let i=1;i<=20;i++) {
        count += i;
        str += `  ${count}`;

    }
    return str;
}

showResults(kata15());

const kata16 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir a soma de todos os elementos de sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    let count = 0;
    for (let i=0;i<sampleArray.length;i++) {
        count += sampleArray[i];
        str += `  ${count}`;
    }
    return str;
}

showResults(kata16());

const kata17 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir o menor elemento de sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    let menor = 10000;
    for (let i=0;i<sampleArray.length;i++) {
        if (sampleArray[i]<menor) {
            menor = sampleArray[i];
        }
    }
    str = `${menor}`;
    return str;
}

showResults(kata17());

const kata18 = () => {
    const p = document.createElement('p');
    const text = document.createTextNode('Exibir o maior elemento de sampleArray.');
    p.appendChild(text);
    document.body.appendChild(p);
    let str = '';
    let maior = 0;
    for (let i=0;i<sampleArray.length;i++) {
        if (sampleArray[i]>maior) {
            maior = sampleArray[i];
        }
    }
    str = `${maior}`;
    return str;
}

showResults(kata18());

const kataBonus1 = () => {
    const main = document.createElement('main');
    for (let i=1;i<=20;i++) {
        const div = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.padding = '20px';
        div.style.height = '20px';
        div.style.width = '100px';
        div.style.backgroundColor = 'gray';
        div.style.margin = '10px';
        main.appendChild(div);
    }
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    main.style.flexWrap = 'wrap';
    main.style.border = '5px solid black';
    main.style.width = '45%';
    main.style.margin = '0 auto';
    document.body.appendChild(main);
    return '';
}

showResults(kataBonus1());


const kataBonus2 = () => {
    const main = document.createElement('main');
    let count = 105;
    for (let i=0;i<20;i++) {
        const div = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.padding = '20px';
        div.style.height = '20px';
        div.style.width = `${count}px`;
        div.style.backgroundColor = 'gray';
        div.style.margin = '10px';
        main.appendChild(div);
        count += 5;
    }
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    main.style.flexWrap = 'wrap';
    main.style.border = '5px solid black';
    main.style.width = '45%';
    main.style.margin = '0 auto';
    document.body.appendChild(main);
    return '';
}

showResults(kataBonus2());

const kataBonus3 = () => {
    const main = document.createElement('main');
    for (let i=1;i<=20;i++) {
        const div = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.padding = '20px';
        div.style.height = '20px';
        div.style.width = `${sampleArray[i]}px`;
        div.style.backgroundColor = 'gray';
        div.style.margin = '10px';
        main.appendChild(div);
    }
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    main.style.flexWrap = 'wrap';
    main.style.border = '5px solid black';
    main.style.width = '100%';
    main.style.margin = '0 auto';
    document.body.appendChild(main);
    return '';
}

showResults(kataBonus3());


const kataBonus4 = () => {
    const main = document.createElement('main');
    for (let i=1;i<=20;i++) {
        const div = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.padding = '20px';
        div.style.height = '20px';
        div.style.width = `${sampleArray[i]}px`;
        if (i%2===1) {
            div.style.backgroundColor = 'red';  
        } else {
            div.style.backgroundColor = 'grey';
        }
        div.style.margin = '10px';
        main.appendChild(div);
    }
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    main.style.flexWrap = 'wrap';
    main.style.border = '5px solid black';
    main.style.width = '100%';
    main.style.margin = '0 auto';
    document.body.appendChild(main);
    return '';
}

showResults(kataBonus4());

const kataBonus5 = () => {
    const main = document.createElement('main');
    for (let i=0;i<20;i++) {
        const div = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.padding = '20px';
        div.style.height = '20px';
        div.style.width = `${sampleArray[i]}px`;
        div.style.backgroundColor = 'gray';
        div.style.margin = '10px';
        if (sampleArray[i]%2===0) {
            div.style.backgroundColor = `#${sampleArray[i]}`
        }
        main.appendChild(div);
    }
    main.style.display = 'flex';
    main.style.flexDirection = 'row';
    main.style.flexWrap = 'wrap';
    main.style.border = '5px solid black';
    main.style.width = '45%';
    main.style.margin = '0 auto';
    document.body.appendChild(main);
    return '';
}

showResults(kataBonus5());
