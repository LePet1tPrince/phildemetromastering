import React, { useEffect, useState } from 'react';

import album from '../../images/icons/album.png';
import loading from '../../images/icons/Spinner-1s-200px.svg';

function DiscographyCard(props) {
  const { ID, Artist, Album, Image, Year, Label, Production } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Import all images from the discography-images directory
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../../images/discography-images/', false, /\.(png|jpe?g|svg)$/));

  // Use a fallback image if the album image can't be loaded
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = album;
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Add animation class after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col">
      <div
        className={`card project-card ${isLoaded ? 'fade-in-card' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={Image || (ID > 0 && ID <= images.length ? images[ID-1] : album)}
          className="card-img project-card-image"
          alt={`${Artist} - ${Album}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />

        <div className="year-badge">{Year}</div>

        <div className={`card-img-overlay text-white ${isHovered ? 'opacity-100' : ''}`}>
          <p className="card-title">{Artist.length > 20 ? Artist.slice(0, 20) + "..." : Artist}</p>
          <p className="card-text">{Album.length > 40 ? Album.slice(0, 40) + "..." : Album}</p>
          {Production && <p className="card-text small-text">{Production.length > 25 ? Production.slice(0, 25) + "..." : Production}</p>}
        </div>
      </div>
    </div>
  );
}

export default DiscographyCard;
