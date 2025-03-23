// Obtener el contenedor
const container = document.getElementById('container');

// Número de corazones flotantes
const numberOfHearts = 50;

// Crear corazones flotantes
for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating_heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    container.appendChild(heart);
}

// Animar corazones flotantes
function animateHearts() {
    const hearts = document.querySelectorAll('.floating_heart');
    hearts.forEach((heart) => {
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    });
}

// Actualizar corazones cada 5 segundos
setInterval(animateHearts, 5000);
