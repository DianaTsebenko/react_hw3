import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader">
      <RotatingLines width="100" />
    </div>
  );
}

export default Loader;
