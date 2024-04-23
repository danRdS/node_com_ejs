const express = require('express');
// O express vai criar um servidor que vai renderizar na tela todos os nossos arquivos

// INSTANCIANDO O EXPRESS
const app = express();

app.use(express.static('public'));
// Importante para executar arquivos estáticos no projeto. Aqui definimos em qual pasta estarão. Por padrão, ficam na pasta "public", mas pode ser em outra pasta como por exemplo direto na pasta "assets"

app.set("view engine", "ejs");
/* "view engine" informa ao express que queremos renderizar html na tela.
A ferramenta que vamos usar pra renderizar html é o "ejs".*/

// CRIANDO UMA ROTA:
app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'js usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'crescenta praticidade no desenvolvimento de páginas'
        },
        {
            title: 'I',
            message: 'nstalação simples com install ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        }
    ];

    const subtitle = 'O EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JS';

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
});
/* "/": é a nossa rota, que neste caso é a página inicial
    req = "required" | res = "response" */

app.get('/sobre', (req, res) => res.render('pages/about'));
/* "/": é a outra rota, que neste caso é uma segunda página chamada "sobre" */

app.get('/lista', (req, res) => {
    const listItems = [
        {
            link: '#option1',
            name: 'Option 1'
        },
        {
            link: '#option2',
            name: 'Option 2'
        },
        {
            link: '#option3',
            name: 'Option 3'
        },
        {
            link: '#option4',
            name: 'Option 4'
        }
    ];

    res.render('pages/lista', {
        optionsList: listItems,        
    });
});

// RODANDO O SERVIDOR
app.listen(8080);
/* Vai rodar na porta "8080" */
console.log('Rodando na porta 8080');