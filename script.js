const topImage = document.getElementById('top-image');
const bottomImage = document.getElementById('bottom-image');
const randomizeButton = document.getElementById('randomize-button');
const saveButton = document.getElementById('save-button');

const tops = ['images/top1.png', 'images/top2.png', 'images/top3.png'];
const bottoms = ['images/bottom1.png', 'images/bottom2.png', 'images/bottom3.png'];

randomizeButton.addEventListener('click', () => {
    const randomTop = tops[Math.floor(Math.random() * tops.length)];
    const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    topImage.src = randomTop;
    bottomImage.src = randomBottom;
});

saveButton.addEventListener('click', () => {
    // Aqui você implementaria a funcionalidade de salvar o look.
    // Por exemplo, poderia adicionar o look a uma lista, salvar em um arquivo, etc.
    alert('Look salvo com sucesso!');
});
