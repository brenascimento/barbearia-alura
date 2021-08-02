campo = document.querySelector('.campo');
botoes = document.querySelectorAll('.button')

botoes.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    });
});



