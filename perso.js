const fotoDiv = document.getElementById('fotoPerfilDiv'),
    camadaEditarPerfil = document.getElementById('porCima')


fotoDiv.addEventListener('mouseenter', () => {
    camadaEditarPerfil.style.display = 'flex'
})
fotoDiv.addEventListener('mouseleave', () => {
    camadaEditarPerfil.style.display = 'none'
})
fotoDiv.addEventListener('click', () => {
    console.log('oi')
    window.location.href = 'perfil.html'
})
function verificarImagemLocalStorage() {
    const imagemArmazenada = localStorage.getItem('imagemDataURL');
    const NomeArmazenado = localStorage.getItem('nomeData')
    if (NomeArmazenado) {
        console.log('temnome')
        const nome = document.getElementById('nome')
        nome.innerHTML = NomeArmazenado
    }
    if (imagemArmazenada) {
        console.log('tem')
        const fotoPerfil = document.getElementById('fotoDePerfil');
        fotoPerfil.style.backgroundImage = `url(${imagemArmazenada})`;
        // Atualizando os atributos do link para download ao carregar a imagem armazenada
        // downloadLink.href = imagemArmazenada;
        // downloadLink.download = 'foto.png';
    }
}
verificarImagemLocalStorage()