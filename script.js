// Define the options for each category
const tops = ["assets/tops/assets/Screenshot 2024-12-12 at 14.49.32.png", "assets/tops/top2.png"];
const bottoms = ["assets/bottoms/bottom1.png", "assets/bottoms/bottom2.png"];
const shoes = ["assets/shoes/shoes1.png", "assets/shoes/shoes2.png"];

// Function to create buttons dynamically for clothing options
function createClothingButtons(containerId, items, layerId) {
    const container = document.getElementById(containerId);
    items.forEach((item, index) => {
        const button = document.createElement("button");
        button.innerText = `Option ${index + 1}`;
        button.onclick = () => {
            document.getElementById(layerId).src = item;
        };
        container.appendChild(button);
    });
}

// Create clothing option buttons for each category
createClothingButtons("top-options", tops, "top-layer");
createClothingButtons("bottom-options", bottoms, "bottom-layer");
createClothingButtons("shoes-options", shoes, "shoes-layer");
