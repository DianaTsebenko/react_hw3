import React from 'react';

function ImageGalleryItem({ webformatURL, onClick }) {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webformatURL} alt="" className="gallery-item-image" />
    </li>
  );
}

export default ImageGalleryItem;
