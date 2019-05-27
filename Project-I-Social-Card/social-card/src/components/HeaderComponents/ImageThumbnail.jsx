/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';

function ImageThumbnail({ source, alt }) {
  return <img src={source} alt={alt} />;
}

export default ImageThumbnail;
