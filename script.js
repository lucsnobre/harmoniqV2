// Elementos do DOM
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentCover = document.getElementById('current-cover');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const progressFilled = document.querySelector('.progress-filled');
const featuredMusic = document.getElementById('featured-music');
const recentMusic = document.getElementById('recent-music');
const volumeSlider = document.querySelector('.volume-slider');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');

// Estado do player
let isPlaying = false;
let currentTrack = null;
let audio = new Audio();
let playlist = [];
let isShuffle = false;
let repeatMode = 'none'; // none, one, all

// Função para formatar o tempo
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Função para carregar uma música
function loadTrack(track) {
    currentTrack = track;
    currentCover.src = track.capa;
    currentTitle.textContent = track.titulo;
    currentArtist.textContent = track.artista;
    audio.src = track.audio;
    audio.load();
    
    // Adicionar efeito de fade na capa
    currentCover.style.opacity = '0';
    setTimeout(() => {
        currentCover.style.opacity = '1';
    }, 100);
}

// Função para tocar/pausar
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

// Função para embaralhar a playlist
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleButton.style.color = isShuffle ? 'var(--primary)' : 'var(--text-secondary)';
    if (isShuffle) {
        playlist = [...playlist].sort(() => Math.random() - 0.5);
    } else {
        loadMusic();
    }
}

// Função para alternar o modo de repetição
function toggleRepeat() {
    switch (repeatMode) {
        case 'none':
            repeatMode = 'one';
            repeatButton.style.color = 'var(--primary)';
            break;
        case 'one':
            repeatMode = 'all';
            repeatButton.innerHTML = '<i class="fas fa-redo-alt"></i>';
            break;
        case 'all':
            repeatMode = 'none';
            repeatButton.style.color = 'var(--text-secondary)';
            repeatButton.innerHTML = '<i class="fas fa-redo"></i>';
            break;
    }
}

// Função para controlar o volume
function setVolume(value) {
    audio.volume = value / 100;
}

// Função para tocar próxima música
function playNext() {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
        return;
    }

    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    let nextIndex;

    if (isShuffle) {
        nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
        nextIndex = (currentIndex + 1) % playlist.length;
    }

    if (nextIndex === 0 && repeatMode !== 'all') {
        isPlaying = false;
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        return;
    }

    loadTrack(playlist[nextIndex]);
    if (isPlaying) {
        audio.play();
    }
}

// Função para tocar música anterior
function playPrev() {
    const currentIndex = playlist.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(playlist[prevIndex]);
    if (isPlaying) {
        audio.play();
    }
}

// Função para criar um card de música
function createMusicCard(track) {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.setAttribute('data-id', track.id);
    card.innerHTML = `
        <img src="${track.capa}" alt="${track.titulo}">
        <h3>${track.titulo}</h3>
        <p>${track.artista}</p>
    `;
    card.addEventListener('click', () => {
        loadTrack(track);
        togglePlay();
    });
    return card;
}

// Função para criar um item de música na lista
function createMusicItem(track) {
    const item = document.createElement('div');
    item.className = 'music-item';
    item.innerHTML = `
        <img src="${track.capa}" alt="${track.titulo}">
        <div>
            <h3>${track.titulo}</h3>
            <p>${track.artista}</p>
        </div>
    `;
    item.addEventListener('click', () => {
        loadTrack(track);
        togglePlay();
    });
    return item;
}

// Função para carregar músicas da API
async function loadMusic() {
    try {
        const response = await fetch('http://localhost:3000/musicas');
        const tracks = await response.json();
        playlist = tracks;
        
        // Limpar seções
        featuredMusic.innerHTML = '';
        recentMusic.innerHTML = '';
        
        // Carregar músicas em destaque
        tracks.slice(0, 6).forEach(track => {
            featuredMusic.appendChild(createMusicCard(track));
        });
        addMusicCardListeners();

        // Carregar músicas recentes
        tracks.slice(0, 5).forEach(track => {
            recentMusic.appendChild(createMusicItem(track));
        });

        // Carregar a primeira música
        if (tracks.length > 0) {
            loadTrack(tracks[0]);
        }
    } catch (error) {
        console.error('Erro ao carregar músicas:', error);
    }
}

