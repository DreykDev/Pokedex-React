import React from 'react';

class PokemonHome extends React.Component {
  state = {
    data: {
      id: 1,
      // results: [{
      // }],
      pokemon: []
    }
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    const responseUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.data.id}`)
    const dataUrl = await responseUrl.json()

    let pokemonState = this.state.data.pokemon;
    pokemonState.push(dataUrl)
    this.setState({
      data:{
        id: this.state.data.id,
        pokemon: pokemonState
      }
    })
  }

  render() {
    return (
      <div className="Characters">
      <ul className="Characters-item">
          {this.state.data.pokemon.map(character => (
            // Muestro la lista de this.state.pokemon
            <li key={character.name}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonHome;