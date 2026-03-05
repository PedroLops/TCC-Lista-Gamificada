document.addEventListener('DOMContentLoaded', function() {
    const imagens = [
        "taverna-bg.jpg", "taverna-bg-com-taverneiro.jpg", "taverna-bg-dialogo-0.jpg",
        "taverna-dialogo-1.jpg", "taverna-dialogo-2.jpg", "taverna-dialogo-3.jpg",
        "taverna-bg-quadro-missoes-com-taverneiro.jpg", "taverna-bg-quadro-missoes.jpg"
    ];

    let indiceAtual = 0;
    const caminhoBase = "../img/";
    const container = document.getElementById('cena-container');
    const btnFinal = document.getElementById('btn-final');

    function atualizarCena() {
        const urlCompleta = `url('${caminhoBase}${imagens[indiceAtual]}')`;
    
        // Atualiza a variável no container, e os dois pseudos (before e after) herdam
        container.style.setProperty('--bg-image', urlCompleta);

        btnFinal.style.display = (indiceAtual === imagens.length - 1) ? "block" : "none";
    }

    if (btnFinal) {
        btnFinal.addEventListener('click', function() {
            // Redireciona para a página da lista de questões
            window.location.href = "lista-questoes1.html";
        });
    }

    // 1. Lógica do Cursor com Trava para a Imagem 0
    container.addEventListener('mousemove', function(e) {
        const larguraTela = window.innerWidth;
        const posicaoX = e.clientX;

        // SE for a primeira imagem, SEMPRE mostra o cursor de avançar
        if (indiceAtual === 0) {
            container.classList.add('cursor-avancar');
            container.classList.remove('cursor-voltar');
            return; 
        }

        // Caso contrário, aplica a divisão 3/10
        if (posicaoX <= larguraTela * 0.3) {
            container.classList.add('cursor-voltar');
            container.classList.remove('cursor-avancar');
        } else {
            container.classList.add('cursor-avancar');
            container.classList.remove('cursor-voltar');
        }
    });

    // 2. Lógica de Clique com Trava
    container.addEventListener('click', function(e) {
        if (e.target.id === 'btn-final') return;

        const larguraTela = window.innerWidth;
        const posicaoX = e.clientX;

        // Lógica de Voltar (Bloqueada se for a primeira imagem ou se estiver fora dos 30%)
        if (indiceAtual > 0 && posicaoX <= larguraTela * 0.3) {
            indiceAtual--;
            atualizarCena();
        } 
        // Lógica de Avançar (em 100% da tela se for a imagem 0, ou 70% finais se não for)
        else if (posicaoX > larguraTela * 0.3 || indiceAtual === 0) {
            if (indiceAtual < imagens.length - 1) {
                indiceAtual++;
                atualizarCena();
            }
        }
    });

    atualizarCena();
});