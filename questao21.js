class Coordenada {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    determinarSetor() {
        if (this.x >= 0 && this.y >= 0 && this.z >= 0) return 'Alfa';
        if (this.x >= 0 && this.y >= 0 && this.z < 0) return 'Beta';
        if (this.x >= 0 && this.y < 0 && this.z >= 0) return 'Gama';
        if (this.x >= 0 && this.y < 0 && this.z < 0) return 'Delta';
        if (this.x < 0 && this.y >= 0 && this.z >= 0) return 'Épsilon';
        if (this.x < 0 && this.y >= 0 && this.z < 0) return 'Zeta';
        if (this.x < 0 && this.y < 0 && this.z >= 0) return 'Sigma';
        if (this.x < 0 && this.y < 0 && this.z < 0) return 'Ômega';
    }

    //Formula Euclidiana :D
    calcularDistancia() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
}

const coord1 = new Coordenada(37, 42, 15);
console.log(`Setor: ${coord1.determinarSetor()}`); // Saída: Alfa
console.log(`Distância: ${coord1.calcularDistancia()}`); // Saída: 57.94825277780168

const coord2 = new Coordenada(144, 49, 0);
console.log(`Setor: ${coord2.determinarSetor()}`); // Saída: Alfa
console.log(`Distância: ${coord2.calcularDistancia()}`); // Saída: 152.10851389715174

const coord3 = new Coordenada(-37, 0, 0);
console.log(`Setor: ${coord3.determinarSetor()}`); // Saída: Épsilon
console.log(`Distância: ${coord3.calcularDistancia()}`); // Saída: 37

const coord4 = new Coordenada(-19, -80, -32);
console.log(`Setor: ${coord4.determinarSetor()}`); // Saída: Ômega
console.log(`Distância: ${coord4.calcularDistancia()}`); // Saída: 88.23264701911646