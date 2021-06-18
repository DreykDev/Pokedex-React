import React from 'react';
import {Link} from 'react-router-dom'
class Home extends React.Component {
  state = {
    data: {
      results: [{
        name: {}
      }],
    }
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async (id) => {
    const apiURL = id ? `https://pokeapi.co/api/v2/pokemon/${id}` : `https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0`;

    try {
      const responseUrl = await fetch(apiURL)
      const dataUrl = await responseUrl.json()

      this.setState({
        data:dataUrl,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="Characters">

        {this.state.data.results.map((pokemon,index)=>(
          <Link to={`/pokemon/${pokemon.name}`}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`} alt={pokemon.name} />
            <h2>${pokemon.name}</h2>
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;