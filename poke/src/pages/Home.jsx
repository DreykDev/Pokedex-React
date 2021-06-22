import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Home.css'

import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage1: 0,
      nextPage2: 20,
      loading: true,
      error: null,
      search: '',
      data: {
        results: [{
        }],
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/?offset=${this.state.nextPage1}&limit=${this.state.nextPage2}`;

    try {
      const responseUrl = await fetch(apiURL)
      const dataUrl = await responseUrl.json()

      this.setState({
        loading: false,
        data:dataUrl,
        nextPage2: this.state.nextPage2 + 20,
      })
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  handleChange= e => {
    this.setState({
      search: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    if (this.state.loading){
      return <PageLoading/>
    }
    if (this.state.error){
      return <PageError error={this.state.error}/>
    }
    return (
      <div className="Home">
        <div className="search__container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__input">
              <input
                onChange={this.handleChange}
                placeholder="charmander"
                type="text"
                value={this.state.search}
              />
            </div>
            {/* <button onClick={this.handleClick} >Search</button> */}
            <Link className="container__button" to={`/${this.state.search}`}>
              <p className="button">Search</p>
            </Link>
          </form>
        </div>

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
        {!this.state.loading && (
          <button className="buttonS" onClick={()=>this.fetchCharacters()} >Load More</button>
        )}
      </div>
    );
  }
}

export default Home;