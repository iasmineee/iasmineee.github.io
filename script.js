// Aguarda 1 segundo e exibe a tela principal
window.onload = function () {
    setTimeout(() => {
        document.getElementById('opening-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
    }, 1000); // 1 segundo (1000ms)
};

// Função para navegar entre opções de roupas
function navigate(type, direction) {
    console.log(`Navegando ${direction} nas opções de ${type}`);
}

// Função para criar um look automático
function autoBrowse() {
    console.log("Criando look automático...");
}

// Função para confirmar look
function dressMe() {
    console.log("Look finalizado!");
}
