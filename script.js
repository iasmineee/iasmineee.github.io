window.onload = () => {
    setTimeout(() => {
        // Remover a tela de carregamento após 1 segundo (1000ms)
        document.getElementById("loading-screen").style.display = "none";
        
        // Mostrar o conteúdo principal
        document.querySelector(".main-content").style.display = "block";

        // Adicionar uma classe 'loaded' ao body para aplicar o fundo
        document.body.classList.add("loaded");
    }, 1000); // 1 segundo de atraso
};
