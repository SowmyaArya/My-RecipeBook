import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const LikeButton = ({ commentId, likeCount, userId }) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likeCount);

  const handleLikeClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/commentlike/updateLike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId, userId }),
      });

      const data = await response.json();
      if (data.message === 'Like added') {
        setLiked(true);
      } else {
        setLiked(false);
      }
      setCount(data.likeCount);
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  return (
    <IconButton onClick={handleLikeClick} sx={{ color: liked ? 'red' : 'inherit' }}>
      {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
    </IconButton>
  );
};

export default LikeButton;
