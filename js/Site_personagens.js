const pesquisaImagem = document.getElementById("pesquisa-imagem")
const search = document.getElementById("search")
const buttonPesquisar = document.querySelector(".button-pesquisar")
const info = document.getElementById("info")


let personagemInicial = 'naruto uzumaki'
const pesquisaAnime  = async (manga) => {
        const response = await fetch(`https://api.jikan.moe/v4/characters?q=${manga}`)
        const data = await response.json()
        // const pesquisaImagem = ""
        console.log(data)
        pesquisaImagem.src = data.data[0].images.jpg.image_url
        info.innerHTML = data.data[0].name
}


buttonPesquisar.addEventListener("click", () => {
    pesquisaAnime(search.value)
    search.value = ""
})

pesquisaAnime(personagemInicial)