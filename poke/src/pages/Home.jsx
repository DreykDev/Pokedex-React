import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Home.css'

import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading'

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      results: [{
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
        loading: false,
        data:dataUrl,
      })
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading){
      return <PageLoading/>
    }
    if (this.state.error){
      return <PageError error={this.state.error}/>
    }
    return (
      <div className="Characters">

        {this.state.data.results.map((pokemon,index)=>(
          <div className="Characters-item">
            <Link to={`/${pokemon.name}`}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </Link>
          </div>
        ))}

      </div>
    );
  }
}

export default Home;