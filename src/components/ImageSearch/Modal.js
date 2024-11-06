import React from 'react';

function Modal({ imageUrl, onClose }) {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Modal;
