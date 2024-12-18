// Arrays de imagens para os quadrados superior e inferior
const topImages = [
    'https://via.placeholder.com/300?text=Top+1',
    'https://via.placeholder.com/300?text=Top+2',
    'https://via.placeholder.com/300?text=Top+3',
    'https://via.placeholder.com/300?text=Top+4'
];

const bottomImages = [
    'https://via.placeholder.com/300?text=Bottom+1',
    'https://via.placeholder.com/300?text=Bottom+2',
    'https://via.placeholder.com/300?text=Bottom+3',
    'https://via.placeholder.com/300?text=Bottom+4'
];

let topIndex = 0;
let bottomIndex = 0;

// Mostrar a área principal após 1 segundo
window.onload = function() {
    setTimeout(() => {
        document.getElementById('gif-container').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 1000); // 1 segundo
};

// Função para recomeçar a sequência
function restartSequence(area) {
    if (area === 'top') {
        topIndex = 0;
        document.getElementById('top-image').src = topImages[topIndex];
    } else {
        bottomIndex = 0;
        document.getElementById('bottom-image').src = bottomImages[bottomIndex];
    }
}

// Função para mostrar a próxima imagem (Play)
function showNextImage(area) {
    if (area === 'top') {
        topIndex = (topIndex + 1) % topImages.length;
        document.getElementById('top-image').src = topImages[topIndex];
    } else {
        bottomIndex = (bottomIndex + 1) % bottomImages.length;
        document.getElementById('bottom-image').src = bottomImages[bottomIndex];
    }
}

// Função para ir para o fim da sequência
function goToEnd(area) {
    if (area === 'top') {
        topIndex = topImages.length - 1;
        document.getElementById('top-image').src = topImages[topIndex];
    } else {
        bottomIndex = bottomImages.length - 1;
        document.getElementById('bottom-image').src = bottomImages[bottomIndex];
    }
}
