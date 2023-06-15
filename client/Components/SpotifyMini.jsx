import React, { memo } from 'react';

const SpotifyPlayer = () => {
  return (
    <div className="spotify-player">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2s9R059mmdc8kz6lrUqZZd?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default memo(SpotifyPlayer);
