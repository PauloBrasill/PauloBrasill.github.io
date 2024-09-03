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
        }, 10);
    }, 1000); // Matches the fade-out duration
}
