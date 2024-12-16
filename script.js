window.onload = () => {
    setTimeout(() => {
        // Remover a tela de carregamento após 0.75 segundos
        document.getElementById("loading-screen").style.display = "none";
        
        // Mostrar o conteúdo principal
        document.querySelector(".main-content").style.display = "block";

        // Adicionar uma classe 'loaded' ao body para aplicar o fundo
        document.body.classList.add("loaded");
    }, 950); // 0.75 segundos de atraso
};
