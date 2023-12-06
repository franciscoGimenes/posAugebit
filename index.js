function averiguarProjetos(){
    for(let i = 0; i < 6; i++){
        let infosProjeto = localStorage.getItem(`projeto${i+1}Data`)
        let imgProjeto = document.getElementById(`imagem${i+1}`)
        let tituloProjeto = document.getElementById(`titulo${i+1}`)
        let subProjeto = document.getElementById(`sub${i+1}`)
        let divProjeto = document.getElementById(`projeto${i+1}`)
        if (infosProjeto){

        }else{
            console.log('naotem' + i)
            tituloProjeto.style.display = 'none'
            subProjeto.style.display = 'none'
            imgProjeto.style.display = 'block'
            imgProjeto.style.backgroundImage = 'url(img/addImagem.png)'
            imgProjeto.style.height = '60px'
            imgProjeto.style.width = '60px'
            imgProjeto.style.backgroundRepeat = 'no-repeat'
            divProjeto.style.backgroundColor = '#9A99FF'
            divProjeto.addEventListener('mouseover', () => {
                divProjeto.style.cursor = 'pointer'
            })
        }
    }
}
averiguarProjetos()