function fadeTransition() {
    const initialScreen = document.getElementById('initial-screen');
    const content = document.getElementById('content');

    // Fade out the initial screen
    initialScreen.style.transition = "opacity 1s ease-in-out";
    initialScreen.style.opacity = 0;

    // After fade out, hide initial screen and show content with fade in
    setTimeout(() => {
        initialScreen.style.display = 'none';
        content.classList.remove('hidden');
        content.style.opacity = 0;
        content.style.display = 'flex';

        // Fade in the content
        setTimeout(() => {
            content.style.transition = "opacity 1s ease-in-out";
            content.style.opacity = 1;
        }, 10); // Small delay to trigger the transition
    }, 1000); // Match this duration to the fade-out transition time
}

// Initial fade-in effect for the first screen
window.onload = () => {
    const initialScreen = document.getElementById('initial-screen');
    initialScreen.style.opacity = 1;
};
