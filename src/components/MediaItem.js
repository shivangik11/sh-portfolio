// src/components/MediaItem.js
import React from 'react';
import './MediaStyles.css'; // Import your CSS file

const MediaItem = ({ src, type, className }) => {
  if (type === 'video') {
    return <video src={src} className={className} autoPlay loop muted />;
  }
  if (type === 'image') {
    return <img src={src} alt="" className={className} />;
  }
  return null;
};

export default MediaItem;
