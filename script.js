// Aguarda os tempos definidos e controla as telas
window.onload = function() {
    setTimeout(() => {
        // Oculta a tela de abertura e mostra a tela de fundo
        document.getElementById('opening-screen').classList.add('hidden');
        document.getElementById('background-screen').classList.remove('hidden');

        setTimeout(() => {
            // Oculta a tela de fundo e mostra o conteúdo principal
            document.getElementById('background-screen').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
        }, 500); // 0.5 segundos
    }, 2000); // 2 segundos
};

// Funções para navegação de imagens
let topImages = [
    'https://via.placeholder.com/300x300.png?text=Camisa+1',
    'https://via.placeholder.com/300x300.png?text=Camisa+2',
    'https://via.placeholder.com/300x300.png?text=Camisa+3'
];

let bottomImages = [
    'https://via.placeholder.com/300x300.png?text=Calça+1',
    'https://via.placeholder.com/300x300.png?text=Calça+2',
    'https://via.placeholder.com/300x300.png?text=Calça+3'
];

let topIndex = 0;
let bottomIndex = 0;

function moveLeft(part) {
    if (part === 'top') {
        topIndex = (topIndex - 1 + topImages.length) % topImages.length;
        document.getElementById('top-img').src = topImages[topIndex];
    } else {
        bottomIndex = (bottomIndex - 1 + bottomImages.length) % bottomImages.length;
        document.getElementById('bottom-img').src = bottomImages[bottomIndex];
    }
}

function moveRight(part) {
    if (part === 'top') {
        topIndex = (topIndex + 1) % topImages.length;
        document.getElementById('top-img').src = topImages[topIndex];
    } else {
        bottomIndex = (bottomIndex + 1) % bottomImages.length;
        document.getElementById('bottom-img').src = bottomImages[bottomIndex];
    }
}

// AUTO BROWSE - Look aleatório
function autoBrowse() {
    topIndex = Math.floor(Math.random() * topImages.length);
    bottomIndex = Math.floor(Math.random() * bottomImages.length);
    document.getElementById('top-img').src = topImages[topIndex];
    document.getElementById('bottom-img').src = bottomImages[bottomIndex];
}

// DRESS ME - Simples alerta (exemplo)
function dressMe() {
    alert("Look Finalizado!");
}
