/** ----------------- TESTE ----------------- */
/*
function mudamedida() {
    var medida = document.getElementById('unS').value;
    var UPA = document.querySelector('span#uQA');
    var UPB = document.querySelector('span#uQB');
    UPA.innerHTML = ` ${medida}`;
    UPB.innerHTML = ` ${medida}`;

    if (medida == 'x') {
        document.querySelector('fieldset#produtoA').disabled = true;
        document.querySelector('fieldset#produtoB').disabled = true;
    } else {
        document.querySelector('fieldset#produtoA').disabled = false;
        document.querySelector('fieldset#produtoB').disabled = false;
    }
}

function calcula() {
    var QA = Number(document.querySelector('input#iQA').value);
    var QB = Number(document.querySelector('input#iQB').value);
    var PA = Number(document.querySelector('input#iPA').value);
    var PB = Number(document.querySelector('input#iPB').value);
    var VA = PA / QA;
    var VB = PB / QB;
    var PROD = 'Insira os dados dos produtos.';

    if (QA == '0' && VA == '0' && QB == '0' && VB =='0') {
        PROD = 'Insira os dados dos produtos.';
    } else if (VA == VB) {
        PROD = 'Os dois produtos tem o mesmo valor.';
    } else if (VA < VB) {
        PROD = 'O produto A tem o melhor custo-benefício.';
        document.querySelector('fieldset.prodA').style.background = "rgba(0, 255, 0, .1";
        document.querySelector('fieldset.prodB').style.background = "";
    } else {
        PROD = 'O produto B tem o melhor custo-benefício.';
        document.querySelector('fieldset.prodB').style.background = "rgba(0, 255, 0, .1";
        document.querySelector('fieldset.prodA').style.background = "";
    }
    


    var res = document.getElementById('resultado');
    res.innerHTML = `${QA} | ${QB} | ${PA} | ${PB} <br> VA=R$${VA} <br> VB=R$${VB} <br> <h2>${PROD}</h2>`;
}
*/







/* ------------------------ CÓDIGO V1 -------------------------*/

function mudamedida() {
    var medida = document.getElementById('unS').value;
    var UPA = document.querySelector('span#uQA');
    var UPB = document.querySelector('span#uQB');
    UPA.innerHTML = ` ${medida}`;
    UPB.innerHTML = ` ${medida}`;

    if (medida == "x") {
        document.querySelector('fieldset#produtoA').disabled = true;
        document.querySelector('fieldset#produtoA').disabled = true;
        document.querySelector('input#iQA').value = '0';
        document.querySelector('input#iQB').value = '0';
        document.querySelector('input#iPA').value = '0';
        document.querySelector('input#iPB').value = '0';
        document.querySelector('fieldset.prodA').style.background = ""
        document.querySelector('fieldset.prodB').style.background = ""
    }
    if (medida != "x") {
        document.querySelector('fieldset#produtoA').disabled = false;
        document.querySelector('fieldset#produtoB').disabled = false;
    }

}

function calcula() {
    var QA = Number(document.querySelector('input#iQA').value);
    var QB = Number(document.querySelector('input#iQB').value);
    var PA = Number(document.querySelector('input#iPA').value);
    var PB = Number(document.querySelector('input#iPB').value);
    var VA = PA / QA;
    var VB = PB / QB;
    var PROD = 'Insira os dados dos produtos.';

    document.querySelector('fieldset.prodA').style.background = "";
    document.querySelector('fieldset.prodB').style.background = "";

    if (VA > VB && VA > '0' && VB > '0') {
        PROD = 'O produto B tem o melhor custo-benefício.';
        document.querySelector('fieldset.prodB').style.background = " rgba(0, 255, 0, .1";
    }

    if (VA < VB && VA > '0' && VB > '0') {
        PROD = 'O produto A tem o melhor custo-benefício.';
        document.querySelector('fieldset.prodA').style.background = " rgba(0, 255, 0, .1";
    }

    if (VA == VB && VA > '0' && VB > '0') {
        PROD = 'Os dois produtos tem o mesmo valor.';
        
    }

    var res = document.getElementById('resultado');
    //res.innerHTML = `${QA} | ${QB} | ${PA} | ${PB} <br> VA=R$${VA} <br> VB=R$${VB}`;
    res.innerHTML = `<h2>${PROD}</h2>`;
}

