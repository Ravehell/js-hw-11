import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image => {
        return `<li class="gallery-item">
  <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}">
  </a>
  <div class="info">
    <p>Likes: ${image.likes}</p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>
  </div>
</li>`
    }).join(``)

    const gallery = document.querySelector('.gallery');

    gallery.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}

