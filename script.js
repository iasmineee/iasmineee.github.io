// Função para alterar a parte de cima (camisa)
function changeTop(image) {
    document.getElementById('top-img').src = image;
}

// Função para alterar a parte de baixo (calça)
function changeBottom(image) {
    document.getElementById('bottom-img').src = image;
}

// Função para mostrar o avatar com as roupas escolhidas
function showAvatar() {
    // Mostrar o avatar com as roupas escolhidas
    document.getElementById('avatar-container').style.display = 'block';

    // Definir as roupas no avatar
    var topImage = document.getElementById('top-img').src;
    var bottomImage = document.getElementById('bottom-img').src;

    // Atualizar as imagens do avatar
    document.getElementById('avatar-top').src = topImage;
    document.getElementById('avatar-bottom').src = bottomImage;
}
