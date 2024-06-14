import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './profileCarousel.css'; // CSS 파일 추가

const ProfileCarousel = ({ profile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [profile.images.length]);

  const goDetails = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="carousel">
      <h2>{profile.name}</h2>
      <div className="carousel-images">
        {profile.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${profile.name} ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            onClick={goDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
