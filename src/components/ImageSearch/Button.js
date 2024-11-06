import React from 'react';

function Button({ onClick }) {
  return (
    <div className="container-button">
      <button className="load-more-button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default Button;
