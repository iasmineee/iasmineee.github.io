// Função para alterar a parte de cima (camisa)
function changeTop(image) {
    document.getElementById('top-img').src = image;
}

// Função para alterar a parte de baixo (calça)
function changeBottom(image) {
    document.getElementById('bottom-img').src = image;
}

// Função para exibir o look final após clicar em "Dress Me"
function dressMe() {
    var topImg = document.getElementById('top-img').src;
    var bottomImg = document.getElementById('bottom-img').src;

    document.getElementById('avatar-top').src = topImg;
    document.getElementById('avatar-bottom').src = bottomImg;

    document.getElementById('avatar-container').style.display = 'block'; // Exibe o look final
    document.getElementById('dress-me-btn').style.display = 'none'; // Esconde o botão "Dress Me"
    document.getElementById('browse-btn').style.display = 'none'; // Esconde o botão "Browse"
}

// Função para reiniciar o processo e esconder o look final
function browse() {
    document.getElementById('avatar-container').style.display = 'none'; // Esconde o look final
    document.getElementById('dress-me-btn').style.display = 'inline-block'; // Exibe o botão "Dress Me"
    document.getElementById('browse-btn').style.display = 'inline-block'; // Exibe o botão "Browse"
}
