import React from 'react';

class Home extends React.Component {
  state = {
    data: {
      results:[{
        url:[]
      }]
    },
  }

  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()

    this.setState({
      data: data,
    })
  }

  render() {
    return (
      <div className="Characters">
        {/* {console.log(this.state.stats)} */}
        <ul className="Characters-item">
          {this.state.data.results.map(character => (
            <li>{character.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;