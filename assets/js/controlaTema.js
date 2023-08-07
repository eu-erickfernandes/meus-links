// Script para controlar a troca de temas da página

(() => {
    const botaoTema = document.querySelector('[data-botao-tema]')
    const imagemCapa = document.querySelector('[data-imagem-capa]')

    const trocaTema = () => {
        document.body.classList.toggle('modo-escuro')
    }

    botaoTema.addEventListener('click', trocaTema)
})

()