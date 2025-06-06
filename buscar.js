// Elementos do DOM
const searchInput = document.querySelector('.search-bar input');
const searchResults = document.getElementById('search-results');
const suggestions = document.getElementById('suggestions');
const filterButtons = document.querySelectorAll('.filter-btn');

// Estado da busca
let currentFilter = 'all';
let searchTimeout = null;

// Função para criar um card de música
function createMusicCard(track) {
    const card = document.createElement('div');
    card.className = 'music-card';
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

// Função para criar um card de artista
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'music-card artist-card';
    card.innerHTML = `
        <img src="${artist.foto}" alt="${artist.nome}">
        <h3>${artist.nome}</h3>
        <p>${artist.musicas} músicas</p>
    `;
    card.addEventListener('click', () => {
        // Implementar navegação para página do artista
        console.log('Navegar para artista:', artist.nome);
    });
    return card;
}

// Função para criar um card de álbum
function createAlbumCard(album) {
    const card = document.createElement('div');
    card.className = 'music-card album-card';
    card.innerHTML = `
        <img src="${album.capa}" alt="${album.titulo}">
        <h3>${album.titulo}</h3>
        <p>${album.artista}</p>
    `;
    card.addEventListener('click', () => {
        // Implementar navegação para página do álbum
        console.log('Navegar para álbum:', album.titulo);
    });
    return card;
}

// Função para buscar músicas
async function searchMusic(query) {
    try {
        const response = await fetch(`http://localhost:3000/musicas/buscar/${query}`);
        const results = await response.json();
        
        // Limpar resultados anteriores
        searchResults.innerHTML = '';
        
        // Filtrar resultados baseado no filtro atual
        let filteredResults = results;
        if (currentFilter !== 'all') {
            filteredResults = results.filter(item => item.tipo === currentFilter);
        }
        
        // Exibir resultados
        filteredResults.forEach(item => {
            let card;
            switch (item.tipo) {
                case 'musica':
                    card = createMusicCard(item);
                    break;
                case 'artista':
                    card = createArtistCard(item);
                    break;
                case 'album':
                    card = createAlbumCard(item);
                    break;
            }
            if (card) {
                searchResults.appendChild(card);
            }
        });
        
        // Carregar sugestões se não houver resultados
        if (filteredResults.length === 0) {
            loadSuggestions();
        }
    } catch (error) {
        console.error('Erro ao buscar:', error);
    }
}

// Função para carregar sugestões
async function loadSuggestions() {
    try {
        const response = await fetch('http://localhost:3000/musicas/sugestoes');
        const suggestions = await response.json();
        
        // Limpar sugestões anteriores
        suggestions.innerHTML = '';
        
        // Exibir sugestões
        suggestions.forEach(track => {
            suggestions.appendChild(createMusicCard(track));
        });
    } catch (error) {
        console.error('Erro ao carregar sugestões:', error);
    }
}

// Função para processar a query da URL
function processUrlQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
        searchInput.value = query;
        searchMusic(query);
    } else {
        loadSuggestions();
    }
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    // Limpar timeout anterior
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    
    // Definir novo timeout para evitar muitas requisições
    searchTimeout = setTimeout(() => {
        if (query.length >= 2) {
            searchMusic(query);
        } else if (query.length === 0) {
            searchResults.innerHTML = '';
            loadSuggestions();
        }
    }, 300);
});

// Event Listeners para os botões de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado
        button.classList.add('active');
        
        // Atualizar filtro atual
        currentFilter = button.textContent.toLowerCase();
        
        // Refazer a busca com o novo filtro
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            searchMusic(query);
        }
    });
});

// Processar query da URL quando a página carregar
document.addEventListener('DOMContentLoaded', processUrlQuery); 