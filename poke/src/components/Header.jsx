import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Header.css'

import logoPokemon from '../images/logoPokemon.png'
import logoGithub from '../images/logoGithub.png'
import logoInstagram from '../images/logoInstagram.png'
import logoTiktok from '../images/logoTiktok.png'
import logoTwitter from '../images/logoTwitter.png'


class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container__logo">
          <Link to="/">
            <img className="logoPokemon" src={logoPokemon} alt="Logo de Pokemon" />
          </Link>
        </div>

        <div className="container__social">
          <a href="https://github.com/CodeDreake/Pokedex-React">
            <img className="logoGithub" src={logoGithub} alt="Logo de Github" />
          </a>
          <a href="https://www.instagram.com/oatad59/">
            <img className="logoInstagram" src={logoInstagram} alt="Logo de Instagram" />
          </a>
          <a href="https://www.tiktok.com/@el_david_v?">
            <img className="logoTiktok" src={logoTiktok} alt="Logo de Tiktok" />
          </a>
          <a href="https://twitter.com/ValenciDev">
            <img className="logoTwitter" src={logoTwitter} alt="Logo do Twitter" />
          </a>
        </div>

      </header>
    );
  }
}

export default Header;
