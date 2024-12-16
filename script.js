window.onload = function () {
    // Mostra o fundo de leopardo após a animação do GIF
    setTimeout(function () {
        document.getElementById("opening-screen").classList.add("hidden");
        document.getElementById("background-screen").classList.remove("hidden");
    }, 750); // Após 0.75s (durante o gif)
};

// Função de navegação das imagens
function navigate(type, direction) {
    const topImages = [
        'https://via.placeholder.com/300x300.png?text=Top+1',
        'https://via.placeholder.com/300x300.png?text=Top+2',
        'https://via.placeholder.com/300x300.png?text=Top+3',
        'https://via.placeholder.com/300x300.png?text=Top+4',
        'https://via.placeholder.com/300x300.png?text=Top+5',
        'https://via.placeholder.com/300x300.png?text=Top+6'
    ];

    const bottomImages = [
        'https://via.placeholder.com/300x300.png?text=Calça+1',
        'https://via.placeholder.com/300x300.png?text=Calça+2',
        'https://via.placeholder.com/300x300.png?text=Calça+3',
        'https://via.placeholder.com/300x300.png?text=Calça+4',
        'https://via.placeholder.com/300x300.png?text=Calça+5',
        'https://via.placeholder.com/300x300.png?text=Calça+6'
    ];

    let imgArray, imgElement;
    if (type === 'top') {
        imgArray = topImages;
        imgElement = document.getElementById('top-img');
    } else if (type === 'bottom') {
        imgArray = bottomImages;
        imgElement = document.getElementById('bottom-img');
    }

    // Atualiza a imagem dependendo da direção (esquerda/direita)
    let currentIndex = imgArray.indexOf(imgElement.src);
    if (direction === 'left') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imgArray.length - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex < imgArray.length - 1) ? currentIndex + 1 : 0;
    }
    imgElement.src = imgArray[currentIndex];
}
