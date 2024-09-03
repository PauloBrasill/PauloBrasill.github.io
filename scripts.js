document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    btn1.addEventListener('click', () => {
        alert('Botão 1 clicado!');
    });

    btn2.addEventListener('click', () => {
        alert('Botão 2 clicado!');
    });
});
