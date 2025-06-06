// Carregar e exibir artistas
const artistGrid = document.getElementById('artist-grid');
const artistModal = document.getElementById('artist-details-modal');
const artistModalBody = document.getElementById('artist-details-body');
const closeArtistDetails = document.getElementById('close-artist-details');

async function loadArtists() {
    try {
        const response = await fetch('http://localhost:3000/artistas');
        const artists = await response.json();
        artistGrid.innerHTML = '';
        artists.forEach(artist => {
            const card = document.createElement('div');
            card.className = 'artist-card';
            card.innerHTML = `
                <img src="${artist.foto || 'https://via.placeholder.com/100x100?text=Artista'}" alt="${artist.nome}">
                <h3>${artist.nome}</h3>
                <p>${artist.genero || ''}</p>
            `;
            card.addEventListener('click', () => showArtistDetails(artist.id));
            artistGrid.appendChild(card);
        });
    } catch (error) {
        artistGrid.innerHTML = '<p style="color:#fff">Erro ao carregar artistas.</p>';
    }
}

async function showArtistDetails(artistId) {
    artistModal.classList.add('active');
    artistModalBody.innerHTML = '<p>Carregando...</p>';
    try {
        const response = await fetch(`http://localhost:3000/artistas/${artistId}`);
        const artist = await response.json();
        artistModalBody.innerHTML = `
            <img src="${artist.foto || 'https://via.placeholder.com/120x120?text=Artista'}" alt="${artist.nome}">
            <h2>${artist.nome}</h2>
            <p>${artist.genero || ''}</p>
            <dl class="details-list">
                <dt>País</dt>
                <dd>${artist.pais || '-'}</dd>
                <dt>Biografia</dt>
                <dd>${artist.biografia || '-'}</dd>
            </dl>
        `;
    } catch (error) {
        artistModalBody.innerHTML = '<p>Erro ao carregar detalhes do artista.</p>';
    }
}

if (closeArtistDetails) {
    closeArtistDetails.addEventListener('click', () => {
        artistModal.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', loadArtists); 