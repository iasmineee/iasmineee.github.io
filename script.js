// Funções para alterar as imagens
function changeTop(direction) {
    const topImages = [
        "https://via.placeholder.com/300x300.png?text=Top+1",
        "https://via.placeholder.com/300x300.png?text=Top+2",
        "https://via.placeholder.com/300x300.png?text=Top+3"
    ];

    let currentTop = topImages.indexOf(document.getElementById('top-img').src);

    currentTop += direction;

    if (currentTop >= topImages.length) currentTop = 0;
    if (currentTop < 0) currentTop = topImages.length - 1;

    document.getElementById('top-img').src = topImages[currentTop];
}

function changeBottom(direction) {
    const bottomImages = [
        "https://via.placeholder.com/300x300.png?text=Bottom+1",
        "https://via.placeholder.com/300x300.png?text=Bottom+2",
        "https://via.placeholder.com/300x300.png?text=Bottom+3"
    ];

    let currentBottom = bottomImages.indexOf(document.getElementById('bottom-img').src);

    currentBottom += direction;

    if (currentBottom >= bottomImages.length) currentBottom = 0;
    if (currentBottom < 0) currentBottom = bottomImages.length - 1;

    document.getElementById('bottom-img').src = bottomImages[currentBottom];
}

// Função para o Auto Browse
function autoBrowse() {
    const topImages = [
        "https://via.placeholder.com/300x300.png?text=Top+1",
        "https://via.placeholder.com/300x300.png?text=Top+2",
        "https://via.placeholder.com/300x300.png?text=Top+3"
    ];
    const bottomImages = [
        "https://via.placeholder.com/300x300.png?text=Bottom+1",
        "https://via.placeholder.com/300x300.png?text=Bottom+2",
        "https://via.placeholder.com/300x300.png?text=Bottom+3"
    ];

    const randomTop = Math.floor(Math.random() * topImages.length);
    const randomBottom = Math.floor(Math.random() * bottomImages.length);

    document.getElementById('top-img').src = topImages[randomTop];
    document.getElementById('bottom-img').src = bottomImages[randomBottom];
}

// Função para o Dress Me
function dressMe() {
    document.getElementById('main-content').innerHTML = `<h2>Your look is ready!</h2>`;
}

// Aguardar 0.75 segundos antes de exibir o conteúdo principal
window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 750); // 0.75 segundos de delay
};
