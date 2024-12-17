// Exibe o conteúdo principal após o GIF inicial
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById('gif-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 1000); // Tempo do GIF (1 segundo)
});

// Funções para trocar imagens dos "tops" e "bottoms"
function changeTop(direction) {
    console.log(`Change top: ${direction}`);
    // Adicione a lógica aqui para trocar as imagens
}

function changeBottom(direction) {
    console.log(`Change bottom: ${direction}`);
    // Adicione a lógica aqui para trocar as imagens
}
