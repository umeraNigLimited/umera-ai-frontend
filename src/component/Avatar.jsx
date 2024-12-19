import React from 'react';
import PropTypes from 'prop-types';
import '../style/Avatar.css';

function Avatar({ src, alt, size = 50, name, backgroundColor = '#890709', textColor = '#ffffff' }) {
  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: size / 2.5,
      }}
    >
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="avatar-img" />
      ) : (
        <span className="avatar-initials">{getInitials(name)}</span>
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string, // Image URL
  alt: PropTypes.string, // Alt text
  size: PropTypes.number, // Size of the avatar
  name: PropTypes.string, // User's name to generate initials
  backgroundColor: PropTypes.string, // Background color for initials
  textColor: PropTypes.string, // Color of initials text
};

export default Avatar;
