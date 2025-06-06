// Carregar e exibir álbuns
const albumGrid = document.getElementById('album-grid');
const albumModal = document.getElementById('album-details-modal');
const albumModalBody = document.getElementById('album-details-body');
const closeAlbumDetails = document.getElementById('close-album-details');

async function loadAlbums() {
    try {
        const response = await fetch('http://localhost:3000/albuns');
        const albums = await response.json();
        albumGrid.innerHTML = '';
        albums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.innerHTML = `
                <img src="${album.capa || 'https://via.placeholder.com/100x100?text=Álbum'}" alt="${album.titulo}">
                <h3>${album.titulo}</h3>
                <p>${album.artista || ''}</p>
            `;
            card.addEventListener('click', () => showAlbumDetails(album.id));
            albumGrid.appendChild(card);
        });
    } catch (error) {
        albumGrid.innerHTML = '<p style="color:#fff">Erro ao carregar álbuns.</p>';
    }
}

async function showAlbumDetails(albumId) {
    albumModal.classList.add('active');
    albumModalBody.innerHTML = '<p>Carregando...</p>';
    try {
        const response = await fetch(`http://localhost:3000/albuns/${albumId}`);
        const album = await response.json();
        albumModalBody.innerHTML = `
            <img src="${album.capa || 'https://via.placeholder.com/120x120?text=Álbum'}" alt="${album.titulo}">
            <h2>${album.titulo}</h2>
            <p>${album.artista || ''}</p>
            <dl class="details-list">
                <dt>Ano</dt>
                <dd>${album.ano || '-'}</dd>
                <dt>Gravadora</dt>
                <dd>${album.gravadora || '-'}</dd>
                <dt>Gênero</dt>
                <dd>${album.genero || '-'}</dd>
            </dl>
        `;
    } catch (error) {
        albumModalBody.innerHTML = '<p>Erro ao carregar detalhes do álbum.</p>';
    }
}

if (closeAlbumDetails) {
    closeAlbumDetails.addEventListener('click', () => {
        albumModal.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', loadAlbums); 