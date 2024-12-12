// Dados de exemplo para tops, bottoms e shoes
const tops = ["assets/tops/top1.png", "assets/tops/top2.png"];
const bottoms = ["assets/bottoms/bottom1.png", "assets/bottoms/bottom2.png"];
const shoes = ["assets/shoes/shoes1.png", "assets/shoes/shoes2.png"];

// Função para criar os botões de seleção de roupas
function createButtons(categoryId, items, layerId) {
  const container = document.getElementById(categoryId);
  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.innerText = `Opção ${index + 1}`;
    button.onclick = () => {
      document.getElementById(layerId).src = item;
    };
    container.appendChild(button);
  });
}

// Inicializa as opções de roupas
createButtons("top-options", tops, "top-layer");
createButtons("bottom-options", bottoms, "bottom-layer");
createButtons("shoes-options", shoes, "shoes-layer");
