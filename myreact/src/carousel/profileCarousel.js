// src/ProfileCarousel.js
import React, { useState, useEffect } from 'react';

const ProfileCarousel = ({ profile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [profile.images.length]);

  return (
    <div className="carousel">
      <h2>{profile.name}</h2>
      <img
        src={profile.images[currentIndex]}
        alt={`${profile.name} ${currentIndex + 1}`}
        style={{ width: '600px', height: '600px' }}
      />
    </div>
  );
};

export default ProfileCarousel;
