import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import instagram from '../img/social/instagram.svg';

const HeroStyles = styled.div`
  background-position: center 5%;
  background-size: cover;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  .social {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0;

    a {
      background-color: transparent;
      zoom: 2;
      padding: 0;

      @media (max-width: 768px) {
        zoom: 1;
      }
    }
  }

  .hero-text {
    display: flex;
    position: absolute;
    top: 30%;
    height: 150px;
    line-height: 1;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    h1,
    h3 {
      box-shadow: var(--raisin-black) 0.5rem 0px 0px,
        var(--raisin-black) -0.5rem 0px 0px;
      background-color: var(--raisin-black);
      color: white;
      line-height: 1;
      padding: 0.25em;
    }
  }
`;

const NavStyles = styled.nav`
  /* width: 700px; */
  position: absolute;
  top: 10%;

  @media (max-width: 768px) {
    width: 500px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    justify-items: center;
    width: 100%;
    justify-content: space-between;
    font-weight: bold;
    a {
      transition: color 170ms ease-in-out;
      color: var(--raisin-black);

      &:hover {
        color: var(--cadet);
      }
    }

    @media (max-width: 600px) {
      --columns: 2;
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: 0;
      margin-bottom: 1rem;
      font-size: 1.5rem !important;
    }
  }
`;

export default function Hero({ heading, subheading, image }) {
  return (
    <HeroStyles
      className="full-width-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <NavStyles>
        <ul className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </NavStyles>
      <div className="social">
        <a title="instagram" href="https://www.instagram.com/thehumanitybook/">
          <img
            src={instagram}
            alt="Instagram"
            style={{ width: '1em', height: '1em' }}
          />
        </a>
      </div>
      <div className="hero-text">
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {heading}
        </h1>
        <h3 className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-4-widescreen">
          {subheading}
        </h3>
      </div>
    </HeroStyles>
  );
}
