// Animación simplificada para la biblioteca personalizada
document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const header = document.querySelector('#header');
    const cards = document.querySelectorAll('.card');

    // Animación de entrada del encabezado
    header.style.opacity = '0';
    header.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 300);

    // IntersectionObserver para animar tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Detener observación una vez animado
            }
        });
    });

    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
});
