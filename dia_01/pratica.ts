// Atividade Event Loop
/* Independente do tempo de espera, o Node, por se tratar de um runtime que utiliza o event loop, não espera o fim de uma função para dar inicio para a próxima. */
console.log('Início');

setTimeout(() => {
    console.log('Timeout')
}, 0);
// Não espera o setTimeout para executar o proximo comando.

console.log('Fim')

// Atividade sssincronismo
const userName = "Mariano"
const db = [
    {
        id: 1,
        name: 'Mariano'
    },
    {
        id: 2,
        name: 'Stephanie'
    }
]

function search(name: string): Promise<boolean> {
    return new Promise((resolve) => {
        try {
            const user = db.find((user) => user.name === name)
            
            if (user) resolve(true)
            
            resolve(false)
        } catch (e) {
            throw new Error(`{error: ${e}}`)
        };
    })
}
// Melhoria recomendada do GPT
// async function search(name: string): Promise<boolean> {
//     return db.some(user => user.name === name);
// }

async function searchUser() {
    const result = await search(userName);

    if (result === true) {
        console.log('Usuario encontrado')
    } else {
        console.log('Usuario não encontrado')
    }
}

searchUser();

// Atividade File System (fs)
import { writeFile } from "fs/promises";

const data1 = new Date().toString()

await writeFile('log.txt', data1)
// Melhoria recomendada do GPT
// async function writeLog() {
//     const data = new Date().toString();
//     await writeFile('log.txt', data);
// }
// writeLog();


// Atividade servidor HTTP puro
import http from 'http';

const data2 = new Date().toString()

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `Meu nome é Mariano e este servidor foi iniciado em: ${data2}` }))
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

// Desafio do dia
/*
    Crie um projeto que:

    Leia um arquivo users.json

    Retorne os dados via HTTP

    Use TypeScript

    Não precisa estar perfeito.
*/
import http from 'http';
import fs from 'fs';

const data = fs.readFileSync('./users.json', 'utf8')
const users = JSON.parse(data)

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users))
})
// Melhoria recomendada do GPT
// Ajuste profissional (muito importante)
// readFileSync bloqueia o Event Loop.
// Para APIs, use versão assíncrona:
// import { readFile } from 'fs/promises';

// const server = http.createServer(async (req, res) => {
//     const data = await readFile('./users.json', 'utf8');
//     const users = JSON.parse(data);

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
// });


server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})