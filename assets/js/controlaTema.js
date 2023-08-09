// Script para controlar a troca de temas da página

(() => {
    const botaoTema = document.querySelector('[data-botao-tema]')

    const trocaTema = () => {
        document.body.classList.toggle('tema-escuro')
    }

    botaoTema.addEventListener('click', trocaTema)
})

()