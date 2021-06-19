import React from 'react';
import './styles/PokemonCard.css'

import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading'
class PokemonCard extends React.Component {
  state = {
    error: null,
    data: {
      loading: true,
      id: window.location.pathname,
      pokemon: []
    }
  };

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon${this.state.data.id}/`)
      const data = await response.json()

      let pokemonState = this.state.data.pokemon;
      pokemonState.push(data);

      this.setState({
        data: {
          loading: false,
          id: this.state.data.id,
          pokemon: pokemonState,
        }
      })
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {

    if (this.state.data.loading){
      return <PageLoading/>
    }
    if (this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <div>
        <ul className="Characters-inner">
          {this.state.data.pokemon.map((character) => (
            <li className="primary__li" key={character.name}>
              <article className="Characters-card_img">
                  <h2>{character.name}</h2>
                  <img src={`https://pokeres.bastionbot.org/images/pokemon/${character.id}.png`} alt="h" />
              </article>

              <article  className="Characters-card_stats">
                <h3 className="Titulo-h3">Types:</h3>
                <ul className="Tipos">
                  {character.types.map( type => (
                    <li>
                    {''+ type.type.name +''}
                    </li>
                  ))}
                </ul>

                <h3 className="Titulo-h3">Abilities:</h3>
                <ul className="Habilidades">
                  {
                    character.abilities.map(ability => (
                      <li key={ability.slot}>
                      { ability.ability.name} {ability.is_hidden ? '(Oculta)':''}
                      </li>
                    ))
                  }
                </ul>

                <h3 className="Titulo-h3">Estadísticas base:</h3>
                <ul className="StatsBase">
                  {
                    character.stats.map(
                        stat => (
                          <li>
                          {stat.stat.name}: {stat.base_stat}
                          </li>
                        )
                    )
                  }
                </ul>

                <p>Peso: {character.weight/10} Kg.</p>
                <p>Altura: {character.height/10} m.</p>

              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default PokemonCard;