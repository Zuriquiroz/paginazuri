window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in'); 
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect(); 
        if (rect.top < window.innerHeight) {
            element.classList.add('visible'); 
        }
    });
});

const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    producto.addEventListener('mouseenter', () => {
        producto.style.transform = 'scale(1.05)';
        producto.style.transition = 'transform 0.3s ease';
    });

    producto.addEventListener('mouseleave', () => {
        producto.style.transform = 'scale(1)';
    });
});
