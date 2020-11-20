import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.div`
  background-position: center 5%;
  background-size: cover;
  position: relative;
  flex-direction: column;
  justify-content: space-between;

  .hero-text {
    display: flex;
    position: absolute;
    top: 25%;
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
  width: 700px;
  position: absolute;
  top: 10%;

  @media (max-width: 960px) {
    width: 500px;
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: bold;
    a {
      transition: color 170ms ease-in-out;
      color: var(--raisin-black);

      &:hover {
        color: var(--cadet);
      }
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
        <ul>
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
      <div className="hero-text">
        <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {heading}
        </h1>
        <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          {subheading}
        </h3>
      </div>
    </HeroStyles>
  );
}
