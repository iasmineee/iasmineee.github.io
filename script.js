const topImages = [
    'https://via.placeholder.com/300x300?text=Top+1',
    'https://via.placeholder.com/300x300?text=Top+2',
    'https://via.placeholder.com/300x300?text=Top+3',
    'https://via.placeholder.com/300x300?text=Top+4'
];

const bottomImages = [
    'https://via.placeholder.com/300x300?text=Bottom+1',
    'https://via.placeholder.com/300x300?text=Bottom+2',
    'https://via.placeholder.com/300x300?text=Bottom+3',
    'https://via.placeholder.com/300x300?text=Bottom+4'
];

let topIndex = 0;
let bottomIndex = 0;
let autoIntervalTop, autoIntervalBottom;

// Muda as imagens ao clicar nas setas
function changeImage(position, direction) {
    if (position === 'top') {
        topIndex = direction === 'next' ? (topIndex + 1) % topImages.length : (topIndex - 1 + topImages.length) % topImages.length;
        document.getElementById('top-image').src = topImages[topIndex];
    } else if (position === 'bottom') {
        bottomIndex = direction === 'next' ? (bottomIndex + 1) % bottomImages.length : (bottomIndex - 1 + bottomImages.length) % bottomImages.length;
        document.getElementById('bottom-image').src = bottomImages[bottomIndex];
    }
}

// Função para rotação automática
function autoRotate(position) {
    if (position === 'top') {
        clearInterval(autoIntervalTop);
        autoIntervalTop = setInterval(() => changeImage('top', 'next'), 2000);
    } else if (position === 'bottom') {
        clearInterval(autoIntervalBottom);
        autoIntervalBottom = setInterval(() => changeImage('bottom', 'next'), 2000);
    }
}
