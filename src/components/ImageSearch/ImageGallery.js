import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={() => onImageClick(largeImageURL)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
