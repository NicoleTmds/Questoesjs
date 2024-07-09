class Piloto {
    constructor(nome, sobrenome, dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
        this.licenca = false;
    }

    gerarLicencaDeVoo() {
        if (!this.licenca) {
            let parteSobrenome = this.sobrenome.toUpperCase().padEnd(5, '9').slice(0, 5);

            let anoNascimento = this.dataDeNascimento.getFullYear();
            let digitoDecada = Math.floor((anoNascimento % 100) / 10);
            let digitoAno = anoNascimento % 10;

            let mesNascimento = String(this.dataDeNascimento.getMonth() + 1).padStart(2, '0');

            let inicialNome = this.nome.charAt(0).toLowerCase();

            this.licenca = `${parteSobrenome}-${digitoDecada}${mesNascimento}${digitoAno}.${inicialNome}`;
        }

        return this.licenca;
    }
}

const piloto1 = new Piloto('John', 'Doe', '1977-05-25T03:00:00.000Z');
console.log(piloto1.gerarLicencaDeVoo()); // Saída: DOE99-7057.j

const piloto2 = new Piloto('Hal', 'Jordan', '1995-09-02T03:00:00.000Z');
console.log(piloto2.gerarLicencaDeVoo()); // Saída: JORDA-9095.h

const piloto3 = new Piloto('Carol', 'Danvers', '1968-08-17T03:00:00.000Z');
console.log(piloto3.gerarLicencaDeVoo()); // Saída: DANVE-6088.c

const piloto4 = new Piloto('Poe', 'Dameron', '1979-03-09T03:00:00.000Z');
console.log(piloto4.gerarLicencaDeVoo()); // Saída: DAMER-7039.p