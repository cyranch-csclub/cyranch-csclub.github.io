document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('background-grid');
    if (!grid) return;

    const imageUrls = [
        'images/grid/5342137489556419524.webp',
        'images/grid/meeting2.webp',
        'images/grid/meeting1.webp',
        'images/grid/IMG_2384.webp',
        'images/grid/IMG_2392.webp',
        'images/grid/IMG_1583.webp',
        'images/grid/IMG_6211.webp',
        'images/grid/IMG_6207.webp',
        'images/grid/IMG_6210.webp',
        'images/grid/IMG_1515.webp',
        'images/grid/IMG_1914.webp',
        'images/grid/IMG_2441.webp',
        'images/grid/327757014875749425.webp',
        'images/grid/IMG_6208.webp',
        'images/grid/IMG_6203.webp',
        'images/grid/5972122982725126490.webp',
        'images/grid/ducks.webp',
        'images/grid/IMG_2689.webp',
        'images/grid/groupPic.webp',
        'images/grid/IMG_2451.webp',
        'images/grid/IMG_6214.webp',
        'images/grid/IMG_4045.webp',
        'images/grid/PXL_20250329_005146265.MP.webp',
    ];

    // preload images for smoother transitions
    imageUrls.forEach(url => {
        new Image().src = url;
    });

    const tiles = [];
    const tileCount = 120; // enough to fill large screens

    for (let i = 0; i < tileCount; i++) {
        const tile = document.createElement('div');
        tile.className = 'w-full h-auto aspect-[4/3] bg-cover bg-center transition-opacity duration-1000 ease-in-out';
        
        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        tile.style.backgroundImage = `url(${randomImage})`;
        
        grid.appendChild(tile);
        tiles.push(tile);
    }

    const changeImage = () => {
        if (tiles.length === 0) return;

        const tile = tiles[Math.floor(Math.random() * tiles.length)];
        const newImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        // fade out
        tile.style.opacity = 0;

        setTimeout(() => {
            tile.style.backgroundImage = `url(${newImage})`;
            // fade in
            tile.style.opacity = 1;
        }, 1000); // corresponds to transition duration
    };

    setInterval(changeImage, 200); // change a tile every 200ms
}); 