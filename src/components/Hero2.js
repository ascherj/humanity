import React from 'react';

export default function Hero2({ heading, image }) {
  console.log(image);

  return (
    <div
      className="full-width-image-container my-0"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: `0.5rem 0 0 var(--raisin-black), -0.5rem 0 0 var(--raisin-black)`,
          backgroundColor: 'var(--raisin-black)',
          color: 'white',
          padding: '1rem',
        }}
      >
        {heading}
      </h1>
    </div>
  );
}
