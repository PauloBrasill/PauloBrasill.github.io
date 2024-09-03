document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    enterButton.addEventListener('click', () => {
        welcomeScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});
