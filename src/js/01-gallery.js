// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



const galeryBlock = document.querySelector('.gallery');



const galeryMarkup = galleryItems.map((item) => {
   return `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}).join('');

galeryBlock.innerHTML = galeryMarkup;



function bigImage(event) {
   event.preventDefault()
};
galeryBlock.addEventListener('click', bigImage);


var lightbox = new SimpleLightbox('.gallery a', {
   captionDelay: 250,
 });