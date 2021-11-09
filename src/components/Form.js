import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    customername: '',
    city: '',
    phone:'',
    email:'',
  }

  state = this.initialState
  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { customername,city,phone,email } = this.state;
  
    return (
      <form>
        <label htmlFor="customer name">Customer Name</label>
        <input
          type="text"
          name="customername"
          id="customername"
          value={customername}
          onChange={this.handleChange} />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={this.handleChange} />
          <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={this.handleChange} />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default Form;
