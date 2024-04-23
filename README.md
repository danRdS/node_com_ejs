# EJS

O EJS é uma **linguagem de modelagem** para criação de páginas HTML utilizando javascript, ou seja, o EJS vai permitir a criação do frontend com HTML dentro do nodeJS e tudo isso será renderizado pelo javascript.

## Etapas do processo
- [Tenha o **Node.js** instalado](#passo-1---instalação-do-nodejs)
- [Inicie o projeto](#passo-2---inicie-o-projeto)
- [Instale o **EJS**](#passo-3---instale-o-ejs)
- [Instale o **express** para fazer a criação de um servidor que irá rodar o projeto](#passo-4---instale-o-express)
- [Configurar o **express**](#passo-5---configurar-o-express)
- [Executar o servidor](#passo-6---execute-o-servidor)

## Passo 1 - Instalação do node.js

Acesse o site do [NodeJS](https://nodejs.org/en) e faça a instação da versão adequada para o seu sistema operacional.

## Passo 2 - Inicie o projeto

Com o `node.js` instalado, inicie o pacote do seu projeto node com o seguinte comando:
```bash
npm init -y
```

## Passo 3 - Instale o EJS

Faça a instalação do `EJS` com o seguinte comando:
```bash
npm install ejs
```
Agora será possível utilizar o EJS em seu projeto. Para criar um arquivo EJS basta colocar o nome do arquivo seguido da extensão __ejs__, como por exemplo `index.ejs`.

## Passo 4 - Instale o express

Faça a instalação do `express` com o seguinte comando:
```bash
npm install express
```
Agora será possível criar um servidor que irá rodar e criar rotas para gerenciar o projeto.

## Passo 5 - Configurar o express

Para configurar o `express` para que ele crie o servidor a fim de gerenciar o nosso projeto faça as seguintes etapas:

- [x] Crie um arquivo para usar o express

Crie um arquivo `javascript` na raiz do projeto para usar e configurar o express. O arquivo pode ser por exemplo `server.js`.

- [x] Importe o módulo do express

Para importar o módulo do express use o seguinte comando:

```javascript
    const express = require('express');
```
O express vai __criar um servidor__ que vai renderizar na tela todos os nossos arquivos.

- [x] Instancie o express

Para instanciar o express faça o seguinte comando:

```javascript
    const app = express();
```

- [x] Permita o uso de arquivos estáticos no express

Para que o express use os arquivos estáticos como arquivos `css` e `javascript`, faça o seguinte comando:

```javascript
    app.use(express.static('public'));
```

Dentro do método `static` definimos o local no qual os arquivos serão salvos. Por convenção são salvos dentro da pasta "**public**", mas pode ser definida outra pasta aqui como, por exemplo, salvar direto na pasta "**assets**". Crie esta pasta na raiz do projeto. Caso você tenha criado a pasta "public", dentro dela você pode criar a pasta "assets" com as pastas "css" e "js" e criar seus respectivos arquivos dentro destas pastas.

Para usar um arquivo estático como um arquivo externo de uma folha de estilos, `css`, ou um arquivo `javascript` use as tags `link`e `script` como nos exemplos a seguir:

```HTML
    <link rel="stylesheet" href="/assets/css/style.css">
```

```HTML
    <script href="/assets/js/script.css"></script>
```

- [x] Criando uma rota

Para criar as rotas use o seguinte comando:
```javascript
    app.get('/', (req, res) => {
        res.render(pages/index)
    });
```
- **_Observações para as rotas:_**

    O express para acessar a rota do arquivo `index.ejs` acessa primeiro por padrão a pasta "**views**". Então quando for criar as pastas do projeto, crie o arquivo `index.ejs` dentro da pasta __views__. Neste exemplo o caminho é `views/pages/index.ejs`.

    - [x] Rodando o servidor

    Para rodar o servidor execute o seguinte comando:

    ```javascript
        app.listen('8080', () => console.log("Rodando na porta 8080"));
    ```

    Com isso o servidor irá rodar na porta definida como argumento no método `listen`. No caso foi a porta "8080", mas pode ser qualquer outra porta.

## Passo 6 - Execute o servidor

Após todos esses passos o nosso servidor já está pronto para ser executado. Para executá-lo basta abrir o seu terminal e executar o seguinte comando:

```bash
    node server
```
Concluído! Seu servidor já está rodando na porta especificada e pronto para uso. 

## Sobre mim 😎

Sou Daniel Ribeiro, estudante de programação voltado para o frontend. Para conhecer um pouco mais sobre mim, acesse:
- [Github](https://github.com/danRdS)
- [Linkedin](https://www.linkedin.com/in/daniel-ribeiro-da-silva-37b313239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)