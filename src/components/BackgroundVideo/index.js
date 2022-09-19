import React, { useState } from 'react';
import { Container } from './styles';

const BackgroundVideo = ({ src, thumb }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };


  return (
    <Container>
      <div className="overlay"></div>
      <img
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
        src={thumb}
        className="thumb"
        alt="thumb"
      />
      <video
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        key={src}
        onLoadedData={onLoadedData}
        playsInline
        autoPlay="autoplay"
        loop="loop"
        muted
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  )
}

export default BackgroundVideo;
