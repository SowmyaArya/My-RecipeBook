import React from 'react';
import YouTube from 'react-youtube';

const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeVideo = ({ videoUrl }) => {
  const videoId = getYouTubeVideoId(videoUrl);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-container">
      {videoId ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : (
        <p>Invalid YouTube video URL</p>
      )}
    </div>
  );
};

export default YouTubeVideo;
