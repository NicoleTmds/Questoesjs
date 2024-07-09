function gerarPares(par) {
    const [maxX, maxY] = par;
    const resultado = [];
            
    if (maxX < 0 || maxY < 0) {
        return resultado;
    }

    for (let x = 0; x <= maxX; x++) {
        for (let y = 0; y <= maxY; y++) {
            resultado.push([x, y]);
        }
    }        
    return resultado;
}

const maxX = parseInt(prompt("Insira o valor de x:"));
const maxY = parseInt(prompt("Insira o valor de y:"));


if (!isNaN(maxX) && !isNaN(maxY)) {
const entrada = [maxX, maxY];
const saida = gerarPares(entrada);
console.log(saida);
    if (saida.length > 0) {
        alert("Pares gerados: " + JSON.stringify(saida));
    } else {
        alert("Ops!! Os valores devem ser números inteiros positivos :) Nenhum par foi gerado...");
        }

} else {
    alert("Por favor, insira valores válidos para x e y.");
    }