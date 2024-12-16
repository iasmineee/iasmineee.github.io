// Função para alterar a parte de cima (camisa)
function changeTop(image) {
    document.getElementById('top-img').src = image;
}

// Função para alterar a parte de baixo (calça)
function changeBottom(image) {
    document.getElementById('bottom-img').src = image;
}

// Função para criar um look automático
function createRandomLook() {
    // Lista de camisas e calças como exemplo
    var tops = [
        'https://via.placeholder.com/300x300.png?text=Camisa+1',
        'https://via.placeholder.com/300x300.png?text=Camisa+2',
        'https://via.placeholder.com/300x300.png?text=Camisa+3'
    ];
    var bottoms = [
        'https://via.placeholder.com/300x300.png?text=Calça+1',
        'https://via.placeholder.com/300x300.png?text=Calça+2',
        'https://via.placeholder.com/300x300.png?text=Calça+3'
    ];

    // Selecionando aleatoriamente uma camisa e uma calça
    var randomTop = tops[Math.floor(Math.random() * tops.length)];
    var randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];

    // Alterando as imagens
    changeTop(randomTop);
    changeBottom(randomBottom);
}

// Função para redirecionar para a página do look final
function dressMe() {
    // Obtém as URLs das imagens selecionadas
    var topImg = document.getElementById('top-img').src;
    var bottomImg = document.getElementById('bottom-img').src;

    // Cria a URL com parâmetros query, passando as imagens como valores
    var url = "lookfinal.html?top=" + encodeURIComponent(topImg) + "&bottom=" + encodeURIComponent(bottomImg);

    // Redireciona para a nova página
    window.location.href = url;
}

// Botão "Browse para Look Automático"
document.getElementById('browse-btn').addEventListener('click', function() {
    createRandomLook(); // Cria o look automaticamente
});
