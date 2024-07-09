const fs = require('fs');

function findConnections(obj) {
    let results = [];

    function traverse(node) {
        if (typeof node !== 'object' || node === null) {
            return;
        }

        if (node.hasOwnProperty('connection')) {
            const { _id, label } = node.connection;
            results.push([_id, label]);
        }

        if (node.hasOwnProperty('connections')) {
            node.connections.forEach(connection => {
                const { _id, label } = connection;
                results.push([_id, label]);
            });
        }

        for (let key in node) {
            if (node.hasOwnProperty(key)) {
                traverse(node[key]);
            }
        }
    }

    traverse(obj);
    return results;
}

// Pegando o arquivo json :D
fs.readFile('data-0.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
    }

    try {
        const jsonObject = JSON.parse(data);
        const connections = findConnections(jsonObject);
        console.log(connections);
    } catch (e) {
        console.error("Erro ao analisar o JSON:", e);
    }
});

// Esta saída é apenas um exemplo, já que não possuimos o arquivo json em questão utilizado na formação da questão...