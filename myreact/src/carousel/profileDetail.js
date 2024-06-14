import React from 'react';
import { useParams } from 'react-router-dom';
import profiles from './profiles';
import './profileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-detail">
      <h1>이름: {profile.name}</h1>
      <div className="images">
        {profile.images.slice(0).map((image, index) => (
          <img key={index} src={image} alt={`${profile.name} ${index + 1}`} className="additional-image" style={{ width: '300px', height: '300px'}} />
        ))}
      </div>
      <h2>자기소개:</h2>
      <p>{profile.intro}</p>
      <h2>Hobbies:</h2>
      <ul className='profile-info'>
        {profile.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDetail;
