// Exibe o fundo de leopardo após o GIF inicial
window.onload = function () {
    setTimeout(function () {
        document.getElementById("opening-screen").classList.add("hidden");
        document.getElementById("main-screen").classList.remove("hidden");
    }, 950); // 0.95 segundos para o GIF
};

// Funções de navegação
function navigate(type, direction) {
    const topImages = [
        'https://via.placeholder.com/300x300.png?text=Top+1',
        'https://via.placeholder.com/300x300.png?text=Top+2',
        'https://via.placeholder.com/300x300.png?text=Top+3'
    ];

    const bottomImages = [
        'https://via.placeholder.com/300x300.png?text=Calça+1',
        'https://via.placeholder.com/300x300.png?text=Calça+2',
        'https://via.placeholder.com/300x300.png?text=Calça+3'
    ];

    let imgArray, imgElement;

    if (type === 'top') {
        imgArray = topImages;
        imgElement = document.getElementById('top-img');
    } else if (type === 'bottom') {
        imgArray = bott
