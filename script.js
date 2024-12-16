// Arrays com imagens de tops e bottoms
const tops = [
    "https://via.placeholder.com/300x300.png?text=Top+1",
    "https://via.placeholder.com/300x300.png?text=Top+2",
    "https://via.placeholder.com/300x300.png?text=Top+3"
];

const bottoms = [
    "https://via.placeholder.com/300x300.png?text=Bottom+1",
    "https://via.placeholder.com/300x300.png?text=Bottom+2",
    "https://via.placeholder.com/300x300.png?text=Bottom+3"
];

// Índices atuais
let topIndex = 0;
let bottomIndex = 0;

// Funções para navegar entre as imagens
function navigateTop(direction) {
    topIndex = (topIndex + direction + tops.length) % tops.length;
    document.getElementById("top-img").src = tops[topIndex];
}

function navigateBottom(direction) {
    bottomIndex = (bottomIndex + direction + bottoms.length) % bottoms.length;
    document.getElementById("bottom-img").src = bottoms[bottomIndex];
}

// Ocultar GIF e mostrar conteúdo principal
window.onload = function () {
    setTimeout(() => {
        document.getElementById("gif-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 1000); // Tempo de exibição do GIF (1 segundo)
};
