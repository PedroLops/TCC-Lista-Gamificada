document.addEventListener('DOMContentLoaded', function() {
    
    // Selecionamos todos os botões de alvo
    const botoesAlvo = document.querySelectorAll('.btn-attack');

    botoesAlvo.forEach(botao => {
        botao.addEventListener('click', function() {
            // Pegamos o ID do botão clicado (ex: 'btn-a')
            const idClicado = this.id;

            // O Switch avalia qual ID foi acionado
            switch (idClicado) {
                case 'btn-a':
                    window.location.href = "../dungeon2/d2q5-errado.html";
                    break;
                case 'btn-b':
                    window.location.href = "../dungeon2/d2q5-certo.html";
                    break;
                case 'btn-c':
                    window.location.href = "../dungeon2/d2q5-errado.html";
                    break;
                case 'btn-d':
                    window.location.href = "../dungeon2/d2q5-errado.html";
                    break;
            }
        });
    });
});