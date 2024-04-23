const opcoesMenu = document.querySelectorAll('li a');

document.body.onload = () => {
    const urlAtual = document.location.pathname.slice(1);
    opcoesMenu.forEach(li => {
        if(urlAtual.length) {
            const link = document.location.pathname[1].toUpperCase() + document.location.pathname.slice(2);
            li.textContent == link ? li.classList.add('ativo') : null;
        } else {
            li.textContent == 'Home' ? li.classList.add('ativo') : null;
        }
    });

    urlAtual.length ? document.title += ` - ${urlAtual}` : null;
};

(function() {
    const lista = document.querySelector('.lista');
    const temElementoListaNaTela = document.querySelector('.container').lastElementChild == lista;
    const bolha = document.querySelector('.bolha');

    if(temElementoListaNaTela) {
        lista.onmousemove = event => {
            const listaDimensao = lista.getBoundingClientRect();
            const clientX = event.clientX - listaDimensao.x;
            const clientY = event.clientY - listaDimensao.y;
            
            bolha.style.left = clientX + 'px';
            bolha.style.top = clientY + 'px';
            bolha.style.opacity = '1';
        };
        
        lista.onmouseleave = () => bolha.style.opacity = '0';
    }
})();