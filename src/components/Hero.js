import React from 'react';

export default function Hero({ title, subheading, image }) {
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundPositionY: '40%',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(23, 26, 33) 0.5rem 0px 0px, rgb(23, 26, 33) -0.5rem 0px 0px',
            backgroundColor: 'rgb(23, 26, 33)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(23, 26, 33) 0.5rem 0px 0px, rgb(23, 26, 33) -0.5rem 0px 0px',
            backgroundColor: 'rgb(23, 26, 33)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
  );
}
