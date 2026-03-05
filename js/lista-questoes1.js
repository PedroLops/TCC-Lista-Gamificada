
// Redirecionamento de botões de Aceitar Missão
document.addEventListener('DOMContentLoaded', function() {
    
    const btnAccept1 = document.getElementById('btn-accept-1');
    const btnAccept2 = document.getElementById('btn-accept-2');
    const btnAccept3 = document.getElementById('btn-accept-3');
    const btnAccept4 = document.getElementById('btn-accept-4');
    const btnAccept5 = document.getElementById('btn-accept-5');

    // Verificamos se o botão realmente existe para evitar novos erros
    if (btnAccept1) {
        btnAccept1.addEventListener('click', function() {
            window.location.href = "dungeon1/d1q1.html";
        });
    }

    // POP-UP história
    // Seleciona todos os botões que possuem a classe btn-accept
    const botoesMissao = document.querySelectorAll('.btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBox = document.querySelector('.modal-content');
    const btnClose = document.getElementById('close-modal');

    botoesMissao.forEach(botao => {
        botao.addEventListener('click', function() {
            // 1. Pega o caminho da imagem que está no atributo data-img do botão clicado
            const imagemCaminho = this.getAttribute('data-img');

            // 2. Aplica essa imagem ao fundo da caixa do modal
            modalBox.style.backgroundImage = `url('${imagemCaminho}')`;

            // 3. Abre o modal
            modalOverlay.style.display = 'flex';
            document.body.classList.add('no-scroll');
        });
    });

    // Função para fechar (mesma de antes)
    function fecharModal() {
        modalOverlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
        modalBox.style.backgroundImage = ''; // Limpa a imagem ao fechar
    }

    btnClose.addEventListener('click', fecharModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) fecharModal();
    });

});