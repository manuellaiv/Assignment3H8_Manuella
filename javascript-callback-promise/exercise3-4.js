function loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');

        img.onload = function() {
            resolve(img);
        };

        img.onerror = function() {
            reject(new Error('Failed to load image'));
        };

        img.src = imageUrl;
    });
}

loadImage('https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg')
    .then(img => {
        console.log('Image loaded successfully');
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error loading image:', error.message);
    });
