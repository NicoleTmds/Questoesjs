function verificarIdentificador(numero) {
    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < numero.length - 1; i++) {
        let digito = parseInt(numero[i]);
        if (i % 2 === 0) {
            somaImpares += digito;
        } else {
            somaPares += digito;
        }
    }

    somaPares *= 3;
    let somaTotal = somaPares + somaImpares;
    let resto = somaTotal % 10;
    let digitoVerificador = (resto === 0) ? 0 : 10 - resto;

    let ultimoDigito = parseInt(numero[numero.length - 1]);
    return digitoVerificador === ultimoDigito;
}

const exemplos = ["547020743789", "301354030348", "301354030349", "123456789872"];

exemplos.forEach(exemplo => {
    console.log(`Código: ${exemplo} é válido? ${verificarIdentificador(exemplo)}`);
});