// Função para buscar músicas
async function searchMusic(query) {
    try {
        const response = await fetch(`http://localhost:3000/musicas/buscar/${query}`);
        const tracks = await response.json();
        
        // Limpar resultados anteriores
        featuredMusic.innerHTML = '';
        recentMusic.innerHTML = '';
        
        // Exibir resultados da busca
        tracks.forEach(track => {
            featuredMusic.appendChild(createMusicCard(track));
        });
        addMusicCardListeners();
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
    }
}

// Função para buscar e exibir detalhes da música
async function showMusicDetails(musicId) {
    const modal = document.getElementById('music-details-modal');
    const modalBody = document.getElementById('music-details-body');
    modalBody.innerHTML = '<p>Carregando...</p>';
    modal.classList.add('active');

    try {
        // Buscar dados da música
        const musicRes = await fetch(`http://localhost:3000/musicas/${musicId}`);
        const music = await musicRes.json();

        // Buscar dados relacionados
        const [artista, album, genero, gravadora] = await Promise.all([
            music.artista_id ? fetch(`http://localhost:3000/artistas/${music.artista_id}`).then(r => r.json()) : null,
            music.album_id ? fetch(`http://localhost:3000/albuns/${music.album_id}`).then(r => r.json()) : null,
            music.genero_id ? fetch(`http://localhost:3000/generos/${music.genero_id}`).then(r => r.json()) : null,
            music.gravadora_id ? fetch(`http://localhost:3000/gravadoras/${music.gravadora_id}`).then(r => r.json()) : null
        ]);

        // Montar HTML dos detalhes
        modalBody.innerHTML = `
            <img src="${music.capa || 'https://via.placeholder.com/120'}" alt="Capa do álbum">
            <h2>${music.titulo}</h2>
            <p>${artista ? artista.nome : ''}</p>
            <dl class="details-list">
                <dt>Álbum</dt>
                <dd>${album ? album.titulo : '-'}</dd>
                <dt>Gênero</dt>
                <dd>${genero ? genero.nome : '-'}</dd>
                <dt>Gravadora</dt>
                <dd>${gravadora ? gravadora.nome : '-'}</dd>
                <dt>Duração</dt>
                <dd>${music.duracao || '-'}</dd>
            </dl>
        `;
    } catch (err) {
        modalBody.innerHTML = '<p>Erro ao carregar detalhes da música.</p>';
    }
}

// Fechar modal
const closeMusicDetails = document.getElementById('close-music-details');
if (closeMusicDetails) {
    closeMusicDetails.addEventListener('click', () => {
        document.getElementById('music-details-modal').classList.remove('active');
    });
}

// Adicionar evento aos cards de música
function addMusicCardListeners() {
    document.querySelectorAll('.music-card').forEach(card => {
        card.addEventListener('click', function (e) {
            const musicId = this.dataset.id;
            if (musicId) {
                showMusicDetails(musicId);
            }
        });
    });
}

// Event Listeners
playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrev);
nextButton.addEventListener('click', playNext);
shuffleButton.addEventListener('click', toggleShuffle);
repeatButton.addEventListener('click', toggleRepeat);

volumeSlider.addEventListener('input', (e) => {
    setVolume(e.target.value);
});

audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = `${percent}%`;
    currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
    if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
    } else {
        playNext();
    }
});

// Event listener para a barra de busca
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length >= 2) {
        window.location.href = `buscar.html?q=${encodeURIComponent(query)}`;
    }
});

// Carregar músicas quando a página carregar
document.addEventListener('DOMContentLoaded', loadMusic);

// Adicionar event listeners para os botões de navegação
document.querySelectorAll('.section-controls button').forEach(button => {
    button.addEventListener('click', (e) => {
        const direction = e.target.closest('button').querySelector('i').classList.contains('fa-chevron-left') ? 'left' : 'right';
        const sectionId = e.target.closest('section').querySelector('.music-grid, .music-list').id;
        scrollSection(direction, sectionId);
    });
});

// Função para rolar as seções
function scrollSection(direction, sectionId) {
    const section = document.getElementById(sectionId);
    const scrollAmount = direction === 'left' ? -400 : 400;
    section.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
} 