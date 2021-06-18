import React from 'react';
// import getHash from '../utils/getHash'
// import getData from '../utils/getData'


class PokemonCard extends React.Component {
  state = {
    data: {
      id: 1,
      pokemon: []
    }
  };

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.data.id}/`)
    const data = await response.json()

    // Copio los datos de los pokemon que tenga state
    let pokemonState = this.state.data.pokemon;
    // Agrego el nuevo pokemon de esta peticion
    pokemonState.push(data);

    // Actualizo el state
    this.setState({
      data: {
        id: this.state.data.id,
        pokemon: pokemonState
      }
    })
  }

  render() {
    return (
      <div className="Characters">
        {/* {console.log(this.state.stats)} */}
        <ul className="Characters-item">
          {this.state.data.pokemon.map(character => (
            // Muestro la lista de this.state.pokemon
            <li key={character.name}>
              <h4>Nombre: {character.name}</h4>
              <p>Weight: {character.weight}</p>
              <p>Experience: {character.base_experience}</p>
              <ul>Abilities:
              {
                  // Las habilidades es otro array dentro de this.state.pokemon.abilities
                  character.abilities.map(abPokemon => (
                    <li key={abPokemon.slot}><span>&nbsp;&nbsp;--></span> { abPokemon.ability.name}</li>
                  ))
              }
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default PokemonCard;