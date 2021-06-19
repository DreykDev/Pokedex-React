import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.search);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="charmander"
          />
      </form>
    );
  }
}

export default NameForm