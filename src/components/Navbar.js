import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import github from '../img/github-icon.svg';

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
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
