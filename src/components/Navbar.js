import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import instagram from '../img/social/instagram.svg';

const NavbarStyles = styled.nav`
  .navbar-menu {
    padding: 0 1rem;
    /* box-shadow: none !important; */
    background-color: var(--raisin-black);

    .navbar-item {
      color: white;

      &:hover {
        color: var(--maximum-blue-purple);
      }
    }

    .navbar-end {
      align-items: center;
    }
  }

  .social {
    padding: 0;
  }
`;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.setState({
          navBarActiveClass: this.state.active ? 'is-active' : '',
        });
      }
    );
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log('Enter key pressed!', e);
      this.toggleHamburger();
    }
  };

  render() {
    const { navBarActiveClass } = this.state;

    return (
      <NavbarStyles
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
            onKeyDown={this.handleKeyDown}
            role="button"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <div className="social">
              <a
                title="instagram"
                href="https://www.instagram.com/thehumanitybook/"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
