// Função para alterar a parte de cima (camisa)
function changeTop(image) {
    document.getElementById('top-img').src = image;
}

// Função para alterar a parte de baixo (calça)
function changeBottom(image) {
    document.getElementById('bottom-img').src = image;
}

// Função para redirecionar para a nova página com as imagens selecionadas
function dressMe() {
    // Obtém as URLs das imagens selecionadas
    var topImg = document.getElementById('top-img').src;
    var bottomImg = document.getElementById('bottom-img').src;

    // Cria a URL com parâmetros query, passando as imagens como valores
    var url = "lookfinal.html?top=" + encodeURIComponent(topImg) + "&bottom=" + encodeURIComponent(bottomImg);

    // Redireciona para a nova página
    window.location.href = url;
}
