// Lista de imagens para cada quadrado
const topImages = [
    'https://via.placeholder.com/300?text=Top+1',
    'https://via.placeholder.com/300?text=Top+2',
    'https://via.placeholder.com/300?text=Top+3',
    'https://via.placeholder.com/300?text=Top+4',
    'https://via.placeholder.com/300?text=Top+5',
    'https://via.placeholder.com/300?text=Top+6'
];

const bottomImages = [
    'https://via.placeholder.com/300?text=Bottom+1',
    'https://via.placeholder.com/300?text=Bottom+2',
    'https://via.placeholder.com/300?text=Bottom+3',
    'https://via.placeholder.com/300?text=Bottom+4',
    'https://via.placeholder.com/300?text=Bottom+5',
    'https://via.placeholder.com/300?text=Bottom+6'
];

// Índices das imagens
let topIndex = 0;
let bottomIndex = 0;

// Função para alternar as imagens
function changeImage(position, direction) {
    if (position === 'top') {
        if (direction === 'up') {
            topIndex = (topIndex - 1 + topImages.length) % topImages.length;
        } else if (direction === 'down') {
            topIndex = (topIndex + 1) % topImages.length;
        }
        document.getElementById('top-image').src = topImages[topIndex];
    } else if (position === 'bottom') {
        if (direction === 'up') {
            bottomIndex = (bottomIndex - 1 + bottomImages.length) % bottomImages.length;
        } else if (direction === 'down') {
            bottomIndex = (bottomIndex + 1) % bottomImages.length;
        }
        document.getElementById('bottom-image').src = bottomImages[bottomIndex];
    }
}
