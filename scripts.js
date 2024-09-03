function fadeTransition() {
    const initialScreen = document.getElementById('initial-screen');
    const content = document.getElementById('content');

    // Fade out initial screen
    initialScreen.style.opacity = 0;
    setTimeout(() => {
        initialScreen.style.display = 'none';
        content.style.display = 'flex';
        // Trigger fade in for content
        setTimeout(() => {
            content.classList.add('fade-in');
        }, 100); // Pequeno atraso para garantir que a transição seja visível
    }, 500); // Duração do fade-out
}

// Fade in effect for initial screen
window.onload = () => {
    const initialScreen = document.getElementById('initial-screen');
    initialScreen.style.opacity = 1;
};
