import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      dish: '',
      resturant: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }



  render() {
    return (
      <div>
        <form>
          <label>Username: </label>
          <input type="text" name="username" onChange={this.handleInputChange} />
          <label>Food Order: </label>
          <input type="text" name="dish" onChange={this.handleInputChange} />
          <label>Resturant: </label>
          <input type="text" name="resturant" onChange={this.handleInputChange} />
          <button type="submit" value="Submit" onClick={() => this.props.handleSubmit(this.state.username, this.state.dish, this.state.resturant)}>Submit </button>
        </form>
      </div>
    )
  }
}
export default Form
