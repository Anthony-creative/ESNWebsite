// 1. Inicializar los iconos de Lucide
lucide.createIcons();

// 2. Lógica para la animación del texto (Rendimiento, Fuerza, Energía...)
document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;

    if (words.length > 0) {
        setInterval(() => {
            const prevIndex = currentIndex;
            // Avanzar al siguiente índice, si llega al final vuelve a 0
            currentIndex = (currentIndex + 1) % words.length;

            // Mover la palabra actual hacia arriba (estado prev)
            words[prevIndex].className = 'word prev';
            
            // Mostrar la nueva palabra (estado active)
            words[currentIndex].className = 'word active';

            // Asegurar que las demás estén abajo esperando (estado next)
            words.forEach((word, i) => {
                if (i !== prevIndex && i !== currentIndex) {
                    word.className = 'word next';
                }
            });
        }, 2000); // Cambia la palabra cada 2 segundos (2000 ms)
    }
});