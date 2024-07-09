function calcularMediaArit() {
    let numeros = [];
    let ok = true;

function loop(){
    while (ok) {
        let entrada = prompt("Digite um número inteiro, positivo ou negativo (ou clique em cancelar para encerrar o loop :D): ");

        if (entrada === null) {  // cancelar = (null)
            ok = false;
        } else {
            let numero = parseFloat(entrada);
            if (isNaN(numero)) {
                alert("Opa!! Valor inválido... Insira um número inteiro :)");
            } else {
                numeros.push(numero);
            }
        }
    }
}
    loop();
    if (numeros.length === 0) {
        alert("Nenhum número foi inserido :/");
        return;
    }

    let soma = numeros.reduce((acc, val) => acc + val, 0);
    let media = soma / numeros.length;
    alert("A média aritmética é: " + media);
}

calcularMediaArit();