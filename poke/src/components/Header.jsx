import React from 'react';
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
          <img className="logoPokemon" src={logoPokemon} alt="Logo de Pokemon" />
        </div>

        <div className="container__social">
          <img className="logoGithub" src={logoGithub} alt="Logo de Github" />
          <img className="logoInstagram" src={logoInstagram} alt="Logo de Instagram" />
          <img className="logoTiktok" src={logoTiktok} alt="Logo de Tiktok" />
          <img className="logoTwitter" src={logoTwitter} alt="Logo do Twitter" />
        </div>

      </header>
    );
  }
}

export default Header;
