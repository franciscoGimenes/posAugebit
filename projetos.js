const articleProjetos = document.getElementById('projetos')
const fotoDiv = document.getElementById('fotoPerfil');

fotoDiv.addEventListener('click', () => {
    window.location.href = 'perfil.html'
})
function verificarImagemLocalStorage() {
    const imagemArmazenada = localStorage.getItem('imagemDataURL');
    if (imagemArmazenada) {
        fotoDiv.style.backgroundImage = `url(${imagemArmazenada})`;
        // Atualizando os atributos do link para download ao carregar a imagem armazenada
    }else{
        fotoDiv.style.backgroundImage = 'url("img/foto.png")';
        
        // Atualizando os atributos do link para download (removendo o link)
    }
}
function averiguarProjetos(){
    articleProjetos.innerHTML = ''
    for (let i = 0; i < 6; i++){
        let infosProjeto = JSON.parse(localStorage.getItem(`projeto${i+1}Data`))
        console.log(infosProjeto)
        const projeto = document.createElement('div')
        projeto.classList.add('projeto')
        projeto.id = `projeto${i+1}`
        const titulos = document.createElement('div')
        titulos.classList.add('titulos')
        projeto.appendChild(titulos)
        const img = document.createElement('div')
        const h3Titulo = document.createElement('h3')
        const h4Sub = document.createElement('h4')
        img.classList.add('img')
        h3Titulo.classList.add('titulo')
        h4Sub.classList.add('sub')
        titulos.appendChild(img)
        titulos.appendChild(h3Titulo)
        titulos.appendChild(h4Sub)
        articleProjetos.appendChild(projeto)
        projeto.setAttribute('data-projeto', `projeto${i+1}`)
        projeto.setAttribute('data-status', 'livre')
        projeto.classList.remove('selecionada')
        if (infosProjeto){
            // console.log('tem')
            img.style.display = 'none'
            h3Titulo.style.display = 'block'
            h4Sub.style.display = 'block'
            h3Titulo.innerHTML = infosProjeto.nome
            h4Sub.innerHTML = `Professor ${infosProjeto.mentor}`
            projeto.addEventListener('mouseover', () => {
                projeto.style.cursor = 'pointer'
            })
            projeto.addEventListener('click', () => mostrarProjetoDiv(i+1, infosProjeto.nome, infosProjeto.mentor, infosProjeto.desc, infosProjeto.diaInicio));
        }else{
            img.style.display = 'block'
            h3Titulo.style.display = 'none'
            h4Sub.style.display = 'none'
            img.style.backgroundImage = 'url(img/addImagem.png)'
            img .style.height = '60px'
            img.style.width = '60px'
            img.style.backgroundRepeat = 'no-repeat'
            // projeto.style.backgroundColor = '#9A99FF'
            projeto.classList.add('semNada')
            projeto.addEventListener('mouseover', () => {
                projeto.style.cursor = 'pointer'
            })
            projeto.addEventListener('click', () => criarProjetoDiv(i+1));
            
            
        }
        
    }
}

function criarProjetoDiv(projetoNum){
    
    localStorage.setItem('nData', projetoNum    )

    const divCriacao = document.getElementById('projetosInfos')
    divCriacao.innerHTML = `<form class="criarProjeto">
    <div class="inputFoto">
    <div class="inputs">
    <div class="inputDiv">
    <label for="nome">Nome do projeto:</label>
    <input id="nomeProjetoInput" name="nome" type="text">
    </div>
    <div class="inputDiv">
    <label for="desc">Descrição do projeto:</label>
    <textarea name="desc" id="descricaoProjetoInput" cols="30" rows="10"></textarea>
    </div>
    <div class="inputDiv">
    <label for="mentor">Escolher mentor</label>
    <select name="mentor" id="mentorProjetoInput">
    <option value="Marcos">Marcos</option>
    <option value="Pedro">Pedro</option>
    <option value="Victor">Victor</option>
    <option value="Brendon">Brendon</option>
    <option value="Joao">Joao</option>
    <option value="Juliana">Juliana</option>
    <option value="Francisco">Francisco</option>
    </select>
    </div>
    </div>
    <div class="forma">
    <img src="img/Group 6 (2).png" alt="">
    </div>
    </div>
    <button id="botaoEnviarFormularioCriacao">
    Enviar
    <div class="arrow-wrapper">
    <div class="arrow"></div>
    
    </div>
    </button>
    </form>`
    
    console.log(projetoNum)
    const BotaoEnviar = document.getElementById('botaoEnviarFormularioCriacao')
    BotaoEnviar.addEventListener('click', () => enviarInfosCriadas(projetoNum))
    selecaoProjeto()
}


function mostrarProjetoDiv(n, titulo, mentor, desc, data){
    localStorage.setItem('nData', n)

    const divCriacao = document.getElementById('projetosInfos')
    divCriacao.innerHTML = `<div class="geralDentro">
    <div class="infosChave">
        <div class="titulosData">
            <div class="titulos">
                <h2 class="titulo">${titulo}</h2>
                <h3 class="sub">${mentor}</h3>
            </div>
            <p class="dataInicio">${data}</p>
        </div>
        <div class="texto">
            <p class="texto">${desc}</p>
        </div>
    </div>
    <div class="desenvolvimento">
        Aguardando o relatório do professor...
        <button type="button" id="botaoApagar" class="buttono">
        <div class="button-top">Apagar Projeto</div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
    </div>
</div>`

const botaoApagar = document.getElementById('botaoApagar')
botaoApagar.addEventListener('click', () => apagarProjeto(n))
selecaoProjeto()
}

function apagarProjeto(n){
    console.log('oi')
    console.log(`projeto${n}`)
    localStorage.removeItem(`projeto${n}Data`)
    console.log(JSON.parse(localStorage.getItem(`projeto${n}Data`)))
    averiguarProjetos()
    location.reload()


}

function enviarInfosCriadas(n){
    const dataAtual = new Date();

    // Obter dia, mês e ano
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Lembre-se de que os meses começam do zero (janeiro é 0)
    const ano = String(dataAtual.getFullYear()).slice(-2); // Obter os últimos dois dígitos do ano

    // Formatar como 00/00/00
    const dataFormatada = `${dia}/${mes}/${ano}`;
    let nomeDoProjeto = document.getElementById('nomeProjetoInput').value
    let descDoProjeto = document.getElementById('descricaoProjetoInput').value
    let mentorDoProjeto = document.getElementById('mentorProjetoInput').value
    let projetoArray ={
        nome: nomeDoProjeto,
        desc: descDoProjeto,
        mentor: mentorDoProjeto,
        diaInicio: dataFormatada
    }
    console.log(`projeto${n}`)
    localStorage.setItem(`projeto${n}Data`, JSON.stringify(projetoArray))
    averiguarProjetos()

}

function selecaoProjeto(){


    let nAtual = localStorage.getItem('nData')
    averiguarProjetos()
    divSelecionada = document.getElementById(`projeto${nAtual}`)
    divSelecionada.classList.add('selecionada')


}


window.onload = () => {
    let nAtual = localStorage.getItem('nData')
    console.log(nAtual)
    let infosProjeto = JSON.parse(localStorage.getItem(`projeto${nAtual}Data`))
    if(infosProjeto){
        mostrarProjetoDiv(nAtual, infosProjeto.nome, infosProjeto.mentor, infosProjeto.desc, infosProjeto.diaInicio)
    }else{
        criarProjetoDiv(nAtual)
    }
    selecaoProjeto()
}

averiguarProjetos()
verificarImagemLocalStorage()
